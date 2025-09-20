import React from 'react';

const ProductCard = ({ product}) => {

   if (!product) {
    console.error('Invalid product data:', product);
    return null; 
  }
  return (
    <div
      // onClick={onClick}
      className={`relative bg-slate-400 p-4 rounded-lg shadow-md border-2   cursor-pointer transition-all duration-200 hover:shadow-lg`}
        //   isSelected ? 'border-slate-500' : 'border-transparent'
       // ${
      // }
      
    >
      { 
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          HOT
        </div>
      }

       <img
        src={product.image || 'placeholder-image-url.jpg'} // Add fallback image
        alt={product.title || 'Product'}
        className="w-full h-40 object-cover bg-center mb-4"
      />

      <h4 className="text-sm font-bold mb-2">{product.title}</h4>

      <div className="flex text-yellow-400 mb-2 text-sm">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < product.rating ? '' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>

      {/* Price */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-blue-600 font-bold">${product.price.toFixed(2)}</span>
        <span className="line-through text-gray-400">${product.oldPrice.toFixed(2)}</span>
        <span className="text-red-500 font-semibold">{product.discount}% Off</span>
      </div>
    </div>
  );
};

export default ProductCard;
