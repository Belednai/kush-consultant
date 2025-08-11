import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

const ResponsiveContainer = forwardRef<HTMLDivElement, ResponsiveContainerProps>(
  ({ className, size = "xl", padding = "lg", children, ...props }, ref) => {
    const sizeClasses = {
      sm: "max-w-2xl",
      md: "max-w-4xl", 
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      full: "max-w-none"
    };

    const paddingClasses = {
      none: "",
      sm: "px-4 sm:px-6",
      md: "px-4 sm:px-6 lg:px-8",
      lg: "px-4 sm:px-6 lg:px-8 xl:px-12",
      xl: "px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"
    };

    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full",
          sizeClasses[size],
          paddingClasses[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ResponsiveContainer.displayName = "ResponsiveContainer";

export { ResponsiveContainer };

