import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "accent";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border select-none transition-colors";

  const variantStyles = {
    default: "bg-[#18181B] text-[#A1A1AA] border-[#27272A]",
    success:
      "bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]/30",
    warning:
      "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30",
    accent:
      "bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/30",
  };

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

Badge.displayName = "Badge";
