import React from 'react';

const categories = [
  { name: 'Beer', image: 'https://beverages2u.com/wp-content/uploads/2019/05/bud-light-alum.jpg' },
  { name: 'Wine', image: 'https://www.personalized-engraved-gifts.com/content/images/product_main/engraved_navy_wine_bottle_main.jpg' },
  { name: 'Whiskey', image: 'https://cwspirits.com/cdn/shop/files/jack-daniel-s-whiskey-750-ml-country-wine-and-spirits_500x500@2x.png?v=1718355493' },
  { name: 'Spirits', image: 'https://www.hennessy.com/sites/hennessy_us/files/2020-01/VS.png' },
];

const Categories = () => (
  <div className="my-8">
    <h2 className="text-2xl font-bold text-center">Shop by Category</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
      {categories.map((cat) => (
        <div key={cat.name} className="flex flex-col items-center">
          <img src={cat.image} alt={cat.name} className="w-20 h-20 rounded-full" />
          <p className="mt-1 text-sm">{cat.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Categories;
