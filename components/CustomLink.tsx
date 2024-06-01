import Link from "next/link";
import React from "react";

interface CustomLinkProps {
  children: string | string[];
  href: string;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  href,
  className,
}) => {
  return (
    <Link href={href} className={className + " " + "px-6 py-2 rounded-3xl"}>
      {children}
    </Link>
  );
};

export default CustomLink;
