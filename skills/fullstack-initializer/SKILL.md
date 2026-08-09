---
name: fullstack-initializer
description: Guides the agent to initialize a custom full-stack project (Node.js Express TypeScript + React Vite TypeScript + MUI) with database integrations, structured migrations, default User schema, JWT auth, security practices, input validation, global error handling, Swagger API docs, winston logging, Jest/Vitest testing, React AuthContext, Docker configuration, and embedded static production deployment.
---

# Full-Stack Project Initializer Skill

Use this skill when the user requests to create, bootstrap, or update a full-stack repository matching this architecture.

## 📋 1. INTERACTIVE REQUIREMENTS GATHERING

When you (the AI Agent) are activated in a workspace containing this skill, you MUST conduct an interactive Q&A session with the user. **NEVER generate code immediately.**

### Step 1: Greet and Start Interview

Start with a friendly greeting and explain the process:

```
Hello! I'm your Full-Stack Project Initializer. 🚀

I'll help you create a production-ready full-stack application.
Let me ask you a few questions to understand your project better.

Type your answer after each question, or press Enter for default options.
```

### Step 2: Ask Questions One by One

**Ask each question separately and wait for user response before moving to the next question.**

#### Question 1: Project Name
```
📁 What is your project name? (e.g., my-app, ecommerce-api)
> 
```
- Text input
- Default: `my-fullstack-app`

#### Question 2: Project Description
```
📝 What does this project do? (e.g., "E-commerce platform with cart and checkout", "Task manager with workspaces")
> 
```
- Text input
- Required

#### Question 3: Project Type
```
🏢 What type of project is this?
  [1] Web Application
  [2] API Backend
  [3] Internal Tool
  [4] SaaS Platform
  [5] Other

Select option [1-5]:
```
- Single choice
- Default: `1`

#### Question 4: Database Selection
```
🗄️ Choose a database:
  [1] SQLite (No installation required - recommended for quick starts)
  [2] PostgreSQL (Production-ready)
  [3] MySQL (Production-ready)
  [4] MongoDB (NoSQL)

Select option [1-4]:
```
- Single choice
- Default: `1`

#### Question 5: Frontend Style
```
🎨 What frontend design style do you prefer?
  [1] Dark Mode (Modern, sleek)
  [2] Light Mode (Clean, professional)
  [3] Both (with theme toggle)

Select option [1-3]:
```
- Single choice
- Default: `1`

#### Question 6: Color Scheme
```
🎨 Choose a primary color scheme:
  [1] Indigo (Default - modern, professional)
  [2] Blue (Classic, trustworthy)
  [3] Green (Fresh, natural)
  [4] Purple (Creative, premium)
  [5] Red (Bold, energetic)

Select option [1-5]:
```
- Single choice
- Default: `1`

#### Question 7: Core Features
```
⚡ Select core features to include (comma-separated numbers):
  [1] JWT Authentication
  [2] User Management (CRUD)
  [3] Role-Based Access Control
  [4] File Upload
  [5] Email Service
  [6] Real-time (Socket.IO)
  [7] Redis Cache
  [8] Swagger API Docs

Example: 1,2,3,8
> 
```
- Multiple choice (comma-separated)
- Default: `1,2,8`

#### Question 8: Docker Support
```
🐳 Do you want Docker configuration?
  [1] Yes (docker-compose.yml + Dockerfile)
  [2] No

Select option [1-2]:
```
- Single choice
- Default: `1`

### Step 3: Show Tech Stack and Project Structure

After all questions, **FIRST** present the tech stack and project structure:

