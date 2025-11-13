# 🎾 TennisWiki - Modern Tennis Information Hub

<div align="center">
  
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.0-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.13-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?logo=github&logoColor=white&style=for-the-badge)](https://x-neon-nexus-o.github.io/TennisWiki/)

</div>

## 🚀 Features

- 🎨 Modern, responsive UI with smooth animations
- 📱 Mobile-first design
- ⚡ Blazing fast performance with Vite
- 🎯 Interactive components with Framer Motion
- 🌐 Client-side routing with React Router

## 📦 Project Structure

```mermaid
graph TD
    A[public] -->|Static Files| B(Images)
    A --> C(Favicon)
    
    D[src] --> E[components]
    D --> F[pages]
    D --> G[assets]
    
    E --> H[Header.jsx]
    E --> I[Footer.jsx]
    E --> J[ErrorPage.jsx]
    
    F --> K[About.jsx]
    F --> L[Contact.jsx]
    F --> M[Login.jsx]
    
    G --> N[react.svg]
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Routing**: React Router v7
- **Deployment**: GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/x-neon-nexus-o/TennisWiki.git
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

The project is automatically deployed to GitHub Pages on push to the `main` branch. To deploy manually:

```bash
npm run deploy
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ✨ Contributors

<a href="https://github.com/x-neon-nexus-o/TennisWiki/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=x-neon-nexus-o/TennisWiki" />
</a>

## 💡 Features in Progress

- [ ] Player profiles
- [ ] Tournament brackets
- [ ] Live scores integration
- [ ] User authentication

<div align="center">
  
![GitHub last commit](https://img.shields.io/github/last-commit/x-neon-nexus-o/TennisWiki?style=flat-square&color=blueviolet)
![GitHub repo size](https://img.shields.io/github/repo-size/x-neon-nexus-o/TennisWiki?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues-raw/x-neon-nexus-o/TennisWiki?style=flat-square)

</div>
