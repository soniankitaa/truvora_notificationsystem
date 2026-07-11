# 🔔 Truvora – Full Stack Multi-Tenant Notification System

A modern **full-stack notification management system** built with **Next.js, Express.js, Prisma ORM, PostgreSQL, and TypeScript**. The project demonstrates how a scalable notification service can be designed for multiple organizations while maintaining complete tenant isolation, secure API architecture, and a responsive user experience.

The application simulates how modern SaaS platforms manage notifications by allowing users to receive, view, and update notifications in real time through a clean dashboard interface.

---

# 📖 Table of Contents

- Overview
- Features
- Technology Stack
- Project Architecture
- Project Structure
- Database Design
- Notification Types
- REST API
- Multi-Tenant Architecture
- Frontend
- Backend
- Installation
- Environment Variables
- Database Setup
- Running the Project
- Screenshots
- Future Improvements
- Challenges Faced
- What I Learned
- License
- Author

---

# 📌 Overview

Truvora is a full-stack web application developed to demonstrate modern backend architecture, database design, and frontend integration using today's most popular JavaScript technologies.

The application provides a centralized notification management system where users can:

- Receive notifications
- View unread notifications
- Mark notifications as read
- Mark all notifications as read
- Track unread notification count

One of the key highlights of the project is its **multi-tenant architecture**, ensuring that each organization (tenant) can only access its own notifications, making the system scalable and secure for SaaS applications.

The project follows a clean separation between frontend and backend using a TurboRepo monorepo.

---

# ✨ Features

## Notification Management

- Create new notifications
- Retrieve all notifications
- View notification details
- Mark individual notifications as read
- Mark all notifications as read
- Track unread notification count

## Multi-Tenant Support

- Complete tenant isolation
- Separate notification data for each organization
- Secure tenant-based API requests
- Easily scalable for multiple clients

## User Experience

- Responsive dashboard
- Clean notification panel
- Dynamic unread badge
- Mobile-friendly UI
- Fast page rendering using Next.js

## Backend Features

- RESTful API architecture
- Prisma ORM integration
- PostgreSQL database
- Request validation
- Error handling
- Type-safe development using TypeScript

---

# 🛠 Technology Stack

## Frontend

- Next.js
- React
- TypeScript
- CSS

## Backend

- Node.js
- Express.js
- Prisma ORM

## Database

- PostgreSQL
- Neon Database

## Development Tools

- TurboRepo
- Git
- GitHub
- Postman
- npm

---

# 🏗 Project Architecture

```
                User
                  │
                  ▼
         Next.js Frontend
                  │
                  ▼
        Express REST API
                  │
                  ▼
            Prisma ORM
                  │
                  ▼
        PostgreSQL (Neon)
```

The frontend communicates with the Express backend through REST APIs. Prisma ORM handles all database operations while PostgreSQL stores notification data securely.

---

# 📂 Project Structure

```
TRUVORA/
│
├── apps/
│
├── server/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── seed.ts
│   │
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── lib/
│   │   └── server.ts
│   │
│   └── package.json
│
├── web/
│   ├── app/
│   ├── components/
│   ├── services/
│   ├── public/
│   └── package.json
│
├── package.json
├── turbo.json
└── README.md
```

---

# 🗄 Database Design

The project uses **PostgreSQL** with **Prisma ORM** for efficient and type-safe database operations.

Each notification stores:

- Notification ID
- Tenant ID
- User ID
- Notification Type
- Title
- Message
- Read Status
- Read Timestamp
- Created Timestamp
- Updated Timestamp

### Database Indexes

Indexes are added for faster queries on:

- Tenant ID
- User ID
- Read Status
- Created Timestamp

These indexes improve notification retrieval performance in large-scale environments.

---

# 🔔 Notification Types

The application currently supports multiple notification categories.

- Team Invitation
- Creator Reply
- System Notification

The notification model is flexible and can easily support additional types such as:

- Security Alerts
- Payment Notifications
- Account Updates
- Project Assignments
- Task Reminders

---

# 🌐 REST API

