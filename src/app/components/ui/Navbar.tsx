"use client";

import React, { useState, useLayoutEffect } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const fillColor = "#384238"; // Directly set the fill color to dark green

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
    <nav className="absolute top-0 z-50 flex w-full max-w-8xl items-center justify-between overflow-hidden px-10 py-8">
      <div className="z-50 h-full">
        <Link href={"/"}>
          {/* <h2 className="text-3xl font-bold tracking-tight">Airbon</h2> */}
          <svg
            width="136"
            height="40"
            viewBox="0 0 136 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.706 28.4512L53.6726 6.58149H57.1405L66.1071 28.4512H62.8266L60.3585 22.2964H50.4546L47.9552 28.4512H44.706ZM51.5793 19.4534H59.2025L55.3909 10.0182L51.5793 19.4534ZM67.4485 28.4512V13.3923H70.4166V28.4512H67.4485ZM68.9169 6.9564C70.0104 6.9564 70.8852 7.86243 70.8852 8.95591C70.8852 10.0806 70.0104 10.9554 68.9169 10.9554C67.7922 10.9554 66.9174 10.0806 66.9174 8.95591C66.9174 7.86243 67.7922 6.9564 68.9169 6.9564ZM73.2235 28.4512V13.3923H76.1915V14.9232C77.0976 13.5798 78.4097 12.9237 80.1281 12.9237C83.0336 12.9237 84.8769 15.0169 84.7207 19.016L81.7214 19.4534C81.7527 19.2971 81.7527 19.0472 81.7527 18.7035C81.7527 16.704 80.8466 15.673 79.3158 15.673C77.4412 15.673 76.1915 17.2664 76.1915 20.0157V28.4512H73.2235ZM86.2904 28.4512V6.58149H89.2272V15.4856C90.4456 13.861 92.1952 12.9237 94.4759 12.9237C98.5999 12.9237 101.568 16.4541 101.568 20.9218C101.568 25.3894 98.5999 28.9198 94.4759 28.9198C92.2264 28.9198 90.4456 27.9825 89.2272 26.3892V28.4512H86.2904ZM93.9135 26.0455C96.6629 26.0455 98.5999 23.921 98.5999 20.9218C98.5999 19.4534 98.1625 18.2349 97.2877 17.2664C96.4129 16.2979 95.2882 15.798 93.9135 15.798C92.5389 15.798 91.4141 16.2979 90.5394 17.2664C89.6646 18.2349 89.2272 19.4534 89.2272 20.9218C89.2272 23.921 91.1642 26.0455 93.9135 26.0455ZM110.535 12.9237C115.066 12.9237 118.284 16.4853 118.284 20.953C118.284 25.4519 115.097 28.9198 110.535 28.9198C105.943 28.9198 102.694 25.4519 102.694 20.953C102.694 16.4853 105.943 12.9237 110.535 12.9237ZM110.504 26.0767C111.91 26.0767 113.035 25.6081 113.941 24.6396C114.847 23.6711 115.316 22.4214 115.316 20.953C115.316 17.985 113.316 15.7668 110.504 15.7668C107.724 15.7668 105.662 17.985 105.662 20.953C105.662 23.8585 107.724 26.0767 110.504 26.0767ZM120.265 28.4512V13.3923H123.233V15.1419C124.327 13.7672 125.92 12.9237 128.013 12.9237C131.294 12.9237 133.262 15.1107 133.262 18.7035V28.4512H130.294V19.2971C130.294 16.829 129.232 15.6105 127.107 15.6105C124.733 15.6105 123.233 17.4226 123.233 20.3281V28.4512H120.265Z"
              fill="#384238"
            />
            <path
              d="M3.55484 0.0136719V7.12335H25.3282L3.04605 22.6247C1.13533 23.9511 0 26.1284 0 28.459C0 32.3827 3.17936 35.5621 7.10301 35.5621H28.4387V28.4524H7.12301L28.4387 13.6176V28.4524H35.5484V6.01367C35.5484 2.69996 32.8621 0.0136719 29.5484 0.0136719H3.55484Z"
              fill="#384238"
            />
          </svg>

          {/* <svg
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
          </svg> */}
        </Link>
      </div>
      <ul className="hidden items-center gap-10 sm:flex">
        <li>
          <Link href="/learn" className="hover:font-bold">
            Start learning
          </Link>
        </li>
        <li>
          <Link href="/tools" className="hover:font-bold">
            Our tools
          </Link>
        </li>
        <li>
          <Link
            href="/community"
            className="rounded-xl bg-darkgreen px-4 py-3 text-white hover:bg-deepgreen"
          >
            Join community!
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
              <Link href="/practices" className="hover:underline">
                Practices
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
