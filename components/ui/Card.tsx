import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-white dark:bg-gray-800 rounded-2xl shadow-md transition-all duration-300",
        hover &&
          "hover:shadow-2xl hover:-translate-y-1 cursor-pointer transform hover:shadow-amber-500/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
  }
);

Card.displayName = "Card";

export default Card;

