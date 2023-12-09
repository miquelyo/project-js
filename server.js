const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const db = require('./db/db');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 2001;

app.use('/public', express.static('public', { 'extensions': ['css'] }));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index'); // Sesuaikan dengan nama halaman atau rute yang Anda buat
});

// Endpoint untuk login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Di sini, Anda harus memeriksa kredensial di database
  // Contoh sederhana untuk tujuan demonstrasi
  if (email === 'user@example.com' && password === 'pass123') {
      // Jika kredensial benar, kirim respons berhasil
      res.json({ success: true });
  } else {
      // Jika kredensial salah, kirim respons gagal
      res.json({ success: false });
  }
});
app.get('/dashboard', (req, res) => {
  const username = req.session.username || 'Pengguna Tidak Dikenali';
  res.render('dashboard', { username });
});

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (like images)
app.use(express.static('public'));

// Routes
app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/forgot-password', (req, res) => {
  res.render('forgot-password');
});

// VALIDASI LOGIN
app.post('/login', (req, res) => {
  // Implement your login logic here
  const { username, password } = req.body;
  // Example: Check username and password against a database
  // For simplicity, we'll just check for a hardcoded username and password
  if (username === 'user' && password === 'pass') {
    res.render('dashboard', { username });
  } else {
    res.render('login', { error: 'Invalid credentials' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/login`);
});
