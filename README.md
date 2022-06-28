# Evermos Case Study

- [Evermos Case Study](#evermos-case-study)
  - [Prerequisites](#prerequisites)
  - [Build Setup](#build-setup)
  - [Other Scripts](#other-scripts)
  - [Special Directories](#special-directories)
    - [`assets`](#assets)
    - [`components`](#components)
      - [Structure](#structure)
      - [Naming Conventions](#naming-conventions)
      - [Component Usage](#component-usage)
    - [`layouts`](#layouts)
    - [`pages`](#pages)
    - [`plugins`](#plugins)
    - [`static`](#static)
    - [`store`](#store)
  - [Deployment](#deployment)
    - [Requirements](#requirements)
    - [Environment Variables](#environment-variables)

## Prerequisites

- NodeJS 14.x
- NPM 6.14.x

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Other Scripts

```bash
# generate a new component file as well as its corresponding story and test file
$ npm run scaffold:component

# generate a new page file
$ npm run scaffold:page

# run storybook on dev env at localhost:4000
$ npm run storybook

# run linters either indivually or concurrently
$ npm run lint:js
$ npm run lint:style
$ npm run lint:prettier
$ npm run lint
$ npm run lint:fix

# run unit test
$ npm run test
```

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

#### Structure

Component structure are following the Atomic Design. Read about it [here](https://bradfrost.com/blog/post/atomic-web-design/).

```sh
components
├── atoms
├── molecules
└── organisms
```

- `atoms`: Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button.
- `molecules`: Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound.
- `organisms`: Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface.

#### Naming Conventions

All component files must follow the following convention:

- Start with the letter of its component type in an atomic design system (A, M, or O).
- Followed by the component name.
- Must be in english.
- Must be in `PascalCase`.

Examples:

```sh
AInput.vue
MDialog.vue
OBottomNav.vue
```

#### Component Usage

All components should be used with following conventions:

- Must be in `kebab-case` of their component name counterpart.

Examples:

```sh
<a-input />
<m-dialog />
<o-bottom-nav />
```

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

## Deployment

### Requirements

- NodeJS version 14.x

### Environment Variables

| Name    | Example                 |
| ------- | ----------------------- |
| API_URL | `http://localhost:8000` |
