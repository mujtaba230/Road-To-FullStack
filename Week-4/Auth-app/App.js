// 📁 File: app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const session = require('express-session');
const errorHandler = require('./middlewares/errorHandler');
const sessionRoutes = require('./routes/sessionRoutes');
const jwtRoutes = require('./routes/jwtRoutes');
const sanitizeRoutes = require('./routes/sanitizeRoutes');

const app = express();
const PORT = 3000;
const SECRET = 'my_secret_key';

// 🛡️ Security Middleware
app.use(helmet());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(morgan('dev'));
app.use(express.json());

// 🍪 Session Middleware
app.use(session({
  secret: SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set true in production with HTTPS
}));

// Routes
app.use('/session', sessionRoutes);
app.use('/jwt', jwtRoutes);
app.use('/sanitize', sanitizeRoutes);

// Error Handling Middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
