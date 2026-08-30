# node-study

A small **practice app** for learning Node.js and Express. It is not a product.

The app covers:

- Express routing (`/` and `/form`)
- EJS views
- HTML form POST and `req.body`

The form is not authentication. It shows the values the server received.

The default language is English. Korean is available from the language switcher and as secondary copy on the page.

## Run

Node.js 18 or newer:

```bash
npm install
npm start
```

Auto-reload while developing:

```bash
npm run dev
```

Open `http://localhost:3000`. Override the port with `PORT`.

Use `?lang=ko` for Korean, or the **English · 한국어** links in the header.

## Layout

```
.
├── app.js                 # Express app setup
├── bin/www                # HTTP server entry
├── lib/i18n.js            # English default, Korean secondary
├── package.json
├── public/stylesheets/    # Static CSS
├── routes/
│   ├── index.js           # GET /
│   └── form.js            # GET and POST /form
└── views/
    ├── index.ejs
    ├── form.ejs
    ├── result.ejs
    ├── error.ejs
    └── partials/
```

## Visibility

This is the public copy: [github.com/jaebeom/node-study-public](https://github.com/jaebeom/node-study-public).

The tree has no passwords, API keys, or database config. `"private": true` in `package.json` means "do not publish to npm"; it is separate from GitHub public/private.

---

## 한국어

Node.js와 Express를 익히기 위한 **연습용 앱**입니다. 완성된 서비스가 아닙니다.

기본 언어는 영어이고, 한국어는 헤더의 언어 전환과 본문 보조 문구로 제공합니다.

```bash
npm install
npm start
```

`http://localhost:3000` — 한국어는 `?lang=ko` 또는 헤더의 **한국어** 링크.
