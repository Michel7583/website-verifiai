import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";

type ContinueProps = {
  hint: string;
  label: string;
  href: string;
};

export function Continue({ hint, label, href }: ContinueProps) {
  return (
    <div className="border-y border-border bg-panel/40">
      <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-muted">{hint}</p>
        <Link
          href={href}
          className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          {label}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </Container>
    </div>
  );
}
