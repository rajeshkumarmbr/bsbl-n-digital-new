import React from "react";
import {Link, NavLink} from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Logo from "../../img/BSBL-N-Digital-SkyBlue.png";

export default function Footer() {
  return (
    <footer className="bg-slate-600 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1 flex flex-col items-center text-center mt-5">
          <img src={Logo} alt="Logo" className="h-12 w-12 mr-2 rounded " />
          <div>
            <p className="text-base font-semibold text-sky-400 m-3">
              BSBL N Digital
            </p>
            <p className="text-sm">
              Copyright © 2023
              
              All Right Reserved.
            </p>
          </div>
        </div>

        <div className="md:col-span-1">
          <div>
            <h2 className="text-lg font-semibold mb-2 text-sky-400">
              Services
            </h2>
            <ul className="list-disc pl-4 text-sm">
              <li>
                <NavLink  to="#">Website Development</NavLink>
              </li>
              <li>
                <NavLink to="#">Application Development</NavLink>
              </li>
              <li>
                <NavLink to="#">Digital Markiting</NavLink>
              </li>
              <li>
                <NavLink to="#">Graphic Design</NavLink>
              </li>
              <li>
                <NavLink to="#">360 Virtual Tour</NavLink>
              </li>
              <li>
                <NavLink to="#">E-Commerce Development</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-1">
          <h2 className="text-lg font-semibold mb-2 text-sky-400">Follow Us</h2>
          <div className="flex space-x-4">
            <Link
              to="https://www.facebook.com/profile.php?id=100088478553989&mibextid=ZbWKwL"
              target="_blank"
              className="text-xl hover:text-blue-700"
            >
              <FaFacebook/>
            </Link>
            <Link
              to="https://twitter.com/"
              target="_blank"
              className="text-xl hover:text-black"
            >
              <FaXTwitter/>
            </Link>
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              className="text-xl hover:text-red-500"
            >
              <FaInstagram/>
            </Link>
            <Link
              to="https://www.linkedin.com/"
              target="_blank"
              className="text-xl hover:text-blue-500"
            >             
            <FaLinkedin/>
            </Link>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2 text-sky-400">
              Locate us
            </h2>
            <address className="text-sm">
              Kanawani
              Indirapuram
              <br />
              Ghaziabad
              <br />
              India
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
