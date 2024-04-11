import React from "react";

function Button({ children, isBlack, isWhite }) {
  return (
    <div className="relative top-0 group">
      <button
        className={`font-syne relative top-0 left-0 w-full  z-[10] font-bold text-base md:text-lg border-2 border-BlackTextTwo rounded-2xl px-6 py-3 duration-300 transition-all ${
          isBlack
            ? "bg-black text-white hover:text-black hover:bg-white"
            : isWhite
            ? "bg-white text-black"
            : ""
        }`}
      >
        <span>{children}</span>
      </button>
      <>
        {isWhite && (
          <div
            className={`font-syne absolute inset-0 top-0 left-0 bg-black w-full h-full translate-x-0 translate-y-0  group-hover:translate-y-2 group-hover:translate-x-2  font-bold text-base md:text-lg border-2 border-BlackTextTwo rounded-2xl px-6 py-3 duration-300 transition-all`}
          ></div>
        )}
        {isBlack && (
          <>
            <div
              className={`font-syne absolute inset-0 z-[1] top-0 left-0 bg-pink-400 w-full h-full translate-x-0 translate-y-0  group-hover:translate-y-1 group-hover:translate-x-1  font-bold text-base md:text-lg border border-BlackTextTwo rounded-2xl px-6 py-3 duration-300 transition-all`}
            ></div>
            <div
              className={`font-syne absolute inset-0 z-[0] top-0 left-0 bg-blue-500 w-full h-full translate-x-0 translate-y-0  group-hover:translate-y-2 group-hover:translate-x-2  font-bold text-base md:text-lg border-2 border-BlackTextTwo rounded-2xl px-6 py-3 duration-300 transition-all`}
            ></div>
          </>
        )}
      </>
    </div>
  );
}

export default Button;
