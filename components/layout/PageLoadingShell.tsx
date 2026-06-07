import { Navbar } from "@/components/layout/Navbar";

type PageLoadingShellProps = {
  title?: string;
};

export function PageLoadingShell({ title = "Loading…" }: PageLoadingShellProps) {
  return (
    <>
      <Navbar isAuthenticated />
      <main className="app-ambient flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1440px] animate-pulse space-y-6">
          <div className="h-8 w-48 rounded-md bg-surface-secondary" />
          <p className="sr-only">{title}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-28 rounded-xl border border-border bg-surface-secondary"
              />
            ))}
          </div>
          <div className="h-72 rounded-xl border border-border bg-surface-secondary" />
        </div>
      </main>
    </>
  );
}
