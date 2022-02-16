import React, { useState } from "react";

function Pagination() {
  let [pageNumber, setPage] = useState(1);
  function goAhead() {
    setPage(pageNumber + 1);
  }
  function goBehind() {
    if (pageNumber > 1) setPage(pageNumber - 1);
  }
  return (
    <div>
      <div
        className="buttons w-full 
          flex justify-center mb-8"
      >
        <button
          className="p-2 border border-indigo-500 rounded-l-xl text-indigo-500 border-r-0"
          onClick={() => goBehind()}
        >
          prev
        </button>
        <button className="p-2 border border-indigo-500 bg-gray-400 text-indigo-500">
          {pageNumber}
        </button>
        <button
          className="p-2 border border-indigo-500  text-indigo-500 rounded-r-xl border-l-0"
          onClick={() => goAhead()}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
