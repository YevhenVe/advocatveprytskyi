# Адвокат Веприцький

Сайт адвоката Веприцького на Next.js.

## Розробка

```bash
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000).

## Resend (контактна форма)

1. Створіть `.env.local` у корені проєкту.
2. Додайте API-ключ Resend (замініть `re_xxxxxxxxx` на свій реальний ключ):

```bash
RESEND_API_KEY=re_xxxxxxxxx
# optional, default for testing:
RESEND_FROM_EMAIL=onboarding@resend.dev
```

3. Перезапустіть `npm run dev`.

Листи з форми йдуть на `eugene.veprytskyi@gmail.com` через `POST /api/contact`.

## Скрипти

| Команда | Опис |
| --- | --- |
| `npm run dev` | Dev-сервер |
| `npm run build` | Production build |
| `npm run start` | Production-сервер |
| `npm run lint` | ESLint |
