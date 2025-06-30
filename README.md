# 📚 Library Management API

A RESTful API built with **Express.js**, **TypeScript**, and **MongoDB** (Mongoose) for managing library operations such as adding books, borrowing and returning, and tracking availability. Includes input validation, business logic for borrow limits, and filtering/sorting features.

---

## 🚀 Features

- ✅ CRUD operations for Books
- 📖 Borrow and Return Book functionality
- 📂 Filtering and sorting books by genre, title, etc.
- 📊 Aggregation pipeline for reports
- 🔒 Schema validation with Zod/Yup or Joi (optional)
- 🧠 Mongoose methods and middlewares
- 🧪 Clean folder structure with separation of concerns
- ⚙️ Environment-based configuration

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Language:** TypeScript
- **Database:** MongoDB with Mongoose ODM
- **Validation:** Custom + optional Zod/Joi
- **Tooling:** ts-node-dev, dotenv, Postman

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/harun708280/Libary-Management-API.git
cd library-management
npm install
PORT=5000
MONGO_URI=mongodb://localhost:27017/library-management
npm run dev

