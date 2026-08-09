# 🚀 FamDev Skills

A collection of AI skills for FamDev projects. Store, manage, and install skills easily.

## 📦 Available Skills

| Skill | Description |
|-------|-------------|
| fullstack-initializer | Initialize production-ready Fullstack Applications (React + Vite + Express + TypeScript + MUI) |

## 🛠️ Installation

```bash
# Install globally
npm install -g famdev-skills

# Or use directly with npx
npx famdev-skills
```

## 📖 Usage

### List all skills
```bash
npx famdev-skills list
# or
npx skills list
```

### Show skill info
```bash
npx famdev-skills info fullstack-initializer
# or
npx skills info fullstack-initializer
```

### Install a skill
```bash
# Install to current directory
npx famdev-skills install fullstack-initializer

# Install to specific directory
npx famdev-skills install fullstack-initializer /path/to/project
```

## 📁 Repository Structure

```
initialize/
├── bin/
│   └── cli.js          # CLI for managing skills
├── skills/
│   └── fullstack-initializer/
│       └── SKILL.md    # Skill instructions
├── package.json
└── README.md
```

## ➕ Adding New Skills

1. Create a new directory under `skills/`
2. Add a `SKILL.md` file with frontmatter:
   ```markdown
   ---
   name: your-skill-name
   description: Brief description of what this skill does
   ---
   
   # Skill Title
   
   Instructions for the AI agent...
   ```

3. Update the skills list in this README

## 📄 License

MIT
