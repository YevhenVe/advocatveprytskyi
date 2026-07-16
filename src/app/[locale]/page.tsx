import { setRequestLocale } from "next-intl/server";
import { About } from "@/components/About";
import { Contacts } from "@/components/Contacts";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { LegalServiceStructuredData } from "@/components/StructuredData";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex flex-1 flex-col">
      <LegalServiceStructuredData />
      <Hero />
      <About />
      <Services />
      <Contacts />
    </main>
  );
}
