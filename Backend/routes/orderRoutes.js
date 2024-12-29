const express = require('express');
const Order = require('../models/Order'); // Ensure this matches the case of the file name
const twilio = require('twilio');
const router = express.Router();

// Twilio Client Initialization
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Route: Create a new order
router.post('/', async (req, res) => {
  console.log('Request Body:', req.body); // Debugging: Log the incoming request body
  const { customerName, contact, deliveryAddress, items, totalAmount } = req.body;

  try {
    // Save the order to the database
    const newOrder = new Order({ customerName, contact, deliveryAddress, items, totalAmount });
    await newOrder.save();

    // Format items for SMS notification
    const formattedItems = items
      .map((item) => `${item.quantity}x ${item.name}`)
      .join('\n');

    // Construct the SMS notification body
    const messageBody = `
New Order Received:
- Customer: ${customerName}
- Contact: ${contact}
- Delivery Address: ${deliveryAddress || 'Pickup'}
- Items:\n${formattedItems}
- Total Amount: $${totalAmount.toFixed(2)}
    `;

    // Send the SMS notification using Twilio
    await twilioClient.messages.create({
      body: messageBody,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.WORK_PHONE_NUMBER,
    });

    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    console.error('Error placing order:', error.message);
    res.status(500).json({ message: 'Error placing order', error: error.message });
  }
});

// Route: Fetch all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error.message);
    res.status(500).json({ message: 'Error fetching orders', error: error.message });
  }
});

// Route: Fetch a single order by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error('Error fetching order:', error.message);
    res.status(500).json({ message: 'Error fetching order', error: error.message });
  }
});

// Route: Delete an order by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findByIdAndDelete(id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error('Error deleting order:', error.message);
    res.status(500).json({ message: 'Error deleting order', error: error.message });
  }
});

module.exports = router;
