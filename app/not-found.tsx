const NotFoundPage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <section className="text-center max-w-xl">
        <p className="text-sm uppercase tracking-[0.2em] text-primary/80 mb-3">404</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Page not found</h1>
        <p className="text-sm md:text-base text-muted-foreground">
          The URL you requested does not exist or is no longer available.
        </p>
      </section>
    </main>
  );
};

export default NotFoundPage;
