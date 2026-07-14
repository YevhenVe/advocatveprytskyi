const baseUrl = "https://www.advokat-veprytskyi.com";

export function OrganizationStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AV & KO — Адвокат Веприцкий",
    url: baseUrl,
    logo: `${baseUrl}/assets/logo.svg`,
    description:
      "Команда адвокатов и юристов «AV & KO» — надёжная правовая защита бизнеса и личных интересов.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "проспект Аэрокосмический, 1, офис 406",
      addressLocality: "Харьков",
      addressCountry: "UA",
    },
    email: undefined as string | undefined,
    telephone: undefined as string | undefined,
    legalName: "AV & KO",
    knowsAbout: [
      "Уголовное право",
      "Гражданские споры",
      "Корпоративное право",
      "Семейное право",
      "Хозяйственные споры",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function LegalServiceStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "AV & KO — Адвокат Веприцкий",
    url: baseUrl,
    logo: `${baseUrl}/assets/logo.svg`,
    image: `${baseUrl}/assets/logo.svg`,
    description:
      "Команда опытных адвокатов и юристов «AV & KO» — надёжная правовая защита бизнеса и личных интересов.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "проспект Аэрокосмический, 1, офис 406",
      addressLocality: "Харьков",
      addressCountry: "UA",
    },
    areaServed: "UA",
    priceRange: "₴₴",
    telephone: undefined as string | undefined,
    email: undefined as string | undefined,
    sameAs: [baseUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}