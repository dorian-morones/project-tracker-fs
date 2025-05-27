# 📊 Project Tracker FS

A full-stack application to track internal projects using a React + TypeScript frontend and a Node.js + Express + Supabase backend.


## 🖥️ Frontend (SPA)
### 🔧 Setup & Run Locally
```
cd /client
npm install
npm run dev
```
The app will run on http://localhost:5173



## 🔌 Backend (API)
### 🔧 Setup & Run Locally
- ```cd /server```
- ```npm install```
- ```npm run start```

The server will run on http://localhost:4000


> ⚠️ **Note:** Use Express v4.21.2 to prevent TypeScript-related issues.
 

 ## 🗃️ Database Schema & Supabase Usage
The project use supabase as DB to save development time

📄 Core Table: **projects**

SQL to create the table:
```
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  project_code VARCHAR(7) NOT NULL CHECK (
    project_code ~ '^[A-Z]{3}-\d{3}$'
  ),
  description TEXT,
  product_line TEXT CHECK (
    product_line IN ('iPhone', 'iPad', 'Mac', 'Vision Pro', 'Other')
  ),
  wants_notifications BOOLEAN DEFAULT FALSE,
  notification_preference TEXT CHECK (
    notification_preference IN ('All notifications', 'Daily digest', 'Weekly digest')
  ),
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```