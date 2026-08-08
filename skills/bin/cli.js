#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const readline = require('readline');
const { execSync } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));

// Helper to recursively copy directories
function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }
  fs.readdirSync(from).forEach(element => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    if (fs.lstatSync(fromPath).isDirectory()) {
      copyFolderSync(fromPath, toPath);
    } else {
      fs.copyFileSync(fromPath, toPath);
    }
  });
}

async function main() {
  console.log(`
=========================================
 🚀 Antigravity Full-Stack Initializer
=========================================
Let's gather some details about your new project to customize the setup.
`);

  // 1. Ask for repository name
  let repoName = await askQuestion('📁 Enter project/repository name (default: my-fullstack-app): ');
  repoName = repoName.trim() || 'my-fullstack-app';

  // 2. Ask what the system does
  console.log('\n📝 Describe what your system does (e.g., "E-commerce platform with cart and checkout", "Task manager with workspaces"):');
  const projectDesc = await askQuestion('> ');

  // 3. Ask about design styles
  console.log('\n🎨 What is your preferred frontend design style/theme? (e.g., "Sleek Dark Mode with Indigo accent", "Minimalist Light theme with green accent"):');
  const designStyle = await askQuestion('> ');

  // 4. Select Database
  console.log(`
📊 Choose a Database:
  [1] SQLite (No installation required - recommended for quick starts)
  [2] PostgreSQL
  [3] MySQL
  [4] MS SQL Server
  [5] MongoDB (NoSQL)
`);
  const dbChoice = await askQuestion('Select option [1-5]: ');
  let dbSelected = 'sqlite';
  if (dbChoice === '2') dbSelected = 'postgres';
  else if (dbChoice === '3') dbSelected = 'mysql';
  else if (dbChoice === '4') dbSelected = 'mssql';
  else if (dbChoice === '5') dbSelected = 'mongodb';

  rl.close();

  // Create installation directories
  const targetParentDir = path.join(process.cwd(), repoName);
  const targetAgentSkillsDir = path.join(targetParentDir, '.agents', 'skills');
  const skillName = 'fullstack-initializer';

  console.log(`\n📦 Creating project workspace in: ${targetParentDir}...`);
  fs.mkdirSync(targetParentDir, { recursive: true });
  fs.mkdirSync(targetAgentSkillsDir, { recursive: true });

  // Resolve source skill folder
  const sourceDir = path.join(__dirname, '..', 'skills', skillName);

  try {
    // Copy skill files into the new repository so the local AI knows about it
    copyFolderSync(sourceDir, path.join(targetAgentSkillsDir, skillName));

    // Save project specs so the AI Agent can read them immediately
    const spec = {
      projectName: repoName,
      description: projectDesc || 'Fullstack React + Express App',
      designStyle: designStyle || 'Sleek Dark Mode with Indigo accent',
      database: dbSelected,
      timestamp: new Date().toISOString()
    };

    fs.writeFileSync(
      path.join(targetParentDir, '.agents', 'project-spec.json'),
      JSON.stringify(spec, null, 2)
    );

    // Create Root package.json for monorepo-like commands
    const rootPackageJson = {
      name: repoName,
      version: "1.0.0",
      private: true,
      workspaces: [
        "backend",
        "frontend"
      ],
      scripts: {
        "install:all": "npm install --prefix backend && npm install --prefix frontend",
        "dev:backend": "npm run dev --prefix backend",
        "dev:frontend": "npm run dev --prefix frontend",
        "build:frontend": "npm run build --prefix frontend",
        "build:backend": "npm run build --prefix backend",
        "build": "npm run build:frontend && npm run build:backend"
      }
    };
    fs.writeFileSync(
      path.join(targetParentDir, 'package.json'),
      JSON.stringify(rootPackageJson, null, 2)
    );

    // Create Root .gitignore
    const gitignoreContent = `
node_modules/
dist/
backend/dist/
backend/public/
backend/logs/
frontend/dist/
.env
.env.local
*.db
*.sqlite
.DS_Store
`;
    fs.writeFileSync(path.join(targetParentDir, '.gitignore'), gitignoreContent.trim());

    // Write a customized README that prompts the AI agent when it opens the repo
    const welcomeReadme = `# ${repoName}

Welcome to your new full-stack application!

## Project Specifications (Saved in \`.agents/project-spec.json\`)
- **Purpose:** ${spec.description}
- **Frontend Design Style:** ${spec.designStyle}
- **Database:** ${spec.database}

## Getting Started
1. Install all dependencies:
   \`\`\`bash
   npm run install:all
   \`\`\`

2. Run development servers:
   - Backend: \`npm run dev:backend\`
   - Frontend: \`npm run dev:frontend\`

## Next Steps for the AI Agent
When you (the Antigravity agent) read this file, perform the following actions:
1. Parse the \`.agents/project-spec.json\` configuration.
2. **Propose a list of required API Endpoints and Frontend Pages** based on the project purpose: "${spec.description}".
3. Confirm the proposal with the user.
4. Execute the \`fullstack-initializer\` skill to initialize the folders and write the files.
`;

    fs.writeFileSync(path.join(targetParentDir, 'README.md'), welcomeReadme);

    // Try to run git init automatically
    try {
      execSync('git init', { cwd: targetParentDir, stdio: 'ignore' });
      console.log('🗂️ Initialized a new Git repository.');
    } catch (e) {
      // Git is probably not installed, skip silently
    }

    console.log(`
✅ Success! Your project workspace "${repoName}" is initialized.
👉 Open this folder in Antigravity IDE or terminal.
🤖 The AI Assistant will read the workspace and automatically propose the API and Page configurations!
`);

  } catch (error) {
    console.error(`❌ Failed to initialize workspace:`, error.message);
    process.exit(1);
  }
}

main();
