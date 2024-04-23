const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// POST /api/orders - Create a new order
router.post('/orders', orderController.createOrder);

// GET /api/orders - Get all orders
router.get('/orders', orderController.getAllOrders);

// GET /api/orders/:orderId - Get a specific order by ID
router.get('/orders/:orderId', orderController.getOrderById);

// PUT /api/orders/:orderId - Update a specific order by ID
router.put('/orders/:orderId', orderController.updateOrder);

// DELETE /api/orders/:orderId - Delete a specific order by ID
router.delete('/orders/:orderId', orderController.deleteOrder);

module.exports = router;