```
════════════════════════════════════════════════════════════
                      TECH STACK
════════════════════════════════════════════════════════════

🖥️  Frontend:
   • React 18 + TypeScript
   • Vite (Build tool)
   • MUI (Material-UI) - Component library
   • React Router Dom - Routing
   • Axios - HTTP client
   • React Hook Form + Zod - Form validation

⚙️  Backend:
   • Node.js + Express + TypeScript
   • JWT (JSON Web Tokens) - Authentication
   • Helmet - Security headers
   • CORS - Cross-origin resource sharing
   • Express Rate Limit - API rate limiting
   • Winston - Structured logging
   • Swagger UI - API documentation

🗄️  Database:
   • [SQLite/PostgreSQL/MySQL/MongoDB]
   • Sequelize ORM (or Mongoose for MongoDB)
   • Sequelize CLI - Database migrations

🧪  Testing:
   • Jest + Supertest (Backend)
   • Vitest + React Testing Library (Frontend)

📦  DevOps:
   • Docker + docker-compose
   • GitHub Actions CI/CD
   • ESLint + Prettier

════════════════════════════════════════════════════════════
                   PROJECT STRUCTURE
════════════════════════════════════════════════════════════

[project-name]/
│
├── 📂 backend/
│   ├── 📂 src/
│   │   ├── 📂 config/         # Database, env config
│   │   │   └── database.ts
│   │   ├── 📂 middlewares/     # Auth, validation, error handler
│   │   │   ├── auth.ts
│   │   │   ├── validate.ts
│   │   │   └── errorHandler.ts
│   │   ├── 📂 models/         # Sequelize models
│   │   │   ├── index.ts
│   │   │   └── user.ts
│   │   ├── 📂 routes/         # API routes
│   │   │   ├── auth.ts
│   │   │   └── users.ts
│   │   ├── 📂 utils/          # Helpers, logger, JWT
│   │   │   ├── hash.ts
│   │   │   ├── jwt.ts
│   │   │   ├── logger.ts
│   │   │   └── response.ts
│   │   └── index.ts           # Entry point
│   ├── 📂 tests/
│   │   └── auth.test.ts
│   ├── 📂 migrations/
│   ├── 📂 seeders/
│   ├── .env.example
│   ├── .sequelizerc
│   ├── package.json
│   └── tsconfig.json
│
├── 📂 frontend/
│   ├── 📂 src/
│   │   ├── 📂 api/            # Axios client
│   │   │   └── client.ts
│   │   ├── 📂 components/     # Reusable components
│   │   ├── 📂 context/        # React Context (Auth)
│   │   │   └── AuthContext.tsx
│   │   ├── 📂 pages/          # Page components
│   │   │   ├── Login.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   └── NotFound.tsx
│   │   ├── 📂 theme/          # MUI theme config
│   │   │   └── theme.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── 📂 .github/
│   └── 📂 workflows/
│       └── ci.yml
│
├── 🐳 Dockerfile
├── 🐳 docker-compose.yml
├── 📄 .gitignore
├── 📄 README.md
└── 📄 package.json (root - scripts)

════════════════════════════════════════════════════════════
                    PROJECT SUMMARY
════════════════════════════════════════════════════════════

📁 Project: [project-name]
📝 Description: [description]
🏢 Type: [project-type]
🗄️ Database: [database]
🎨 Theme: [theme] with [color] accent
🐳 Docker: [yes/no]

📦 Features:
  • [feature 1]
  • [feature 2]
  • [feature 3]

════════════════════════════════════════════════════════════
```

### Step 4: Ask for Confirmation

After showing the tech stack and structure, ask for confirmation:

```
Do you want to proceed with this configuration?
  [1] Yes, generate the project
  [2] No, let me change something

Select option [1-2]:
```

### Step 5: Proceed or Adjust

- If user selects `1` → Proceed to architecture proposal
- If user selects `2` → Ask which question to change

### Step 6: Present Architecture Proposal

Before writing code, present the full architecture:

