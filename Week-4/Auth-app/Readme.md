

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

