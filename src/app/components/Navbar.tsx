"use client";

import React, { useState, useLayoutEffect } from "react";
import Link from "next/link";

interface NavbarProps {
  navColor: "offblack";
}

const Navbar: React.FC<NavbarProps> = ({ navColor }) => {
  const colorMap = {
    offblack: "#151515",
  };

  const fillColor = colorMap[navColor] || "#151515"; // Default to orange if color not found

  const [isOpen, setIsOpen] = useState(false);

  const useLockBodyScroll = (open: boolean) => {
    useLayoutEffect(() => {
      // Original body overflow value to restore after unlocking
      const originalStyle = window.getComputedStyle(document.body).overflow;
      if (open) {
        // Lock
        document.body.style.overflow = "hidden";
      }
      return () => {
        // Revert back to the original style
        document.body.style.overflow = originalStyle;
      };
    }, [open]); // Only re-run the effect if open changes
  };

  useLockBodyScroll(isOpen);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 z-50 flex w-full max-w-8xl items-start justify-between overflow-hidden py-6">
      <div className="z-50 h-full">
        <Link href={"/"}>
          <svg
            width="120"
            height="34"
            viewBox="0 0 120 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M59.8083 27H57.0247L54.9113 21.072H45.2976L43.1841 27H40.4005L47.4368 7.41178H52.772L59.8083 27ZM50.1173 7.51487L46.1223 18.7523H54.0865L50.1173 7.51487ZM63.7463 10.8139H61.0143V7.41178H63.7463V10.8139ZM63.6432 27H61.1174V13.1851H63.6432V27ZM69.4142 13.1851V16.1492C70.0327 14.2161 71.3988 12.9016 73.9504 12.9016V15.4017H73.1772C70.6513 15.4017 69.4142 16.2007 69.4142 18.675V27H66.8883V13.1851H69.4142ZM83.1271 12.9016C86.452 12.9016 89.0036 15.8399 89.0036 20.0926C89.0036 24.3453 86.4777 27.2835 83.1271 27.2835C81.0652 27.2835 79.1064 25.969 78.2558 23.9844V27H75.73V7.41178H78.2558V16.5358C78.9002 14.68 80.5497 12.9016 83.1271 12.9016ZM82.3024 25.4278C84.9313 25.4278 86.4262 23.3401 86.4262 20.0926C86.4262 16.8451 84.9313 14.7574 82.3024 14.7574C79.6734 14.7574 78.1527 16.8451 78.1527 20.0926C78.1527 23.3401 79.6734 25.4278 82.3024 25.4278ZM97.2434 27.2835C93.1453 27.2835 90.5164 24.3711 90.5164 20.0926C90.5164 15.8141 93.1453 12.9016 97.2434 12.9016C101.341 12.9016 103.945 15.8141 103.945 20.0926C103.945 24.3711 101.341 27.2835 97.2434 27.2835ZM97.2434 25.4278C99.8724 25.4278 101.367 23.3401 101.367 20.0926C101.367 16.8451 99.8724 14.7574 97.2434 14.7574C94.6145 14.7574 93.0938 16.8451 93.0938 20.0926C93.0938 23.3401 94.6145 25.4278 97.2434 25.4278ZM113.181 12.9016C116.3 12.9016 117.975 15.2986 117.975 18.3915V18.443V27H115.449V18.8296V18.7781C115.449 15.9687 114.161 14.7574 112.15 14.7574C110.14 14.7574 108.851 15.9945 108.851 18.8296V27H106.326V13.1851H108.851V15.9945C109.47 14.3708 110.81 12.9016 113.181 12.9016Z"
              fill={fillColor}
            />
            <path
              d="M3.07696 1.74609V7.91113H21.9234L2.63657 21.3528C0.982706 22.503 0 24.391 0 26.412C0 29.8143 2.75196 32.5713 6.14816 32.5713H24.6157V26.4062H6.16547L24.6157 13.5425V26.4062H30.7696V1.74609H3.07696Z"
              fill={fillColor}
            />
          </svg>
        </Link>
      </div>
      <ul className="hidden items-center gap-8 sm:flex">
        <li>
          <Link href="/farmers" className="hover:underline">
            Farmers
          </Link>
        </li>
        <li>
          <Link href="/investors" className="hover:underline">
            Buyers
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="mailto:alex.akten@outlook.com"
            className="hover:underline"
          >
            Contact
          </Link>
        </li>
      </ul>
      <button
        onClick={handleClick}
        className="absolute right-2 top-9 z-50 flex flex-col sm:hidden"
      >
        <span
          className={`block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${
            isOpen
              ? "translate-y-1 rotate-45 transform"
              : "-translate-y-0.5 transform"
          }`}
        ></span>
        <span
          className={`my-0.5 block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${
            isOpen
              ? "-translate-y-1 -rotate-45 transform"
              : "translate-y-0.5 transform"
          }`}
        ></span>
      </button>
      <div className="sm:hidden">
        <div
          className={`fixed inset-0 z-10 h-screen w-full transform bg-lightgray text-2xl transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } sm:hidden`}
        >
          <ul className="z-50 flex h-full flex-col items-center justify-center gap-2">
            <li>
              <Link href="/farmers" className="hover:underline">
                Farmers
              </Link>
            </li>
            <li>
              <Link href="/investors" className="hover:underline">
                Buyers
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="mailto:alex.akten@outlook.com"
                className="hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