## Notifications

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/notifications` | Retrieve all notifications |
| GET | `/notifications/unread-count` | Get unread notification count |
| POST | `/notifications` | Create a notification |
| PATCH | `/notifications/:id/read` | Mark a notification as read |
| PATCH | `/notifications/read-all` | Mark all notifications as read |

---

# 🏢 Multi-Tenant Architecture

A major goal of this project is to demonstrate **tenant isolation**.

Each request contains tenant information through request headers, ensuring that users can only access notifications belonging to their own organization.

Benefits include:

- Secure data isolation
- Independent notification management
- Better scalability
- SaaS-ready architecture
- Easy support for multiple organizations

This architecture allows multiple clients to use the same application without exposing each other's data.

---

# 💻 Frontend

The frontend is built using **Next.js** and provides a clean and responsive dashboard.

Users can:

- View notifications
- Read notification details
- Monitor unread notifications
- Mark notifications as read
- Mark all notifications as read
- Navigate easily across dashboard sections

The interface is optimized for desktop, tablet, and mobile devices.

---

# ⚙ Backend

The Express.js backend is responsible for:

- Processing notification requests
- Implementing REST APIs
- Managing tenant isolation
- Performing database operations through Prisma
- Request validation
- Error handling
- Business logic implementation

The backend follows a modular folder structure for better scalability and maintainability.

---

# 🚀 Installation

Clone the repository.

```bash
git clone https://github.com/soniankitaa/truvora_notificationsystem.git
```

Navigate into the project.

```bash
cd truvora_notificationsystem
```

Install dependencies.

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file inside the **server** directory.

```env
DATABASE_URL=your_postgresql_connection_string
PORT=5000
```

Replace `DATABASE_URL` with your PostgreSQL or Neon connection string.

---

# 🗄 Database Setup

Generate the Prisma Client.

```bash
npx prisma generate
```

Push the database schema.

```bash
npx prisma db push
```

Seed the database.

```bash
npx prisma db seed
```

---

# ▶ Running the Project

Start the development server.

```bash
npm run dev
```

Build the project.

```bash
npm run build
```

Run the production server.

```bash
npm start
```

---

# 📸 Screenshots

Add screenshots of the application here.

```
🏠 Dashboard

🔔 Notification Panel

📬 Unread Notification Badge

🧪 API Testing (Postman)

📱 Responsive Mobile View
```

---

# 📈 Future Improvements

Planned enhancements include:

- Real-time notifications using WebSockets
- Push notifications
- Email notifications
- Authentication (JWT)
- Authorization
- Role-Based Access Control (RBAC)
- Search functionality
- Filtering by notification type
- Pagination
- Notification preferences
- Soft delete
- Docker containerization
- CI/CD pipeline
- Automated testing
- Cloud deployment
- Audit logging
- Notification scheduling

---

# 🚧 Challenges Faced

Some of the key technical challenges encountered during development included:

- Designing a scalable multi-tenant architecture
- Maintaining strict tenant isolation
- Structuring a TurboRepo monorepo
- Integrating Prisma with PostgreSQL
- Configuring Neon cloud database
- Managing API communication between frontend and backend
- Handling notification state efficiently
- Keeping the project type-safe with TypeScript
- Designing reusable backend service layers
- Maintaining a clean and modular project structure

---

# 📚 What I Learned

Developing Truvora helped strengthen my understanding of:

- Full-Stack Web Development
- REST API Design
- Express.js Architecture
- Next.js Application Development
- Prisma ORM
- PostgreSQL Database Design
- Multi-Tenant System Design
- TypeScript
- API Integration
- State Management
- Monorepo Architecture using TurboRepo
- Git & GitHub Workflow
- Clean Project Organization
- Responsive UI Development

---

# 📄 License

This project is developed for educational and learning purposes.

Feel free to explore, modify, and build upon the project for personal learning.

---

# 👩‍💻 Author

**Ankita Soni**

BCA Student | Full Stack Developer

GitHub: https://github.com/soniankitaa

---

⭐ If you found this project helpful, consider giving it a **star** on GitHub!
