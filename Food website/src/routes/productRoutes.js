// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define routes for product operations
router.get('/products', productController.getAllProducts);
router.get('/products/:productId', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:productId', productController.updateProduct);
router.delete('/products/:productId', productController.deleteProduct);

module.exports = router;
