# 🚀 Ai Resume Analyzer

A **Production-Ready Full Stack GenAI Web Application** that helps users prepare for job interviews by analyzing resumes, detecting skill gaps, and generating AI-powered interview questions.

This application simulates a **real-world product workflow** where users can upload their resumes, analyze job descriptions, and receive personalized interview preparation using **AI-powered insights**.

---
# ✨ Features

### 🔐 Secure Authentication

* JWT-based authentication
* Token Blacklisting for secure logout
* Email notifications for:

  * User Sign Up
  * Login Activity
  * Logout Activity

### 📄 Resume Upload & Parsing

* Upload resume files
* Extract skills and experience automatically

### 🤖 AI-Powered Interview Preparation

* Generate interview questions using **Gemini AI**
* Tailored questions based on resume and job description

### 📊 Skill Gap Detection

* Compare resume skills with job requirements
* Identify missing or weak skills

### 📑 ATS Optimized Resume Generation

* Improve resume structure for Applicant Tracking Systems

### 📄 Dynamic PDF Generation

* Generate downloadable resume PDFs using **Puppeteer**

---

# 🛠 Tech Stack

### Frontend

* React.js
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Authentication

* JWT (JSON Web Tokens)
* Token Blacklisting

### AI Integration

* Gemini API

### Utilities

* Puppeteer (PDF generation)

---

# 🏗 Application Architecture

User Workflow:

1. User registers and logs in
2. Uploads a resume
3. Enters job description
4. System analyzes skills using AI
5. Detects skill gaps
6. Generates interview questions
7. Generates ATS optimized resume
8. Allows download of resume as PDF

---

# 📂 Project Structure

```
project-root
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── hooks
│   │   └── utils
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── routes
│   ├── models
│   └── config
│
├── README.md
└── package.json
```

---

# ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/project-name.git
```

### 2️⃣ Navigate into the project

```bash
c
