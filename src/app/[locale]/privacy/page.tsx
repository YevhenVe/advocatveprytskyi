import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import {
  LegalDocument,
  buildLegalMetadata,
  legalLocale,
} from "@/components/LegalDocument";
import { privacyContent } from "@/content/legal/privacy";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = legalLocale((await params).locale);
  return buildLegalMetadata(privacyContent[locale], locale, "privacy");
}

export default async function PrivacyPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  setRequestLocale(rawLocale);
  const locale = legalLocale(rawLocale);

  return <LegalDocument content={privacyContent[locale]} locale={locale} />;
}
