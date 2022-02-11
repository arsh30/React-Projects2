import React from 'react'

function Pagination() {
  return (
    <div>
      <div
        className="buttons w-full 
          flex justify-center mb-8"
      >
        <button className="p-2 border border-indigo-500 rounded-l-xl text-indigo-500 border-r-0 ">
          Previous
        </button>
        <button className="p-2 border border-indigo-500 bg-gray-400 text-indigo-500">
          1
        </button>
        <button className="p-2 border border-indigo-500  text-indigo-500 rounded-r-xl border-l-0">
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination