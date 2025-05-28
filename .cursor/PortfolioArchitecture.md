
# Interactive Developer Desk Portfolio Architecture

## 📁 Folder & File Structure

```
portfolio/
├── public/
│   ├── assets/                # Static images, Lottie JSONs, icons
│   └── videos/                # Demo screen recordings or auto-scrolling videos
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── DeskScene.jsx
│   │   ├── LaptopDisplay.jsx
│   │   ├── PhoneDisplay.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SkillsPanel.jsx
│   │   ├── AboutPanel.jsx
│   │   ├── ContactPanel.jsx
│   │   └── ThemeToggle.jsx
│   ├── contexts/              # Context for global state
│   │   └── ThemeContext.jsx
│   ├── data/                  # JSON/TS files with your project info
│   │   ├── webProjects.js
│   │   └── mobileProjects.js
│   ├── hooks/                 # Custom React hooks
│   │   └── useAutoCycle.jsx
│   ├── layouts/               # Page layouts
│   │   └── MainLayout.jsx
│   ├── pages/                 # Pages (if using Next.js) or Routes (if React Router)
│   │   └── index.jsx
│   ├── services/              # Utilities or external integrations
│   │   ├── emailService.js
│   │   └── analytics.js
│   ├── styles/                # Tailwind config and any global styles
│   │   ├── tailwind.css
│   │   └── animations.css
│   ├── App.jsx
│   └── main.jsx               # Vite entry point or _app.jsx/_document.js in Next.js
├── tailwind.config.js
├── vite.config.js / next.config.js
├── package.json
└── README.md
```

## 🧠 Where State Lives

### 🔁 Global State: `ThemeContext`
- Tracks **light/dark mode** toggle.
- Can extend for **language toggle**, **animation states**, etc.

### 🔄 Local Component State:
- **LaptopDisplay** and **PhoneDisplay** handle their own internal cycling logic.
- Modal visibility (e.g., project detail popups) is locally scoped.

### 💬 Context-Aware Hook: `useAutoCycle()`
- Cycles through a list of projects at intervals (pause on hover).
- Shared by both `LaptopDisplay` and `PhoneDisplay`.

## 🔗 Data Services

```js
// webProjects.js
export default [
  {
    id: 1,
    title: "Portfolio Website",
    tech: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "https://...",
    github: "https://...",
    image: "/assets/portfolio.png",
    description: "A dynamic developer portfolio built with React."
  },
  ...
]
```

- `emailService.js`: use `EmailJS` or `Formspree` for sending contact form messages.
- `analytics.js`: optional for page visits (e.g., Google Analytics).

## 🧩 Component Responsibilities

| Component         | Purpose                                                                 |
|------------------|-------------------------------------------------------------------------|
| `DeskScene`       | Master layout showing the phone, laptop, and environment (desk, lights) |
| `LaptopDisplay`   | Renders embedded iframes, tabs for web projects                         |
| `PhoneDisplay`    | Animates screen scroll, swipe or video demo of mobile apps              |
| `ProjectCard`     | Tooltip/hoverable project summary + tech stack                          |
| `SkillsPanel`     | Clickable icons for skills with animations                              |
| `AboutPanel`      | Dev bio, maybe with a stylized “sticky note” UI                         |
| `ContactPanel`    | Opens resume or sends message using form                                |
| `ThemeToggle`     | Toggles between day/night or light/dark modes                           |

## 🔧 Animation and Visuals

- **Framer Motion**: Animate UI transitions, swipe effects, entrance animations.
- **Lottie**: Add swipe hand, typing animation, desk light flickers, etc.
- **Three.js (Optional)**: For a full 3D desk scene with camera parallax.

## 🧪 Testing & Dev Tools

- **Jest + React Testing Library** for UI testing.
- **ESLint + Prettier** setup for code consistency.
- **Husky + Lint-Staged** (optional) to prevent bad commits.

## ✅ Deployment Recommendations

- **Vercel** or **Netlify** for fast CI/CD and instant preview links.
- Use **image optimization** and lazy loading for performance.
- Optionally use **service workers** for offline support.
