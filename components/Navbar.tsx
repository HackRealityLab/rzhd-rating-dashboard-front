"use client";

import Link from "next/link";

import RZHDLogo from "@/public/rzhd-logo.svg";
import Image from "next/image";
import CustomLink from "./CustomLink";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log("@pathname slice", pathname.slice(0, 9));
  return (
    <nav className="w-full h-[94px] bg-[--white] flex justify-between items-center border-b ">
      <section className="pl-[100px] flex gap-5 items-center justify-around">
        <Link href="/">
          <Image
            src={RZHDLogo}
            width={105}
            alt="RZHD logo"
            className="inline float-left"
          />
        </Link>
        <div className="flex gap-5 ml-8">
          <CustomLink
            href="/"
            className={`${
              pathname === "/" ? "bg-[--blue-100] text-[--white]" : ""
            }`}
          >
            Главная
          </CustomLink>
          <CustomLink
            href="/polygons"
            className={`${
              pathname.slice(0, 9) === "/polygons"
                ? "bg-[--blue-100] text-[--white]"
                : ""
            }`}
          >
            Полигоны
          </CustomLink>
        </div>
      </section>
      <section></section>
    </nav>
  );
};

export default Navbar;
