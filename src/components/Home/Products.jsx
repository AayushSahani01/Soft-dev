import React from 'react';
import ProductCard from './ProductCard';

  const products = [
    {
      id: 1,
      name: "Nike Air Max 270 React",
      price: 299.43,
      oldPrice: 534.33,
      img: "/image Product.png",
    },
    {
      id: 2,
      name: "Nike Air Max 270 React",
      price: 299.43,
      oldPrice: 534.33,
      img: "/nike.png",
    },
    {
      id: 3,
      name: "Nike Air Max 270 React",
      price: 299.43,
      oldPrice: 534.33,
      img: "/nike01.png",
    },
  ];
  <div className="grid grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

export default products;

