import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import MoreDetailsImg from "@/public/more_details_img.svg";

interface CardProps {
  children: ReactNode | ReactNode[];
  href: string;
}

const Card: React.FC<CardProps> = ({ children, href }) => {
  return (
    <section className="bg-[--bg] m-3 p-4 rounded-2xl relative h-[340px]">
      {children}
      <Link className="absolute bottom-4 right-4" href={href}>
        <Image src={MoreDetailsImg} alt="Подробнее" width={40}></Image>
      </Link>
    </section>
  );
};

export default Card;
