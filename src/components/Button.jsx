import React from "react";

function Button({
  buttonname,
  backgroundColor,
  textColor,
  hoverBackground,
  hoverTextColor,
}) {
  const buttonStyle = {
    backgroundColor: backgroundColor || "transparent",
    color: textColor || "black",
  };

  const hoverStyle = {
    backgroundColor: hoverBackground || backgroundColor || "transparent",
    color: hoverTextColor || textColor || "black",
  };
  return (
    <>
      <button
        className="font-syne font-bold text-base md:text-lg border-2 border-BlackTextTwo rounded-2xl px-6 py-3 duration-300 transition-all"
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = hoverStyle.backgroundColor;
          e.target.style.color = hoverStyle.color;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = buttonStyle.backgroundColor;
          e.target.style.color = buttonStyle.color;
        }}
      >
        {buttonname}
      </button>
    </>
  );
}

export default Button;
