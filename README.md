# Vite + React + TypeScript + Biome + Tailwind CSS Template

A modern React template with Vite, TypeScript, Biome for linting/formatting, and Tailwind CSS for styling.

## 🚀 Features

- ⚡️ **Vite** - Lightning fast build tool
- ⚛️ **React 19** - Latest React version with TypeScript
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔧 **Biome** - Fast formatter and linter (replaces ESLint + Prettier)
- 📦 **TypeScript** - Type safety and better developer experience
- 🎯 **VS Code** - Recommended extensions and settings included

## 📋 Prerequisites

- Node.js 18+ and npm

## 🛠️ Getting Started

### Using this template

1. Click "Use this template" button at the top of the repository
2. Clone your new repository
3. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run Biome linter
- `npm run lint:fix` - Fix linting issues automatically
- `npm run format` - Format code with Biome

## 🎨 Styling with Tailwind CSS

This template uses Tailwind CSS for styling. The configuration is in `tailwind.config.js`.

Example usage:

```tsx
<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
	Click me
</button>
```

## 🔧 Code Quality with Biome

Biome is configured to:

- Format code on save (in VS Code)
- Organize imports automatically
- Enforce code quality rules
- Use tabs for indentation
- Use double quotes for strings

Configuration is in `biome.json`.

## 📁 Project Structure

```
├── src/
│   ├── assets/         # Static assets (images, fonts, etc.)
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles with Tailwind directives
├── public/             # Public static files
├── .vscode/            # VS Code settings and recommended extensions
├── biome.json          # Biome configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🔌 Recommended VS Code Extensions

The following extensions will be recommended when you open this project:

- **Biome** - Code formatter and linter
- **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes

## 📝 License

MIT

## 🤝 Contributing

Feel free to use this template for your projects!
