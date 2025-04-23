# Portfolio Website

This is a short portfolio website built using React, Vite, and Tailwind CSS. It features smooth scrolling, a responsive layout, and a fully functional contact form powered by EmailJS. This project highlights some of my skills in frontend development and modern web technologies.

## 🛠️ Tech Stack

- **Frontend Framework**: React (with Vite for fast build and development)
- **Styling**: Tailwind CSS (utility-first CSS framework)
- **Form Handling**: EmailJS (for sending emails without a backend)
- **Environment**: Node.js + npm (for package management

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

The contact form is powered by EmailJS, allowing visitors to contact me without the need for a backend.

- **EmailJS Integration**: Sends emails via the emailjs.sendForm(...) method.
- **Modal Behavior**: Upon submission, the modal closes and displays an alert confirming the message has been sent.
- **Validation**: Basic validation ensures required fields are filled before submission.

## 📌 Notes

- **Tailwind CSS**: Set up and working within the portfolio-website folder for styling.
- **New Components**: All new components and changes should go under the portfolio-website folder.
- **Development**: Run npm run dev inside the portfolio-website folder for local development.
---

## 📦 CI/CD Flow

The project has a fully automated CI/CD pipeline to build and deploy to GitHub Pages.

[![CI/CD Pipeline](https://github.com/Mojjan4/portfolio-website/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/Mojjan4/portfolio-website/actions/workflows/ci-cd.yml)
