// controllers/orderController.js
const Order = require('../models/Order');

const orderController = {
    getAllOrders: async (req, res) => {
        try {
            const orders = await Order.find();
            res.json(orders);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getOrderById: async (req, res) => {
        try {
            const orderId = req.params.orderId;
            const order = await Order.findById(orderId);
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.json(order);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createOrder: async (req, res) => {
        try {
            const newOrder = new Order(req.body);
            await newOrder.save();
            res.status(201).json(newOrder);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    updateOrder: async (req, res) => {
        try {
            const orderId = req.params.orderId;
            const updatedOrder = await Order.findByIdAndUpdate(orderId, req.body, { new: true });
            if (!updatedOrder) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.json(updatedOrder);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    deleteOrder: async (req, res) => {
        try {
            const orderId = req.params.orderId;
            const deletedOrder = await Order.findByIdAndDelete(orderId);
            if (!deletedOrder) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.json({ message: 'Order deleted successfully' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = orderController;
