import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["uk", "ru"],
  defaultLocale: "uk",
  localePrefix: "as-needed",
});

export type AppLocale = (typeof routing.locales)[number];
