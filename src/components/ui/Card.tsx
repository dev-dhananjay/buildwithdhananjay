import React, { forwardRef } from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, hoverable = false, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-xl border border-[#27272A] bg-[#111111] p-6 text-[#FFFFFF] transition-all duration-200 ${
          hoverable
            ? "hover:border-[#3F3F46] hover:shadow-lg hover:shadow-black/40 hover:-translate-y-0.5 cursor-pointer"
            : ""
        } ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`flex flex-col gap-1.5 pb-4 ${className}`} {...props} />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className = "", ...props }, ref) => (
  <h3
    ref={ref}
    className={`text-lg font-semibold tracking-tight text-[#FFFFFF] ${className}`}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className = "", ...props }, ref) => (
  <p
    ref={ref}
    className={`text-sm text-[#A1A1AA] ${className}`}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`pt-0 ${className}`} {...props} />
));
CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`flex items-center pt-4 border-t border-[#27272A] ${className}`}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";
