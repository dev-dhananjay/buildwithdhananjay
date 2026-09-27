export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Task 1 Complete
        </div>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          BuildWithDhananjay
        </h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Project initialized successfully. Foundation setup with Next.js App Router, TypeScript, and Tailwind CSS is ready.
        </p>
      </div>
    </main>
  );
}