```
═══════════════════════════════════════════════════════════
                 ARCHITECTURE PROPOSAL
═══════════════════════════════════════════════════════════

## System Architecture

┌─────────────────────────────────────────────────────────┐
│                      BROWSER                            │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                 EXPRESS SERVER (5000)                   │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │   Helmet    │  │    CORS     │  │ Rate Limit  │    │
│  └─────────────┘  └─────────────┘  └─────────────┘    │
│  ┌─────────────────────────────────────────────────┐   │
│  │              JWT Authentication                 │   │
│  └─────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────┐   │
│  │           Swagger API Documentation             │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│              [DATABASE] (Sequelize ORM)                │
└─────────────────────────────────────────────────────────┘

## Database Schema

┌─────────────────────────────────────────────────────────┐
│                         users                           │
├─────────────────────────────────────────────────────────┤
│ id            │ INTEGER PRIMARY KEY AUTO_INCREMENT      │
│ email         │ STRING UNIQUE NOT NULL                  │
│ password      │ STRING NOT NULL                         │
│ createdAt     │ DATETIME                                │
│ updatedAt     │ DATETIME                                │
└─────────────────────────────────────────────────────────┘

## API Endpoints

| Method | Endpoint          | Description           | Protected | Validated |
|--------|-------------------|-----------------------|-----------|-----------|
| POST   | /api/auth/register| Register new user     | No        | Yes       |
| POST   | /api/auth/login   | Login user            | No        | Yes       |
| GET    | /api/users/profile| Get user profile      | Yes       | No        |
[additional endpoints based on features...]

## Frontend Pages

| Page          | Path      | Description              |
|---------------|-----------|--------------------------|
| Login         | /login    | User login page          |
| Dashboard     | /         | Main dashboard           |
| Profile       | /profile  | User profile page        |
| 404           | *         | Not found page           |

## Project Structure

project-name/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── index.ts
│   ├── tests/
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── theme/
│   │   └── App.tsx
│   ├── package.json
│   └── vite.config.ts
├── docker-compose.yml
├── Dockerfile
└── package.json (root)

═══════════════════════════════════════════════════════════

Does this architecture look good?
  [1] Yes, generate the project
  [2] No, I want to make changes

Select option [1-2]:
```

### Step 7: Generate Project

Only after user confirms, proceed to generate all files.

### Step 8: Verify Build and Run (MUST DO before marking as done)

After generating all files, you MUST verify that both backend and frontend compile and run successfully before marking the skill as complete.

#### 8.1 Verify Backend

```bash
cd backend
npm install
npm run build
```

If build fails:
- Check TypeScript errors and fix them
- Verify all imports are correct
- Fix any missing dependencies

#### 8.2 Verify Frontend

```bash
cd frontend
npm install
npm run build
```

If build fails:
- Check TypeScript errors and fix them
- Verify all imports are correct
- Fix any missing dependencies

#### 8.3 Verify Frontend Embed

After both builds complete, verify the frontend is correctly embedded in backend:

```bash
# Check that frontend build output exists in backend/public/
ls -la backend/public/
```

Expected files in `backend/public/`:
- `index.html`
- `assets/` folder with JS/CSS bundles

If `backend/public/` is empty or missing, the Vite config is wrong. Fix the `outDir` path in `frontend/vite.config.ts`:
```typescript
build: {
  outDir: path.resolve(__dirname, '../backend/public'),
  emptyOutDir: true,
}
```

#### 8.4 Run Dev Server (Optional but Recommended)

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

Verify:
- Backend starts on port 5000 without errors
- Frontend starts on port 3000 without errors
- Frontend can proxy API requests to backend
- Access `http://localhost:5000` serves the frontend (after building frontend)

#### 8.5 Show Final Success Message

Only after all builds pass, show:

```
════════════════════════════════════════════════════════════
✅ PROJECT GENERATED AND VERIFIED SUCCESSFULLY!
════════════════════════════════════════════════════════════

📁 Project: [project-name]
📂 Location: [full-path]

🚀 Quick Start Commands:

  Backend:
    cd backend
    cp .env.example .env   # Configure your env vars
    npm run build           # Build frontend into backend/public
    npm run dev             # Start backend server

  Production:
    cd backend
    npm run build           # Build everything
    npm start               # Run production server

📖 API Docs: http://localhost:5000/api-docs
🌐 App: http://localhost:5000 (after build)

💡 Frontend is embedded in backend - single server deployment!

════════════════════════════════════════════════════════════
```

