// const express = require("express");
// const router = express.Router();
// const productController = require('../controllers/productController.js')

// router.get('/', productController.getAllProducts);
// module.exports = router;

const express = require('express');
const router = express.Router();
const { getAllCards } = require('../controllers/productController');

// маршрут /api/cards
router.get('/cards', getAllCards);

module.exports = router;