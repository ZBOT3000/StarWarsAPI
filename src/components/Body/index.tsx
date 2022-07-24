import React from "react";
import Wars from "../../assets/wars.jpg";

const Body = () => {
  return (
    <div>
      <img src={Wars} width="1500" alt="" />

      <div className="ml-2 my-10 mt-50 absolute top-40 left-2/3">
        <div
          className="font-light text-3xl  flex items-end 
    text-white-800 ml-24"
        >
         
        </div>
        <div
          className="font-light text-8xl  flex items-center mt-9
          text-white "
        >
          Star Wars
        </div>
        <ul>
          <li>
            <a
              href="Planets"
              className="flex items-center justify-center  mt-11 py-2  font-medium text-black-500 whitespace-no-wrap bg-white border-2  rounded-full shadow-sm hover:bg-transparent hover:text-black hover:border-black focus:outline-none"
            >
              Planets
            </a>
            <a
              href="People"
              className="flex items-center justify-center mt-5 px-4 py-2  font-medium text-black-500 whitespace-no-wrap bg-white border-2  rounded-full shadow-sm hover:bg-transparent hover:text-black hover:border-black focus:outline-none"
            >
              People
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Body;
