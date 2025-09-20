import React from "react";
import { MdOutlineStar } from "react-icons/md";

const products = [
  {
    id: 1,
    title: "Nike Air Max 270 React",
    image: "./public/image Product.png",
    price: 299.43,
    oldPrice: 534.33,
    discount: 24,
    rating: 4,
    isHot: true,
  },
  {
    id: 2,
    title: "Nike Air Max 270 React",
    image: "./public/bags.png",
    price: 299.43,
    oldPrice: 534.33,
    discount: 24,
    rating: 5,
    isHot: false,
  },
  {
    id: 3,
    title: "Nike Air Max 270 React",
    image: "./public/bagslast.png",
    price: 299.43,
    oldPrice: 534.33,
    discount: 24,
    rating: 3,
    isHot: true,
  },
  {
    id: 4,
    title: "Nike Air Max 270 React",
    image: "public/Product Picture02.png",
    price: 299.43,
    oldPrice: 534.33,
    discount: 24,
    rating: 4,
    isHot: true,
  },
  {
    id: 5,
    title: "Nike Air Max 270 React",
    image: "./public/nike.png",
    price: 299.43,
    oldPrice: 534.33,
    discount: 24,
    rating: 4,
    isHot: false,
  },
  {
    id: 6,
    title: "Nike Air Max 270 React",
    image: "./public/nike01.png",
    price: 299.43,
    oldPrice: 534.33,
    discount: 24,
    rating: 4,
    isHot: true,
  },
];

function ProductCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 space-y-4">
      {products.map((product) => (
        <div
          key={product.id}
          className={`relative rounded-md overflow-hidden flex flex-col items-center justify-center space-y-2 shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-108
            `}
        >
          {
            <div className="hot-tag absolute top-0.5 left-1 text-[16px] px-2 py-1 rounded-sm">
              Hot
            </div>
          }

          <img
            src={product.image} 
            alt={product.title}
            className="w-full h-40 bg-center object-cover "
          />
          <div className="flex flex-col text-center  justify-center items-center ">
            <h4
              style={{
                color: "rgba(34, 50, 99, 1)",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "150%",
                letterSpacing: "0.6px",
              }}
            >
              {product.title}
            </h4>

            <div className=" text-yellow-400 mb-2 text-[15.89px] justify-center items-center inline-block">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={i < product.rating ? "" : "text-gray-400"}
                >
                  <MdOutlineStar className="inline-block w-5 h-4" />
                </span>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                gap: "15px",
                paddingBottom: "1rem",
              }}
            >
              <span
                style={{
                  color: "rgba(64, 191, 255, 1)",
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "150%",
                  letterSpacing: "0.5px",
                }}
              >
                ${product.price}
              </span>
              <span className="line-through text-gray-400 pt-0.5">
                ${product.oldPrice}
              </span>
              <span
                className="text-[15.89px] font-medium"
                style={{ color: "rgb(255, 102, 102)" }}
              >
                {product.discount}% Off
              </span>
            </div>
          </div>
        </div>
      ))}
      </div>
  );
}

export default ProductCard;
