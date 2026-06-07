import type { Metadata } from "next";
import Link from "next/link";

import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { LegalSection } from "@/components/legal/LegalSection";
import {
  CONTACT_EMAIL,
  CONTACT_LINKEDIN,
  CONTACT_NAME,
  OPERATOR_NAME,
  PRODUCT_NAME,
  TERMS_LAST_UPDATED,
} from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using Naga Codex Job Pilot.",
};

const legalLinkClassName =
  "font-medium text-accent transition-opacity hover:opacity-80";

export default function TermsPage() {
  return (
    <LegalPageShell
      title="Terms & Conditions"
      lastUpdated={TERMS_LAST_UPDATED}
    >
      <LegalSection id="acceptance" title="1. Acceptance of terms">
        <p>
          These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access
          to and use of {PRODUCT_NAME} (&ldquo;the Service&rdquo;), operated by{" "}
          {OPERATOR_NAME}. By creating an account or using the Service, you agree
          to these Terms and our{" "}
          <Link href="/privacy" className={legalLinkClassName}>
            Privacy Policy
          </Link>
          .
        </p>
        <p>
          If you do not agree, do not use the Service.
        </p>
      </LegalSection>

      <LegalSection id="service" title="2. Description of the Service">
        <p>
          {PRODUCT_NAME} is an AI-assisted job search tool. It helps you maintain
          a professional profile, discover job listings, evaluate match scores,
          research companies from public web sources, and organise your search
          activity in a dashboard.
        </p>
        <p>
          The Service does not submit job applications on your behalf. External
          apply links open third-party employer or board sites outside our
          control.
        </p>
      </LegalSection>

      <LegalSection id="account" title="3. Accounts and eligibility">
        <p>
          You must sign in with a supported OAuth provider (Google or GitHub)
          through InsForge. You are responsible for maintaining access to that
          provider account and for all activity that occurs under your Service
          account.
        </p>
        <p>
          You must provide accurate profile information and be legally able to
          enter into these Terms in your jurisdiction.
        </p>
      </LegalSection>

      <LegalSection id="responsibilities" title="4. Your responsibilities">
        <p>You agree that you will not:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>use the Service for unlawful, misleading, or abusive purposes;</li>
          <li>
            upload content you do not have the right to share, including resumes
            or personal data belonging to others without permission;
          </li>
          <li>
            attempt to bypass security, access other users&apos; data, or
            interfere with the Service&apos;s infrastructure;
          </li>
          <li>
            scrape, resell, or commercially exploit job listings or research
            output except for your own job search;
          </li>
          <li>
            rely on the Service as your only source of truth for hiring
            decisions, compensation, or employer representations.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="ai-content" title="5. AI-generated content">
        <p>
          Match scores, summaries, extracted resume fields, company research
          dossiers, and generated documents are produced with AI and automated
          tools. They may be incomplete, outdated, or inaccurate.
        </p>
        <p>
          You are responsible for reviewing all output before using it in
          applications, interviews, or professional communications. The Service
          provides assistance, not professional career, legal, or employment
          advice.
        </p>
      </LegalSection>

      <LegalSection id="third-party-jobs" title="6. Third-party job listings">
        <p>
          Job listings are sourced from Adzuna and linked third-party employers
          or boards. We do not endorse employers, guarantee role availability,
          or control how listings are described at the source.
        </p>
        <p>
          When you follow an apply link, you leave the Service and become subject
          to the third party&apos;s own terms and privacy practices. The
          &ldquo;Jobs by Adzuna&rdquo; attribution must remain visible where
          required by our data providers.
        </p>
      </LegalSection>

      <LegalSection id="company-research" title="7. Company research">
        <p>
          Company research uses automated browsing of publicly available web
          pages. Results depend on what is publicly accessible at the time of
          the request and may omit private or internal information.
        </p>
        <p>
          Do not treat research dossiers as confidential employer intelligence
          or as a substitute for your own due diligence.
        </p>
      </LegalSection>

      <LegalSection id="intellectual-property" title="8. Intellectual property">
        <p>
          The Service, including its design, branding, software, and
          documentation, is owned by {OPERATOR_NAME} and its licensors. You
          receive a limited, non-exclusive, revocable licence to use the Service
          for personal job-search purposes.
        </p>
        <p>
          You retain ownership of content you submit. You grant us a licence to
          host, process, and display that content solely to operate the Service,
          including sending it to integrated providers such as OpenAI, InsForge,
          and Browserbase when you use related features.
        </p>
      </LegalSection>

      <LegalSection id="availability" title="9. Availability and changes">
        <p>
          We may modify, suspend, or discontinue any part of the Service at any
          time. Features that rely on external APIs (Adzuna, OpenAI, OAuth
          providers, analytics, or browsing infrastructure) may be interrupted
          when those services change or become unavailable.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="10. Disclaimer and limitation of liability">
        <p>
          The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis without warranties of any kind, whether express
          or implied, including fitness for a particular purpose or
          non-infringement.
        </p>
        <p>
          To the fullest extent permitted by law, {OPERATOR_NAME} and{" "}
          {CONTACT_NAME} will not be liable for indirect, incidental, special,
          consequential, or punitive damages, or for lost opportunities, data,
          or profits arising from your use of the Service or third-party job
          listings.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="11. Termination">
        <p>
          You may stop using the Service at any time. We may suspend or terminate
          access if you violate these Terms, create risk for other users, or are
          required to do so by law.
        </p>
        <p>
          Sections that by nature should survive termination — including
          intellectual property, disclaimers, and limitations of liability —
          will continue to apply.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="12. Changes to these Terms">
        <p>
          We may update these Terms from time to time. Continued use after the
          updated date constitutes acceptance of the revised Terms. Review this
          page periodically for changes.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="13. Contact">
        <p>
          If you have any questions about these Terms, please contact{" "}
          {CONTACT_NAME} by email at{" "}
          <Link
            href={`mailto:${CONTACT_EMAIL}`}
            className={legalLinkClassName}
          >
            {CONTACT_EMAIL}
          </Link>{" "}
          or via the{" "}
          <Link
            href={CONTACT_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className={legalLinkClassName}
          >
            LinkedIn profile linked in the footer
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPageShell>
  );
}
