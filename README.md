# 🧠 AI-Powered Resume Builder

A personal resume website and AI-powered resume generator built with **React**, **TypeScript**, and **Google Gemini**. Generates tailored, job-specific resume content and lets you export it as a print-ready PDF — all from a clean, customizable UI.

🔗 **Live Demo:** [pj1016.github.io/personal_resume](https://pj1016.github.io/personal_resume)  
🚀 **Also deployed on:** [personal-resume-rho.vercel.app](https://personal-resume-rho.vercel.app)

---

## ✨ Features

- **AI content generation** — Uses Google Gemini API to generate and improve resume content based on job targets
- **Rich text editing** — React Quill editor for inline resume customization
- **Export to PDF** — Print-ready PDF export via `react-to-print`
- **Form management** — React Hook Form for structured, validated resume input
- **State management** — Redux Toolkit + React Query for efficient data handling
- **Material UI** — Clean, professional UI built with MUI v5 components
- **Fully typed** — 97%+ TypeScript codebase

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18, TypeScript |
| AI | Google Gemini API (`@google/generative-ai`) |
| UI | Material UI v5, Emotion, FontAwesome |
| Forms | React Hook Form |
| State | Redux Toolkit, React Query |
| Editor | React Quill |
| PDF Export | react-to-print |
| Routing | React Router v6 |
| Deployment | GitHub Pages, Vercel |
| CI/CD | GitHub Actions |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- A Google Gemini API key ([get one here](https://aistudio.google.com/app/apikey))

### Installation

```bash
git clone https://github.com/PJ1016/personal_resume.git
cd personal_resume
npm install
```

### Environment Setup

Create a `.env` file in the root:

```env
REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
```

### Run Locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Deployment

### GitHub Pages

```bash
npm run deploy
```

### Vercel

Connect the repo to [vercel.com](https://vercel.com) and set `REACT_APP_GEMINI_API_KEY` in your project environment variables.

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/            # Route-level page components
├── store/            # Redux Toolkit slices
├── hooks/            # Custom React hooks
├── utils/            # Helper functions
└── types/            # TypeScript type definitions
```

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

MIT
