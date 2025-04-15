# Portfolio Website

This is a developer portfolio website built with **React**, **Vite**, and **Tailwind CSS**. It includes smooth scrolling, responsive layout, and a working contact form powered by **EmailJS**.

## 🛠️ Tech Stack

- **Frontend Framework**: React (with Vite)
- **Styling**: Tailwind CSS
- **Form Handling**: EmailJS (temporarily using hardcoded keys)
- **Environment**: Node.js + npm

---

## 🚀 Running the Project

Navigate into the `portfolio-website` folder and run:

```bash
cd portfolio-website
npm install
npm run dev
```

Visit the site at: [http://localhost:5173](http://localhost:5173)

---

## ✉️ Contact Form (EmailJS)

The contact form is implemented using **EmailJS**. For now, API keys are hardcoded directly into the `ContactFormModal.jsx` file. This is **temporary** and should be replaced later using environment variables.

### ✅ What Works

- Email is successfully sent via `emailjs.sendForm(...)`.
- The modal closes and shows an alert upon success.
- Simple validation checks for required fields.

### ⚠️ To-Do (Later)

- Move EmailJS credentials (`service ID`, `template ID`, `public key`) to `.env.local` file
- Resolve Vite config and root structure to ensure environment variables load properly

---

## 🧩 Known Issues

- `vite.config.js` is not currently located at the root — moving it breaks Tailwind setup
- Two `package.json` files may cause confusion — plan to unify or simplify later
- `.env.local` setup will be fixed when moving to production

---

## 📌 Notes

- Tailwind is set up and working within the `portfolio-website` folder
- All new components and changes should go under this folder
- Use `npm run dev` inside `portfolio-website` for local development

---

## 📦 CI/CD Flow

[![CI/CD Pipeline](https://github.com/Mojjan4/portfolio-website/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/Mojjan4/portfolio-website/actions/workflows/ci-cd.yml)
