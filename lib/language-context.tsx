'use client';

import { createContext, useContext } from 'react';

interface LanguageContextType {
  langPrefix: string;
}

export const LanguageContext = createContext<LanguageContextType>({ langPrefix: '' });

export const useLangPrefix = () => useContext(LanguageContext).langPrefix;
