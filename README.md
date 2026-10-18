# Contributions:

- Francyn - AboutView, ContactView
- Matyu - MenuView, ReviewsView, Components
- DJ - HomeView, Navbar

# TODO

# VIEWS

- [ ] HomeView [Deejay]
- [ ] MenuView [Matthew]
- [ ] AboutView [Francyn]
- [ ] ReviewsView [Matthew]
- [ ] ContactView [Francyn]
- [ ] Components [Matthew, Deejay]

# SECTIONS

## HOME (HomeView.vue)

- HeroSection.vue
- FeaturedSpecialsSection.vue
- AboutTeaserSection.vue
- StoreHoursBanner.vue

## MENU (MenuView.vue)

- MenuHeroSection.vue
- BunsSection.vue
- SidesSection.vue # Tacos, Fries, Chicken pops
- BeveragesSection.vue # Coffee & Fruit drinks
- DessertsSection.vue # Affogato & Sweets
- CombosSection.vue # Bun + Drink pairings

## ABOUT (AboutView.vue)

- AboutHeroSection.vue
- HistoryStorySection.vue
- CraftIngredientsSection.vue
- MeetTheTeamSection.vue
- VibeGallerySection.vue

# REUSABLE COMPONENTS

- [ ] Navbar.vue
- [x] Footer.vue
- [x] ItemCard.vue # Used across Menu & Featured sections
- [x] ReviewCard.vue # Used for testimonials
- [x] BaseButton.vue

# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
