import { NavLink } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex font-[Manrope] items-center flex-wrap justify-between max-w-[95%] m-auto py-2">
      <div className="flex items-center">
        <NavLink to="/">
          <img src="../logo.png" className="h-12 w-auto" />
        </NavLink>
      </div>
      <div className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <RxHamburgerMenu />
      </div>
      <div
        className={`w-full block  lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="lg:flex-grow">
          <NavLink
            className="block mt-1 lg:inline-block lg:mt-0 text-white-200 mr-4"
            to="/category/electronics"
          >
            Electronics
          </NavLink>
          <NavLink
            className="block mt-1 lg:inline-block lg:mt-0 text-white-200 mr-4"
            to="/category/men's clothing"
          >
            Mens Clothing
          </NavLink>
          <NavLink
            className="block mt-1 lg:inline-block lg:mt-0 text-white-200 mr-4"
            to="/category/women's clothing"
          >
            Womens Clothing
          </NavLink>
          <NavLink
            className="block mt-1 lg:inline-block lg:mt-0 text-white-200 mr-4"
            to="/category/jewelery"
          >
            Jewelery
          </NavLink>
        </div>
        <div className=" md:flex items-center ">
          <NavLink to="/cart" className="flex items-center mr-4">
            <BsCartFill />
            <span className="px-2">cart</span>
          </NavLink>
          <NavLink className="mr-4" to="/login">
            login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