**IMPORTANT:** If build verification fails, DO NOT mark the skill as done. Fix the errors first, then re-run verification.

### Step 9: Verify Container Deployment (If Docker enabled)

If user selected Docker support in Question 8, run container verification:

#### 9.1 Build and Run Container

```bash
docker-compose up --build -d
```

#### 9.2 Verify Container Status

```bash
docker-compose ps
docker-compose logs app
```

Verify:
- Container is running (status: Up)
- No errors in logs
- Backend started successfully on port 5000

#### 9.3 Test Container Endpoints

```bash
# Health check
curl http://localhost:5000/api-docs

# Frontend (should return HTML)
curl http://localhost:5000
```

#### 9.4 Stop Container

```bash
docker-compose down
```

#### 9.5 Show Docker Success Message

```
════════════════════════════════════════════════════════════
✅ DOCKER CONTAINER VERIFIED SUCCESSFULLY!
════════════════════════════════════════════════════════════

🐳 Docker Commands:

  docker-compose up --build -d    # Build & run
  docker-compose down             # Stop
  docker-compose logs -f app      # View logs
  docker-compose ps               # Check status

📖 API Docs: http://localhost:5000/api-docs
🌐 App: http://localhost:5000

════════════════════════════════════════════════════════════
```

---

## 🛠️ 2. TECH STACK OVERVIEW
- **Backend:** Node.js, Express, TypeScript, JWT (JSON Web Tokens), Winston (Structured Logging), Swagger UI (API Docs)
- **Database (Selectable):**
  - **Sequelize ORM** (for MySQL, PostgreSQL, SQLite, MS SQL Server) + **Sequelize-CLI** for database migrations.
  - **Mongoose ODM** (for MongoDB) + custom seed scripts.
- **Frontend:** React, Vite, TypeScript, MUI (Material-UI), Axios (with automated JWT header attachment), React Router Dom, React Context (Auth State management).
- **Extra Integrations:** React Hook Form, Zod (used on both front/back for validation), Lucide React.
- **Testing:** Jest + Supertest (Backend), Vitest + React Testing Library (Frontend).
- **CI/CD:** GitHub Actions workflow.

---

## 🚀 3. PROJECT INITIALIZATION STEPS

When tasked with initializing a repository, perform the following steps:

### Step 1: Create Directories
Create the parent folders:
- `backend/`
- `frontend/`

### Step 2: Initialize Backend
Inside `backend/`:
1. Run `npm init -y` and configure the scripts in `package.json`:
   - `"dev": "ts-node-dev --respawn --transpile-only src/index.ts"`
   - `"build": "tsc && cp -r src/config/database.json dist/config/ 2>/dev/null || true"`
   - `"start": "node dist/index.js"`
   - `"test": "jest --runInBand --detectOpenHandles"`
2. Install base dependencies:
   `npm install express cors dotenv jsonwebtoken bcrypt helmet express-rate-limit zod winston swagger-ui-express`
3. Install development dependencies:
   `npm install -D typescript @types/node @types/express @types/cors @types/jsonwebtoken @types/bcrypt ts-node-dev jest supertest @types/jest @types/supertest ts-jest @types/swagger-ui-express`
4. Install database driver based on user choice:
   - **PostgreSQL:** `npm install sequelize pg pg-hstore` + `npm install -D sequelize-cli`
   - **MySQL:** `npm install sequelize mysql2` + `npm install -D sequelize-cli`
   - **SQLite:** `npm install sequelize sqlite3` + `npm install -D sequelize-cli`
   - **MS SQL Server:** `npm install sequelize tedious` + `npm install -D sequelize-cli`
   - **MongoDB:** `npm install mongoose` + `npm install -D @types/mongoose`
