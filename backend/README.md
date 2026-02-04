### 🏥 AppointCare Backend

This is the **backend API** for the AppointCare application, built with **Express.js**, **TypeScript**, **MongoDB**, and **TSOA** for auto-generated **Swagger documentation**.  

---

## 📖 Table of Contents

- [📖 Table of Contents](#-table-of-contents)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [Clone the repository](#clone-the-repository)
  - [Install Dependecies](#install-dependecies)
  - [Setup environment variables](#setup-environment-variables)
  - [Run development server](#run-development-server)
  - [Generate Swagger documentation](#generate-swagger-documentation)
- [🔑 Environment Variables](#-environment-variables)
- [📝 Scripts](#-scripts)
- [📚 API Documentation](#-api-documentation)
  - [Auto-generated Endpoints](#auto-generated-endpoints)
- [🔒 Authentication](#-authentication)

---

## ✨ Features

- User authentication for **Doctors** and **Patients**  
- **Signup** and **login** with **JWT token generation**  
- **MongoDB integration** via Mongoose  
- Input validation using **express-validator**  
- Security middlewares:
  - **Helmet**  
  - **Rate Limiting**  
  - **Mongo Sanitize**  
  - **XSS protection**  
- Auto-generated **Swagger UI documentation**  
- Comprehensive **error handling** and **404 routes**  

---

## 🛠️ Tech Stack

- **Node.js / Express.js**  
- **TypeScript**  
- **MongoDB** with Mongoose  
- **TSOA** (for Swagger + routes generation)  
- **Swagger UI Express**  
- **express-validator**, **bcryptjs**, **jsonwebtoken**  
- Middleware for **security** and **error handling**  

---

## 📂 Project Structure
```bash
backend/
├─ src/
│  ├─ app.ts                # Express app setup (export only)
│  ├─ server.ts             # Starts the server
│  ├─ controllers/          # TSOA controllers
│  │  └─ authController.ts
│  ├─ routes/               # Express routes
│  │  └─ authRoute.ts
│  ├─ middlewares/          # Validation, security, error handlers
│  ├─ services/             # Business logic (authServices.ts)
│  ├─ models/               # Mongoose models
│  ├─ types/                # TypeScript types (auth.types.ts)
│  ├─ db/                   # MongoDB connection
│  └─ docs/                 # TSOA Swagger JSON
│      └─ openapi/
│          └─ swagger.json
├─ package.json
├─ tsconfig.json
└─ tsoa.json                # TSOA config
```

## 🚀 Getting Started

### Clone the repository
```bash
git clone https://github.com/your-username/AppointCare-Web.git
cd AppointCare-Web/backend
```

### Install Dependecies
```bash
npm install
```

### Setup environment variables
- Create a .env file in backend/ with the following:
```bash
PORT=3000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
JWT_EXPIRES_IN=1d
```

### Run development server
```bash
npm run dev
```

### Generate Swagger documentation
``` bash
npx tsoa spec
```

## 🔑 Environment Variables

| Variable       | Description |
|----------------|-------------|
| `PORT`         | Port number for server |
| `MONGO_URI`    | MongoDB connection string |
| `JWT_SECRET`   | Secret key for JWT signing |
| `JWT_EXPIRES_IN` | JWT expiration duration (e.g., 1d) |

---

## 📝 Scripts

| Script             | Description |
|-------------------|-------------|
| `npm run dev`      | Run backend in development mode with ts-node and nodemon |
| `npm run start`    | Run backend with ts-node |
| `npm run build`    | Compile TypeScript to JavaScript |
| `npm run tsoa:spec` | Generate Swagger JSON (`swagger.json`) |
| `npm run tsoa:routes` | Generate TSOA routes (optional) |

## 📚 API Documentation

Swagger UI is available at:
http://localhost:3000/docs



### Auto-generated Endpoints

| Method | Endpoint | Description |
|--------|---------|------------|
| POST | `/api/auth/signup` | Register a user (Doctor/Patient) |
| POST | `/api/auth/login` | Login a user and return JWT |

---

## 🔒 Authentication

JWT-based authentication is used.  

Authenticated requests must include the JWT in the `Authorization` header:


📝 License

This project is licensed under the MIT License.