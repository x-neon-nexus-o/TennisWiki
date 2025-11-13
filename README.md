<div align="center">

# 🎾 TennisWiki <span style="display:inline-block; animation: bounce 2s infinite;">🎾</span>

**A modern, responsive tennis hub for fans, learners, and enthusiasts.**  
Built with **React**, **Vite**, and **Bootstrap 5**.

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)](https://vitejs.dev)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap)](https://getbootstrap.com)

</div>

<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .animate-fade { animation: fadeIn 1s ease-out; }
  .animate-slide { animation: slideUp 0.8s ease-out; }
  .section { margin: 2.5rem 0; padding: 1.5rem; border-left: 4px solid #28a745; background: #f8f9fa; border-radius: 8px; }
  .badge { font-size: 0.9em; padding: 0.4em 0.8em; border-radius: 12px; }
  .tennis-ball { font-size: 1.5em; display: inline-block; animation: bounce 2s infinite; }
</style>

---

## <div class="animate-fade">🚀 Project Overview</div>

<div class="section animate-slide">

**TennisWiki** is a **Single Page Application (SPA)** that brings the world of tennis to your fingertips. Explore player profiles, tournament info, and connect with the community.

### ✨ Key Features

- **Responsive Design** – Mobile-first with **Bootstrap 5**  
- **Dynamic Routing** – **React Router v7** (Home, About, Contact, etc.)  
- **Interactive UI** – Homepage slider with tennis legends  
- **Player Profiles** – Cards linking to Wikipedia (Djokovic, Nadal, Alcaraz, Sinner)  
- **Contact Form** – With validation and state management  
- **Deployment Ready** – GitHub Pages via `gh-pages`

</div>

---

## <div class="animate-fade">🛠️ Tech Stack</div>

<div class="section animate-slide">

| Technology | Version | Link |
|-----------|--------|------|
| **React** | v19 | [react.dev](https://react.dev) |
| **Vite** | v7 | [vitejs.dev](https://vitejs.dev) |
| **Bootstrap 5** | CDN | [getbootstrap.com](https://getbootstrap.com) |
| **React Router** | v7 | [reactrouter.com](https://reactrouter.com) |
| **FontAwesome** | CDN | Icons |
| **Deployment** | gh-pages | GitHub Pages |

</div>

---

## <div class="animate-fade">📂 Project Structure</div>

```text
TennisWiki/
├── public/
│   └── imgs/           # Player photos, logos, UI assets
├── src/
│   ├── assets/         # Source images
│   ├── components/     # Reusable UI
│   │   ├── ErrorPage.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Partners.jsx
│   │   ├── Products.jsx
│   │   └── Slider.jsx
│   ├── pages/          # Page components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Service.jsx
│   ├── App.jsx         # Routing & layout
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # Bootstrap CDN
├── package.json
└── vite.config.js      # base: '/TennisWiki/'
