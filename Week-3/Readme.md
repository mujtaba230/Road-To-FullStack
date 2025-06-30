
### 🌐 **HTTP (HyperText Transfer Protocol)**

* HTTP is the protocol used for communication between a client (like a browser or mobile app) and a web server.
* It works using a **request-response model**: the client sends a request, and the server responds.
* Common HTTP methods include:

  * `GET` – Fetches data (e.g., retrieve user info)
  * `POST` – Submits data (e.g., create a new user)
  * `PUT` – Updates existing data (replaces entire resource)
  * `PATCH` – Partially updates a resource
  * `DELETE` – Deletes a resource
* HTTP is stateless by default, meaning each request is independent.



### 🔁 **RESTful APIs**

* REST (Representational State Transfer) is a **design principle** for building APIs using HTTP.
* A RESTful API treats everything as a **resource** (like users, products, posts).
* Each resource is accessed using a **unique URL**. For example: `/api/users/1`.
* The type of operation on the resource is determined by the HTTP method used (GET, POST, etc.).
* REST principles:

  * Stateless: Each request contains all information needed to process it.
  * Uniform Interface: Consistent structure for endpoints and actions.
  * Client-Server Separation: Frontend and backend are decoupled.
  * Cacheable: Responses can be cached to improve performance.
  * Layered System: APIs can be behind gateways, load balancers, etc.

---

### 📊 **HTTP Status Codes Overview**

## Success Codes

* **200 OK** – The request was successful, and the server returned the expected response.
* **201 Created** – A new resource was created successfully (usually after a POST request).
* **204 No Content** – The request was successful, but there's no content to return.

## Client Errors

* **400 Bad Request** – The client sent invalid data (e.g., missing required fields).
* **401 Unauthorized** – Authentication is required or the token is missing/invalid.
* **403 Forbidden** – The user is authenticated but doesn’t have permission.
* **404 Not Found** – The requested resource does not exist.
* **409 Conflict** – There’s a conflict, such as trying to create a duplicate record.

## Server Errors

* **500 Internal Server Error** – Something went wrong on the server.
* **503 Service Unavailable** – The server is temporarily overloaded or under maintenance.

---

### ⚙️ Example API Request and Response

**Request:**

```http
GET /api/products/1 HTTP/1.1
Host: example.com
Authorization: Bearer <token>
```

**Response:**

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 1,
  "name": "Laptop",
  "price": 999.99
}
```

---

## ✅ 1) **HTTP Request-Response Format and Complete Communication Flow**

### 📥 **Request Format (Client → Server)**

When a client (like a browser or mobile app) sends a request to a server, it contains:

#### 🔹 **Request Line**

* Example: `GET /api/users/5 HTTP/1.1`

  * `GET`: HTTP method
  * `/api/users/5`: resource path (URI)
  * `HTTP/1.1`: HTTP version

#### 🔹 **Headers**

* Provide metadata (info about the request)
* Examples:

  * `Content-Type: application/json` (data format)
  * `Authorization: Bearer <token>` (for secure access)
  * `User-Agent: Chrome/114.0` (client info)

#### 🔹 **Body** (only for methods like POST, PUT, PATCH)

* Contains the actual data being sent (usually in JSON)

```json
{
  "name": "Ali",
  "email": "ali@example.com"
}
```

---

### 📤 **Response Format (Server → Client)**

#### 🔹 **Status Line**

* Example: `HTTP/1.1 200 OK`

  * `200`: status code
  * `OK`: meaning of the code

#### 🔹 **Headers**

* Like: `Content-Type: application/json`, `Set-Cookie`, etc.

#### 🔹 **Body**

* Contains the data being returned, usually in JSON or HTML

```json
{
  "id": 5,
  "name": "Ali",
  "email": "ali@example.com"
}
```

---

### 🔄 **Complete Flow of Communication**

1. **Client prepares a request**

   * Chooses an HTTP method (GET, POST, etc.)
   * Adds required headers (auth token, content-type)
   * Includes body if needed (POST, PUT, etc.)

2. **Request is sent over the internet** to the API server (e.g., `api.example.com`).

3. **Server receives the request**

   * Parses the request
   * Verifies authentication (if needed)
   * Processes data, accesses the database, etc.

4. **Server prepares a response**

   * Sets status code (e.g., 200, 404, 500)
   * Adds headers (e.g., `Content-Type`)
   * Sends a JSON response body (if applicable)

5. **Client receives the response**

   * Parses the status code
   * Reads the data
   * Shows result to the user or acts on it



### 🔹 API Design:

* URL/Endpoint: `/api/products/10`
* Method: `GET` (to fetch data)
* Resource: `products`
* ID: `10` (specific product)

---

### 📤 Client Request:

```http
GET /api/products/10 HTTP/1.1
Host: shop.example.com
Authorization: Bearer abc123token
Content-Type: application/json
```

---

### 📥 Server Response:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 10,
  "name": "Wireless Mouse",
  "price": 1200,
  "inStock": true
}
```


