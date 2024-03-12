"use client";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button = ({ children, className,onClick }: ButtonProps) => {
  return (
    <button
      className={`h-10 min-w-[150px] transition-all duration-500 rounded-sm flex justify-center items-center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
