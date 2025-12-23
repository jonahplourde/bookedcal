import React from 'react';
import { cn } from "@/lib/utils";

export function Button({ 
  children, 
  className, 
  variant = "default",
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-full text-base font-medium h-12 px-6 transition-transform transition-colors duration-200 transform-gpu will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    // Keep background colors but don't change background on hover — only scale
    default: "bg-highlight text-white hover:scale-105 active:scale-95",
    outline: "border border-gray-300 bg-transparent",
    ghost: "bg-transparent",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

