import React from "react";
import BrandLogo from "../assets/Brand.png";

export default function HeaderEvent() {
  return (
    <>
      <div className="fixed top-0 left-0 bg-WhiteBack w-full grid grid-flow-col justify-between mx-auto border-b-2 border-black">
        <div className="flex justify-start items-center py-4">
          <div className="vertical-line px-6">
            <img
              className="w-[127px]"
              src={BrandLogo}
              alt="brand logo"
              draggable="false"
            />
          </div>

          <nav className="hidden lg:block mx-3">
            <ul className="flex gap-3">
              <li className="px-3">
                <a
                  className="flex flex-row font-syne font-medium text-base text-BlackTextTwo gap-2"
                  href="#"
                >
                  <p className="hover:underline hover:underline-offset-4 hover:decoration-2">
                    Products
                  </p>
                  <i className="ri-arrow-down-s-line font-bold"></i>
                </a>
              </li>
              <li className="px-3">
                <a
                  className="font-syne font-medium text-base text-BlackTextTwo hover:underline hover:underline-offset-4 hover:decoration-2"
                  href="#"
                >
                  Solutions
                </a>
              </li>
              <li className="px-3">
                <a
                  className="font-syne font-medium text-base text-BlackTextTwo hover:underline hover:underline-offset-4 hover:decoration-2"
                  href="#"
                >
                  Enterprise
                </a>
              </li>
              <li className="px-3">
                <a
                  className="font-syne font-medium text-base text-BlackTextTwo hover:underline hover:underline-offset-4 hover:decoration-2"
                  href="#"
                >
                  Resources
                </a>
              </li>
              <li className="px-3">
                <a
                  className="font-syne font-medium text-base text-BlackTextTwo hover:underline hover:underline-offset-4 hover:decoration-2"
                  href="#"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden lg:flex justify-end items-center">
          <div className="double-vertical px-3">
            <a className="text-base text-BlackTextTwo px-3" href="#">
              <i className="ri-search-line font-bold"></i>
            </a>
          </div>

          <div className="px-3 py-4">
            <a
              className="flex flex-row items-center font-syne font-medium text-base text-BlackTextTwo px-3 gap-2"
              href="#"
            >
              <i className="ri-headphone-line font-bold"></i>
              <p>Talk To Sales</p>
            </a>
          </div>

          <div className="bg-BlackTextTwo h-full flex items-center px-3 py-4">
            <a
              className="font-syne font-medium text-base text-WhiteBack px-3"
              href="#"
            >
              Login / Register
            </a>
          </div>
        </div>

        <div className="flex lg:hidden items-center">
          <a
            className="font-medium text-base text-BlackTextTwo px-6 hover:text-PurpleBack"
            href="#"
          >
            <i className="ri-menu-line"></i>
          </a>
        </div>
      </div>
    </>
  );
}
