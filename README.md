
[![FeatureSliced](https://img.shields.io/badge/Powered%20by-%F0%9F%8D%B0%20Feature%20Sliced-%235c9cb5)](https://feature-sliced.design/)

# MacBuildServer Test Task



## [Live Preview](https://build-store-test.vercel.app/)
## Tech Stack

- **UI**: `Next, tailwindcss`
- **Store**: `Redux-Toolkit`
- **Language**: `typescript`
- **Linters**: `eslint`
- **Other**: `zod, react-toastify`
- **Server**: `SupaBase`
## Run Locally

Скопировать проект

```bash
  git clone https://github.com/Scoteezy/build-store-test.git
```

Открыть папку с проектом

```bash
  cd build-store-test
```

Установить зависимости

```bash
  npm install
```
Создать .env.local и вписать в него токены из SupaBase(были отправлены в сопроводительном письме)
```env.local
NEXT_PUBLIC_SUPABASE_URL=your-key
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY=your_key
```
Заупустить сервер

```bash
  npm run start
```

