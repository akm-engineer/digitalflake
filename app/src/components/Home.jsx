import React from "react";
import imageSrc from "./image 289.png"; // Replace with your actual image path

const Home = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="text-center">
        <img
          src={imageSrc}
          alt=""
          className="w-21.3125 h-11.1875 flex-shrink-0 "
        />

        <p className="text-gray-600">Welcome to Digitalflake Admin</p>
      </div>
    </div>
  );
};

export default Home;
