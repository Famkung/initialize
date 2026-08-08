# Antigravity Full-Stack Project Initializer

This repository contains a CLI installer and an Antigravity custom skill that automates bootstrapping full-stack apps (Express TS + React TS + MUI) with database integration, security layers, JWT, and interactive design-style configurations.

## Project Structure

- `bin/cli.js`: The interactive project setup wizard CLI.
- `skills/fullstack-initializer/SKILL.md`: The developer agent skill instructions and pre-coding protocol.
- `package.json`: NPM package metadata configuring the CLI.

## How it Works (Wizard Flow)

1. When a user runs `npx install-fullstack-initializer`, the CLI prompts them for:
   - Project Name
   - Project Purpose / Functional description
   - Frontend Design Styles / Themes
   - Database Type (MySQL, Postgres, SQLite, MSSQL, MongoDB)
2. The CLI creates a workspace with:
   - Monorepo structure using NPM Workspaces
   - A root `package.json` for one-command commands (e.g. `npm run install:all`)
   - A `.gitignore` file
   - A `.agents/project-spec.json` file saving the questionnaire outputs
   - Automatic Git initialization (`git init`)
3. When the user opens the project in Antigravity, the AI Agent activates the local `fullstack-initializer` skill, parses the specifications, and proposes the API endpoints and React pages before writing any code.

## How to Publish & Use

1. **Publish to NPM:**
   ```bash
   npm publish --access public
   ```

2. **Run the Installer:**
   ```bash
   npx <your-package-name>
   ```
