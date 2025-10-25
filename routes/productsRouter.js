// const express = require("express");
// const router = express.Router();
// const productController = require('../controllers/productController.js')

// router.get('/', productController.getAllProducts);
// module.exports = router;

const express = require('express');
const router = express.Router();
const { getAllCards, getCard, addCard, updateCard, deleteCard } = require('../controllers/productController');

// GET — отримати всі картки
router.get('/cards', getAllCards);

// Отримати одну картку за ID
router.get('/cards/:id', getCard);

// POST — додати нову картку
router.post('/cards', addCard);

// Оновити картку
router.put('/cards/:id', updateCard);

// Видалити картку за ID
router.delete('/cards/:id', deleteCard);

module.exports = router;