import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const variants = {
      primary:
        "bg-primary hover:bg-primary-light text-white shadow-lg hover:shadow-primary/50",
      secondary: "bg-white text-slate-900 hover:bg-slate-50 border border-slate-200",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
      ghost: "hover:bg-slate-100 text-slate-700"
    };

    return (
      <button
        ref={ref}
        className={cn(
          "rounded-full px-6 py-3 font-medium transition-all duration-300 active:scale-95",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
