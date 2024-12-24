import React from "react";

const Gallery = () => {
  const images = [
    "https://lh3.googleusercontent.com/p/AF1QipNGVliyAaoxEg__3iyAYvRoYrumpynCmW2Ync56=s1360-w1360-h1020", // Storefront
    "https://lh3.googleusercontent.com/p/AF1QipPSAxpSsBlixDAcU14wxgXPdgBXqTcdfS_p7IhS=s1360-w1360-h1020", // Store Interior
    "https://lh3.googleusercontent.com/p/AF1QipOtj4EcNKk2pf-EaPaN47T9hinFLxAvoCSFqWPQ=s1360-w1360-h1020", // Wine Section
    "https://lh3.googleusercontent.com/p/AF1QipPJxdwqarynPk-tDItYRqPwjgRWJ95BNr8WL_Ok=s1360-w1360-h1020", // Another Store Image
  ];

  return (
    <section className="bg-gray-100 py-10">
      <h2 className="text-center text-3xl font-bold mb-6">Explore Our Store</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
        {images.map((src, index) => (
          <div key={index} className="relative group">
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
