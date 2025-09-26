# Ariel Benesh - Business Card Portfolio

A modern, responsive business card portfolio website built with Astro and TailwindCSS. This project serves as a digital business card showcasing projects, tutorials, blog posts, and professional information.

## 🚀 Features

- **Modern Stack**: Built with Astro 4.15+ and TailwindCSS
- **Responsive Design**: Optimized for all devices and screen sizes
- **Fast Performance**: Static site generation for optimal loading speeds
- **Content Management**: Markdown-based blog posts and tutorials
- **Professional Sections**: Projects, tutorials, blog, open source contributions
- **Contact Integration**: Direct contact information and social links
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **TypeScript Support**: Full TypeScript integration for better development experience

## 📁 Project Structure

```
business-card/
├── public/                          # Static assets
│   ├── favicon.ico                  # Site favicon
│   ├── profile-image.png           # Profile picture
│   ├── hero-bg.jpg                 # Hero background image
│   └── ...                         # Other static assets
├── src/
│   ├── components/                  # Reusable Astro components
│   │   ├── Hero.astro              # Main hero section
│   │   ├── Navigation.astro        # Site navigation
│   │   ├── Contact.astro           # Contact section
│   │   ├── SocialLinks.astro       # Social media links
│   │   └── ...                     # Other components
│   ├── content/                     # Content collections
│   │   ├── blog/                   # Blog posts (Markdown)
│   │   └── tutorials/              # Tutorial content (Markdown)
│   ├── data/
│   │   └── site-data.ts            # Site configuration and data
│   ├── layouts/
│   │   └── Layout.astro            # Base layout template
│   ├── pages/                      # Route pages
│   │   ├── index.astro             # Homepage
│   │   ├── about.astro             # About page
│   │   ├── projects.astro          # Projects showcase
│   │   ├── tutorials.astro         # Tutorials listing
│   │   ├── blog.astro              # Blog listing
│   │   ├── opensource.astro        # Open source contributions
│   │   ├── devtools.astro          # Development tools
│   │   └── 404.astro               # 404 error page
│   ├── styles/
│   │   ├── globals.css             # Global styles
│   │   └── rtl-prose.css           # RTL typography styles
│   └── utils/                      # Utility functions
├── astro.config.mjs                # Astro configuration
├── tailwind.config.cjs             # TailwindCSS configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd business-card
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

## 📝 Customization

### Personal Information

Update your personal information in `/src/data/site-data.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Name | Your Title",
  description: "Your professional description",
  email: "your.email@example.com",
  cvUrl: "link-to-your-cv.pdf",
  googleTagId: "GTM-XXXXXX", // Your Google Tag Manager ID
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github",
  },
  // Add more social links...
];
```

### Profile Image

Replace `/public/profile-image.png` with your professional photo.

### Content Management

#### Adding Blog Posts

Create new Markdown files in `/src/content/blog/`:

```markdown
---
title: "Your Blog Post Title"
description: "Brief description"
publishDate: "2024-03-15"
tags: ["tag1", "tag2"]
---

Your blog content here...
```

#### Adding Tutorials

Create new Markdown files in `/src/content/tutorials/`:

```markdown
---
title: "Tutorial Title"
description: "Tutorial description"
publishDate: "2024-03-15"
category: "Development"
difficulty: "Beginner"
tags: ["tutorial", "guide"]
---

Your tutorial content here...
```

### Styling

The project uses TailwindCSS with custom configuration:

- **Colors**: Modify the color scheme in `tailwind.config.cjs`
- **Typography**: Uses `@tailwindcss/typography` for rich text content
- **Animations**: Includes `tailwindcss-animate` for smooth transitions
- **Global Styles**: Custom styles in `src/styles/globals.css`

## 🚀 Deployment

### GitHub Pages

The project is configured for GitHub Pages deployment:

1. Update the `site` URL in `astro.config.mjs`
2. Push to your repository
3. Enable GitHub Pages in repository settings
4. Your site will be available at your GitHub Pages URL

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` folder, ready for deployment to any static hosting service.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run start` - Alias for dev command
- `npm run build` - Build for production (includes type checking)
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## 🎨 Key Components

### Hero Section
The main landing section with introduction and call-to-action buttons.

### Navigation
Responsive navigation with smooth scrolling and mobile menu.

### Contact Section
Professional contact information with social media links.

### Content Collections
Astro's content collections for type-safe blog posts and tutorials.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Technologies Used

- **[Astro](https://astro.build)** - Static site generator
- **[TailwindCSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript
- **[PostCSS](https://postcss.org)** - CSS processing
- **[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)** - Beautiful typography
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities
