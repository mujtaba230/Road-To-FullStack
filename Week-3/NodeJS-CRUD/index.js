const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [];
let nextId = 11; 

async function fetchInitialUsers() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    users = response.data;
    console.log('Fetched users from JSONPlaceholder.');
  } catch (error) {
    console.error('Failed to fetch users:', error.message);
  }
}

// Home route
app.get('/', (req, res) => {
  res.send('Welcome! Use /users to get data from JSONPlaceholder.');
});

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET single user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// CREATE new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ error: 'Name and email are required' });

  const newUser = { id: nextId++, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// UPDATE user
app.put('/users/:id', (req, res) => {
  const { name, email } = req.body;
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });

  if (name) user.name = name;
  if (email) user.email = email;

  res.json(user);
});

// DELETE user
app.delete('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'User not found' });

  const deletedUser = users.splice(index, 1);
  res.json(deletedUser[0]);
});

// Start server and fetch initial data
app.listen(PORT, async () => {
  await fetchInitialUsers();
  console.log(`User API running at http://localhost:${PORT}`);
});
