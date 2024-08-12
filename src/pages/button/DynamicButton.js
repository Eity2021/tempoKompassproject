import React from "react";

function DynamicButton({
  label,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  ...rest
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`font-poppins bg-[#21383E]  w-[20%]  text-white   text-[16px] py-[12px] flex justify-center items-center ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
      {...rest}
    >
      {label}
    </button>
  );
}

export default DynamicButton;
