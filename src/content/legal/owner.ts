/**
 * Single source of truth for the legal details used in the policies,
 * the footer and the contact-form consent record.
 *
 * TODO(before release): replace every "[...]" placeholder with the real
 * details of the data owner (володілець персональних даних).
 */

/** Bump this whenever the privacy policy text changes. Sent with every consent. */
export const POLICY_VERSION = "2026-11-25";

export const POLICY_DATE = {
  uk: "25 листопада 2026 року",
  ru: "25 ноября 2026 года",
} as const;

export const SITE_URL = "https://www.advokat-veprytskyi.com";

export const LEGAL_EMAIL = "consult@advokat-veprytskyi.com";

/** How long contact-form requests are kept if no contract follows. */
export const RETENTION_MONTHS = 12;

export const DATA_OWNER = {
  uk: {
    name: "[ПІБ адвоката / найменування володільця]",
    details: "[свідоцтво про право на заняття адвокатською діяльністю № ___ від ___, видане ___]",
    address: "м. Харків, проспект Аерокосмічний, 1, офіс 406, 4 поверх",
  },
  ru: {
    name: "[ФИО адвоката / наименование владельца]",
    details: "[свидетельство о праве на занятие адвокатской деятельностью № ___ от ___, выдано ___]",
    address: "г. Харьков, проспект Аэрокосмический, 1, офис 406, 4 этаж",
  },
} as const;

/**
 * Exact wording of the contact-form consent checkbox. The form renders it and
 * the API copies it into every email as the record of what the sender agreed to.
 */
export const CONSENT_TEXT = {
  uk: {
    before: "Я погоджуюсь на обробку моїх персональних даних відповідно до",
    link: "Політики конфіденційності",
  },
  ru: {
    before: "Я соглашаюсь на обработку моих персональных данных в соответствии с",
    link: "Политикой конфиденциальности",
  },
} as const;
