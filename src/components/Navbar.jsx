import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  const location = false;
  return (
    <div className="h-16 w-screen bg-white shadow-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* logo section */}
        <div className="flex items-center gap-8">
          <Link to="/">
            <h1 className="flex h-16 cursor-pointer items-center justify-center overflow-hidden">
              <img className="h-24" src={logo} alt="multiverse market" />
            </h1>
          </Link>
          <div className="flex items-center gap-1 text-gray-700">
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? <div className=""></div> : "Add Address"}
            </span>
            <FaCaretDown />
          </div>
        </div>
        {/* menu section */}
        <nav className="flex items-center gap-4">
          <ul className="flex items-center gap-8 text-xl font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-4 border-b-red-500 transition-all"
                      : "text-black"
                  } cursor-pointer`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-4 border-b-red-500 transition-all"
                      : "text-black"
                  } cursor-pointer`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-4 border-b-red-500 transition-all"
                      : "text-black"
                  } cursor-pointer`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-4 border-b-red-500 transition-all"
                      : "text-black"
                  } cursor-pointer`
                }
              >
                Products
              </NavLink>
            </li>
          </ul>
          <Link
            className="relative flex items-center justify-center"
            to="/cart"
          >
            <IoCartOutline className="size-8" />
            <span className="relative -top-4 right-2 size-4 rounded-full bg-red-500 text-center text-xs font-semibold text-white">
              0
            </span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
