import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Sitemap } from "@/components/Sitemap";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const tSitemap = await getTranslations({ locale, namespace: "Sitemap" });

  const baseUrl = "https://www.advokat-veprytskyi.com";
  const path = `/${locale}/sitemap`;

  return {
    title: `${tSitemap("title")} | ${t("siteName")}`,
    description: tSitemap("description"),
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        ru: `${baseUrl}/ru/sitemap`,
        uk: `${baseUrl}/uk/sitemap`,
        "x-default": `${baseUrl}/ru/sitemap`,
      },
    },
    openGraph: {
      title: `${tSitemap("title")} | ${t("siteName")}`,
      description: tSitemap("description"),
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
      title: `${tSitemap("title")} | ${t("siteName")}`,
      description: tSitemap("description"),
      images: [`${baseUrl}/assets/logo.svg`],
    },
  };
}

export default async function SitemapPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex flex-1 flex-col bg-[#fefdfd] pt-[calc(var(--header-height)+1.25rem)] dark:bg-[#0c1929]">
      <Sitemap />
    </main>
  );
}