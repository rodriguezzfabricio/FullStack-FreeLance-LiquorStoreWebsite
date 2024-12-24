import React from 'react';

const ProductSection = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product._id} className="bg-white p-6 shadow-md rounded-lg">
          <img
            src={product.imageURL}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold mb-2">{product.name}</h3>
          <p className="text-gray-700 mb-4">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <button className="bg-purple-600 hover:bg-purple-500 text-white py-2 px-4 rounded transition duration-300">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductSection;
