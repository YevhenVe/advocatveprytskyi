import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Services } from "@/components/Services";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("servicesTitle"),
    description: t("servicesDescription"),
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex flex-1 flex-col bg-[#edeef0] pt-[calc(var(--header-height)+1.25rem)] dark:bg-[#2d363d]">
      <Services />
    </main>
  );
}
