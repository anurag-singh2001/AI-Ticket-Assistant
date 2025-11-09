# 🧠 AI Ticket Assistant 

This is the **backend service** for the **AI Ticket Assistant** project — a full-stack, AI-powered ticketing system that automates ticket triage, assignment, and prioritization using **Google Gemini AI** and **Inngest**.

The backend is built with **Node.js**, **Express**, **MongoDB**, and **Inngest**, and integrates seamlessly with the **Vite React frontend**.

---

## 🚀 Features

- 🔐 **JWT Authentication** (Signup / Login)
- 🧾 **User & Role Management** (user / moderator / admin)
- 🎟️ **Ticket Creation and Listing**
- 🤖 **AI-powered Ticket Analysis** via Gemini API
- 🧩 **Event-driven Background Jobs** using Inngest
- 📬 **Email Notifications** through Mailtrap
- 💾 **MongoDB Atlas** for data persistence

---


## 🧩 Technologies Used

### 🔹 Core Stack
- **Node.js + Express** — REST API framework  
- **MongoDB (Mongoose)** — database ORM  
- **Inngest** — event-driven background jobs  
- **Google Gemini** — AI triage and ticket analysis  
- **JWT** — authentication and authorization  

### 🔹 Dev Tools
- **dotenv** — environment management  
- **CORS** — cross-origin handling  
- **Render** — backend hosting  
- **ES Modules** — modern JS imports  

---

## ⚙️ Setup Instructions

### 🧾 Prerequisites

- Node.js (v18 or higher)  
- MongoDB Atlas cluster  
- Inngest account (free)  
- Google Gemini API key  
- Mailtrap account  

---

### 1️⃣ Clone and Install Dependencies

```bash
git clone https://github.com/anurag-singh2001/AI-Ticket-Assistant.git
cd ai-ticket-assistant
npm install
```

## 🧠 How It Works (Flow Summary)

1. 🧾 **User Signup**  
   - A user signs up through the frontend.  
   - The backend triggers an **Inngest event** (`user/signup`).  
   - Inngest runs the `onUserSignup` function.  
   - A **welcome email** is sent automatically via Mailtrap.

2. 🎟️ **Ticket Creation**  
   - A user creates a new ticket from the frontend.  
   - The backend sends an **Inngest event** (`ticket/created`).  
   - Inngest runs the `onTicketCreated` function which:  
     - 🔹 Fetches the ticket from MongoDB  
     - 🔹 Sends it to **Gemini AI** for analysis  
     - 🔹 Updates ticket with `priority`, `summary`, and `helpfulNotes`  
     - 🔹 Assigns a moderator/admin based on skill matching  
     - 🔹 Sends an email notification to the assigned moderator

3. 🧑‍💼 **Moderator/Admin Dashboard**  
   - Moderators and admins can view, filter, and manage all tickets.  
   - They receive AI-enriched insights and helpful context for faster resolution.


  ## Screeshots

  <img width="1919" height="902" alt="image" src="https://github.com/user-attachments/assets/a2101127-ab80-4c2e-bd80-c83d840e0eaa" />
  <img width="1917" height="899" alt="image" src="https://github.com/user-attachments/assets/a82cd466-0a56-4a34-a236-aef99548a14b" />
  <img width="1898" height="903" alt="image" src="https://github.com/user-attachments/assets/d900bf90-3015-4589-ba23-71e73e457788" />

for frontend code click on this link: https://github.com/anurag-singh2001/AI-Ticket-Assistant-Frontend


