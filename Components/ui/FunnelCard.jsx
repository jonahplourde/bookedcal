import React from 'react';
import { cn } from "@/lib/utils";

export default function FunnelCard({ children, className, variant = "default" }) {
  // If the caller supplied explicit utilities for bg, padding, or border, prefer them
  const hasBgClass = typeof className === 'string' && /\bbg-[^\s]+\b/.test(className);
  const hasPadding = typeof className === 'string' && /\b(p(?:t|r|b|l|x|y)?-[^\s]+)\b/.test(className);
  const hasBorderClass = typeof className === 'string' && /\bborder(?:-[^\s]+)?\b/.test(className);

  const bgClass = hasBgClass ? '' : (variant === "highlight" ? "bg-gray-50" : "bg-white");
  const paddingClass = hasPadding ? '' : 'p-8';
  const borderClass = hasBorderClass ? '' : 'border border-gray-100/50';

  return (
    <div className={cn(
      bgClass,
      "rounded-3xl shadow-funnel transition-all duration-300",
      paddingClass,
      borderClass,
      className
    )}>
      {children}
    </div>
  );
}