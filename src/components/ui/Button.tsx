import React, { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors duration-150 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed select-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-[#EF4444] text-white hover:bg-[#DC2626] active:bg-[#B91C1C] focus-visible:ring-[#EF4444] shadow-sm",
      secondary:
        "bg-[#111111] text-[#FFFFFF] border border-[#27272A] hover:bg-[#1A1A1A] hover:border-[#3F3F46] focus-visible:ring-[#A1A1AA]",
      ghost:
        "bg-transparent text-[#A1A1AA] hover:text-[#FFFFFF] hover:bg-[#18181B] focus-visible:ring-[#A1A1AA]",
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-1.5 h-8",
      md: "text-sm px-4 py-2 gap-2 h-10",
      lg: "text-base px-5 py-2.5 gap-2.5 h-11",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
