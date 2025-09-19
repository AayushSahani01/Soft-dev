
    import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center bg-slate-100 p-0.5 gap-2 text-gray-700 mt-6 space-x-4">
      {[1, 2, 3, 4, 5].map((p) => (
        <button
          key={p}
          className="px-5 py-3 shadow-sm hover:shadow-lg transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white"
        >
          {p}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
