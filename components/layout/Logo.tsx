import Image from "next/image";
import Link from "next/link";

type Props = {
  href?: string;
  priority?: boolean;
};

export function Logo({ href = "/", priority = false }: Props) {
  return (
    <Link
      href={href}
      aria-label="Naga Codex — Job Pilot home"
      className="group inline-flex items-center gap-2.5"
    >
      <Image
        src="/images/logo.png"
        alt="Naga Codex"
        width={36}
        height={36}
        priority={priority}
        className="h-9 w-9 rounded-lg object-contain transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <span className="text-[17px] font-bold tracking-tight text-text-darkest">
          Naga Codex
        </span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
          Job Pilot
        </span>
      </span>
    </Link>
  );
}
