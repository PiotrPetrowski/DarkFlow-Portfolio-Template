# Obsidian Violet — Developer Portfolio Template

> A modern, high-performance developer portfolio template built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Motion**. Features an obsidian-violet dark aesthetic, 4-language localization (EN, ES, DE, RU), responsive design, client-side resource caching, and SEO optimization.

---

## 🇷🇺 Руководство по настройке и публикации (Для покупателя)

Поздравляем с приобретением шаблона **Obsidian Violet — Developer Portfolio Template**!  
Этот шаблон полностью подготовлен для коммерческого использования, индивидуальной настройки или сдачи клиентам. В проекте используются чистые нейтральные плейсхолдеры (`Your Name`, `your@email.com`, `@your-username`), которые легко заменяются на реальные данные за 10–15 минут.

---

### 1. 🛠 Технологический стек
- **React 19** + **TypeScript** — строгая типизация и компонентная архитектура.
- **Vite** — мгновенная горячая сборка и оптимизированный бандл.
- **Tailwind CSS** — утилитарная система стилей в палитре Obsidian Violet.
- **Motion** — плавные аппаратные микро-анимации и параллакс-эффекты.
- **Lucide Icons** — векторная коллекция иконок интерфейса.
- **Service Worker** — клиентское кэширование статических ресурсов.
- **JSON-LD & Open Graph** — структурированная семантическая разметка для поисковиков (SEO) и соцсетей.

---

### 2. 📁 Структура проекта
```text
├── index.html                   # SEO-метатеги, заголовок, favicon, Schema.org JSON-LD
├── metadata.json                # Метаданные приложения
├── package.json                 # Зависимости и npm-скрипты
├── public/                      # Статические файлы (favicon, manifest.json, sw.js)
│   ├── favicon.svg              # Иконка сайта
│   ├── manifest.json            # PWA-манифест
│   └── sw.js                    # Service Worker кэширования
└── src/
    ├── App.tsx                  # Главный корневой компонент страницы
    ├── components/              # Компоненты разделов
    │   ├── Navbar.tsx           # Шапка сайта, переключатель языков, ссылки
    │   ├── Hero.tsx             # Главный экран с интерактивным терминалом
    │   ├── About.tsx            # Секция «О себе» с ключевыми преимуществами
    │   ├── Projects.tsx         # Витрина проектов с фильтрами по категориям
    │   ├── ProjectModal.tsx     # Модальное окно детального просмотра проекта
    │   ├── Skills.tsx           # Интерактивная матрица навыков со шкалами
    │   ├── Experience.tsx       # Таймлайн карьеры и достижений
    │   ├── Contact.tsx          # Контактная форма с валидацией и автосохранением
    │   ├── Footer.tsx           # Подвал сайта со ссылками
    │   ├── LanguageSelector.tsx # Выпадающий переключатель языков
    │   ├── PerformanceBadge.tsx # Виджет состояния кэша и ресурсов
    │   └── ReadmeModal.tsx      # Встроенное окно инструкции в интерфейсе
    ├── context/
    │   └── LanguageContext.tsx  # React Context для мультиязычности
    ├── data/
    │   ├── portfolioData.ts     # Базовые данные (соцсети, навигация, проекты)
    │   └── translations.ts      # Переводы текстов на EN, ES, DE, RU
    ├── index.css                # Глобальные стили Tailwind CSS
    ├── main.tsx                 # Точка входа React
    └── types.ts                 # TypeScript интерфейсы
```

---

### 3. 🚀 Установка и локальный запуск

1. **Клонируйте или распакуйте архив с проектом:**
   ```bash
   cd obsidian-violet-portfolio
   ```

2. **Установите зависимости:**
   ```bash
   npm install
   ```

3. **Запустите локальный сервер разработки:**
   ```bash
   npm run dev
   ```
   Откройте в браузере: `http://localhost:3000`

4. **Проверка типов TypeScript:**
   ```bash
   npm run lint
   ```

5. **Сборка для продакшена:**
   ```bash
   npm run build
   ```
   Готовые минифицированные файлы будут сгенерированы в директории `dist/`.

---

### 4. 📝 Пошаговая кастомизация контента

Все данные вынесены в файлы конфигурации в папке `src/data/`. Вам не нужно менять вёрстку компонентов!

#### А. Личная информация и тексты на 4 языках (`src/data/translations.ts`)
В этом файле находится объект `TRANSLATIONS` с разделами `en`, `es`, `de`, `ru`.
- Замените `name: 'Your Name'` на ваше имя.
- Замените `title` на вашу должность (например, `Senior Frontend Engineer`, `Full-Stack Developer`).
- Отредактируйте `bioShort` и `bioFull` для каждого языка.
- Укажите ваши контакты в `contact`: email, телефон, город, ссылки на соцсети.
- Настройте описания проектов и карьерный опыт в соответствующих секциях `projects` и `experience`.

#### Б. Ссылки на соцсети и базовые списки (`src/data/portfolioData.ts`)
- **`SOCIAL_LINKS`**: Укажите ссылки на ваши реальные аккаунты:
  - GitHub: `https://github.com/your-username`
  - LinkedIn: `https://linkedin.com/in/your-username`
  - Telegram: `https://t.me/your-username`
  - Twitter / X: `https://x.com/your-username`
- **`SKILL_GROUPS`**: Настройте стек технологий, процент владения и опыт.
- **`PROJECTS_DATA`**: Замените примеры скриншотов (ссылки на Unsplash или локальные изображения из `/public/`), укажите рабочие ссылки на репозитории (`githubUrl`) и демонстрации (`demoUrl`).

