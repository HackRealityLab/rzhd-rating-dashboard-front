import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: string | string[] | ReactNode | ReactNode[];
  href: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, href, className }) => {
  return (
    <Link className={" " + " " + className} href={href}>
      {children}
    </Link>
  );
};

export default Button;
