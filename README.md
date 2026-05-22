This project is a Full Stack User Management Application built using:

* React.js
* Vite
* Node.js
* Express.js
* MongoDB

The application allows users to:

* Add Users
* Display User List
* Manage User Data
* Create Reusable UI Components
* Connect Frontend with Backend APIs

The project demonstrates full-stack development using modern technologies and component-based architecture.

---

# 🚀 Features

## ✅ User Management

* Add new users
* Display all users
* Manage user information

---

## ✅ Frontend Development

* Reusable React components
* Responsive UI
* Component-based structure

---

## ✅ Backend API

* Create REST APIs
* Connect MongoDB database
* Handle user requests

---

## ✅ Full Stack Integration

* Frontend communicates with backend APIs
* Backend stores data in MongoDB

---

# 📂 Project Structure

```bash id="l2v8n3"
User-Management-App/
│
├── Backend/
│   │
│   ├── APIs/
│   │   └── UserApi.js
│   │
│   ├── Models/
│   │   └── UserModel.js
│   │
│   ├── .env
│   └── server.js
│
├── Frontend/
│   │
│   ├── public/
│   │   └── vite.svg
│   │
│   ├── src/
│   │   │
│   │   ├── Components/
│   │   │   ├── AddUser.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── RootLayout.jsx
│   │   │   ├── User.jsx
│   │   │   └── UserList.jsx
│   │   │
│   │   ├── assets/
│   │   │   └── react.svg
│   │   │
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── package-lock.json
│
├── Req.http
├── package.json
└── package-lock.json
```

---

# 📘 Technologies Used

| Technology | Purpose             |
| ---------- | ------------------- |
| React.js   | Frontend Library    |
| Vite       | Frontend Build Tool |
| Node.js    | Runtime Environment |
| Express.js | Backend Framework   |
| MongoDB    | Database            |
| Mongoose   | Database Modeling   |
| CSS        | Styling             |

---

# 📌 Frontend Concepts

---

# 🔹 React.js

## Definition

React.js is a JavaScript library used for building dynamic user interfaces.

### Features

* Component-based architecture
* Fast rendering
* Reusable UI components

---

# 🔹 JSX

## Definition

JSX allows writing HTML inside JavaScript.

### Example

```jsx id="o7x1b4"
function App() {
  return <h1>Hello React</h1>;
}
```

---

# 🔹 Components

## Definition

Components are reusable UI blocks in React.

### Components Used

| Component      | Purpose             |
| -------------- | ------------------- |
| Header.jsx     | Application header  |
| Footer.jsx     | Footer section      |
| Home.jsx       | Home page           |
| AddUser.jsx    | Add new user form   |
| User.jsx       | Single user display |
| UserList.jsx   | Display all users   |
| RootLayout.jsx | Main page layout    |

---

# 🔹 Props

## Definition

Props are used to pass data between components.

### Example

```jsx id="w5t3r8"
<User name="Ravi" />
```

---

# 🔹 State

## Definition

State stores dynamic data inside components.

### Example

```jsx id="q1m9c7"
const [users, setUsers] = useState([]);
```

---

# 🔹 Event Handling

## Definition

React handles user interactions using events.

### Example

```jsx id="k4v2n6"
<button onClick={handleSubmit}>
  Submit
</button>
```

---

# 📌 Backend Concepts

---

# 🔹 Node.js

## Definition

Node.js is a runtime environment used to execute JavaScript outside the browser.

---

# 🔹 Express.js

## Definition

Express.js is a lightweight framework used for building backend APIs.

### Example

```js id="x7h3l1"
const express = require("express");
const app = express();
```

---

# 🔹 REST API

## Definition

REST APIs enable communication between frontend and backend.

### HTTP Methods

| Method | Purpose     |
| ------ | ----------- |
| GET    | Fetch data  |
| POST   | Add data    |
| PUT    | Update data |
| DELETE | Remove data |

---

# 🔹 MongoDB

## Definition

MongoDB is a NoSQL database used to store application data.

### Features

* Flexible schema
* JSON-like documents
* Easy scalability

---

# 🔹 Mongoose

## Definition

Mongoose is used for MongoDB schema modeling in Node.js.

---

# 📄 Backend Files

---

# 📄 UserApi.js

## Purpose

Handles user-related API operations.

### Features

* Add users
* Fetch users
* Handle API requests

---

# 📄 UserModel.js

## Purpose

Defines schema for user data.

### Example Fields

* Name
* Email
* Age
* Role

---

# 📄 server.js

## Purpose

Main backend server file.

### Features

* Express server setup
* Database connection
* API routing

---

# 📌 Frontend Workflow

```text id="r9y6m2"
User Interaction
       ↓
React Component
       ↓
API Request Sent
       ↓
Express Backend
       ↓
MongoDB Database
       ↓
Response Returned
       ↓
UI Updated
```

---

# 📌 Backend Workflow

```text id="z4x1b8"
Client Request
      ↓
Express Server
      ↓
API Route
      ↓
MongoDB Database
      ↓
Response Sent Back
```

---

# 📌 CSS Styling

## Purpose

Used for:

* Layout design
* Responsive UI
* Component styling

Files:

* App.css
* index.css

---

# 📌 Vite

## Definition

Vite is a fast frontend build tool used for React applications.

### Advantages

* Fast startup
* Hot Module Replacement
* Optimized builds

---

# ▶ How to Run the Project

---

# 🔹 Backend Setup

## Step 1: Navigate to Backend

```bash id="q5n8w1"
cd Backend
```

---

## Step 2: Install Dependencies

```bash id="v7m2x4"
npm install
```

---

## Step 3: Start Backend Server

```bash id="u4z6k9"
node server.js
```

OR

```bash id="f1x3r7"
nodemon server.js
```

---

# 🔹 Frontend Setup

## Step 1: Navigate to Frontend

```bash id="n8v5k1"
cd Frontend
```

---

## Step 2: Install Dependencies

```bash id="w2m4r9"
npm install
```

---

## Step 3: Start Frontend

```bash id="d6x7p3"
npm run dev
```

---

## Step 4: Open Browser

```text id="t4m8z1"
http://localhost:5173
```

---

# 📌 Environment Variables

## `.env`

Used to store sensitive information like:

* MongoDB URL
* Port number

### Example

```env id="b9v2n5"
MONGO_URL=your_mongodb_connection_string
PORT=5000
```

---

# 📌 API Testing

## Req.http

Used for testing backend APIs directly.

### Common Requests

* Add User
* Fetch Users

---

# 📚 Learning Outcomes

After completing this project, the following concepts are understood:

* Full Stack Development
* React Fundamentals
* Component-Based Architecture
* REST API Development
* MongoDB Integration
* Frontend & Backend Communication
* State Management
* CRUD Operations

---

# 🛠 Tools Used

* VS Code
* React.js
* Vite
* Node.js
* MongoDB Compass
* Postman
* GitHub

---

# 📌 Real-World Use Cases

| Feature          | Real-World Example      |
| ---------------- | ----------------------- |
| User Management  | Admin dashboards        |
| REST APIs        | Web applications        |
| Database Storage | Enterprise apps         |
| Component UI     | Modern frontend systems |

---

# 📌 Conclusion

This User Management Application demonstrates complete full-stack web development using React.js, Node.js, Express.js, and MongoDB. The project includes frontend UI development, backend API creation, database integration, and dynamic user management using modern web technologies and scalable project structure.
