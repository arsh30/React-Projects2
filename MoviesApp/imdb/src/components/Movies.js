import React from "react";
import Image from "../banner.png";

function Movies() {
  return (
    <div className="mb-8">
      <div className="mt-8 mb-8 font-bold text-2xl text-center">
        Trending Movies
      </div>
      <div className="flex flex-wrap justify-center">
        <div
          className={` 
          mb-8
          m-4
          bg-[url(${Image})] 
          md: h-[30vh] w-[250px]
          h-[25vh] w-[150px]
          bg-center bg-cover 
          flex items-end 
         rounded-2xl
         hover:scale-110
                ease-out duration-300
                cursor-pointer`}
        >
          <div className="w-full bg-gray-900 text-white text-center py-2 font-bold rounded-b-xl">
            Title
          </div>{" "}
          {/*Add Card */}
        </div>
        <div
          className={` 
          mb-8
          m-4
          bg-[url(${Image})] 
          md: h-[30vh] w-[250px]
          h-[25vh] w-[150px]
          bg-center bg-cover 
          flex items-end 
         rounded-2xl
         hover:scale-110
                ease-out duration-300
                cursor-pointer`}
        >
          <div className="w-full bg-gray-900 text-white text-center py-2 font-bold rounded-b-xl">
            Title
          </div>{" "}
          {/*Add Card */}
        </div>

        <div
          className={` 
          mb-8
          m-4
          bg-[url(${Image})] 
          md: h-[30vh] w-[250px]
          h-[25vh] w-[150px]
          bg-center bg-cover 
          flex items-end 
         rounded-2xl
         hover:scale-110
                ease-out duration-300
                cursor-pointer`}
        >
          <div className="w-full bg-gray-900 text-white text-center py-2 font-bold rounded-b-xl">
            Title
          </div>{" "}
          {/*Add Card */}
        </div>
        <div
          className={` 
          mb-8
          m-4
          bg-[url(${Image})] 
          md: h-[30vh] w-[250px]
          h-[25vh] w-[150px]
          bg-center bg-cover 
          flex items-end 
         rounded-2xl
         hover:scale-110
                ease-out duration-300
                cursor-pointer`}
        >
          <div className="w-full bg-gray-900 text-white text-center py-2 font-bold rounded-b-xl">
            Title
          </div>{" "}
          {/*Add Card */}
        </div>
        <div
          className={` 
          mb-8
          m-4
          bg-[url(${Image})] 
          md: h-[30vh] w-[250px]
          h-[25vh] w-[150px]
          bg-center bg-cover 
          flex items-end 
         rounded-2xl
         hover:scale-110
                ease-out duration-300
                cursor-pointer`}
        >
          <div className="w-full bg-gray-900 text-white text-center py-2 font-bold rounded-b-xl">
            Title
          </div>{" "}
          {/*Add Card */}
        </div>
        <div
          className={` 
          mb-8
          m-4
          bg-[url(${Image})] 
          md: h-[30vh] w-[250px]
          h-[25vh] w-[150px]
          bg-center bg-cover 
          flex items-end 
         rounded-2xl
         hover:scale-110
                ease-out duration-300
                cursor-pointer`}
        >
          <div className="w-full bg-gray-900 text-white text-center py-2 font-bold rounded-b-xl">
            Title
          </div>{" "}
          {/*Add Card */}
        </div>
      </div>
    </div>
  );
}

export default Movies;
