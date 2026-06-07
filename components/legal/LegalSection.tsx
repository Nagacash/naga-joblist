import type { ReactNode } from "react";

type LegalSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border pt-8 first:border-t-0 first:pt-0">
      <h2 className="text-lg font-semibold leading-7 text-text-primary">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-7 text-text-secondary">
        {children}
      </div>
    </section>
  );
}
