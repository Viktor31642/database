// const express = require("express");
// const router = express.Router();
// const productController = require('../controllers/productController.js')

// router.get('/', productController.getAllProducts);
// module.exports = router;

const express = require('express');
const router = express.Router();
const { getAllCards, addCard } = require('../controllers/productController');

// GET — отримати всі картки
router.get('/cards', getAllCards);

// POST — додати нову картку
router.post('/cards', addCard);

module.exports = router;