const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new product
router.post('/products', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json({ message: 'Product added', product });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