5. Create TS configuration: `tsconfig.json` and initialize Jest config via `npx ts-jest config:init`.

### Step 3: Initialize Frontend
Inside `frontend/`:
1. Run `npm create vite@latest . -- --template react-ts` or initialize via manual dependencies.
2. Install dependencies:
   `npm install @mui/material @emotion/react @emotion/styled @mui/icons-material axios react-router-dom react-hook-form zod lucide-react`
3. Install development dependencies:
   `npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom @vitejs/plugin-react`

---

## 📂 4. BACKEND BOILERPLATE BLUEPRINTS

### A. TypeScript Config (`backend/tsconfig.json`)
```json
{
  "compilerOptions": {
    "target": "es2022",
    "module": "commonjs",
    "lib": ["es2022"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
```

### B. Sequelize Path Mapping (`backend/.sequelizerc`)
```javascript
const path = require('path');
module.exports = {
  'config': path.resolve('src', 'config', 'database.json'),
  'models-path': path.resolve('src', 'models'),
  'seeders-path': path.resolve('src', 'seeders'),
  'migrations-path': path.resolve('src', 'migrations')
};
```

### C. Winston Logger Configuration (`backend/src/utils/logger.ts`)
```typescript
import winston from 'winston';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `[${info.timestamp}] [${info.level}]: ${info.message}`
  )
);

export const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  levels,
  format,
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});
```

### D. Standard Response Helpers (`backend/src/utils/response.ts`)
```typescript
import { Response } from 'express';

export const sendSuccess = (res: Response, data: any, message = 'Success', statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const sendError = (res: Response, message = 'Error occurred', statusCode = 400, details: any = null) => {
  return res.status(statusCode).json({
    success: false,
    message,
    details,
  });
};
```

### E. JWT Utility (`backend/src/utils/jwt.ts`)
```typescript
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-key-change-me';

export interface TokenPayload {
  userId: string;
  email: string;
}

export const generateToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
};

export const verifyToken = (token: string): TokenPayload => {
  return jwt.verify(token, JWT_SECRET) as TokenPayload;
};
```

### F. Authentication Middleware (`backend/src/middlewares/auth.ts`)
```typescript
import { Request, Response, NextFunction } from 'express';
import { verifyToken, TokenPayload } from '../utils/jwt';

export interface AuthRequest extends Request {
  user?: TokenPayload;
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required. Please authenticate.' });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Token is invalid or expired.' });
  }
};
```

### G. Password Hashing (`backend/src/utils/hash.ts`)
```typescript
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, SALT_ROUNDS);
};

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};
```

### H. Input Validation Middleware (`backend/src/middlewares/validate.ts`)
```typescript
import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';
import { sendError } from '../utils/response';

export const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return sendError(res, 'Validation failed', 400, error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message,
        })));
      }
      next(error);
    }
  };
};
```

### I. Global Error Handler Middleware (`backend/src/middlewares/errorHandler.ts`)
```typescript
import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';
import { sendError } from '../utils/response';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(`💥 Runtime Error: ${err.message || err}`);

  const statusCode = err.status || err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return sendError(res, message, statusCode, process.env.NODE_ENV === 'development' ? err.stack : null);
};
```

