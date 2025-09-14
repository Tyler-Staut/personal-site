# AI Coding Agent Instructions

Welcome to the `personal-site` codebase! This document provides essential guidelines for AI coding agents to be productive and effective contributors to this project.

## 📂 Project Overview

This project is a personal portfolio site built with the following technologies:
- **Astro**: Static site generation framework.
- **TypeScript**: Strongly typed JavaScript.
- **Cloudflare Workers**: Deployment platform for edge computing.

### Key Features
- **Bluesky Integration**: Fetches and displays recent posts from Bluesky.
- **Responsive Design**: Optimized for various devices.
- **Modern Web Standards**: Leveraging the latest tools and frameworks.

## 🛠️ Developer Workflows

### Local Development
- **Start the development server**: `npm run dev`
  - Access the site at [http://localhost:4321](http://localhost:4321).
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Deploy to Cloudflare Workers**: `npm run deploy`

### Prerequisites
- Node.js (v18+ recommended)
- Wrangler CLI for Cloudflare Workers

### Code Formatting
- Use `npm run format` to format the codebase with Prettier.

## 📐 Project Structure

```text
/
├── public/                # Static assets (e.g., images, icons)
├── src/
│   ├── components/        # Reusable UI components
│   ├── layouts/           # Page layouts
│   ├── pages/             # Application routes
│   ├── styles/            # Global and page-specific styles
│   └── data/              # Static data (e.g., site metadata)
├── dist/                  # Build output (generated)
├── .vscode/               # Editor settings
├── wrangler.toml          # Cloudflare Workers configuration
└── package.json           # Project metadata and dependencies
```

## 🧩 Patterns and Conventions

### API Integration
- The `src/pages/api/` directory contains serverless API routes.
- Example: `bsky.json.ts` fetches data from the Bluesky API using the `BskyAgent` class from `@atproto/api`.

### Styling
- Global styles are defined in `src/styles/global.css`.
- Component-specific styles can be added in the same directory as the component.

### Data Management
- Static data (e.g., site metadata) is stored in `src/data/`.
- Example: `site.ts` contains metadata like the site title and description.

## 🔗 External Dependencies

- **Bluesky API**: Used for fetching recent posts.
- **Cloudflare Workers**: Deployment platform.
- **Prettier**: Code formatting.

## 🚨 Important Notes

- Follow the TypeScript conventions used throughout the codebase.
- Ensure all API integrations are efficient and handle errors gracefully.
- Test changes locally before deploying.

---

For any questions or clarifications, refer to the [README.md](../README.md) or reach out to the repository owner.