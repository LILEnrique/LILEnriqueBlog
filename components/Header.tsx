"use client";

import React, { useState } from "react";
import PaddingContainer from "./PaddingContainer";
import Link from "next/link";
import Logo from "@/public/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import useScroll from "./utils/useScroll";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  const { inTop } = useScroll();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 border-b bg-bgLight bg-opacity-80  py-4 backdrop-blur-[0.5rem] duration-300  dark:border-b dark:bg-bgDark dark:bg-opacity-75 ${
        inTop ? "border-b-transparent" : "borderbBW "
      }`}
    >
      <PaddingContainer>
        <div className="flex h-12 items-center justify-between ">
          <Link href="/">
            <Image src={Logo} className="dark:invert" width={50} alt="Logo" />
          </Link>
          {/* Desktop navigation */}
          <nav className="flex font-medium ">
            <ul className="hidden grow flex-wrap items-center justify-end text-[0.9rem] md:flex  ">
              <li className="relative flex h-3/4 items-center justify-center px-2 transition-all hover:scale-[1.15] active:scale-105">
                <Link href="/articles">Artículos</Link>
              </li>
              <li className="relative flex h-3/4 items-center justify-center px-2 transition-all hover:scale-[1.15] active:scale-105">
                <Link href="/gallery">Galería</Link>
              </li>
              <li className="relative flex h-3/4 items-center justify-center  px-2">
                <ThemeToggle />
              </li>
            </ul>
            {/* Hamburger */}
            <div
              onClick={handleClick}
              className="hover:text-primary z-10   md:hidden"
            >
              {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile menu */}
            <ul
              className={`${
                !nav
                  ? "hidden"
                  : "absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-bgLight dark:bg-bgDark "
              } `}
            >
              <li className="hover:text-primary py-6  text-2xl">
                <Link href="/articles" onClick={handleClick}>
                  Artículos
                </Link>
              </li>
              <li className="hover:text-primary py-6  text-2xl">
                <Link href="/gallery" onClick={handleClick}>
                  Galería
                </Link>
              </li>
              <li className="hover:text-primary py-6 text-2xl ">
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </PaddingContainer>
    </div>
  );
}
