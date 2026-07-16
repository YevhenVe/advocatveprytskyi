import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Contacts } from "@/components/Contacts";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const baseUrl = "https://www.advokat-veprytskyi.com";
  const path = `/${locale}/contacts`;

  return {
    title: t("contactsTitle"),
    description: t("contactsDescription"),
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        ru: `${baseUrl}/ru/contacts`,
        uk: `${baseUrl}/uk/contacts`,
        "x-default": `${baseUrl}/ru/contacts`,
      },
    },
    openGraph: {
      title: t("contactsTitle"),
      description: t("contactsDescription"),
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
      title: t("contactsTitle"),
      description: t("contactsDescription"),
      images: [`${baseUrl}/assets/logo.svg`],
    },
  };
}

export default async function ContactsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-dvh flex flex-1 flex-col bg-[#fefdfd] pt-[calc(var(--header-height)+1.25rem)] dark:bg-[#0c1929]">
      <Contacts />
    </main>
  );
}
