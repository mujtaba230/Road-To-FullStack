---

# 🔐 Data Validation, Security & Middleware: A Complete Guide

Week 4 provides an overview of essential backend concepts including:

* ✅ Data Validation & Sanitization
* 🔐 Authentication (JWT vs. Sessions)
* 🚨 Basic Security (OWASP Top 10)
* 🧱 Middleware Concepts
* 🩵 Logging, 🧰 Error Handling, 🔍 Security Checks

---

## 📌 1. Data Validation & Sanitization

### 📜 What is Data Validation?

Ensures incoming data is accurate, complete, and within expected constraints before processing.

#### ✅ Example Use Cases:

* Valid email format
* Password complexity enforcement
* Age within a specific range

### 📜 What is Data Sanitization?

Removes or escapes harmful input like script tags or SQL injection vectors.

#### 🛡️ Common Sanitization Actions:

* Remove HTML/JS tags (`<script>`)
* Trim whitespaces
* Escape special characters

### 📦 Common Libraries

| Language | Validation                                           | Sanitization    |
| -------- | ---------------------------------------------------- | --------------- |
| Node.js  | [`Joi`](https://joi.dev)                             | `sanitize-html` |
| Python   | [`Marshmallow`](https://marshmallow.readthedocs.io/) | `bleach`        |

### 📘️ Node.js Example

```js
const Joi = require('joi');
const sanitizeHtml = require('sanitize-html');

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  bio: Joi.string().optional()
});

const input = {
  name: 'John',
  email: 'john@example.com',
  bio: '<script>alert("xss")</script><p>Hello</p>'
};

const { error, value } = schema.validate(input);
value.bio = sanitizeHtml(value.bio, { allowedTags: ['p'] });
console.log(value);
```

### 🐍 Python Example

```python
from marshmallow import Schema, fields, validate
import bleach

class UserSchema(Schema):
    name = fields.Str(required=True, validate=validate.Length(min=3, max=30))
    email = fields.Email(required=True)
    bio = fields.Str()

input_data = {
    "name": "Jane",
    "email": "jane@example.com",
    "bio": "<script>alert('xss')</script><p>Hello</p>"
}

schema = UserSchema()
validated = schema.load(input_data)
validated['bio'] = bleach.clean(validated['bio'], tags=["p"])
print(validated)
```

---

## 🔐 2. Authentication & Security

### 🆔 Token-Based vs. Session-Based Authentication

| Feature   | Token-based (JWT)      | Session-based            |
| --------- | ---------------------- | ------------------------ |
| Storage   | Client stores JWT      | Server stores session ID |
| Stateless | ✅ Yes                  | ❌ No                     |
| Scalable  | ✅ High                 | ❌ Needs sticky sessions  |
| Use Case  | APIs, SPAs (React/Vue) | Traditional web apps     |

### 🔑 Session-Based Auth

1. Server creates a session and sends session ID via cookie
2. Client sends cookie on each request
3. Server checks session store to authorize

### 🔑 JWT-Based Auth

1. Server signs user info into a token (JWT)
2. Client stores JWT and sends via `Authorization` header
3. Server verifies token without needing a session store

#### JWT Format:

```json
{
  "userId": 123,
  "role": "admin",
  "exp": 1695558720
}
```

```js
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: 123 }, 'your-secret', { expiresIn: '1h' });
```

---

## ⚔️ JWT vs Session – Summary

| Feature        | JWT (Token-based) | Session-based                  |
| -------------- | ----------------- | ------------------------------ |
| Server storage | ❌ Stateless       | ✅ Server-managed session       |
| Scalability    | ✅ Easily scalable | ❌ Hard to scale (Redis needed) |
| Logout control | ❌ Difficult       | ✅ Easy (delete session)        |
| Use in APIs    | ✅ Ideal           | ❌ Less preferred               |

### 📆 When to Use:

| Use Case                 | Recommended |
| ------------------------ | ----------- |
| REST APIs / SPAs         | JWT         |
| Server-rendered websites | Session     |

---

## ⛔️ 3. OWASP Top 10 Security Threats (2023)

1. [Broken Access Control](https://owasp.org)
2. [Cryptographic Failures](https://owasp.org)
3. [Injection Attacks](https://owasp.org)
4. [Insecure Design](https://owasp.org)
5. [Security Misconfiguration](https://owasp.org)
6. [Vulnerable Components](https://owasp.org)
7. [Identification Failures](https://owasp.org)
8. [Data Integrity Failures](https://owasp.org)
9. [Logging Failures](https://owasp.org)
10. [SSRF](https://owasp.org)

---

## 🧰 4. Middleware Concepts

### 🔧 What is Middleware?

Middleware functions handle **requests/responses** in Express.js, Django, etc. They're invoked in sequence.

```js
(req, res, next) => {
  // middleware logic
  next();
}
```

---

## 🔍 5. Types of Middleware

### 🩵 Logging

```js
const morgan = require('morgan');
app.use(morgan('dev'));
```

### 🚫 Error Handling

```js
app.use((err, req, res, next) => {
  console.error('Internal Error:', err.message);
  res.status(500).send('Something broke!');
});
```

### 🔒 Security Checks

```js
const helmet = require('helmet');
const cors = require('cors');

app.use(helmet());
app.use(cors({ origin: 'https://yourapp.com' }));
```

### 🔐 Auth Middleware

```js
const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token === 'validtoken') next();
  else res.status(403).json({ error: 'Unauthorized' });
};
```

---

## 🌐 Express Middleware Flow

```
Incoming Request
   ↓
[ logger middleware ]
   ↓
[ auth middleware ]
   ↓
[ route handler ]
   ↓
[ error handler ]
   ↓
Outgoing Response
```

---

## ✅ Summary

| Area           | Purpose                    | Tools                       |
| -------------- | -------------------------- | --------------------------- |
| Validation     | Ensure correct data        | Joi, Marshmallow            |
| Sanitization   | Remove harmful input       | sanitize-html, bleach       |
| Authentication | Verify user identity       | JWT, Sessions               |
| Security       | Protect from exploits      | Helmet, CORS, rate limiters |
| Logging/Error  | Debugging & auditing       | morgan, winston             |
| Middleware Use | Modular request processing | Express/Django Middleware   |

---

## 🚀 Get Started

```bash
# Node.js
npm install joi sanitize-html helmet cors morgan jsonwebtoken

# Python
pip install marshmallow bleach flask-cors
```

---

## 📚 References

* [OWASP Official Site](https://owasp.org)
* [Joi Validation Docs](https://joi.dev)
* [JWT Introduction](https://jwt.io/introduction)
* [Express Middleware Guide](https://expressjs.com/en/guide/using-middleware.html)
