import React from "react";
import BrandLogo from "../assets/Brand.png";

export default function HeaderEvent() {
  return (
    <>
      <div className="fixed top-0 left-0 bg-WhiteBack w-full grid grid-flow-col justify-between mx-auto border-b-2 border-black">
        <div className="flex justify-start items-center py-4">
          <div className="vertical-line px-6">
            <img className="w-[127px]" src={BrandLogo} alt="brand logo" />
          </div>

          <nav className="mx-3">
            <ul className="flex gap-3">
              <li className="px-3">
                <a
                  className="font-syne font-medium text-base text-BlackTextTwo"
                  href=""
                >
                  Products
                  <i className="ri-arrow-down-s-line font-bold pl-1"></i>
                </a>
              </li>
              <li className="px-3">
                <a
                  className="font-syne font-medium text-base text-BlackTextTwo"
                  href=""
                >
                  Solutions
                </a>
              </li>
              <li className="px-3">
                <a
                  className="font-syne font-medium text-base text-BlackTextTwo"
                  href=""
                >
                  Enterprise
                </a>
              </li>
              <li className="px-3">
                <a
                  className="font-syne font-medium text-base text-BlackTextTwo"
                  href=""
                >
                  Resources
                </a>
              </li>
              <li className="px-3">
                <a
                  className="font-syne font-medium text-base text-BlackTextTwo"
                  href=""
                >
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex justify-end items-center">
          <div className="double-vertical px-3">
            <a className="text-base text-BlackTextTwo px-3" href="">
              <i className="ri-search-line font-bold"></i>
            </a>
          </div>

          <div className="px-3 py-4">
            <a
              className="font-syne font-medium text-base text-BlackTextTwo px-3"
              href=""
            >
              <i className="ri-headphone-line font-bold pr-1"></i>
              Talk To Sales
            </a>
          </div>

          <div className="bg-BlackTextTwo h-full flex items-center px-3 py-4">
            <a
              className="font-syne font-medium text-base text-WhiteBack px-3"
              href=""
            >
              Login / Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
