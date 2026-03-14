# 🚀 Ai-Resume-Analyzer

A **Production-Ready Full Stack GenAI Web Application** that helps users prepare for job interviews by analyzing resumes, detecting skill gaps, and generating AI-powered interview questions.

This application simulates a **real-world product workflow** where users can upload their resumes, analyze job descriptions, and receive personalized interview preparation using **AI-powered insights**.

---

# ✨ Features

* 🔐 **Secure Authentication**

  * JWT Authentication
  * Token Blacklisting for secure logout

* 📄 **Resume Upload & Parsing**

  * Upload resume files
  * Extract skills and experience

* 🤖 **AI-Powered Interview Preparation**

  * Generate interview questions using **Gemini AI**
  * Tailored questions based on resume and job description

* 📊 **Skill Gap Detection**

  * Compare resume skills with job requirements
  * Identify missing or weak skills

* 📑 **ATS Optimized Resume Generation**

  * Improve resume structure for ATS systems

* 📄 **Dynamic PDF Generation**

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
cd project-name
```

### 3️⃣ Install dependencies

Backend

```bash
cd server
npm install
```

Frontend

```bash
cd client
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file in the **server directory**:

```
PORT=5000
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
MONGO_URI=your_database_connection
```

---

# ▶️ Running the Application

Start backend:

```bash
cd server
npm run dev
```

Start frontend:

```bash
cd client
npm run dev
```

---

# 📸 Future Improvements

* OAuth Login (Google/GitHub)
* Interview Simulation with AI
* AI Resume Feedback
* Job Tracking Dashboard
* Real-time AI Chat Assistant

---

# 📚 Learning Goals

This project demonstrates:

* Full Stack Architecture
* Secure Authentication
* AI Integration in Web Apps
* Resume Parsing Techniques
* Real-world Product Development Workflow

---

# 👨‍💻 Author

Developed while learning **Full Stack Development + GenAI integration**.

---

⭐ If you found this project useful, consider giving it a **star**.
