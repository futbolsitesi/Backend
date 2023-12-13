const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/web-app', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('We are connected to the database!');
});

app.use(express.json());

// Auth Routes
app.use('/api/auth', require('./routes/authRoutes'));

// User Routes (For registration, etc.)
app.use('/api/users', require('./routes/userRoutes'));

// Other routes...
app.get('/', (req, res) => {
  res.send('Merhaba Beytullah!');
});

app.listen(port, () => {
  console.log(`Uygulama http://localhost:${port} adresinde çalışıyor.`);
});
