[![Netlify Status](https://api.netlify.com/api/v1/badges/f3adbe29-2bb2-4ce9-beb7-7be365cdb23a/deploy-status)](https://app.netlify.com/sites/lake-park/deploys)

![HTML](https://img.shields.io/badge/HTML-FF5722?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-007ACC?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)

# Lakepark Resort Website

A fully responsive, interactive **multilingual static website** designed with best practices in **accessibility, performance, and cross-browser compatibility**.

🔗 **Website:** [Lakepark Resort](https://lakeparksapanca.com/)

📌 **GitHub Repo:** [Lakepark Resort GitHub](https://github.com/Muatasim-Aswad/lake-park-resort)

---

## 📚 Table of Contents

- [🚀 Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📂 File Structure](#-file-structure)
- [🔧 Installation & Setup](#-installation--setup)
- [📜 Scripts](#-scripts)
- [📷 Screenshots](#-screenshots)
- [🐛 Issues & Feedback](#-issues--feedback)
- [📜 License](#-license)

---

## 🚀 Features

- Image gallery with smooth interactions
- Search functionality (planned integration with the client’s reservation system)
- Contact form
- Multilingual support: **English (En), Arabic (Ar), Turkish (Tr)**
  - If the user has not manually selected a language before, it defaults to the browser's language.

This project provided hands-on experience in the **full software development lifecycle**—from UI/UX design to development and deployment.

---

## 🛠 Tech Stack

- **Languages:** HTML, CSS, JavaScript
- **Build Tool:** Vite
- **CI/CD:** Git, GitHub, Netlify (Husky, GitHub Actions)
- **Backend Logic:** Netlify Serverless Functions
- **Hosting:** Netlify (Website), Cloudinary (Media Storage)

---

## 📂 File Structure

```
index.html
src
├── features
│   ├── bookingSearchHandler
│   │   └── bookingSearchHandler.js
│   ├── currentNavButtonHighlighter
│   │   └── currentNavButtonHighlighter.js
│   ├── dropdownToggler
│   │   └── dropdownToggler.js
│   ├── headerAdapter
│   │   └── headerAdapter.js
│   ├── imageGalleryHandler
│   │   ├── imageGalleryHandler.js
│   │   ├── photos.js
│   │   └── swipe.js
│   ├── translations
│   │   ├── ar.js
│   │   ├── en.js
│   │   ├── tr.js
│   │   └── translations.js
│   └── videoPlaybackManager
│       └── videoPlaybackManager.js
├── main.js
├── styles
│   ├── book.css
│   ├── explore.css
│   ├── footer.css
│   ├── general.css
│   ├── header.css
│   ├── home.css
│   ├── language.css
│   ├── other.css
│   ├── reach.css
│   └── util.css
└── utils
```

---

## 🔧 Installation & Setup

1️⃣ **Clone the repository**

```sh
git clone https://github.com/Muatasim-Aswad/lake-park-resort.git
cd lake-park-resort
```

2️⃣ **Install dependencies**

```sh
npm install
```

3️⃣ **Start the development server**

```sh
npm run dev
```

or

```sh
netlify dev
```

---

## 📜 Scripts

The project includes several npm scripts for development, linting, formatting, and deployment:

- `npm run dev` → Start the Vite dev server.
- `npm run build` → Build the project for production.
- `npm run preview` → Preview the production build.
- `npm run lint` → Run ESLint and Stylelint.
- `npm run format` → Run Prettier for code formatting.
- `npm run netlify:deploy` → Deploy to Netlify.

---

## 📷 Screenshots

<img width="370" alt="Screenshot 2025-02-23 at 20 04 56" src="https://github.com/user-attachments/assets/1cff549e-dafe-4c94-b037-0fd5a92108e8" />
<img width="1435" alt="Screenshot 2025-02-23 at 20 03 45" src="https://github.com/user-attachments/assets/720b6cbf-36d4-47c0-b013-d88f6f1934c5" />
<img width="1438" alt="Screenshot 2025-02-18 at 20 47 53" src="https://github.com/user-attachments/assets/81de0171-032e-4b7a-82fa-6eac70f1033a" />
<img width="1375" alt="Screenshot 2025-02-23 at 20 05 56" src="https://github.com/user-attachments/assets/9b3fda78-2854-411b-b9d6-4261a49a5773" />

---

## 🐛 Issues & Feedback

If you encounter any issues or have feature requests, feel free to open an [issue](https://github.com/Muatasim-Aswad/lake-park-resort/issues).

---

## 📜 License