**JSON formatting** refers to the structure and organization of data using **JSON (JavaScript Object Notation)** — a lightweight, text-based format used for storing and exchanging data.

---

### 🔹 What is JSON?

JSON is a way to represent structured data as **key-value pairs**, similar to how objects work in many programming languages. It is commonly used in web applications to exchange data between a **client** and a **server**.



### 🔹 Basic Rules of JSON Formatting:

1. **Data is in key/value pairs**:
   `"name": "John"`

2. **Data is separated by commas**:
   `"age": 25, "city": "Lahore"`

3. **Curly braces `{}` hold objects**:

   ```json
   {
     "name": "John",
     "age": 25
   }
   ```

4. **Square brackets `[]` hold arrays**:

   ```json
   {
     "fruits": ["apple", "banana", "mango"]
   }
   ```

5. **Keys must be strings (in double quotes)**

6. **Values can be**:

   * Strings (in double quotes)
   * Numbers
   * Boolean (`true`, `false`)
   * Arrays
   * Objects
   * `null`



### 🔹 Example of Properly Formatted JSON:

```json
{
  "employee": {
    "name": "Ali",
    "age": 30,
    "department": "IT",
    "skills": ["JavaScript", "Python", "React"],
    "isPermanent": true
  }
}
```



Use **GraphQL** when your project needs:

### 1. **Flexible, Custom Data Fetching**

* Clients can ask **only for the data they need** — nothing more, nothing less.
* Perfect for **mobile apps**, **SPAs**, or multiple frontends.

> 📌 Example: A mobile app only wants `name` and `email`, not the full user object.

---

### 2. **Multiple Resources in a Single Request**

* GraphQL can fetch related data in one request (no multiple API calls).

> 📌 Example: `user -> posts -> comments` in one query.

---

### 3. **Rapid Frontend Iteration**

* Frontend teams can change queries **without waiting for backend changes**.
* GraphQL APIs are **self-documenting** with tools like GraphiQL.

---

### 4. **Complex or Deeply Nested Data**

* REST can get messy when fetching deeply related data.
* GraphQL is designed for **nested queries**.

---

### 5. **You’re Building a Public API / BFF (Backend-for-Frontend)**

* GraphQL makes a good choice for:

  * Microservices aggregation
  * Exposing APIs to 3rd parties with flexible contracts

---

## 🚫 **When *Not* to Use GraphQL**

Avoid GraphQL when:

### 1. **You Just Need Simple CRUD APIs**

* For simple Create/Read/Update/Delete operations, **REST is faster to build** and easier to cache.

> 📌 Example: Admin dashboards with basic CRUD needs.

---

### 2. **High Caching Efficiency Is Needed**

* REST uses HTTP caching (GET/POST with cache headers) easily.
* GraphQL requires **custom server-side caching**, which is complex.

