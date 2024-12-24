import React, { useEffect, useState } from 'react';
import axios from '../api/axiosConfig';

const PopularProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products');
        setProducts(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-center">Popular Spirits</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {products.slice(0, 8).map((product) => (
          <div key={product._id} className="p-4 border rounded">
            <img src={product.imageURL} alt={product.name} className="w-full h-40 object-cover" />
            <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
            <p className="text-red-500">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
