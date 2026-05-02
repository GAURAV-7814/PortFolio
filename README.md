# Gaurav Garg — Portfolio

A personal portfolio website for **Gaurav Garg**, a Software Engineer focused on full-stack development, data engineering, and AI. Built with an editorial, dark aesthetic to showcase work, experience, and contact information.

---

## ✨ Features

- **Hero section** with intro, portrait, and direct CV / Resume downloads
- **About** — background and skills overview
- **Work** — selected projects
- **Experience** — professional timeline
- **Contact** — easy ways to get in touch
- **Marquee** — animated tech / keyword strip
- Smooth scroll-triggered reveal animations (`useReveal` hook)
- Fully responsive, semantic HTML, SEO meta tags
- Themed via design tokens (HSL semantic colors in `index.css` + Tailwind config)

---

## 🛠 Tech Stack

- **React 18** + **TypeScript**
- **Vite 5** (build tool)
- **Tailwind CSS v3** with custom design tokens
- **shadcn/ui** + **Radix UI** primitives
- **React Router** for routing
- **TanStack Query** for data
- **Lucide React** icons
- **Vitest** + **Testing Library** for tests

---

## 📁 Project Structure

```
├── public/
│   ├── Gaurav_Garg_CV.pdf
│   └── Gaurav_Garg_Resume.pdf
├── src/
│   ├── assets/              # Images (portrait, etc.)
│   ├── components/
│   │   ├── portfolio/       # Hero, About, Work, Experience, Contact, Nav, Marquee
│   │   └── ui/              # shadcn/ui components
│   ├── hooks/               # useReveal, use-mobile, use-toast
│   ├── pages/               # Index, NotFound
│   ├── lib/                 # utils
│   ├── index.css            # Design tokens & global styles
│   └── main.tsx
├── tailwind.config.ts
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm (or bun)

### Install & run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test
```

The dev server will start on `http://localhost:8080` (or the next available port).

---

## 📄 CV & Resume

Downloadable PDFs are served from `/public`:
- `Gaurav_Garg_CV.pdf`
- `Gaurav_Garg_Resume.pdf`

To update them, simply replace the files in the `public/` folder.

---

## 🎨 Customization

- **Colors / theme:** edit HSL tokens in `src/index.css` and `tailwind.config.ts`
- **Content:** edit the corresponding section file in `src/components/portfolio/`
- **Portrait:** replace `src/assets/portrait.jpg`
- **SEO title / description:** update `src/pages/Index.tsx`

---

## 📞 Contact

For any inquiries, please use the contact form on the website or reach out via email.