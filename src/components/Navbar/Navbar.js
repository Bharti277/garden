import React from "react";

const Navbar = () => {
  return (
    <div className="fixed z-50 flex items-center justify-between w-full p-4 bg-rose-500">
      <div className="">Shop Now</div>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <div className="flex justify-around">
        <div className="">cart</div>
        <div className="">Hello, John</div>
      </div>
    </div>
  );
};

export default Navbar;
