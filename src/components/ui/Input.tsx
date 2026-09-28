import React, { forwardRef, useId } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = "", id, disabled, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-medium text-[#A1A1AA] select-none"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={
              error ? errorId : helperText ? helperId : undefined
            }
            className={`w-full rounded-lg bg-[#111111] px-3.5 py-2 text-sm text-[#FFFFFF] placeholder:text-[#52525B] border transition-colors duration-150 outline-none disabled:opacity-50 disabled:cursor-not-allowed ${
              error
                ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-1 focus:ring-[#EF4444]"
                : "border-[#27272A] focus:border-[#A1A1AA] focus:ring-1 focus:ring-[#A1A1AA]"
            } ${className}`}
            {...props}
          />
        </div>
        {error && (
          <p id={errorId} className="text-xs text-[#EF4444] font-normal">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={helperId} className="text-xs text-[#A1A1AA] font-normal">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
