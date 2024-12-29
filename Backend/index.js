const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes'); // Import product routes
const paymentRoutes = require('./routes/paymentRoutes'); // Import payment routes
const orderRoutes = require('./routes/orderRoutes'); // Import order routes

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON requests

// Connect to MongoDB
connectDB()
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Base Route for Testing
app.get('/', (req, res) => {
  res.send('Welcome to the Liquor Store API');
});

// API Routes
app.use('/api/products', productRoutes); // Products endpoints
app.use('/api/payments', paymentRoutes); // Payments endpoints
app.use('/api/orders', orderRoutes); // Orders endpoints

// 404 Handler for Undefined Routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ message: 'Server Error', error: err.message });
});

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
