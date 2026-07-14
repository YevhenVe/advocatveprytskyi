import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Contacts } from "@/components/Contacts";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("contactsTitle"),
    description: t("contactsDescription"),
  };
}

export default async function ContactsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex flex-1 flex-col bg-[#fefdfd] pt-[calc(var(--header-height)+1.25rem)] dark:bg-[#0c1929]">
      <Contacts />
    </main>
  );
}
