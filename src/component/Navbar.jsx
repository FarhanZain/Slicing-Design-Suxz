import { useState } from "react";
import Images from "../assets/image/Images";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <nav className="bg-transparent px-[30px] md:px-[64px] lg:px-[114px] 2xl:px-[256px] mt-4 md:mt-6 lg:mt-8">
        <div className="flex flex-wrap items-center justify-between py-4">
          <a href="#" className="flex items-center">
            <img src={Images.logo} className="h-8 mr-3" alt="Suxz Logo" />
            <span className="self-center text-3xl font-manrope font-bold whitespace-nowrap">
              Suxz
            </span>
          </a>
          <button
            onClick={() => toggleMenu()}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-primary rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={` w-full md:block md:w-auto ${
              !showMenu ? "hidden" : ""
            }`}
            id="navbar-default"
          >
            <ul className="font-semibold font-manrope text-xl flex flex-col items-center p-4 md:p-0 mt-4 border border-primary rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black rounded hover:text-primary md:border-0 md:hover:text-primary md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black rounded hover:text-primary md:border-0 md:hover:text-primary md:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black rounded hover:text-primary md:border-0 md:hover:text-primary md:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black rounded hover:text-primary md:border-0 md:hover:text-primary md:p-0"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black rounded hover:text-primary md:border-0 md:hover:text-primary md:p-0"
                >
                  Contact
                </a>
              </li>
              <button
                type="button"
                className="text-primary hover:bg-slate-100 font-semibold rounded-lg text-xl px-7 py-2 text-center mr-3 md:mr-0"
              >
                Log In
              </button>
              <button
                type="button"
                className="text-white bg-primary hover:bg-primaryHover font-semibold rounded-lg text-xl px-7 py-2 text-center mr-3 md:mr-0"
              >
                Sign Up
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
