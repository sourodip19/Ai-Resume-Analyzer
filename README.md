# 🚀 AI Resume Analyzer

A production-ready Full Stack GenAI web application that helps users prepare for job interviews by analyzing resumes, detecting skill gaps, and generating AI-powered interview questions and ATS-optimized resumes.

> Built with React.js, Node.js, Express.js, MongoDB, Google Gemini AI, and Puppeteer.

---

## 🔗 Links

- 🌐 Live Demo: [coming soon]
- 📁 Source Code: [github.com/sourodip19/Ai-Resume-Analyzer](https://github.com/sourodip19/Ai-Resume-Analyzer)

---

## ✨ Features

### 🔐 Secure Authentication
- JWT-based authentication with HTTP-only cookies
- **Token Blacklisting for logout** — when a user logs out, the token is invalidated server-side and stored in a blacklist so it cannot be reused even if intercepted. This is a production-grade security practice.
- Passwords hashed using bcrypt before storing in the database

### 📄 Resume Upload & Parsing
- Upload resumes in PDF or DOC format
- Automatically extracts key information including skills, work experience, and education
- Parsed data is stored per user in MongoDB

### 🤖 AI-Powered Interview Preparation
- Generates personalized interview questions using **Google Gemini API**
- Questions are tailored based on both resume content and job description
- Simulates a real recruiter's question pattern

### 📊 Skill Gap Detection
- Compares extracted resume skills against the provided job description
- Identifies missing skills and weak areas the user needs to improve
- Gives users a clear picture of what to prepare before the interview

### 📑 ATS-Optimized Resume Generation
- Generates an improved resume structure optimized for **Applicant Tracking Systems (ATS)**
- ATS systems are used by companies to filter resumes automatically — this feature ensures the resume passes those filters

### 📄 Dynamic PDF Resume Generation
- Generates downloadable ATS-friendly resumes as PDF files
- Built using **Puppeteer** — a headless Chrome browser that renders HTML to PDF server-side
- Production-grade approach used by real companies for document generation

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Authentication | JWT + Token Blacklisting + HTTP-only Cookies |
| AI Integration | Google Gemini API |
| PDF Generation | Puppeteer |

---

## 🏗 System Architecture

```
User
  ↓
Frontend (React.js)
  ↓
Backend API (Express.js)
  ↓
Authentication Layer (JWT + Token Blacklist + HTTP-only Cookies)
  ↓
AI Processing (Google Gemini API)
  ↓
Database (MongoDB)
  ↓
Resume Processing + Skill Gap Analysis
  ↓
PDF Generator (Puppeteer)
```

---

## 🧠 Application Workflow

1. User registers and logs in securely
2. JWT token is issued and stored in HTTP-only cookie
3. User uploads their resume (PDF/DOC)
4. System parses resume and extracts skills, experience, and education
5. User enters the job description they are targeting
6. Gemini AI analyzes both resume and job description
7. Skill gaps are identified and displayed
8. Personalized interview questions are generated
9. ATS-optimized resume is created
10. User downloads the improved resume as a PDF

---

## 🔒 Production Norms Used

| Practice | Why It Matters |
|---|---|
| **JWT Token Blacklisting** | Ensures logged-out tokens cannot be reused — prevents session hijacking |
| **HTTP-only Cookies** | Prevents JavaScript from accessing the token — protects against XSS attacks |
| **bcrypt Password Hashing** | Passwords are never stored in plain text |
| **Environment Variables** | All secrets like API keys and DB URIs are stored in `.env` — never hardcoded |
| **MVC Architecture** | Code is separated into Models, Views, Controllers for scalability and maintainability |
| **Middleware Pattern** | Auth middleware protects private routes — clean and reusable |
| **Puppeteer Server-side PDF** | PDF is generated on the server — consistent output across all devices |

---

## 📂 Project Structure

```
project-root
│
├── client                  # React frontend
│   └── src
│       ├── components      # Reusable UI components
│       ├── pages           # Route-level pages
│       ├── hooks           # Custom React hooks
│       └── utils           # Helper functions
│
├── server                  # Node.js backend
│   ├── controllers         # Business logic
│   ├── middleware          # Auth and error handling middleware
│   ├── routes              # API route definitions
│   ├── models              # MongoDB Mongoose schemas
│   ├── services            # AI and PDF service integrations
│   └── config              # DB and environment config
│
├── README.md
└── package.json
```

---

## 🗄 Database Design (ER Diagram)

```
User
 ├── _id
 ├── name
 ├── email
 └── password (hashed)

Resume
 ├── _id
 ├── userId         → ref: User
 ├── fileUrl
 ├── parsedSkills
 ├── experience
 └── education

JobDescription
 ├── _id
 ├── userId         → ref: User
 └── description

InterviewSession
 ├── _id
 ├── resumeId       → ref: Resume
 ├── jobDescId      → ref: JobDescription
 ├── skillGaps
 └── questions

TokenBlacklist
 ├── _id
 ├── token
 └── createdAt      (TTL index — auto expires)
```

**Relationships:**
- One `User` → Many `Resumes`
- One `User` → Many `JobDescriptions`
- One `Resume` + One `JobDescription` → One `InterviewSession`

---

## 📡 API Documentation

### Auth Routes `/api/auth`

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/signup` | Register new user | No |
| POST | `/login` | Login and receive JWT cookie | No |
| POST | `/logout` | Logout and blacklist token | Yes |

### Resume Routes `/api/resume`

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/upload` | Upload and parse resume | Yes |
| GET | `/` | Get all resumes for user | Yes |
| GET | `/:id` | Get specific resume | Yes |

### AI Routes `/api/ai`

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/analyze` | Analyze resume vs job description | Yes |
| POST | `/questions` | Generate interview questions | Yes |
| POST | `/ats-resume` | Generate ATS optimized resume | Yes |
| POST | `/pdf` | Download resume as PDF | Yes |

### Example — Login

**Request**
```json
POST /api/auth/login
{
  "email": "sourodip@email.com",
  "password": "yourpassword"
}
```

**Response**
```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": "64abc123",
    "name": "Sourodip Dey",
    "email": "sourodip@email.com"
  }
}
```

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Google Gemini API Key

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/ai-resume-analyzer.git
cd ai-resume-analyzer
```

### 2. Install backend dependencies
```bash
cd server
npm install
```

### 3. Install frontend dependencies
```bash
cd ../client
npm install
```

### 4. Setup environment variables

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_google_gemini_api_key
CLIENT_URL=http://localhost:5173
```

### 5. Run the backend
```bash
cd server
npm run dev
```

### 6. Run the frontend
```bash
cd client
npm run dev
```

### Application runs on:
- Frontend → http://localhost:5173
- Backend → http://localhost:5000

---

## 🚀 Future Improvements

- Google / GitHub OAuth login
- AI interview simulation with voice
- Real-time AI chat assistant
- Job application tracker
- AI career roadmap generation
- Resume improvement suggestions with scoring

---

## 📚 What I Learned

- Full Stack Application Architecture with clean MVC pattern
- Production-grade JWT authentication with token blacklisting
- Integrating Google Gemini AI into a real-world application
- Resume parsing techniques and text extraction
- Server-side PDF generation using Puppeteer
- Scalable backend design with middleware patterns
- ATS optimization logic for resume generation

---

## 👨‍💻 Author

**Sourodip Dey**
- 🌐 [sourodipdey.online](https://sourodipdey.online)
- 💼 [LinkedIn](https://www.linkedin.com/in/sourodip-dey)
- 🐙 [GitHub](https://github.com/sourodip19)

---

> ⭐ If you found this project useful, please consider giving it a star on GitHub!
