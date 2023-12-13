// controllers/userController.js
const User = require('../models/User');

const userController = {
  register: async (req, res) => {
    // Kullanıcı üyelik işlemleri
    // ...

    res.json({ success: true, message: 'Registration successful' });
  },
};

module.exports = userController;
