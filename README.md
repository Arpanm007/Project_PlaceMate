# 🚀 PlaceMate – AI Placement Preparation Agent (Frontend)

## 📌 Overview

PlaceMate is an AI-powered placement preparation platform designed to help students prepare efficiently through **personalized learning, adaptive quizzes, and performance tracking**.

This repository contains the **frontend UI** built using React and Tailwind CSS, implementing a complete user flow for both **students and admins**.

---

## 🎯 Problem Statement

Students often prepare for placements in an unstructured way:

- No personalized feedback
- No tracking of weak areas
- No adaptive learning system

---

## 💡 Solution

PlaceMate solves this by:

- Analyzing student profiles (resume-based)
- Identifying weak areas using AI
- Providing daily adaptive quizzes
- Continuously improving preparation through feedback loops

---

## 🧱 Tech Stack

### Frontend

- React (Vite)
- Tailwind CSS

### Planned Backend Integration

- n8n (workflow automation)
- Claude API (evaluation logic)
- Google Sheets / Azure SQL (data storage)
- Email / WhatsApp APIs (communication)

---

## 👥 User Roles

### 👤 Student

- Register/Login
- Upload resume (mandatory for new users)
- View AI-based company suggestions
- Track performance dashboard
- Update resume anytime

### 👨‍💼 Admin

- View system-wide stats
- Monitor student performance
- Control automation (start/pause system)

---

## 🔄 Application Flow

### 🟢 New User

Register → Upload Resume → Company Suggestions → Dashboard

### 🔵 Existing User

Login → Dashboard → Update Resume (optional)

### 🔴 Admin

Login (Admin role) → Admin Dashboard

---

## 🧩 Features Implemented

### 🔐 Authentication UI

- Combined Login/Register page
- Role-based login (Student/Admin)
- Admin cannot register (restricted access)

---

### 📄 Resume Upload

- Mandatory for new users
- Re-upload supported for existing users
- Prepares data for AI analysis

---

### 🏢 Company Suggestions

- Displays best-fit companies (simulated AI output)
- Match percentage + skill mapping
- “Best Match” highlighting

---

### 📊 Student Dashboard

- Performance tracking (score + weak topics)
- Quiz status (Google Forms integration ready)
- AI insight section (feedback-driven learning)
- Resume update option

---

### ⚙️ Admin Dashboard

- Total users, attempts, average score
- Student performance table (scrollable)
- System control panel (start/pause automation)

---

### 🎨 UI/UX Features

- Fully responsive layout
- Light/Dark mode toggle (persistent via localStorage)
- Smooth transitions & hover effects
- Clean card-based design
- Scrollable tables with sticky headers

---

### 🔒 Role-Based Access (Frontend Simulation)

- Protected routes for:
  - Admin dashboard
  - Student dashboard

- Prevents unauthorized access via UI

---

## 🗂️ Project Structure

```
src/
│
├── pages/
│   ├── Auth.jsx
│   ├── ResumeUpload.jsx
│   ├── CompanySelect.jsx
│   ├── Dashboard.jsx
│   └── AdminDashboard.jsx
│
├── components/
│   ├── AuthForm.jsx
│   ├── ResumeUploadBox.jsx
│   ├── Card.jsx
│   ├── PerformanceBox.jsx
│   ├── QuizStatus.jsx
│   ├── Navbar.jsx
│   ├── AdminStats.jsx
│   ├── UserTable.jsx
│   ├── WorkflowControl.jsx
│   └── ProtectedRoute.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🌙 Dark Mode Support

- Toggle available globally
- Theme persists using localStorage
- Fully implemented across all pages and components

---

## 🧪 Current Status

✅ Frontend fully completed
✅ UI/UX polished
✅ Role-based navigation implemented
⏳ Backend integration pending

---

## 🔗 Future Enhancements

- Claude API integration for evaluation
- n8n workflow automation
- Google Sheets data tracking
- Real authentication (JWT)
- Email/WhatsApp quiz delivery
- AI chatbot for soft skills

---

## 🚀 Getting Started

### 1. Clone the repository

```
git clone <your-repo-link>
cd placemate-ui
```

### 2. Install dependencies

```
npm install
```

### 3. Run the project

```
npm run dev
```

---

## 🎯 Demo Highlights

- Resume-based onboarding
- AI-driven company matching
- Adaptive learning loop (simulated)
- Admin analytics dashboard
- Dark/Light mode UX

---

## 🧠 Key Learning Outcomes

- Building scalable UI architecture
- Implementing role-based access
- Designing adaptive learning systems
- Creating modern UI with Tailwind
- Preparing frontend for backend integration

---

## 🤝 Contributors

- Frontend UI Developer – (You)
- AI Team – Prompt & evaluation logic
- Backend Team – n8n & API integration
- Data Team – Company dataset & tracking

---

## 📌 Note

This project currently uses **simulated data** for AI outputs and performance tracking. Backend integration will enable real-time functionality.

---

## ⭐ Final Thought

PlaceMate aims to transform placement preparation from **random practice → structured, adaptive learning powered by AI**.
