import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import axios from '../api/axiosConfig';

const CategoryProducts = () => {
  const { category } = useParams(); // Get category from URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/products/category/${category}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching category products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div>
      <h2>{category} Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <img src={product.imageURL} alt={product.name} width="100" />
            <p>{product.name} - ${product.price}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryProducts;
