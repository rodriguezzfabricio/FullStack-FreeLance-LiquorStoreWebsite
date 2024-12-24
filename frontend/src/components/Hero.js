import React from 'react';

const Hero = () => (
  <div className="relative">
    <img src="https://lh3.googleusercontent.com/p/AF1QipNGVliyAaoxEg__3iyAYvRoYrumpynCmW2Ync56=s1360-w1360-h1020" alt="Store Front" className="w-full h-screen object-cover" />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
      <h1 className="text-4xl font-bold">Westlake Wine & Beer</h1>
      <p className="text-lg mt-2">10400 Old Georgetown Rd, 301-530-4555</p>
      <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded">Shop Now</button>
    </div>
  </div>
);

export default Hero;
