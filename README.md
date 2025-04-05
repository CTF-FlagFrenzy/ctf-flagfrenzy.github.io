# CTF-Flagfreny Website

This repository contains the CTF-Flagfreny website built with Astro and hosted on GitHub Pages.

## Running Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (v16.12.0 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

### Step 1: Clone the Repository

```bash
git clone https://github.com/CTF-FlagFrenzy/ctf-flagfrenzy.github.io.git
cd ctf-flagfreny.github.io
```

### Step 2: Install Dependencies

```bash
# Using npm
npm install
```

### Step 3: Start the Development Server

```bash
# Using npm
npm run dev
```

This will start the development server, typically at http://localhost:3000 or http://localhost:4321 (for newer Astro versions)

### Step 4: View the Website

Open your browser and navigate to the URL shown in your terminal after starting the development server (usually http://localhost:3000 or http://localhost:4321).

### Troubleshooting

- **Port Already in Use**: If the default port is already in use, Astro will automatically try to use the next available port.
- **Dependencies Issues**: If you encounter problems with dependencies, try deleting the `node_modules` folder and the `package-lock.json`, `yarn.lock`, or `pnpm-lock.yaml` file, then run the install command again.
- **Build Errors**: If you encounter build errors, check the terminal output for specific error messages.

## Deployment

This website is automatically deployed to GitHub Pages when changes are pushed to the main branch, using GitHub Actions.
[https://ctf-flagfrenzy.github.io/](https://ctf-flagfrenzy.github.io/)

