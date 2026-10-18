# Project Guidance

- This is a Vue 3, TypeScript, and Vite app. Check the current source before assuming a route, view, or component exists; the router currently defines only `/`.
- The app entry is `src/main.ts`; `src/App.vue` hosts the router view. Home-page sections are composed in `src/views/HomeView.vue` and live under `src/Sections/Home/`.
- Use Vue single-file components and `<script setup>` for component logic. The `@` alias points to `src/`.
- Follow the repository formatting: two spaces, single quotes, no semicolons, and 100 columns. See `.editorconfig` and `.prettierrc.json` for details.
- `npm run build` runs the Vue type-check and production build; `npm run type-check` runs only the type-check. The supported Node versions are listed in `package.json`.
- Be aware that `npm run lint` runs Oxlint and ESLint with `--fix`, and `npm run format` writes formatted files under `src/`. Avoid these commands when a non-mutating check is intended.
- `docs/structure.md` and `docs/reference.md` describe a proposed site architecture, not the current implementation. Treat source and config as authoritative, and use those docs as planning references only.