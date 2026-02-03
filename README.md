<div align="center">

# 📚 BookStore

### *Your Digital Library Experience*

[![Java](https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://openjdk.org/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.1-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

<br/>

![BookStore Preview](./README_assets/snippet_for_readme.jpg)

<br/>

[🌐 Live Demo](https://your-app.vercel.app) • [📖 API Docs](https://your-backend.onrender.com/swagger-ui.html) • [🚀 Deploy Guide](./DEPLOYMENT_GUIDE.md)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 📖 For Readers
- 🔍 **Smart Search** - Find books by title or genre
- 📚 **Book Checkout** - Rent books for 7 days
- ⭐ **Reviews & Ratings** - Share your thoughts
- 📋 **Reading History** - Track your journey
- 💬 **Discussions** - Chat with admins

</td>
<td width="50%">

### 🛠️ For Admins
- ➕ **Add Books** - Expand the collection
- 📊 **Manage Inventory** - Control stock levels
- 💬 **Handle Discussions** - Respond to users
- 📈 **Dashboard** - Overview of operations

</td>
</tr>
</table>

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND                                 │
│              React 18 + TypeScript + TailwindCSS                │
│                     Vercel Hosting                               │
└─────────────────────────┬───────────────────────────────────────┘
                          │ REST API
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│                         BACKEND                                  │
│              Spring Boot 3.1 + Spring Security                  │
│                JWT Authentication + Stripe                       │
│                     Render Hosting                               │
└─────────────────────────┬───────────────────────────────────────┘
                          │ JDBC
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│                        DATABASE                                  │
│                    PostgreSQL (Neon)                            │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technologies |
|:---:|:---|
| **Frontend** | ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/-Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) ![Vite](https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white) |
| **Backend** | ![Java](https://img.shields.io/badge/-Java_17-ED8B00?style=flat-square&logo=openjdk&logoColor=white) ![Spring](https://img.shields.io/badge/-Spring_Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white) ![Hibernate](https://img.shields.io/badge/-Hibernate-59666C?style=flat-square&logo=hibernate&logoColor=white) |
| **Database** | ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white) |
| **Security** | ![JWT](https://img.shields.io/badge/-JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white) ![Spring Security](https://img.shields.io/badge/-Spring_Security-6DB33F?style=flat-square&logo=springsecurity&logoColor=white) |
| **Payments** | ![Stripe](https://img.shields.io/badge/-Stripe-008CDD?style=flat-square&logo=stripe&logoColor=white) |
| **DevOps** | ![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white) ![Git](https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white) |
| **Docs** | ![Swagger](https://img.shields.io/badge/-Swagger-85EA2D?style=flat-square&logo=swagger&logoColor=black) ![OpenAPI](https://img.shields.io/badge/-OpenAPI-6BA539?style=flat-square&logo=openapi-initiative&logoColor=white) |

</div>

---

## 🚀 Quick Start

### Prerequisites

- ☕ Java 17+
- 📦 Node.js 18+
- 🐘 PostgreSQL (or use H2 for dev)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/bookstore-fullstack.git
cd bookstore-fullstack
```

### 2️⃣ Start Backend

```bash
cd BookStore_Backend

# Set Java Home (Windows)
$env:JAVA_HOME = "path/to/your/jdk-17"

# Run with Maven
./mvnw spring-boot:run
```

### 3️⃣ Start Frontend

```bash
cd BookStore_Frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```

### 4️⃣ Access the Application

| Service | URL |
|---------|-----|
| 🌐 Frontend | http://localhost:5173 |
| 🔌 Backend API | http://localhost:8080/api |
| 📚 Swagger UI | http://localhost:8080/swagger-ui.html |

---

## 🔐 Authentication

### Default Admin Account
```
📧 Email: admin@email.com
🔑 Password: admin123
```

### User Registration
New users can register through the app with:
- First Name, Last Name
- Email & Password
- Date of Birth

---

## 📡 API Endpoints

<details>
<summary><b>🔓 Public Endpoints</b></summary>

| Method | Endpoint | Description |
|:------:|----------|-------------|
| `GET` | `/api/books` | Get all books (paginated) |
| `GET` | `/api/books/{id}` | Get book by ID |
| `GET` | `/api/books/search` | Search books |
| `GET` | `/api/genres` | Get all genres |
| `GET` | `/api/reviews/book/{id}` | Get book reviews |
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/login` | User login |

</details>

<details>
<summary><b>🔒 Protected Endpoints (Requires Auth)</b></summary>

| Method | Endpoint | Description |
|:------:|----------|-------------|
| `GET` | `/api/books/secure/ischeckedout/{id}` | Check if book is checked out |
| `PUT` | `/api/books/secure/checkout/{id}` | Checkout a book |
| `PUT` | `/api/books/secure/return/{id}` | Return a book |
| `POST` | `/api/reviews/secure` | Submit a review |
| `GET` | `/api/checkouts/secure` | Get user's checkouts |
| `GET` | `/api/history-records/secure` | Get reading history |
| `POST` | `/api/discussions/secure` | Create discussion |
| `POST` | `/api/payment/secure` | Process payment |

</details>

<details>
<summary><b>👑 Admin Endpoints</b></summary>

| Method | Endpoint | Description |
|:------:|----------|-------------|
| `POST` | `/api/admin/secure/add/book` | Add new book |
| `DELETE` | `/api/admin/secure/delete/book/{id}` | Delete book |
| `PUT` | `/api/admin/secure/increase/{id}` | Increase book quantity |
| `PUT` | `/api/admin/secure/decrease/{id}` | Decrease book quantity |
| `PUT` | `/api/admin/secure/discussion/close` | Close discussion |

</details>

---

## 🧪 Testing

```bash
cd BookStore_Backend

# Run all tests
./mvnw test

# Run with coverage
./mvnw test jacoco:report
```

| Test Type | Coverage | Tools |
|-----------|----------|-------|
| Unit Tests | ~95% | JUnit 5, Mockito, AssertJ |
| Integration Tests | 100% endpoints | Testcontainers, TestRestTemplate |

---

## 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build

# Access at http://localhost:5173
```

---

## ☁️ Cloud Deployment

Deploy for **FREE** using:

| Component | Service | Guide |
|-----------|---------|-------|
| 🗄️ Database | [Neon](https://neon.tech) | Free PostgreSQL |
| ⚙️ Backend | [Render](https://render.com) | Free Web Service |
| 🌐 Frontend | [Vercel](https://vercel.com) | Free Static Hosting |

👉 **[Full Deployment Guide](./DEPLOYMENT_GUIDE.md)**

---

## 📁 Project Structure

```
BookStore_FullStack/
├── 📂 BookStore_Backend/
│   ├── 📂 src/main/java/
│   │   └── 📂 com/iliamalafeev/bookstore/
│   │       ├── 📂 controllers/      # REST Controllers
│   │       ├── 📂 services/         # Business Logic
│   │       ├── 📂 repositories/     # Data Access
│   │       ├── 📂 entities/         # JPA Entities
│   │       ├── 📂 security/         # JWT & Auth
│   │       └── 📂 config/           # Configuration
│   ├── 📂 src/main/resources/
│   │   ├── 📄 application.properties
│   │   ├── 📄 schema.sql
│   │   └── 📄 data.sql
│   ├── 📄 Dockerfile
│   └── 📄 pom.xml
│
├── 📂 BookStore_Frontend/
│   ├── 📂 src/
│   │   ├── 📂 components/           # React Components
│   │   ├── 📂 authentication/       # Auth Context
│   │   ├── 📂 models/               # TypeScript Models
│   │   └── 📂 utils/                # API Fetchers
│   ├── 📄 Dockerfile
│   ├── 📄 package.json
│   └── 📄 vite.config.ts
│
├── 📄 docker-compose.yml
├── 📄 DEPLOYMENT_GUIDE.md
└── 📄 README.md
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

### 💖 Made with passion for books and code

**[⬆ Back to Top](#-bookstore)**

</div>
