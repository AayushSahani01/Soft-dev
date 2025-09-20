import React, { useState } from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: 'Nike Air Max 270 React',
    image: './public/image Product.png',
    price: 299.43,
    oldPrice: 534.33,
    discount: 24,
    rating: 4,
    isHot: true,
  },
  {
    id: 2,
    title: 'Nike Air Max 270 React',
    image: './logo.png',
    price: 299.43,
    oldPrice: 534.33,
    discount: 24,
    rating: 5,
    isHot: false,
  },
  {
    id: 3,
    title: 'Nike Air Max 270 React',
    image: './logo.png',
    price: 299.43,
    oldPrice: 534.33,
    discount: 24,
    rating: 3,
    isHot: true,
  },
  // Add more products...
];

const ProductGrid = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isSelected={selectedId === product.id}
          onClick={() => setSelectedId(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
