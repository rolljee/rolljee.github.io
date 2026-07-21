# rolljee.github.io

Personal website of **Nicolas “Ricky” Riquelme** — a blog, portfolio, tools and
links, built as a single-page React app and deployed to GitHub Pages.

## Tech stack

- [React 19](https://react.dev/)
- [React Router 7](https://reactrouter.com/) (hash router, for static hosting)
- [React Bootstrap 2](https://react-bootstrap.netlify.app/) + Bootstrap 5.3
- [Vite 6](https://vite.dev/) for dev server and builds

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
npm run build   # production build into build/
npm run preview # preview the production build locally
```

## Project structure

```
src/
├── App.jsx              # routes + layout
├── main.jsx            # React entry point
├── index.css           # global, theme-aware design layer
├── theme/              # light / dark theme context
├── components/         # NavBar, Footer, EntryCard, PageHeader
├── about-me/           # About page
├── blog/               # Blog list, article view, content + metadata
├── projects/           # Projects list (data in projects.json)
├── tools/              # Tools list (data in tools.json)
├── links/              # Links list (data in links.json)
└── routes/             # 404 page
```

Content for the blog, projects, tools and links lives in the matching
`*.json` files, so updating the site is mostly a matter of editing data.

## Deployment

Pushing to the `develop` branch triggers the
[`Build and deploy`](.github/workflows/deploy.yml) GitHub Action, which builds
the site and publishes it straight to GitHub Pages using the official
`upload-pages-artifact` / `deploy-pages` actions (Pages source: **GitHub
Actions**). The custom domain `blog.rolljee.fr` is kept via `public/CNAME`.

You can also trigger a deployment manually from the Actions tab
("Run workflow").
