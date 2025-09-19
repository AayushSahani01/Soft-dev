
    import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center bg-slate-200 p-2.5 text-gray-700 mt-6 space-x-3">
      {[1, 2, 3, 4, 5].map((p) => (
        <button
          key={p}
          className="px-3 py-1 border rounded hover:bg-green-600 hover:text-white"
        >
          {p}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
