import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const baseUrl = "https://www.advokat-veprytskyi.com";
  const path = `/${locale}/privacy`;

  return {
    title: "Політика конфіденційності | AV & KO — Адвокат Веприцький",
    description:
      "Політика використання файлів cookie на сайті адвоката Веприцького.",
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        ru: `${baseUrl}/ru/privacy`,
        uk: `${baseUrl}/uk/privacy`,
        "x-default": `${baseUrl}/uk/privacy`,
      },
    },
    openGraph: {
      title: "Політика конфіденційності | AV & KO — Адвокат Веприцький",
      description:
        "Політика використання файлів cookie на сайті адвоката Веприцького.",
      url: `${baseUrl}${path}`,
      siteName: "AV & KO — Адвокат Веприцький",
      locale: "uk_UA",
      type: "website",
      images: [
        {
          url: `${baseUrl}/assets/logo.svg`,
          width: 512,
          height: 512,
          alt: "AV & KO — Адвокат Веприцький",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Політика конфіденційності | AV & KO — Адвокат Веприцький",
      description:
        "Політика використання файлів cookie на сайті адвоката Веприцького.",
      images: [`${baseUrl}/assets/logo.svg`],
    },
  };
}

const sections = [
  {
    title: "1. Що таке файли cookie?",
    paragraphs: [
      'Файли cookie — це невеликі текстові файли, які зберігаються на вашому комп\'ютері, смартфоні або іншому пристрої, коли ви відвідуєте веб-сайти. Вони допомагають сайту запам\'ятовувати інформацію про ваші налаштування та дії (наприклад, мову, розмір шрифту, товари в кошику), щоб вам не доводилося вводити їх знову при повторному відвідуванні.',
    ],
  },
  {
    title: "2. Які типи cookie ми використовуємо та навіщо?",
    paragraphs: [
      "Ми використовуємо кілька категорій файлів cookie для забезпечення повноцінної роботи Сайту:",
    ],
    list: [
      {
        label: "Обов'язкові (технічні) cookie:",
        text: "Необхідні для базового функціонування Сайту, безпеки та доступу до його захищених розділів. Без них Сайт не зможе працювати коректно.",
      },
      {
        label: "Функціональні cookie:",
        text: "Дозволяють Сайту запам'ятовувати вибір, який ви робите (наприклад, мову інтерфейсу або регіон), забезпечуючи зручність користування.",
      },
      {
        label: "Аналітичні та статистичні cookie:",
        text: "Допомагають нам зрозуміти, як відвідувачі взаємодіють із Сайтом (які сторінки найпопулярніші, скільки часу користувачі проводять на них). Для цього ми можемо використовувати інструменти третіх сторін, наприклад, Google Analytics.",
      },
      {
        label: "Маркетингові (рекламні) cookie:",
        text: "Використовуються для відстеження відвідувачів на веб-сайтах. Вони дозволяють показувати вам рекламу, яка є релевантною та цікавою саме для вас.",
      },
    ],
  },
  {
    title: "3. Як довго файли cookie залишаються на пристрої?",
    paragraphs: [
      "Залежно від тривалості дії файли cookie поділяються на:",
    ],
    list: [
      {
        label: "Сесійні:",
        text: "Тимчасові файли, які видаляються автоматично, як тільки ви закриваєте свій веб-браузер.",
      },
      {
        label: "Постійні:",
        text: "Залишаються на вашому пристрої протягом визначеного періоду часу або доки ви не видалите їх вручну.",
      },
    ],
  },
  {
    title: "4. Як керувати файлами cookie або вимкнути їх?",
    paragraphs: [
      "Ви маєте право в будь-який момент відкликати свою згоду на використання необов'язкових файлів cookie.",
      "Ви можете налаштувати або заблокувати cookie безпосередньо у вашому браузері. Більшість браузерів дозволяють:",
    ],
    list: [
      { label: null, text: "Переглядати збережені файли cookie та видаляти їх вручну." },
      { label: null, text: "Блокувати cookie третіх сторін (наприклад, рекламних мереж)." },
      { label: null, text: "Блокувати встановлення будь-яких cookie на пристрої." },
    ],
    note: "Якщо ви повністю вимкнете файли cookie, деякі функції нашого Сайту можуть стати недоступними або працювати некоректно.",
  },
  {
    title: "5. Зміни до цієї Політики",
    paragraphs: [
      "Ми можемо періодично оновлювати цю Політику використання файлів cookie у зв'язку зі змінами в технологіях чи законодавстві. Усі зміни публікуються на цій сторінці із зазначенням нової дати оновлення.",
    ],
  },
  {
    title: "6. Контакти",
    paragraphs: [
      "Якщо у вас виникли запитання щодо використання нами файлів cookie, будь ласка, зв'яжіться з нами:",
    ],
    contacts: [
      { label: "Електронна пошта:", value: "info@advokat-veprytskyi.com" },
      {
        label: "Адреса:",
        value: "м. Харків, проспект Аерокосмічний, 1, офіс 406, 4 поверх",
      },
    ],
  },
];

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-dvh flex flex-1 flex-col bg-[#fefdfd] pt-[calc(var(--header-height)+1.25rem)] dark:bg-[#0c1929]">
      <div className="mx-auto w-full max-w-[900px] px-4 pb-16 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="mb-8 mt-4 sm:mt-8">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Політика
          </span>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            Політика використання
            <span className="text-accent"> файлів cookie</span>
          </h1>
          <div className="mt-4 space-y-1 text-sm text-foreground/60">
            <p>Дата набрання чинності: 16 липня 2026 року</p>
            <p>Останнє оновлення: 16 липня 2026 року</p>
          </div>
        </div>

        {/* Intro */}
        <div className="mb-10 rounded-[18px] border border-white/40 bg-white/55 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-[20px] backdrop-saturate-150 dark:border-white/10 dark:bg-black/45 dark:shadow-[0_8px_32px_rgba(0,0,0,0.45),0_2px_8px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-8">
          <p className="text-sm leading-relaxed text-foreground/85">
            Цей документ пояснює, як <strong>AV & KO / Адвокат Веприцький і
            компанія</strong> (надалі — «ми», «наш» або «Компанія») використовує
            файли cookie та подібні технології відстеження, коли ви відвідуєте
            наш веб-сайт{" "}
            <a
              href="https://www.advokat-veprytskyi.com"
              className="text-accent underline transition-colors hover:text-accent-light"
            >
              www.advokat-veprytskyi.com
            </a>{" "}
            (надалі — «Сайт»).
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="rounded-[18px] border border-white/40 bg-white/55 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-[20px] backdrop-saturate-150 dark:border-white/10 dark:bg-black/45 dark:shadow-[0_8px_32px_rgba(0,0,0,0.45),0_2px_8px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-8"
            >
              <h2 className="mb-4 text-xl font-semibold text-foreground sm:text-2xl">
                {section.title}
              </h2>

              {section.paragraphs?.map((p, i) => (
                <p
                  key={i}
                  className="mb-3 text-sm leading-relaxed text-foreground/85 last:mb-0"
                >
                  {p}
                </p>
              ))}

              {section.list && (
                <ul className="mt-3 space-y-3">
                  {section.list.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed">
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-foreground/85">
                        {item.label && (
                          <strong className="text-foreground">
                            {item.label}{" "}
                          </strong>
                        )}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {section.note && (
                <p className="mt-3 rounded-xl border border-accent/20 bg-accent/5 px-4 py-3 text-sm leading-relaxed text-foreground/85">
                  {section.note}
                </p>
              )}

              {section.contacts && (
                <div className="mt-4 space-y-2">
                  {section.contacts.map((c, k) => (
                    <p
                      key={k}
                      className="text-sm leading-relaxed text-foreground/85"
                    >
                      <strong className="text-foreground">{c.label}</strong>{" "}
                      {c.value}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}