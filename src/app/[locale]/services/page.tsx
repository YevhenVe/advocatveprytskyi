import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LegalServiceStructuredData } from "@/components/StructuredData";
import { Services } from "@/components/Services";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const baseUrl = "https://www.advokat-veprytskyi.com";
  const path = `/${locale}/services`;

  return {
    title: t("servicesTitle"),
    description: t("servicesDescription"),
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        ru: `${baseUrl}/ru/services`,
        uk: `${baseUrl}/uk/services`,
        "x-default": `${baseUrl}/ru/services`,
      },
    },
    openGraph: {
      title: t("servicesTitle"),
      description: t("servicesDescription"),
      url: `${baseUrl}${path}`,
      siteName: "AV & KO — Адвокат Веприцкий",
      locale: locale === "uk" ? "uk_UA" : "ru_UA",
      alternateLocale: locale === "uk" ? "ru_UA" : "uk_UA",
      type: "website",
      images: [
        {
          url: `${baseUrl}/assets/logo.svg`,
          width: 512,
          height: 512,
          alt: "AV & KO — Адвокат Веприцкий",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("servicesTitle"),
      description: t("servicesDescription"),
      images: [`${baseUrl}/assets/logo.svg`],
    },
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-dvh flex flex-1 flex-col bg-[#edeef0] pt-[calc(var(--header-height)+1.25rem)] dark:bg-[#2d363d]">
      <LegalServiceStructuredData />
      <Services />
    </main>
  );
}
