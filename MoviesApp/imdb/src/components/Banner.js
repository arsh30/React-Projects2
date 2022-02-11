import React from "react";
import Image from "../banner.png";

function Banner() {
  return (
    <div>
      <div
        className={`bg-[url(${Image})] h-[40vh] md:h-[60vh]
         bg-center bg-cover flex items-end`}
      >
        <div className="text-xl md:text-3xl text-white p-4 bg-gray-900 w-full flex justify-center bg-opacity-50">
          Spider-Man: No way Home
        </div>
      </div>
    </div>
  );
}

export default Banner;
