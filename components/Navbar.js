"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";


export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isScrolling ? (
        <NavbarScroll isScrolling={isScrolling} />
      ) : (
        <NavbarFixed />
      )}
    </>
  );
}

function NavbarFixed() {
  return (
    <nav className="fixed z-10 flex justify-between w-full px-8 py-2 top-4">
      <div className="flex items-center gap-2 text-white">
        <svg
          className="rotate-180"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.49988 1.82689C4.36688 1.8269 1.82707 4.36672 1.82707 7.49972C1.82707 10.6327 4.36688 13.1725 7.49988 13.1726V1.82689Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
        <p className="text-xl text-white">Diagram</p>
      </div>
      <ul className="flex items-center text-white/50">
        <li className="px-2 text-md ">
          <Link href={"/pods"}>Magician</Link>
        </li>
        <li className="px-2 text-md">
          <Link href={"/"}>Genius</Link>
        </li>
        <li className="px-2 text-md">
          <Link href={"/"}>Animator</Link>
        </li>
        <li className="px-2 text-md">
          <Link href={"/"}>UI-AI</Link>
        </li>
      </ul>
      <div className="px-4 py-2 ml-2 text-white bg-black rounded-full text-md ">
        <Link href={"/"}>Login</Link>
      </div>
    </nav>
  );
}

function NavbarScroll({ isScrolling }) {
  return (
    <nav className="fixed z-10 flex justify-between px-4 py-2 rounded-full ts-bg left-1/2 top-10">
      <ul className="flex items-center">
        <li className="px-2 text-white text-md">
          <Link href={"/pods"}>Magician</Link>
        </li>
        <li className="px-2 text-white text-md">
          <Link href={"/"}>Genius</Link>
        </li>
        <li className="px-2 text-white text-md">
          <Link href={"/"}>Animator</Link>
        </li>
        <li className="px-2 text-white text-md">
          <Link href={"/"}>UI-AI</Link>
        </li>
        <li className="px-4 py-2 ml-2 text-white bg-black rounded-full text-md ">
          <Link href={"/"}>Login</Link>
        </li>
      </ul>
    </nav>
  );
}
