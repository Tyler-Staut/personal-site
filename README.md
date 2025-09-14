# Tyler Staut's Personal Site

Welcome to the source code for my personal website, built with [Astro](https://astro.build) and deployed on [Cloudflare Workers](https://workers.cloudflare.com/). This site serves as my portfolio, blog, and a place to showcase my projects.

## 🌟 Features

- **Bluesky Integration**: Displays recent posts from Bluesky.
- **Cloudflare Workers**: Deployed on a fast, scalable edge network.
- **Responsive Design**: Optimized for all devices.
- **TypeScript Support**: Fully typed for reliability and maintainability.
- **Astro Framework**: Static site generation with modern web standards.

## 🚀 Project Structure

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

## 🛠️ Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install/) for Cloudflare Workers

### Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts the local development server              |
| `npm run build`           | Builds the site for production                   |
| `npm run preview`         | Previews the production build locally            |
| `npm run deploy`          | Deploys the site to Cloudflare Workers           |
| `npm run format`          | Formats the codebase using Prettier              |

### Local Development

Start the development server:

```sh
npm run dev
```

Visit the site at [http://localhost:4321](http://localhost:4321).

## 🌐 Deployment

This site is deployed using Cloudflare Workers. To deploy:

1. Ensure you have the Wrangler CLI installed and authenticated.
2. Run the following command:

```sh
npm run deploy
```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

## 👋 Acknowledgments

- Built with [Astro](https://astro.build)
- Hosted on [Cloudflare Workers](https://workers.cloudflare.com)
- Icons provided by [Iconify](https://iconify.design)

For questions or feedback, feel free to reach out via [GitHub](https://github.com/Tyler-Staut) or [LinkedIn](https://www.linkedin.com/in/tyler-staut/).