#### В. Настройка контактной формы (`src/components/Contact.tsx`)
По умолчанию форма выполняет строгую клиентскую валидацию, сохраняет черновик сообщения в `localStorage` (черновик не сбрасывается при случайной перезагрузке) и показывает анимированное состояние успеха.

Чтобы сообщения приходили на вашу реальную почту:
- **Вариант 1: Formspree (Рекомендуется)**
  1. Зарегистрируйтесь на [formspree.io](https://formspree.io) и создайте новую форму.
  2. Получите URL формы (например: `https://formspree.io/f/xvovbwyq`).
  3. В файле `src/components/Contact.tsx` в функции `handleSubmit` отправьте данные:
     ```ts
     const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
       body: JSON.stringify(formData)
     });
     ```
- **Вариант 2: Web3Forms** ([web3forms.com](https://web3forms.com)) — без регистрации, отправка по бесплатному Access Key.
- **Вариант 3: EmailJS** ([emailjs.com](https://emailjs.com)) — отправка прямо из браузера через SDK.
- **Вариант 4: Собственный API** — укажите адрес вашего сервера через переменную `VITE_CONTACT_ENDPOINT` в `.env`.

#### Г. SEO, фавиконка и социальные превью (`index.html`)
Откройте `index.html` и отредактируйте:
- `<title>`: Ваше Имя | Developer Portfolio
- `<meta name="description">`: Краткое описание для поисковиков
- `<link rel="canonical" href="https://your-domain.com/">`: URL вашего сайта
- Open Graph теги (`og:title`, `og:description`, `og:url`, `og:image`)
- Разметку Schema.org JSON-LD в блоке `<script type="application/ld+json">`

---

### 5. 🌐 Публикация и деплой (Хостинг)

#### Деплой на Vercel (1 минута)
1. Загрузите репозиторий на GitHub.
2. Перейдите на [vercel.com](https://vercel.com) и нажмите **Add New Project**.
3. Выберите репозиторий. Vercel автоматически определит Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Нажмите **Deploy**.

#### Деплой на Netlify
1. Перейдите на [netlify.com](https://netlify.com) -> **Add new site** -> **Import an existing project**.
2. Укажите:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Нажмите **Deploy site**.

#### Деплой на Cloudflare Pages
1. В панели Cloudflare выберите **Workers & Pages** -> **Create application** -> **Pages**.
2. Подключите Git репозиторий.
3. Пресет: `Vite`, папка: `dist`.

#### Деплой на GitHub Pages
1. В `vite.config.ts` укажите `base: './'`.
2. Соберите проект: `npm run build`.
3. Опубликуйте ветку с содержимым папки `dist/`.

---

### 6. 📄 Условия коммерческой лицензии (Commercial License)

- **Разрешено:**
  - Использовать шаблон для личного портфолио без ограничений.
  - Использовать и модифицировать шаблон при разработке сайтов для клиентов и коммерческих заказчиков.
  - Разворачивать неограниченное количество экземпляров сайтов для себя и клиентов.
  - Полностью менять исходный код, стили, дизайн, компоненты и брендинг.

- **Ограничения:**
  - Запрещается прямая перепродажа исходного кода данного шаблона «как есть» на торговых площадках и маркетплейсах цифровых товаров без существенной переработки.

---
---

## 🇬🇧 Buyer Customization & Deployment Guide (English)

Welcome to the **Obsidian Violet — Developer Portfolio Template**!  
This template is engineered for professional commercial use. All sample texts use clean, neutral placeholders (`Your Name`, `your@email.com`, `@your-username`) that are ready to be personalized in 10–15 minutes.

---

### 1. 🛠 Technology Stack
- **React 19** + **TypeScript** — Strict typing and modern component design.
- **Vite** — Rapid developer build pipeline and optimized production bundles.
- **Tailwind CSS** — Obsidian-violet color palette and utility classes.
- **Motion** — Smooth, hardware-accelerated animations and subtle parallax.
- **Lucide Icons** — Clean, crisp SVG vector icons.
- **Service Worker** — Client-side caching of static assets and icons.
- **JSON-LD & Open Graph** — Rich structured SEO metadata.

---

### 2. 🚀 Quick Start & Build

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Type check:**
   ```bash
   npm run lint
   ```

4. **Production build:**
   ```bash
   npm run build
   ```
   Optimized files will be generated in `dist/`.

---

### 3. 📝 Content Customization Checklist

- **`src/data/translations.ts`**: Edit translations for all 4 languages (English, Spanish, German, Russian). Change `name`, `title`, `bioShort`, `bioFull`, project summaries, and experience history.
- **`src/data/portfolioData.ts`**: Update `SOCIAL_LINKS` (GitHub, LinkedIn, Telegram, X), `SKILL_GROUPS` (technology ratings and years), and `PROJECTS_DATA` (repo and live preview URLs).
- **`src/components/Contact.tsx`**: Connect your form service (Formspree, Web3Forms, EmailJS, or custom REST endpoint).
- **`index.html`**: Update `<title>`, `<meta name="description">`, canonical URL, Open Graph image, and Schema.org JSON-LD graph.

---

### 4. 📄 Commercial License Terms

- **Permitted Uses:**
  - Create and deploy your personal developer portfolio.
  - Customize, adapt, and deploy commercial websites for paying clients.
  - Unlimited deployments for yourself and your clients.
  - Modify, rebrand, refactor, and expand any part of the codebase.

- **Restrictions:**
  - You may not resell or redistribute the raw template source code directly on competing digital template marketplaces without substantial modification.

---
*Created with craftsmanship. Enjoy building your portfolio!*
