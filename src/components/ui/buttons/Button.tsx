import React from "react";

type ButtonProps = {
  sizeType?: "xsm" | "sm" | "md" | "large" | "extraLarge";
  variantType?:
    | "primary"
    | "secondary"
    | "ghost"
    | "danger"
    | "success"
    | "info";
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  sizeType = "md",
  variantType = "primary",
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) => {
  const size = {
    xsm: "text-xs px-2 py-0.5",
    sm: "text-sm px-2.5 py-1",
    md: "text-sm px-3 py-1.5",
    large: "text-base px-4 py-2",
    extraLarge: "text-lg px-5 py-2.5",
  };

  const variant = {
    primary:
      "bg-blue-500/10 text-blue-400 border border-blue-500 hover:bg-blue-500 hover:text-white",
    secondary:
      "bg-gray-700/20 text-gray-300 border border-gray-500 hover:bg-gray-600/30 hover:text-white",
    ghost:
      "bg-transparent text-gray-300 border border-transparent hover:bg-gray-800/40",
    danger:
      "bg-red-500/10 text-red-400 border border-red-500 hover:bg-red-500 hover:text-white",
    success:
      "bg-green-500/10 text-green-400 border border-green-500 hover:bg-green-500 hover:text-white",
    info: "bg-cyan-500/10 text-cyan-400 border border-cyan-500 hover:bg-cyan-500 hover:text-white",
  };

  const disabledStyles =
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-opacity-100";

  const finalClass = `
    rounded-md font-medium flex items-center justify-center
    transition-all duration-300
    cursor-pointer
    ${size[sizeType]}
    ${variant[variantType]}
    ${disabledStyles}
    ${className}
  `;

  return (
    <button {...props} disabled={disabled} className={finalClass}>
      {children}
    </button>
  );
};

export default Button;
