import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 w-1/4">
            <div className="flex items-center space-x-2">
              <img src={assets.logo} alt="Logo" className="" />
              <span className="text-xl font-bold text-blue-600">
                Prescripto
              </span>
            </div>
            <p className="text-gray-500 mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold text-gray-800 mb-2">COMPANY</h3>
            <ul className="text-gray-500 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">GET IN TOUCH</h3>
            <p className="text-gray-500">+1-212-456-7890</p>
            <p className="text-gray-500">greatstackdev@gmail.com</p>
          </div>
        </div>

        <div className="mt-8 border-t pt-4">
          <p className="text-center text-gray-500 text-sm">
            Copyright © 2024 GreatStack – All Right Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
