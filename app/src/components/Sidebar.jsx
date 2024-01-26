import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-28 h-69.8125 flex-shrink-0 bg-gray-100 shadow-md ">
      <div className="w-27.4375 h-3.6875 flex-shrink-0">
        <Link to="/">
          <h1 className="mb-4 hover:underline cursor-pointer">Home</h1>
        </Link>
        <Link to="/products">
          <h1 className="mb-4 hover:underline cursor-pointer">Product</h1>
        </Link>
        <Link to="/categories">
          <h1 className="mb-4 hover:underline cursor-pointer">Categories</h1>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
