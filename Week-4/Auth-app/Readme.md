

## 🛡️ Auth Security Demo

This is a modular Express.js application that demonstrates:

* ✅ Data Validation with `Joi`
* 🧼 Data Sanitization with `sanitize-html`
* 🔐 Authentication with:

  * JWT-based auth
  * Session-based auth
* 🔒 Security practices: `helmet`, `cors`
* 📋 Logging using `morgan`
* 🚨 Centralized error handling

---

## 📁 Project Structure

```
auth-security-demo/
├── app.js                         # Main server file
├── routes/
│   ├── jwtRoutes.js              # JWT login & protected route
│   ├── sessionRoutes.js          # Session login & profile
│   └── sanitizeRoutes.js         # Bio sanitization endpoint
├── middlewares/
│   ├── errorHandler.js           # Central error handler
│   └── jwtMiddleware.js          # JWT token verifier
├── utils/
│   └── validateUser.js           # Joi-based validation
└── package.json
```

---

## 🚀 Getting Started

### ✅ Prerequisites

* Node.js (v16+ recommended)
* npm

### 📦 Install Dependencies

```bash
npm install
```

---

## ▶️ Run the Application

```bash
node app.js
```

Server runs at:
📍 [http://localhost:3000](http://localhost:3000)

---

## 🔍 How to Test Each Concept

### ✅ 1. **JWT Authentication**

#### 🔐 Login to Get Token

```http
POST http://localhost:3000/jwt/login
Content-Type: application/json

{
  "username": "john",
  "password": "123456"
}
```

#### 🔒 Access Protected Route

```http
GET http://localhost:3000/jwt/profile
Authorization: Bearer <your_token_here>
```

---

### ✅ 2. **Session-Based Authentication**

#### 🍪 Login to Start Session

```http
POST http://localhost:3000/session/login
Content-Type: application/json

{
  "username": "john",
  "password": "123456"
}
```

#### 👤 Get Session Profile

```http
GET http://localhost:3000/session/profile
```

> Make sure your HTTP client (like Postman) stores cookies between requests.

---

### ✅ 3. **Data Validation**

* Send an invalid username (too short) to either login endpoint:

```json
{
  "username": "jo",
  "password": "123"
}
```

✅ Expected Response:

```json
{
  "error": "\"username\" length must be at least 3 characters long"
}
```

---

### ✅ 4. **Data Sanitization**

#### 🧼 Clean User Input

```http
POST http://localhost:3000/sanitize
Content-Type: application/json

{
  "bio": "<script>alert('XSS')</script><p>Hello</p>"
}
```

✅ Expected Response:

```json
{
  "sanitizedBio": "<p>Hello</p>"
}
```

---

### ✅ 5. **Security Headers and CORS**

# CORS (Cross Origin Resource Sharing)
# Origin: () Protocol + Domain + Port )

* Helmet adds secure headers (verify via browser DevTools)
* CORS allows requests from: `http://localhost:5173`

---

### ✅ 6. **Logging and Error Handling**

* Requests log in the terminal using `morgan`
* Try causing an error to trigger centralized logging from `middlewares/errorHandler.js`

---

## 🙋 Default Test User

| Username | Password |
| -------- | -------- |
| `john`   | `123456` |

---

## 📌 Tips

* You can connect this backend to any frontend (like React or Vue)
* To test session routes properly, **enable cookies** in Postman or use a frontend



























## 🔧 What is Middleware?

In web development, **middleware** refers to functions that execute **during the lifecycle of a request** to a server — typically between the **request** and the **response**.

In frameworks like [Express.js](w), middleware functions have access to:

```js
(req, res, next) => { /* logic here */ }
```

* `req`: the incoming request object
* `res`: the outgoing response object
* `next`: a function to pass control to the next middleware

---

## ✅ Why Use Middleware?

Middleware enables **modular, reusable**, and **centralized** handling of cross-cutting concerns like:

* **Logging**
* **Authentication/authorization**
* **Error handling**
* **Security (rate limiting, input validation)**
* **Body parsing**

---

## 🔍 1. Logging Middleware

### 📘 What it does:

Logs incoming requests and useful info (timestamp, route, method, etc.)

### 💡 Why:

Helps in **debugging**, **monitoring**, and **auditing** requests.

### 🛠️ Example:

```js
// logger.js
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // move to next middleware
};

module.exports = logger;
```

```js
// app.js
const express = require('express');
const logger = require('./logger');

const app = express();
app.use(logger); // apply globally

app.get('/', (req, res) => {
  res.send('Hello World');
});
```

---

## 🚨 2. Error Handling Middleware

### 📘 What it does:

Catches and processes **errors** thrown during request handling.

### 💡 Why:

Prevents server crashes and returns **user-friendly** error messages.

### 🔥 Special structure:

Error-handling middleware has **4 parameters**:

```js
(err, req, res, next)
```

### 🛠️ Example:

```js
// errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Something went wrong!' });
};

module.exports = errorHandler;
```

```js
// app.js
app.get('/crash', (req, res) => {
  throw new Error('Oops!');
});

app.use(errorHandler); // placed after routes
```

---

## 🔐 3. Security Middleware

Security middleware includes various layers of protection, such as:

### a. **Authentication/Authorization**

Checks if the user is logged in and allowed to access a route.

```js
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (token === 'mysecrettoken') {
    next(); // authenticated
  } else {
    res.status(403).json({ error: 'Unauthorized' });
  }
};
```

### b. **Helmet** (popular security middleware)

[Helmet](w) sets HTTP headers to protect against well-known web vulnerabilities:

```bash
npm install helmet
```

```js
const helmet = require('helmet');
app.use(helmet()); // secure headers like X-Content-Type-Options
```

### c. **Rate Limiting**

Prevents abuse by limiting how many requests a user can make.

```bash
npm install express-rate-limit
```

```js
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit per IP
});

app.use(limiter); // apply to all routes
```

---

## 🗺️ Where and How Are Middleware Used?

| Middleware Type        | Where to Apply                       | Use Case                   |
| ---------------------- | ------------------------------------ | -------------------------- |
| Logger                 | Globally (early in chain)            | Log all requests           |
| Authentication         | Route-specific or globally           | Protect sensitive routes   |
| Error Handler          | At the end of middleware stack       | Catch unhandled exceptions |
| Security (Helmet, etc) | Globally                             | Set secure headers         |
| Input Validation       | Per route (via middleware or schema) | Sanitize inputs            |

---

## 🌐 Express Middleware Flow

```text
Incoming Request
   ↓
[ logger middleware ]
   ↓
[ auth middleware ]
   ↓
[ route handler (e.g., GET /api/data) ]
   ↓
[ error handler middleware ]
   ↓
Outgoing Response
```

---

## 🧪 Summary

| Concept            | Purpose                 | How it works                                  |
| ------------------ | ----------------------- | --------------------------------------------- |
| **Logging**        | Monitor & debug         | Logs request data                             |
| **Error Handling** | Graceful error response | Catches errors and sends proper HTTP response |
| **Security**       | Protect server/app      | Auth, headers, rate limit, etc.               |

---
