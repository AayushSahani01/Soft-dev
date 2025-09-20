
    import React from "react";

const Pagination = () => {

  const NumberOfPages = [1,2,3,4,5];
  return (
    <div className="flex justify-center bg-slate-100 p-0.5 gap-2 text-gray-700 mt-6 space-x-4">
      { NumberOfPages.map((p) => (
        <button
          key={p}
          type="button"
          className="px-5 py-3 shadow-sm hover:shadow-lg transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white rounded-md border-transparent font-bold cursor-pointer">
          {p}
        </button>
      ))} 
    </div>
  );
};

export default Pagination;
