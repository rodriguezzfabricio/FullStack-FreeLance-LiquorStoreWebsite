const express = require('express');
const Product = require('../models/productModel');

const router = express.Router();

// Route: Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).json({ message: 'Failed to retrieve products' });
  }
});

// Route: Add a new product
router.post('/', async (req, res) => {
  const { name, price, description, imageURL, stock, category } = req.body;

  try {
    const newProduct = new Product({ name, price, description, imageURL, stock, category });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error('Error adding product:', err.message);
    res.status(500).json({ message: 'Failed to add product' });
  }
});

// Route: Get products by category
router.get('/category/:category', async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (err) {
    console.error('Error fetching products by category:', err.message);
    res.status(500).json({ message: 'Failed to retrieve products by category' });
  }
});

// Route: Update a product by ID
router.put('/:id', async (req, res) => {
  const { name, price, description, imageURL, stock, category } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, description, imageURL, stock, category },
      { new: true } // Return the updated document
    );
    res.json(updatedProduct);
  } catch (err) {
    console.error('Error updating product:', err.message);
    res.status(500).json({ message: 'Failed to update product' });
  }
});

// Route: Delete a product by ID
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error('Error deleting product:', err.message);
    res.status(500).json({ message: 'Failed to delete product' });
  }
});

module.exports = router;
