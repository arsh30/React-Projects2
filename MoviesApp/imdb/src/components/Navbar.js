import React from "react";
import logo from "../logo.png";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="border-1 flex space-x-8 pl-12 items-center py-2">
      <img
        className="w-[50px] md:w-[80px]"
        src={logo}
        alt=""
        style={{ maxHeight: "50px", maxWidth: "50px" }}
      />
      <Link
        to="/"
        className="text-blue-700 font-bold text-xl md:text-3xl pl-8"
      >
        movies
      </Link>
      <Link
        to="favourite"
        className="text-blue-700 font-bold text-xl md:text-3xl pl-8"
      >
        Favourities
      </Link>
    </div>
  );
}

export default Navbar;
