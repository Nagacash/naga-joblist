import { CONTACT_LINKEDIN, CONTACT_NAME, OPERATOR_NAME } from "@/lib/legal";

const ADZUNA_HOME = "https://www.adzuna.com";
const NAGA_APPAREL_INSTAGRAM = "https://www.instagram.com/naga_apparel/";

type SiteCreditsProps = {
  /** When false, omit the Jobs by Adzuna segment (e.g. below the Adzuna logo badge). */
  includeAdzuna?: boolean;
};

const linkClassName =
  "font-medium text-accent transition-opacity hover:opacity-80";

export function SiteCredits({ includeAdzuna = true }: SiteCreditsProps) {
  return (
    <p className="text-center text-xs leading-6 text-text-muted">
      {includeAdzuna ? (
        <>
          <a
            href={ADZUNA_HOME}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            Jobs
          </a>
          <span> by </span>
          <a
            href={ADZUNA_HOME}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            Adzuna
          </a>
          <span className="mx-1.5 text-text-muted">·</span>
        </>
      ) : null}
      <span>Powered by </span>
      <a
        href={NAGA_APPAREL_INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        translate="no"
      >
        Naga Apparel
      </a>
      <span> (insta: naga_apparel)</span>
      <span className="mx-1.5 text-text-muted">·</span>
      <span>Built by </span>
      <a
        href={CONTACT_LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        translate="no"
      >
        {OPERATOR_NAME}
      </a>
      <span> · </span>
      <a
        href={CONTACT_LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
      >
        {CONTACT_NAME}
      </a>
    </p>
  );
}
