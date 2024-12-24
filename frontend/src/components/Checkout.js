import React, { useState } from 'react';
import axiosInstance from '../api/axiosConfig';

const Checkout = () => {
  const [orderDetails, setOrderDetails] = useState({
    productId: '',
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/payment', {
        productId: orderDetails.productId,
        quantity: orderDetails.quantity,
        paymentMethod: 'card', // PLACEEE HOLDEEEEEEEEEEEEERRRRRRRRRRRRRR!!!!!
      });
      alert(`Payment Successful! ${response.data.message}`);
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('Payment Failed');
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Product ID:
          <input
            type="text"
            name="productId"
            value={orderDetails.productId}
            onChange={handleChange}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={orderDetails.quantity}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
