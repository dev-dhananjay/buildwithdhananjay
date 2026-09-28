import React, { forwardRef } from "react";
import { Badge, type BadgeProps } from "./Badge";

export interface SectionHeadingProps
  extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  badgeVariant?: BadgeProps["variant"];
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeading = forwardRef<HTMLDivElement, SectionHeadingProps>(
  (
    {
      badge,
      badgeVariant = "accent",
      title,
      description,
      align = "left",
      className = "",
      ...props
    },
    ref
  ) => {
    const isCenter = align === "center";

    return (
      <div
        ref={ref}
        className={`flex flex-col gap-2 ${
          isCenter ? "items-center text-center" : "items-start text-left"
        } ${className}`}
        {...props}
      >
        {badge && (
          <div className="mb-1">
            <Badge variant={badgeVariant}>{badge}</Badge>
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#FFFFFF]">
          {title}
        </h2>
        {description && (
          <p className="max-w-2xl text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            {description}
          </p>
        )}
      </div>
    );
  }
);

SectionHeading.displayName = "SectionHeading";

