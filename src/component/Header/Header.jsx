import React from "react";
import {Link, NavLink} from 'react-router-dom';
import Logo from "../../img/BSBL-N-Digital-SkyBlue.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-40">
      <nav className="bg-slate-500 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="#" className="flex items-center">
            <img
              src={Logo}
              className="mr-3 h-6 sm:h-9 rounded"
              alt="BSBL-N-Digital Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white dark:text-white">
              BSBL N Digital
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-white dark:text-white bg-sky-400 hover:bg-white hover:text-zinc-950 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Enquiry
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({isActive}) =>
                  `block py-2 pr-4 pl-3 text-white rounded bg-primary-700 ${isActive ? "text-sky-700" : " text-white"} lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white hover:text-sky-400 `}>
                  Home
                </NavLink>
              </li>

              <li>
              <NavLink
                  to="#"
                  className={({isActive}) =>
                  `block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 ${isActive ? "text-sky-700" : " text-white"} lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-sky-400`}
                >
                  Service
                </NavLink>
              </li>
              <li>
              <NavLink
                  to="about"
                  className={({isActive}) =>
                  `block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent ${isActive ? "text-sky-700" : " text-white"} lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-sky-400`}
                >
                  About Us
                </NavLink>
              </li>

              <li>
              <NavLink
                  to="#"
                  className={({isActive}) =>
                  `block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 ${isActive ? "text-sky-700" : " text-white"} lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-sky-400`}
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
              <NavLink
                  to="contact"
                  className={({isActive}) =>
                  `block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 ${isActive ? "text-sky-700" : " text-white"} lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-sky-400`}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
