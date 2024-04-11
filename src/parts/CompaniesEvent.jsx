import React from "react";
import ImageCompaniesOne from "../assets/CompaniesLine.svg";
import ImageCompaniesTwo from "../assets/CompaniesVector.svg";
import LogoBrand from "../components/LogoBrand";

export default function CompaniesEvent() {
  return (
    <>
      <section className="relative bg-WhiteBack h-[370px] border-y-2 border-BlackTextTwo">
        <div className="image-semicircle absolute top-8 md:left-[8rem] lg:left-[16rem] xl:left-[27rem]">
          <img src={ImageCompaniesTwo} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center text-center py-[70px] mx-6 lg:mx-0">
          <h1 className="font-syne font-bold text-xl md:text-3xl xl:text-[2.125rem] text-BlackTextTwo">
            TRUSTED BY COMPANIES <br />
            <span className="font-extrabold text-2xl leading-8 lg:leading-10">
              ALL OVER THE WORLD
            </span>
          </h1>

          <div className="pt-16">
            <LogoBrand />
          </div>
        </div>
        <div className="image-line absolute bottom-52 md:right-[9.7rem] lg:right-[18rem] xl:right-[31rem]">
          <img src={ImageCompaniesOne} alt="" />
        </div>
      </section>
    </>
  );
}
