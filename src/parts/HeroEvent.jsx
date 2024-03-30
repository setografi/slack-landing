import React from "react";
import Button from "../components/Button";

import RightFirst from "../assets/RightSide.png";

export default function HeroEvent() {
  return (
    <>
      <section className="grid grid-flow-row lg:grid-flow-col grid-cols-1 lg:grid-cols-2">
        <div className="bg-PurpleBack h-screen border-b-2 lg:border-b-0 lg:border-r-2 border-BlackTextTwo flex items-center">
          <div className="flex flex-col justify-center items-start mx-6 lg:mx-16 mt-16">
            <h1 className="font-syne font-semibold text-xl md:text-3xl xl:text-[2.37rem] text-WhiteBack leading-8 lg:leading-10">
              Great teamwork starts <br />
              <span className="font-extrabold text-xl md:text-3xl xl:text-[2rem] tracking-normal md:tracking-wide lg:tracking-wider">
                with a <span className="text-YellowBack"> digital HQ</span>
              </span>
            </h1>
            <p className="font-syne font-normal text-base md:text-xl lg:text-[21px] text-WhiteBack pt-6 md:pt-8 lg:pt-12">
              With all your people, tools and communication in one place, you
              can work <span>faster</span> and <span>more flexibly</span> than
              ever before.
            </p>

            <div className="flex flex-col md:flex-row mt-10 md:mt-12 lg:mt-14 gap-5 md:gap-7">
              <Button
                buttonname={"Email Signup"}
                backgroundColor="#000000"
                textColor="#FFFFFF"
                hoverBackground="#FFFFFF"
                hoverTextColor="#000000"
              />

              <Button
                buttonname={
                  <div className="flex flex-row items-center gap-2 hover:bg-transparent">
                    <i className="ri-google-line"></i>
                    <p>Google Signup</p>
                  </div>
                }
                backgroundColor="#FFFFFF"
                textColor="#000000"
                hoverBackground="#000000"
                hoverTextColor="#FFFFFF"
              />
            </div>
          </div>
        </div>
        <div className="bg-YellowBack h-screen">
          <div className="h-full flex justify-center items-center">
            <img src={RightFirst} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
