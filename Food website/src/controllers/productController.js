// controllers/productController.js
const Product = require('../models/Product');

const productController = {
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getProductById: async (req, res) => {
        try {
            const productId = req.params.productId;
            const product = await Product.findById(productId);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json(product);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createProduct: async (req, res) => {
        try {
            const newProduct = new Product(req.body);
            await newProduct.save();
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    updateProduct: async (req, res) => {
        try {
            const productId = req.params.productId;
            const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
            if (!updatedProduct) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json(updatedProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const productId = req.params.productId;
            const deletedProduct = await Product.findByIdAndDelete(productId);
            if (!deletedProduct) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json({ message: 'Product deleted successfully' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = productController;
