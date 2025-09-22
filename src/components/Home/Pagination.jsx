import React from "react";

const Pagination = () => {
  const NumberOfPages = [1, 2, 3, 4, 5];
  return (
    <div className="min-sm:pt-12 min-lg:pt-12 min-xl:pt-0">
      <div className="flex justify-center bg-slate-100 p-0.5 text-gray-700 mt-6 ">
        {NumberOfPages.map((p) => (
          <button
            key={p}
            type="button"
            className="px-6 py-3.5 shadow-sm hover:shadow-lg transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white    rounded-md border-transparent font-medium cursor-pointer"
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
