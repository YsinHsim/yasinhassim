# Portfolio - Astro + Tailwind CSS

A modern, fast, and beautiful portfolio website built with Astro and Tailwind CSS.

## 🚀 Features

- **Zero JavaScript by default** - Ships only HTML/CSS for maximum performance
- **Responsive design** - Works on all devices
- **Dark theme** - Easy on the eyes with a modern aesthetic
- **Smooth animations** - CSS-based animations without heavy libraries
- **SEO optimized** - Built-in meta tags and semantic HTML

## 📦 Tech Stack

- **Astro** - Static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **Fontsource** - Self-hosted fonts (Inter & JetBrains Mono)

## 🛠 Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.astro       # Hero section with video background
│   ├── AboutMe.astro    # About section with 5 story subsections
│   ├── Projects.astro   # Work & personal projects
│   ├── TechSkills.astro # Skills showcase
│   ├── Contact.astro    # Contact section
│   └── Footer.astro     # Footer component
├── layouts/
│   └── BaseLayout.astro # Base HTML layout with navigation
├── pages/
│   └── index.astro      # Main page combining all sections
└── styles/
    └── global.css       # Global styles and Tailwind config
```

## 🎨 Sections

1. **Hero** - Profile image, animated name/title, video background
2. **About Me** - 5 life story sections with images:
   - Before The Tech
   - Process Suspender
   - Linux and Scripting
   - Life Skills and Career
   - Experience and Challenges
3. **Projects** - Work projects + Personal projects + Responsibilities
4. **Skills** - 25 technology skills with color-coded categories
5. **Contact** - WhatsApp, GitHub, Email links
6. **Footer** - Copyright and quick links

## 📝 Assets Needed

Make sure these files exist in the `public/` folder:

```
public/
├── profile.jfif           # Profile picture
├── background.mp4         # Hero background video
├── favicon.ico            # Site favicon
├── about-me/
│   ├── military.jpeg
│   ├── cyber-cafe.png
│   ├── radare2.jpeg
│   ├── butcher.jpeg
│   └── transmitter.jpeg
└── contact/
    ├── whatsapp.png
    ├── github.png
    └── gmail.png
```

## 🎯 Performance

- **Lighthouse Score**: Expected 95-100
- **Bundle Size**: ~30KB (vs ~200KB+ with React/MUI)
- **First Contentful Paint**: < 1s

## 🚀 Deployment

Deploy anywhere that serves static files:

- **Vercel** - `vercel deploy`
- **Netlify** - Connect GitHub repo
- **GitHub Pages** - Push `dist/` folder
- **Cloudflare Pages** - Connect GitHub repo

---

Built with ❤️ using [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
