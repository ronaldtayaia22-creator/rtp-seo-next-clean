'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Sparkles, Loader2, X, RotateCcw, MessageCircle, Search } from 'lucide-react';
import { Language, getTranslation } from '@/lib/i18n';

type Msg = { role: 'user' | 'assistant'; content: string };

const CHAT_URL =
  process.env.NEXT_PUBLIC_CHAT_ASSISTANT_URL ||
  (process.env.NEXT_PUBLIC_SUPABASE_URL
    ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/chat-assistant`
    : '');
const CHAT_AUTH_TOKEN =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

interface AIChatCenterProps {
  language: Language;
}

const AIChatCenter = ({ language }: AIChatCenterProps) => {
  const t = getTranslation(language);
  const chat = t.chatCenter;

  const quickChips = [chat.chip1, chat.chip2, chat.chip3, chat.chip4];

  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConsulting, setIsConsulting] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const lastAssistantRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const prevMsgCountRef = useRef(0);

  useEffect(() => {
    const lastMsg = messages[messages.length - 1];
    if (lastMsg?.role === 'assistant' && messages.length > prevMsgCountRef.current) {
      lastAssistantRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    prevMsgCountRef.current = messages.length;
  }, [messages]);

  useEffect(() => {
    if (isExpanded) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isExpanded]);

  useEffect(() => {
    const openChat = () => setIsExpanded(true);
    window.addEventListener('open-ai-chat-center', openChat);
    return () => window.removeEventListener('open-ai-chat-center', openChat);
  }, []);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) return;

      const userMsg: Msg = { role: 'user', content: text.trim() };
      const allMessages = [...messages, userMsg];
      setMessages(allMessages);
      setInput('');
      setIsLoading(true);
      setIsConsulting(false);

      if (!CHAT_URL || !CHAT_AUTH_TOKEN) {
        setMessages((prev) => [...prev, { role: 'assistant', content: chat.errorGeneric }]);
        setIsLoading(false);
        return;
      }

      let assistantSoFar = '';

      try {
        const resp = await fetch(CHAT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${CHAT_AUTH_TOKEN}`,
          },
          body: JSON.stringify({ messages: allMessages, language }),
        });

        if (!resp.ok) {
          if (resp.status === 429) throw new Error(chat.error429);
          if (resp.status === 402) throw new Error(chat.error402);
          throw new Error(chat.errorGeneric);
        }

        if (!resp.body) {
          const json = await resp.json().catch(() => null);
          const content = typeof json?.message === 'string' ? json.message : chat.errorGeneric;
          setMessages((prev) => [...prev, { role: 'assistant', content }]);
          return;
        }

        const reader = resp.body.getReader();
        const decoder = new TextDecoder();
        let textBuffer = '';

        const upsertAssistant = (chunk: string) => {
          assistantSoFar += chunk;
          setMessages((prev) => {
            const last = prev[prev.length - 1];
            if (last?.role === 'assistant') {
              return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
            }
            return [...prev, { role: 'assistant', content: assistantSoFar }];
          });
        };

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          textBuffer += decoder.decode(value, { stream: true });

          let newlineIndex: number;
          while ((newlineIndex = textBuffer.indexOf('\n')) !== -1) {
            let line = textBuffer.slice(0, newlineIndex);
            textBuffer = textBuffer.slice(newlineIndex + 1);

            if (line.endsWith('\r')) line = line.slice(0, -1);
            if (line.startsWith(':') || line.trim() === '') continue;
            if (!line.startsWith('data: ')) continue;

            const payload = line.slice(6).trim();
            if (payload === '[DONE]') break;

            try {
              const parsed = JSON.parse(payload);

              if (parsed.type === 'status') {
                setIsConsulting(true);
                continue;
              }

              const content = parsed.choices?.[0]?.delta?.content as string | undefined;
              if (content) {
                setIsConsulting(false);
                upsertAssistant(content);
              }
            } catch {
              textBuffer = line + '\n' + textBuffer;
              break;
            }
          }
        }

        if (!assistantSoFar) {
          setMessages((prev) => [...prev, { role: 'assistant', content: chat.errorGeneric }]);
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : chat.errorGeneric;
        setMessages((prev) => [...prev, { role: 'assistant', content: message || chat.errorGeneric }]);
      } finally {
        setIsLoading(false);
        setIsConsulting(false);
      }
    },
    [chat.error402, chat.error429, chat.errorGeneric, isLoading, language, messages]
  );

  return (
    <>
      {isExpanded && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsExpanded(false)}
        />
      )}

      <div className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-2xl">
        {isExpanded && (
          <div className="mb-3 rounded-2xl border border-primary/30 bg-card/95 backdrop-blur-xl shadow-[0_0_30px_hsl(200_100%_50%/0.15),0_8px_32px_hsl(220_40%_5%/0.6)] overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
            <div className="h-[2px] bg-gradient-to-r from-primary via-secondary to-primary" />

            <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30">
              <div className="flex-1" />
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{chat.title}</span>
                <img
                  src="/images/logo-chat.png"
                  alt="RTP Digital Solutions"
                  className="h-8 w-auto mix-blend-screen brightness-75 contrast-200 saturate-150"
                />
              </div>
              <div className="flex-1 flex justify-end gap-1">
                {messages.length > 0 && (
                  <button
                    onClick={() => setMessages([])}
                    className="p-1.5 rounded-full hover:bg-accent/20 transition-colors text-muted-foreground hover:text-foreground"
                    aria-label={chat.resetLabel}
                    title={chat.resetLabel}
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-1.5 rounded-full hover:bg-accent/20 transition-colors text-muted-foreground hover:text-foreground"
                  aria-label={chat.closeLabel}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {messages.length === 0 && (
              <div className="px-4 py-4">
                <p className="text-sm text-muted-foreground mb-3">{chat.welcomeText}</p>
                <div className="flex flex-wrap gap-2">
                  {quickChips.map((chip) => (
                    <button
                      key={chip}
                      onClick={() => sendMessage(chip)}
                      className="px-3 py-1.5 rounded-full border border-border text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.length > 0 && (
              <div className="max-h-[350px] md:max-h-[400px] overflow-y-auto p-4 space-y-3">
                {messages.map((m, i) => {
                  const isLastAssistant = m.role === 'assistant' && i === messages.length - 1;

                  return (
                    <div
                      key={`${m.role}-${i}`}
                      ref={isLastAssistant ? lastAssistantRef : undefined}
                      className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                          m.role === 'user'
                            ? 'bg-primary text-primary-foreground rounded-br-md'
                            : 'bg-muted/60 text-foreground rounded-bl-md'
                        }`}
                      >
                        {m.content}
                      </div>
                    </div>
                  );
                })}

                {isLoading && messages[messages.length - 1]?.role === 'user' && (
                  <div className="flex justify-start">
                    <div className="px-4 py-2.5 rounded-2xl rounded-bl-md bg-muted/60 text-foreground flex items-center gap-2">
                      {isConsulting ? (
                        <>
                          <Search className="w-3.5 h-3.5 animate-pulse" />
                          <span className="text-xs text-muted-foreground">{chat.consulting}</span>
                        </>
                      ) : (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="flex gap-2 p-3 border-t border-border/50">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage(input);
                  }
                }}
                disabled={isLoading}
                placeholder={chat.inputPlaceholder}
                className="flex-1 px-4 py-3 rounded-full border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow disabled:opacity-50"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 flex-shrink-0"
                aria-label={chat.sendLabel}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {!isExpanded && (
          <div
            data-chat-trigger
            onClick={() => setIsExpanded(true)}
            className="relative cursor-pointer flex items-center gap-2 md:gap-3 px-3 md:px-4 py-0.5 rounded-full border border-primary/30 bg-[hsl(220_30%_20%)] backdrop-blur-xl shadow-[0_0_24px_hsl(200_100%_50%/0.15),0_6px_24px_hsl(220_40%_5%/0.5)] hover:bg-[hsl(220_30%_22%)] hover:scale-[1.01] hover:shadow-[0_0_30px_hsl(200_100%_50%/0.22),0_6px_28px_hsl(220_40%_5%/0.6)] hover:border-primary/45 transition-all duration-300"
          >
            <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <span className="hidden sm:inline text-sm font-semibold uppercase tracking-widest text-foreground flex-shrink-0">
              {chat.title}
            </span>

            <img
              src="/images/logo-chat.png"
              alt="RTP Digital Solutions"
              className="h-12 md:h-14 w-auto flex-shrink-0 mix-blend-screen brightness-75 contrast-200 saturate-150"
            />

            <div className="flex-1 flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-background/40 border border-border/50 min-w-0">
              <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-xs text-muted-foreground truncate">{chat.barHint}</span>
              <Send className="w-3.5 h-3.5 text-primary/60 flex-shrink-0 ml-auto" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AIChatCenter;
