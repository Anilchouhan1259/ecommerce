import { NavLink } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex mx-auto flex-wrap items-center p-3 justify-between">
      <div className="">
        <NavLink to="/">
          <img src="../logo.png" className="h-12 w-auto" />
        </NavLink>
      </div>
      <div className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <RxHamburgerMenu />
      </div>
      <div
        className={`w-full block flex-grow justify-between lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="block flex md:gap-6 flex-col md:ml-[25rem]  text-sm font-semibold md:flex-row text-gray-900 h-auto ">
          <NavLink to="/category/electronics">Electronics</NavLink>
          <NavLink to="/category/men's clothing">Mens Clothing</NavLink>
          <NavLink to="/category/women's clothing">Womens Clothing</NavLink>
          <NavLink to="/category/jewelery">Jewelery</NavLink>
        </div>
        <div className="flex flex-col md:flex-row gap-x-4">
          <NavLink to="/cart" className="flex">
            <BsCartFill />
            <span>cart</span>
          </NavLink>
          <NavLink to="/login">login</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
