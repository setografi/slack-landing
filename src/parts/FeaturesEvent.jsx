import React from "react";
import FeaturesBackground from "../assets/Features.svg";

export default function FeaturesEvent() {
  return (
    <>
      <section
        className="h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${FeaturesBackground})` }}
      ></section>
    </>
  );
}
