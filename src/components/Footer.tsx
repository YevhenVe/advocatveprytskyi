"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const navHrefs = [
  { href: "/", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/services", key: "services" as const },
  { href: "/contacts", key: "contacts" as const },
  { href: "/sitemap", key: "sitemap" as const },
];

const serviceKeys = [
  "criminal",
  "civil",
  "corporate",
  "family",
  "commercial",
  "consulting",
] as const;

const phones = [
  { operator: "Kyivstar", display: "(098) 709-46-68", tel: "+380987094668" },
  { operator: "Vodafone", display: "(099) 606-55-37", tel: "+380996065537" },
  { operator: "Kyivstar", display: "(098) 227-92-45", tel: "+380982279245" },
  { operator: "Vodafone", display: "(057) 714-68-80", tel: "+380577146880" },
] as const;

const mapsUrl = "https://maps.app.goo.gl/E7ToXd6M6J2akbAq6";
const email = "vepricki2015@gmail.com";

export function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");
  const tContacts = useTranslations("Contacts");
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-black/5 bg-[#0c1929] text-white dark:border-white/10">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo.svg"
                alt={tNav("logoAlt")}
                width={160}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              {t("tagline")}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-xs font-semibold tracking-[0.18em] text-accent-light uppercase">
              {t("navTitle")}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navHrefs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold tracking-[0.18em] text-accent-light uppercase">
              {t("servicesTitle")}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {serviceKeys.map((key) => (
                <li key={key}>
                  <Link
                    href="/services"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {t(`serviceLinks.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold tracking-[0.18em] text-accent-light uppercase">
              {t("contactsTitle")}
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed text-white/70 transition-colors hover:text-white"
                >
                  {tContacts("address")}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  {email}
                </a>
              </li>
              {phones.map((phone) => (
                <li key={phone.tel} className="flex flex-wrap gap-x-2 gap-y-0.5">
                  <span className="text-white/45">{phone.operator}</span>
                  <a
                    href={`tel:${phone.tel}`}
                    className="tabular-nums text-white/70 transition-colors hover:text-white"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45 sm:text-sm">
            {t("copyright", { year })}
          </p>
          <p className="text-xs text-white/45 sm:text-sm">
            {t("developedBy")}{" "}
            <a
              href="http://rascaldevlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent-light transition-colors hover:text-white"
            >
              Rascal Dev Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
