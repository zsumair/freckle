import React from "react";
import { ReactComponent as Logo } from "../icons/Freckle.svg";
import { ReactComponent as MenuIcon } from "../icons/menu.svg";

function Navbar() {
  return (
    <>
      {/* Navigation bar */}
      <div className="flex justify-between items-center py-10">
        <h1 class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Freckle
        </h1>
        {/* <Logo /> */}
        <nav className="hidden md:flex md:items-center md:space-x-10">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Blog
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Contact
          </a>
          <a href="#" className="font-semibold text-red-500 hover:text-red-700">
            Login
          </a>
        </nav>
        <button className="p-4 md:hidden">
          <MenuIcon className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/*End  Navigation bar */}
    </>
  );
}

export default Navbar;
