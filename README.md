# Angular Starter - Angular Material Template

Angular Starter is an Angular template based from @angular/cli template with extra features to start project faster.

## Angular Version

12.0.0

## Prerequisites

- Node.js (>= 12 required)
- npm package manager (>= 6 required)
- docker (20 >= optional)
- docker-compose (3.9 >= optional)

## Template Features

- Angular Material
- Material Icons
- Roboto Font

## Extra Features

- SCSS Support
- SEO
- PWA
- Angular Universal (SSR)
- Reactive State (@ngrx/store, @ngrx/store-devtools, @ngrx/effects)
- Bundle Analyzer
- ESLint
- Prettier (format code style)
- Husky (git hooks)
- Docker Support

## First Steps

1. Replace all **angular-starter** keyword from this project with your new project name, for example: **my-website**
1. Replace **src/favicon.ico** with your website favicon
1. Replace **src/assets/icons** with your website icons
1. Update this **README.md** according to your project changes
1. If you are using monorepo multi-package repository consider removing husky (git hooks) to prevent conflicts between repos, I recommended deleting **.huskyrc.json** file and run: **npm uninstall husky** and then maybe to add husky in the root of the project

## Rules

1. Always generate files with Angular Schematics (@angular/cli)
1. Application logic like services (which are common in the application scope) must be in **CoreModule**
1. Shared components, directives and pipes must be in **SharedModule**
1. Create feature modules (which will be lazy loaded) with plural name
1. Never use **window** or **document** JavaScript objects directly because in SSR mode it does not exist, but there is a way to handle it
   with **isPlatformBrowser** from **@angular/platform-browser**

### Feature Module Example (heroes)

```text
src
  app
    core
      ...
    features
      heroes
        components
          hero-detail
            hero-detail.component.ts|html|css|spec
          hero-edit
            hero-edit.component.ts|html|css|spec
          hero-list
            hero-list.component.ts|html|css|spec
            hero-item
              hero-item.component.ts|html|css|spec
          hero-new
            hero-new.component.ts|html|css|spec
        shared
          components
            ...
          hero.ts
          hero.service.ts|spec
        store
          hero.actions.ts
          hero.effects.ts
          hero.reducer.ts
          hero.selectors.ts
        heroes.component.ts|html|css|spec
        heroes.module.ts
        heroes-routing.module.ts
    shared
      ...
    store
      ...
```

## Commands

Serve project in development mode.

```bash
npm start
```

Serve project in ssr mode.

```bash
npm start:ssr
```

Build project for development.

```bash
npm run build:dev
```

Build project for production.

```bash
npm run build
```

Build project for production with Angular Universal (SSR).

```bash
npm run build:ssr
```

Build project for production with Prerender.

```bash
npm run prerender
```

Test project.

```bash
npm test
```

Test project without watching files.

```bash
npm run test:without-watch
```

Lint project.

```bash
npm run lint
```

Lint project and fix files.

```bash
npm run lint:fix
```

Format project.

```bash
npm run format
```

Format project with watch mode.

```bash
npm run format:watch
```

Run builded project.

```bash
npm run serve
```

Run builded project after using ssr mode.

```bash
npm run serve:ssr
```

Analyze project.

```bash
npm run analyze
```

## Using Docker in Production

Run docker for production.

```bash
docker-compose -f docker-compose-prod.yml up --build
```

Run docker for production with Angular Universal (SSR).

```bash
docker-compose -f docker-compose-ssr.yml up --build
```

> NOTE: There are many ways to use Docker files in production environment please be careful with the way you are using it.
