"use client";

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "horizontal" | "vertical" | "icon";
  className?: string;
  showText?: boolean;
}

export function Logo({ variant = "horizontal", className = "", showText = true }: LogoProps) {
  const logoPath = variant === "vertical" 
    ? "/logo-vertical.svg" 
    : variant === "icon"
    ? "/logo-icon.svg"
    : "/logo.svg";

  const dimensions = variant === "vertical"
    ? { width: 120, height: 140 }
    : variant === "icon"
    ? { width: 50, height: 50 }
    : { width: 200, height: 50 };

  if (!showText && variant !== "icon") {
    return (
      <Link href="/" className={`inline-block ${className}`}>
        <Image
          src="/logo-icon.svg"
          alt="JWEBLY Logo"
          width={40}
          height={40}
          className="hover:opacity-80 transition-opacity"
          priority
        />
      </Link>
    );
  }

  return (
    <Link href="/" className={`inline-block ${className}`}>
      <Image
        src={logoPath}
        alt="JWEBLY Logo"
        width={dimensions.width}
        height={dimensions.height}
        className="hover:opacity-80 transition-opacity"
        priority
      />
    </Link>
  );
}

