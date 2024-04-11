import React from "react";
import AirLogo from "../assets/Airbnb.svg";
import EtsyLogo from "../assets/Etsy.svg";
import NasaLogo from "../assets/Nasa.svg";
import NewyorktimesLogo from "../assets/NYT.svg";
import UberLogo from "../assets/Uber.svg";

function LogoBrand() {
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[82px]">
          <div>
            <img src={AirLogo} alt="" />
          </div>
          <div>
            <img src={NasaLogo} alt="" />
          </div>
          <div>
            <img src={UberLogo} alt="" />
          </div>
          <div>
            <img src={NewyorktimesLogo} alt="" />
          </div>
          <div>
            <img src={EtsyLogo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LogoBrand;
