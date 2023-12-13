// controllers/authController.js
const User = require('../models/User');

const authController = {
  login: async (req, res) => {
    // Kullanıcı girişi işlemleri
    // ...

    res.json({ success: true, message: 'Login successful' });
  },

  register: async (req, res) => {
    // Kullanıcı üyelik işlemleri
    // ...

    res.json({ success: true, message: 'Registration successful' });
  },
};

module.exports = authController;
