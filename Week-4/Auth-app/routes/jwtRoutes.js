const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const validateUser = require('../utils/validateUser');
const verifyJWT = require('../middlewares/jwtMiddleware');

const SECRET = 'my_secret_key';
const users = [{ id: 1, username: 'john', password: '123456' }];

router.post('/login', (req, res) => {
  const { error, value } = validateUser(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const { username, password } = value;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

router.get('/profile', verifyJWT, (req, res) => {
  res.json({ profile: req.user });
});

module.exports = router;