### J. Main Server Entrypoint (`backend/src/index.ts`)
```typescript
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import { z } from 'zod';

import { connectDB } from './config/database';
import { generateToken } from './utils/jwt';
import { authenticateToken, AuthRequest } from './middlewares/auth';
import { validateRequest } from './middlewares/validate';
import { errorHandler } from './middlewares/errorHandler';
import { logger } from './utils/logger';
import { sendSuccess, sendError } from './utils/response';
import { User } from './models/user';
import { hashPassword, comparePassword } from './utils/hash';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet({ contentSecurityPolicy: false }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests from this IP, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', limiter);

const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',') 
  : ['http://localhost:3000'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());

// --- Swagger API Documentation Setup ---
const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Full-Stack Application API',
    version: '1.0.0',
    description: 'Secure Express API Docs',
  },
  paths: {
    '/auth/register': {
      post: {
        summary: 'Register a new user',
        responses: { 200: { description: 'Success' } }
      }
    },
    '/auth/login': {
      post: {
        summary: 'User login',
        responses: { 200: { description: 'Success' } }
      }
    }
  }
};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// --- API VALIDATION SCHEMAS ---
const authSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email address format'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
  }),
});

// --- API ROUTES ---
app.post('/api/auth/register', validateRequest(authSchema), async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return sendError(res, 'User already exists', 400);
    }

    const hashedPassword = await hashPassword(password);
    const user = await User.create({ email, password: hashedPassword });
    
    const token = generateToken({ userId: String(user.id), email: user.email });
    return sendSuccess(res, { token, user: { id: user.id, email: user.email } }, 'User registered successfully', 201);
  } catch (error) {
    next(error);
  }
});

app.post('/api/auth/login', validateRequest(authSchema), async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return sendError(res, 'Invalid credentials', 401);
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return sendError(res, 'Invalid credentials', 401);
    }

    const token = generateToken({ userId: String(user.id), email: user.email });
    return sendSuccess(res, { token, user: { id: user.id, email: user.email } }, 'Login successful');
  } catch (error) {
    next(error);
  }
});

app.get('/api/users/profile', authenticateToken, (req: AuthRequest, res) => {
  return sendSuccess(res, { user: req.user }, 'Profile fetched');
});

// --- PRODUCTION SERVING / EMBEDDED FRONTEND ---
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

app.get('*', (req, res, next) => {
  if (req.originalUrl.startsWith('/api')) {
    return next();
  }
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.use(errorHandler);

// Startup Server
app.listen(PORT, async () => {
  logger.info(`🚀 Secure Server running on http://localhost:${PORT}`);
  logger.info(`📄 API Docs available at http://localhost:${PORT}/api-docs`);
  await connectDB();
});

export default app;
```

---

## 🗄️ 5. DATABASE CONNECTION & MIGRATION GUIDELINES

### A. Database Connection (`backend/src/config/database.ts`)
```typescript
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { logger } from '../utils/logger';
dotenv.config();

const dialectMap = {
  postgres: 'postgres',
  mysql: 'mysql',
  sqlite: 'sqlite',
  mssql: 'mssql'
} as const;

type DialectType = keyof typeof dialectMap;
const selectedDialect: DialectType = (process.env.DB_DIALECT as DialectType) || 'sqlite';

export const sequelize = selectedDialect === 'sqlite' 
  ? new Sequelize({
      dialect: 'sqlite',
      storage: process.env.DB_STORAGE || './database.sqlite',
      logging: (msg) => logger.debug(`Sequelize: ${msg}`),
    })
  : new Sequelize(
      process.env.DB_NAME || 'my_db',
      process.env.DB_USER || 'root',
      process.env.DB_PASS || '',
      {
        host: process.env.DB_HOST || '127.0.0.1',
        port: parseInt(process.env.DB_PORT || '5432'),
        dialect: selectedDialect,
        logging: (msg) => logger.debug(`Sequelize: ${msg}`),
      }
    );

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    logger.info(`📡 Connected to database via Sequelize [${selectedDialect}]`);
  } catch (error) {
    logger.error('❌ Database connection failed:', error);
    process.exit(1);
  }
};
```

### B. Migration Evolution Protocol (How AI handles DB changes)
When the user asks you to modify database columns, add new tables, or create indexes, you MUST use `sequelize-cli` migrations. Do not use sync methods in production.

1. **Generate a Migration File:**
   ```bash
   npx sequelize-cli migration:generate --name add-fields-to-users
   ```
2. **Write the Migration Logic:**
   Open the generated file under `src/migrations/XXXXXX-add-fields-to-users.js` and specify both `up` and `down` actions:
   ```javascript
   'use strict';
   module.exports = {
     async up(queryInterface, Sequelize) {
       await queryInterface.addColumn('users', 'phoneNumber', {
         type: Sequelize.STRING,
         allowNull: true,
       });
     },
     async down(queryInterface, Sequelize) {
       await queryInterface.removeColumn('users', 'phoneNumber');
     }
   };
   ```
3. **Execute the Migration:**
   ```bash
   npx sequelize-cli db:migrate
   ```
4. **Update the Sequelize TypeScript Model:**
   Open `backend/src/models/user.ts` (or the respective model file) and declare the TS property:
   ```typescript
   public phoneNumber!: string;
   // And in User.init() attributes:
   phoneNumber: {
     type: DataTypes.STRING,
     allowNull: true,
   }
   ```
5. **Rollback (If needed):**
   ```bash
   npx sequelize-cli db:migrate:undo
   ```

### C. Default User Database Model (`backend/src/models/user.ts`)
```typescript
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class User extends Model {
  public id!: number;
  public email!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    sequelize,
  }
);
```

---

## 🎨 6. FRONTEND BOILERPLATE BLUEPRINTS

### A. Vite Configuration (`frontend/vite.config.ts`)
Configure Vite to compile the production bundle directly into the backend's `public/` directory.
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, '../backend/public'),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
});
```

