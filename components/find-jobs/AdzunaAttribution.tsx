import { SiteCredits } from "@/components/layout/SiteCredits";

const ADZUNA_HOME = "https://www.adzuna.com";

export function AdzunaAttribution() {
  return (
    <div className="flex flex-col items-center gap-3 py-2">
      <div className="inline-flex min-h-[23px] min-w-[116px] items-center gap-1 text-sm text-text-muted">
        <a
          href={ADZUNA_HOME}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent hover:opacity-80"
        >
          Jobs
        </a>
        <span>by</span>
        <a
          href={ADZUNA_HOME}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
          aria-label="Adzuna"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- third-party brand asset */}
          <img
            src="/images/adzuna-logo.svg"
            alt="Adzuna"
            width={80}
            height={23}
            className="h-[23px] w-auto"
          />
        </a>
      </div>
      <SiteCredits includeAdzuna={false} />
    </div>
  );
}
