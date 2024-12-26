const express = require('express');
const Order = require('../models/orderModel');
const twilio = require('twilio');
const router = express.Router();

// Twilio Client Initialization
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Create new order
router.post('/', async (req, res) => {
  const { customerName, email, phone, address, items, totalPrice } = req.body;

  try {
    // Save order to database
    const newOrder = new Order({ customerName, email, phone, address, items, totalPrice });
    await newOrder.save();

    // Format items for SMS
    const formattedItems = items
      .map(
        (item) => `${item.quantity}x ${item.productId.name || item.productId} ($${(item.quantity * item.productId.price).toFixed(2)})`
      )
      .join('\n');

    // Send SMS Notification
    const messageBody = `
New Order Received:
- Customer: ${customerName}
- Phone: ${phone}
- Address: ${address || 'Pickup'}
- Items:\n${formattedItems}
- Total Price: $${totalPrice.toFixed(2)}
    `;

    await twilioClient.messages.create({
      body: messageBody,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.WORK_PHONE_NUMBER,
    });

    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error placing order' });
  }
});

// Fetch all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

module.exports = router;
