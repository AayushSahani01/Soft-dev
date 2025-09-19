import React from 'react';
export default function Products() { 
  const products = [
    {
      id: 1,
      name: "Nike Air Max 270 React",
      price: 299.43,
      oldPrice: 534.33,
      img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1b5ad054-4052-4d4c-81ac-18ab2b5b67f3/air-max-270-react-shoes-XYZ.png",
    },
    {
      id: 2,
      name: "Nike Air Max 270 React",
      price: 299.43,
      oldPrice: 534.33,
      img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1b5ad054-4052-4d4c-81ac-18ab2b5b67f3/air-max-270-react-shoes-XYZ.png",
    },
    {
      id: 3,
      name: "Nike Air Max 270 React",
      price: 299.43,
      oldPrice: 534.33,
      img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1b5ad054-4052-4d4c-81ac-18ab2b5b67f3/air-max-270-react-shoes-XYZ.png",
    },
  ];
  
  return <>
    
      {/* Product Grid */}
      <div className="grid grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  
}