import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { About } from "@/components/About";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const baseUrl = "https://www.advokat-veprytskyi.com";
  const path = `/${locale}/about`;

  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        ru: `${baseUrl}/ru/about`,
        uk: `${baseUrl}/uk/about`,
        "x-default": `${baseUrl}/ru/about`,
      },
    },
    openGraph: {
      title: t("aboutTitle"),
      description: t("aboutDescription"),
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
      title: t("aboutTitle"),
      description: t("aboutDescription"),
      images: [`${baseUrl}/assets/logo.svg`],
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex flex-1 flex-col bg-[#fefdfd] pt-[calc(var(--header-height)+1.25rem)] dark:bg-[#0c1929]">
      <About />
    </main>
  );
}