---

### 3. **File Uploads**

* REST handles file uploads (like via `multipart/form-data`) more naturally.
* GraphQL needs special libraries/workarounds.

---

### 4. **Small Team or Short Project Timeline**

* GraphQL has a learning curve (types, schemas, resolvers, etc.).
* REST is often **quicker to prototype** if your team already knows it.

---

### 5. **Authorization is Per-Endpoint**

* REST makes RBAC (role-based access) easier by separating endpoints.
* GraphQL requires more **fine-grained control** inside resolvers.

---

## 🧠 Summary: GraphQL vs REST

| Need                       | Best Choice |
| -------------------------- | ----------- |
| Customizable queries       | GraphQL     |
| Simple endpoints           | REST        |
| Deeply nested data         | GraphQL     |
| Built-in caching           | REST        |
| Rapid frontend flexibility | GraphQL     |
| File uploads / binary data | REST        |

---





### What is cURL?

[`cURL`](w) stands for **Client for URLs**. It is a command-line tool and a library (`libcurl`) used to transfer data to or from a server using a variety of [protocols](w), including:

* [HTTP](w)/[HTTPS](w)
* [FTP](w)
* [SFTP](w)
* [SMTP](w)
* [LDAP](w)
* [FILE](w)
* and many more.

It is widely used for **testing APIs**, downloading files, uploading data, and automating web requests.

---

### Basic Syntax

```bash
curl [options] [URL]
```

---

### Common Use Cases & Examples

#### 1. **GET Request (Default)**

```bash
curl https://api.example.com/data
```

* Retrieves data from the specified URL.

#### 2. **Save Output to a File**

```bash
curl -o output.json https://api.example.com/data
```

* `-o` saves the response to a file instead of printing it.

#### 3. **Add Headers**

```bash
curl -H "Authorization: Bearer TOKEN" https://api.example.com/data
```

* `-H` is used to set custom headers (like tokens, content-type, etc.).

#### 4. **POST Request**

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"John"}' https://api.example.com/users
```

* `-X` specifies the request method.
* `-d` sends data in the request body.

#### 5. **PUT Request**

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"name":"John Updated"}' https://api.example.com/users/1
```

#### 6. **Delete Request**

```bash
curl -X DELETE https://api.example.com/users/1
```

---

### Useful Options

| Option             | Description                                        |
| ------------------ | -------------------------------------------------- |
| `-v`               | Verbose mode – shows full request/response details |
| `-i`               | Includes HTTP response headers in the output       |
| `-L`               | Follow redirects                                   |
| `-u`               | Provide credentials (`username:password`)          |
| `--data-urlencode` | URL-encodes the data before sending                |
| `--form` or `-F`   | Used to upload files (multipart/form-data)         |

---

### Real Example (API Testing)

```bash
curl -X POST https://reqres.in/api/users \
-H "Content-Type: application/json" \
-d '{"name": "Syed", "job": "developer"}'
```

📌 This sends a POST request with JSON data to an API and returns a response with user data.

---

### Advanced Features

* Works with cookies (`--cookie`, `--cookie-jar`)
* Proxy support (`--proxy`)
* SSL options (`--insecure`, `--cert`)
* Rate limiting and retries (`--limit-rate`, `--retry`)

---

### Why is cURL Important?

* It’s **cross-platform** and available on most operating systems.
* It supports **many protocols**, making it versatile.
* It’s **scriptable**, which makes it ideal for automation.
* Essential for **API testing and debugging**.

---

### cURL vs Postman

| Feature        | cURL         | Postman                        |
| -------------- | ------------ | ------------------------------ |
| Interface      | Command-line | GUI                            |
| Scriptable     | Yes          | No (but supports test scripts) |
| Automation     | Easy         | Medium (Collection Runner)     |
| Learning Curve | Medium       | Easy                           |
