import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
};

/** VeriFi AI mark: a verification check pinned with a gold node. */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-8 w-8", className)}
      aria-hidden
    >
      <path
        d="M8.2 15.6 13.9 22.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M13.9 22.4 24.4 8.2"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
      <circle cx="13.9" cy="22.4" r="2.15" fill="var(--gold)" />
    </svg>
  );
}