### B. Axios Client (`frontend/src/api/client.ts`)
```typescript
import axios from 'axios';

const client = axios.create({
  baseURL: import.meta.env.DEV ? 'http://localhost:5000/api' : '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default client;
```

### C. Theme Settings (`frontend/src/theme/theme.ts`)
Creates a high-end, futuristic Dark Mode theme with Outfit/Inter typography.
```typescript
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1',
      light: '#818cf8',
      dark: '#4f46e5',
    },
    secondary: {
      main: '#ec4899',
    },
    background: {
      default: '#0b0f19',
      paper: '#111827',
    },
    text: {
      primary: '#f9fafb',
      secondary: '#9ca3af',
    },
  },
  typography: {
    fontFamily: '"Outfit", "Inter", "sans-serif"',
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          fontWeight: 600,
          padding: '8px 20px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 16,
          border: '1px solid rgba(255, 255, 255, 0.08)',
        },
      },
    },
  },
});
```

### D. React Auth Context (`frontend/src/context/AuthContext.tsx`)
```typescript
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (token: string, user: User) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (newToken: string, newUser: User) => {
    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
```

---

## 🧪 7. TESTING, CI/CD, AND CONTAINERIZATION

### A. Backend Testing (`backend/tests/auth.test.ts`)
```typescript
import request from 'supertest';
import app from '../src/index';

describe('POST /api/auth/login', () => {
  it('should validate inputs and fail on bad parameters', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'bad-email', password: '123' });
    
    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it('should pass on valid parameters', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'password123' });
    
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('token');
  });
});
```

### B. CI/CD Pipeline (`.github/workflows/ci.yml`)
```yaml
name: Full-Stack CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: 20

    - name: Test Backend
      run: |
        cd backend
        npm ci
        npm run test

    - name: Test Frontend
      run: |
        cd frontend
        npm ci
        npm run build
```

### C. Dockerfile (`/Dockerfile`)
```dockerfile
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY backend/package*.json ./backend/
RUN cd backend && npm ci

COPY backend/ ./backend/
COPY --from=frontend-builder /app/backend/public ./backend/public

RUN cd backend && npm run build

EXPOSE 5000
WORKDIR /app/backend
ENV NODE_ENV=production
CMD ["npm", "run", "start"]
```

### D. Environment Variable Template (`backend/.env.example`)
```ini
PORT=5000
NODE_ENV=development
JWT_SECRET=replace_this_with_a_secure_long_secret_key
ALLOWED_ORIGINS=http://localhost:3000
DB_DIALECT=postgres
DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=my_db
DB_USER=postgres
DB_PASS=password
DB_STORAGE=./database.sqlite
MONGO_URI=mongodb://localhost:27017/my_app
```
