const express = require('express');
const router = express.Router();
const validateUser = require('../utils/validateUser');

const users = [{ id: 1, username: 'john', password: '123456' }];

router.post('/login', (req, res) => {
  const { error, value } = validateUser(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const { username, password } = value;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  req.session.user = { id: user.id, username: user.username };
  res.json({ message: 'Session login successful' });
});

router.get('/profile', (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'Not authenticated' });
  res.json({ profile: req.session.user });
});

module.exports = router;