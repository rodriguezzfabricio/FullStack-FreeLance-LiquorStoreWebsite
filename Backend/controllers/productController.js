const Product = require('../models/productModel');

// Fetches all products in the database.
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Adds a new product to the database.
const addProduct = async (req, res) => {
  const { name, price, description, imageURL, stock } = req.body;

  try {
    const product = new Product({ name, price, description, imageURL, stock });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add product' });
  }
};



module.exports = { getAllProducts, addProduct };
