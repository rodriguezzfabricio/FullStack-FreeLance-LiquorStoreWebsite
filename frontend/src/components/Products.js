import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosConfig';
import ProductSection from './ProductSection';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Liquor Store</h1>
        <p className="text-center text-gray-700 mb-12">
          Your one-stop shop for premium beverages.
        </p>
        <ProductSection products={products} />
      </div>
    </div>
  );
};

export default Products;
