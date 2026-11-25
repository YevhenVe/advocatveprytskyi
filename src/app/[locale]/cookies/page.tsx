import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import {
  LegalDocument,
  buildLegalMetadata,
  legalLocale,
} from "@/components/LegalDocument";
import { cookiesContent } from "@/content/legal/cookies";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = legalLocale((await params).locale);
  return buildLegalMetadata(cookiesContent[locale], locale, "cookies");
}

export default async function CookiesPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  setRequestLocale(rawLocale);
  const locale = legalLocale(rawLocale);

  return <LegalDocument content={cookiesContent[locale]} locale={locale} />;
}
