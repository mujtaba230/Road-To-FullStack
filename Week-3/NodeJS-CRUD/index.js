const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
  res.send('Welcome to the Users API. Use /users to get data.');
});


app.use(express.json());

let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];
let nextId = 3;

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

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ error: 'Name and email are required' });

  const newUser = { id: nextId++, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});


// UPDATE user by ID
app.put('/users/:id', (req, res) => {
  const { name, email } = req.body;
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });

  if (name) user.name = name;
  if (email) user.email = email;

  res.json(user);
});

// DELETE user by ID
app.delete('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'User not found' });

  const deletedUser = users.splice(index, 1);
  res.json(deletedUser[0]);
});

// Start server
app.listen(PORT, () => {
  console.log(`User API running at http://localhost:${PORT}`);
});
