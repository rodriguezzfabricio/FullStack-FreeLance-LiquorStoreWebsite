const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  imageURL: { type: String },
  stock: { type: Number, default: 0 },
  category: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
