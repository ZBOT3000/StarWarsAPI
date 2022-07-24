import React from "react";

function Header() {
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-light text-2xl  flex items-center 
    text-gray-800"
        >
         Star wars API
        </div>

        <ul className="md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-3 transition-all duration-500 ease-in">
          <li className="ml-3 md:my-0 my-7">
            <a
              href="/"
              className="text-gray-800 hover:text-gray-300 duration-500 cursor-pointer m-5"
            >
              Home
            </a>
            <a
              href="People"
              className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer m-5"
            >
              People
            </a>
            <a
              href="Planets"
              className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer m-5"
            >
              Planets
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
