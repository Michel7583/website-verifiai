import { getTranslations, setRequestLocale } from "next-intl/server";
import { createLocalizedMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { routing } from "@/i18n/routing";
import { ContactForm } from "@/components/contact/ContactForm";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/pages/PageHero";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return createLocalizedMetadata({
    locale,
    title: t("contactTitle", { name: site.name }),
    description: t("contactDescription", { name: site.name }),
    path: "/contact",
  });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ContactPage");
  const ts = await getTranslations("Site");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        image="/images/hero-atmosphere.png"
        imageAlt=""
      />
      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <Reveal>
              <Card hover={false} className="p-6 sm:p-8">
                <ol className="space-y-8">
                  <li className="flex gap-4">
                    <span className="font-mono text-xs tracking-[0.16em] text-accent">
                      01
                    </span>
                    <div>
                      <p className="text-sm font-semibold tracking-[-0.02em]">
                        {t("usefulTitle")}
                      </p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                        <li>{t("useful1")}</li>
                        <li>{t("useful2")}</li>
                        <li>{t("useful3")}</li>
                        <li>{t("useful4")}</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex gap-4 border-t border-border pt-8">
                    <span className="font-mono text-xs tracking-[0.16em] text-accent">
                      02
                    </span>
                    <div>
                      <p className="text-sm font-semibold tracking-[-0.02em]">
                        {t("responseTitle")}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted">
                        {t("responseBody", { responseTime: ts("responseTime") })}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 border-t border-border pt-8">
                    <span className="font-mono text-xs tracking-[0.16em] text-accent">
                      03
                    </span>
                    <div>
                      <p className="text-sm font-semibold tracking-[-0.02em]">
                        {t("emailTitle")}
                      </p>
                      <a
                        href={`mailto:${site.email}`}
                        className="mt-3 block text-sm text-foreground hover:text-accent"
                      >
                        {site.email}
                      </a>
                      <a
                        href={site.social.telegram}
                        className="mt-2 block text-sm text-muted hover:text-foreground"
                        rel="noreferrer"
                        target="_blank"
                      >
                        @VeriFiAI_Official
                      </a>
                      <p className="mt-4 text-sm text-foreground">{ts("locationTitle")}</p>
                      <p className="mt-1 text-sm leading-6 text-muted">
                        {ts("locationLine1")} · {ts("locationLine2")}
                      </p>
                    </div>
                  </li>
                </ol>
              </Card>
            </Reveal>
            <Reveal delay={0.08}>
              <Card hover={false} className="p-6 sm:p-8">
                <ContactForm />
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
