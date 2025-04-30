# Chat

This is a React project using Vite as the build tool, TypeScript for static typing, and Tailwind CSS for styling.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18.x or higher)
- [npm](https://www.npmjs.com/) as a package manager
- [Git](https://git-scm.com/)

## Installation

Clone the repository and install the dependencies:

```bash
https://github.com/kv4sha/osh.git
cd osh
npm install
```

## Scripts

The project includes several npm scripts to streamline development:

- **`npm run dev`**: Start the development server using Vite.
- **`npm run build`**: Build the project for production using TypeScript and Vite.
- **`npm run preview`**: Preview the production build locally.
- **`npm run lint`**: Run ESLint to check for code quality issues.
- **`npm run lint:fix`**: Run ESLint and automatically fix issues where possible.
- **`npm run type-check`**: Type-check the project using TypeScript.
- **`npm run commit`**: Generate a conventional commit message using Commitizen.

## Commit Guidelines

This project follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. To make it easier to write standardized commit messages, use:

```bash
npm run commit
```

This will prompt you to write a commit message following the correct format.

## Development

To start the development server, run:

```bash
npm run dev
```

Navigate to `http://localhost:3001` to view the app.

## Building for Production

To build the project for production, run:

```bash
npm run build
```

This will generate the production build in the `dist/` folder. You can preview the production build locally by running:

```bash
npm run preview
```

## Linting

To check for linting errors, run:

```bash
npm run lint
```

To automatically fix linting errors:

```bash
npm run lint:fix
```

## Type Checking

To perform TypeScript type checking:

```bash
npm run type-check
```
