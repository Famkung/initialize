# Fullstack Initializer Skill

AI Skill for creating production-ready full-stack applications with interactive Q&A.

## Features

- Interactive step-by-step requirements gathering
- Tech stack preview before building
- Project structure visualization
- Multiple database support (SQLite, PostgreSQL, MySQL, MongoDB)
- Docker & CI/CD configuration
- JWT authentication ready

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, TypeScript, Vite, MUI, React Router, Axios |
| Backend | Node.js, Express, TypeScript, JWT, Winston, Swagger |
| Database | Sequelize ORM (SQLite/PostgreSQL/MySQL) or Mongoose |
| Testing | Jest + Supertest (Backend), Vitest (Frontend) |
| DevOps | Docker, GitHub Actions, ESLint, Prettier |

## Installation

### Option 1: Install as AI Agent Skill (Recommended)

```bash
# Install globally (available in all projects)
npx skills add https://github.com/Famkung/initialize -g

# Install to specific agent
npx skills add https://github.com/Famkung/initialize -a claude-code

# Skip prompts (auto-install to all agents)
npx skills add https://github.com/Famkung/initialize -g -y
```

### Option 2: Use CLI Directly

```bash
# Run interactive CLI
npx fullstack-initializer my-app

# Skip prompts with defaults
npx fullstack-initializer my-app --yes
```

## Usage

### As AI Agent Skill

After installation, the skill will activate when you ask to create a new project:

```
You: Create a new fullstack project

AI: Hello! I'm your Full-Stack Project Initializer. 🚀
    Let me ask you a few questions...

    📁 What is your project name?
    > my-ecommerce

    📝 What does this project do?
    > Online store with product catalog and checkout

    ... (more questions)

    ═══════════════════════════════════════════════════════════
                          TECH STACK
    ═══════════════════════════════════════════════════════════

    🖥️  Frontend:
       • React 18 + TypeScript
       • Vite (Build tool)
       • MUI (Material-UI)
       ...

    ⚙️  Backend:
       • Node.js + Express + TypeScript
       • JWT Authentication
       ...

    ═══════════════════════════════════════════════════════════
                       PROJECT STRUCTURE
    ═══════════════════════════════════════════════════════════

    my-ecommerce/
    ├── backend/
    │   ├── src/
    │   │   ├── config/
    │   │   ├── middlewares/
    │   │   ├── models/
    │   │   ├── routes/
    │   │   └── utils/
    │   └── tests/
    ├── frontend/
    │   └── src/
    │       ├── api/
    │       ├── components/
    │       ├── context/
    │       ├── pages/
    │       └── theme/
    ├── docker-compose.yml
    └── Dockerfile

    Do you want to proceed?
    [1] Yes, generate the project
    [2] No, let me change something
```

### As CLI Tool

```bash
# Interactive mode
npx fullstack-initializer my-app

# With defaults (skip prompts)
npx fullstack-initializer my-app --yes

# Show help
npx fullstack-initializer --help

# Show version
npx fullstack-initializer --version
```

## Interactive Questions

The skill will ask you:

| # | Question | Default |
|---|----------|---------|
| 1 | Project name | `my-fullstack-app` |
| 2 | Project description | (required) |
| 3 | Project type | Web Application |
| 4 | Database | SQLite |
| 5 | Frontend style | Dark Mode |
| 6 | Color scheme | Indigo |
| 7 | Core features | JWT, User Management, Swagger |
| 8 | Docker support | Yes |

## Generated Project Structure

```
project-name/
├── backend/
│   ├── src/
│   │   ├── config/         # Database, env config
│   │   ├── middlewares/     # Auth, validation, error handler
│   │   ├── models/         # Sequelize models
│   │   ├── routes/         # API routes
│   │   ├── utils/          # Helpers, logger, JWT
│   │   └── index.ts        # Entry point
│   ├── tests/
│   ├── migrations/
│   ├── seeders/
│   ├── .env.example
│   ├── .sequelizerc
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── api/            # Axios client
│   │   ├── components/     # Reusable components
│   │   ├── context/        # React Context (Auth)
│   │   ├── pages/          # Page components
│   │   ├── theme/          # MUI theme config
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
├── .github/workflows/ci.yml
├── docker-compose.yml
├── Dockerfile
├── .gitignore
├── README.md
└── package.json (root)
```

## CLI Options

```
Usage:
  npx fullstack-initializer [project-name] [options]

Options:
  --help, -h       Show help message
  --version, -v    Show version number
  --yes, -y        Skip prompts and use defaults

Examples:
  npx fullstack-initializer my-app
  npx fullstack-initializer my-app --yes
```

## Development

```bash
# Clone the repo
git clone https://github.com/Famkung/initialize.git
cd initialize

# Install dependencies
npm install

# Test CLI locally
node bin/cli.js --help
```

## License

MIT
