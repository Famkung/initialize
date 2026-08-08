---
name: fullstack-initializer
description: AI Skill for initializing production-ready Fullstack Applications (React + Vite + Express + TypeScript + MUI)
---

# Full-Stack Project Initializer Skill

Use this skill when the user requests to create, bootstrap, or update a full-stack repository matching this architecture.

## Features

- React + Vite + TypeScript frontend
- Express + TypeScript backend
- MUI (Material-UI) components
- JWT authentication
- Database integration (MySQL/PostgreSQL/SQLite)
- Docker support
- CI/CD pipeline

## Tech Stack

- **Backend:** Node.js, Express, TypeScript, JWT, Winston, Swagger UI
- **Database:** Sequelize ORM (MySQL, PostgreSQL, SQLite)
- **Frontend:** React, Vite, TypeScript, MUI, Axios, React Router
- **Testing:** Jest + Supertest (Backend), Vitest (Frontend)

## Usage

```bash
# Install this skill
npx skills add https://github.com/Famkung/initialize -g

# Then use it
fullstack-initializer my-app
```

For detailed instructions, see the skill content in `skills/fullstack-initializer/SKILL.md`.
