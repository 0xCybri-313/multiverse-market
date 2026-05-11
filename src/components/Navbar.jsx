import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import { CgClose } from "react-icons/cg";

function Navbar({ location, getLocation, openDropDown, setOpenDropDown }) {
  const toggleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <div className="h-16 w-screen bg-white shadow-2xl">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between">
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
              {location ? (
                <div className="">
                  <p>{location.county}</p>
                  <p>{location.state}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown className="cursor-pointer" onClick={toggleDropDown} />
          </div>
        </div>

        {/* location drop down */}

        {openDropDown ? (
          <div className="absolute top-18 left-32 flex h-24 w-64 flex-col justify-around rounded-2xl border-2 border-gray-300 bg-white p-2 shadow-2xl">
            <div className="flex w-full items-center justify-between px-4">
              <span className="text-xl font-semibold">Change Location</span>
              <CgClose className="cursor-pointer" onClick={toggleDropDown} />
            </div>
            <button
              onClick={getLocation}
              className="w-fit cursor-pointer rounded-xl bg-red-500 px-4 py-1 font-semibold text-white transition-all hover:bg-red-800"
            >
              Detect My Location
            </button>
          </div>
        ) : null}

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
          <div className="">
            <Show when="signed-out">
              <SignInButton className="cursor-pointer rounded-2xl bg-red-500 px-4 py-1 font-semibold text-white transition-all hover:bg-red-800" />
              {/* <SignUpButton /> */}
            </Show>
            <Show when="signed-in">
              <UserButton className="w-10" />
            </Show>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
