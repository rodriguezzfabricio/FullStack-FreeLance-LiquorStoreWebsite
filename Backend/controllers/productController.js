const Product = require('../models/productModel');

// Fetch all products in the database
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Add a new product to the database
const addProduct = async (req, res) => {
  const { name, price, description, imageURL, stock, category } = req.body;

  try {
    const product = new Product({ name, price, description, imageURL, stock, category });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to add product' });
  }
};

// Fetch a product by its ID
const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch product' });
  }
};

module.exports = { getAllProducts, addProduct, getProductById };
