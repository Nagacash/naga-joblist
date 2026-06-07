import type { Metadata } from "next";
import Link from "next/link";

import { LegalPageShell } from "@/components/legal/LegalPageShell";
import { LegalSection } from "@/components/legal/LegalSection";
import {
  CONTACT_EMAIL,
  CONTACT_LINKEDIN,
  CONTACT_NAME,
  OPERATOR_NAME,
  PRIVACY_LAST_UPDATED,
  PRODUCT_NAME,
} from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Naga Codex Job Pilot collects, uses, and protects your personal information.",
};

const legalLinkClassName =
  "font-medium text-accent transition-opacity hover:opacity-80";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell title="Privacy Policy" lastUpdated={PRIVACY_LAST_UPDATED}>
      <LegalSection id="introduction" title="1. Introduction">
        <p>
          This Privacy Policy explains how {OPERATOR_NAME} (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;) collects, uses, stores, and shares information when
          you use {PRODUCT_NAME} (&ldquo;the Service&rdquo;). By using the
          Service, you agree to the practices described here.
        </p>
        <p>
          The Service helps you search for jobs, manage your profile and resume,
          score role fit with AI, and research companies before you apply. We
          process only the data needed to provide those features.
        </p>
      </LegalSection>

      <LegalSection id="controller" title="2. Who is responsible for your data">
        <p>
          The operator of {PRODUCT_NAME} is {OPERATOR_NAME}. For privacy-related
          questions, contact {CONTACT_NAME} by email at{" "}
          <Link
            href={`mailto:${CONTACT_EMAIL}`}
            className={legalLinkClassName}
          >
            {CONTACT_EMAIL}
          </Link>{" "}
          or via the LinkedIn profile linked in the footer of this site.
        </p>
      </LegalSection>

      <LegalSection id="information-we-collect" title="3. Information we collect">
        <p>We may collect the following categories of information:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-text-primary">
              Account information:
            </strong>{" "}
            name, email address, and authentication identifiers provided through
            Google or GitHub sign-in via InsForge.
          </li>
          <li>
            <strong className="font-medium text-text-primary">
              Profile and resume data:
            </strong>{" "}
            work history, education, skills, preferences, and any resume PDF you
            upload or generate in the Service.
          </li>
          <li>
            <strong className="font-medium text-text-primary">
              Job search activity:
            </strong>{" "}
            search terms, locations, saved jobs, match scores, company research
            results, and related notes generated during your use of the Service.
          </li>
          <li>
            <strong className="font-medium text-text-primary">
              Usage and analytics data:
            </strong>{" "}
            pages visited, feature usage, device/browser information, and event
            data collected through PostHog when analytics is enabled.
          </li>
          <li>
            <strong className="font-medium text-text-primary">
              Technical data:
            </strong>{" "}
            IP address, session cookies, and logs needed to operate, secure, and
            troubleshoot the Service.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="how-we-use" title="4. How we use your information">
        <p>We use your information to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>authenticate you and maintain your account;</li>
          <li>store and display your profile, resume, and job search history;</li>
          <li>
            discover job listings through Adzuna and score them against your
            profile using OpenAI;
          </li>
          <li>
            research public company information using automated browsing tools
            when you request company research;
          </li>
          <li>generate resume PDFs and extract profile data from uploaded resumes;</li>
          <li>improve reliability, security, and product analytics;</li>
          <li>respond to support or legal requests.</li>
        </ul>
        <p>
          We do not sell your personal information. We do not use your data to
          train third-party AI models unless a provider&apos;s own terms require
          it for delivering the API service you trigger.
        </p>
      </LegalSection>

      <LegalSection id="third-parties" title="5. Third-party services">
        <p>
          The Service relies on trusted third parties. Those providers process
          data under their own privacy policies and our instructions only as
          needed to run the product:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-text-primary">InsForge</strong>{" "}
            — authentication, database, file storage, and backend infrastructure.
          </li>
          <li>
            <strong className="font-medium text-text-primary">
              Google / GitHub
            </strong>{" "}
            — OAuth sign-in, if you choose those providers.
          </li>
          <li>
            <strong className="font-medium text-text-primary">Adzuna</strong> —
            job listing discovery and attribution.
          </li>
          <li>
            <strong className="font-medium text-text-primary">OpenAI</strong> —
            job matching, resume extraction, resume generation, and company
            research synthesis.
          </li>
          <li>
            <strong className="font-medium text-text-primary">
              Browserbase / Stagehand
            </strong>{" "}
            — automated browsing of public company websites for research
            requests you initiate.
          </li>
          <li>
            <strong className="font-medium text-text-primary">PostHog</strong> —
            product analytics and dashboard charts.
          </li>
        </ul>
        <p>
          Job listings displayed in the Service originate from third-party
          sources. We are not the employer and do not control how external
          employers handle applications you submit outside the Service.
        </p>
      </LegalSection>

      <LegalSection id="storage-security" title="6. Storage and security">
        <p>
          Your account data, profile fields, job records, and uploaded resume
          files are stored in InsForge-hosted infrastructure with row-level
          access controls tied to your authenticated user account.
        </p>
        <p>
          We apply reasonable technical and organisational measures to protect
          your information, but no online service can guarantee absolute
          security. Keep your sign-in credentials safe and sign out on shared
          devices.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="7. Data retention">
        <p>
          We retain your information for as long as your account is active or
          as needed to provide the Service, comply with legal obligations,
          resolve disputes, and enforce our terms.
        </p>
        <p>
          You may request deletion of your account data by contacting us. Some
          records may be retained where required by law or for legitimate
          security and backup purposes.
        </p>
      </LegalSection>

      <LegalSection id="your-rights" title="8. Your rights">
        <p>
          Depending on where you live, you may have rights to access, correct,
          delete, restrict, or export personal data we hold about you, and to
          object to certain processing.
        </p>
        <p>
          To exercise these rights, contact {CONTACT_NAME} by email or LinkedIn.
          We will
          respond within a reasonable timeframe and may need to verify your
          identity before acting on a request.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="9. Cookies and analytics">
        <p>
          We use essential cookies and similar technologies to keep you signed
          in and operate the Service securely through InsForge authentication.
        </p>
        <p>
          When enabled, PostHog may store analytics identifiers to understand
          feature usage and improve the product. You can limit analytics through
          browser privacy settings or ad/analytics blockers, though some
          dashboard charts may then show limited data.
        </p>
      </LegalSection>

      <LegalSection id="children" title="10. Children&apos;s privacy">
        <p>
          The Service is not directed to children under 16, and we do not
          knowingly collect personal information from children. If you believe a
          child has provided us data, contact us and we will take appropriate
          steps to remove it.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="11. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we
          will revise the &ldquo;Last updated&rdquo; date at the top of this
          page. Material changes may also be communicated in the product where
          appropriate.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="12. Contact">
        <p>
          If you have any questions about this Privacy Policy, please contact{" "}
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
