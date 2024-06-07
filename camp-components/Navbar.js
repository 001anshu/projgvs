"use client";
import React, { useEffect, useState } from "react";
import Navbarbtn from "@/components/Navbarbtn";

import Link from "next/link";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  const items1 = [
    { name: "About", id: "about" }, //done
    { name: "Dates", id: "date" }, //done
    { name: "Experience", id: "experience" },
    { name: "Memories", id: "memories" },
    { name: "Accomodation", id: "accomodation" }, //done
    { name: "Eligibility", id: "eligibility" }, //done
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    console.log("clicked");
    setisOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center  lg:justify-center md:justify-between"
        style={{ backgroundColor: "rgb(20,163,244)" }}
      >
        <div
          className="hidden m-2 rounded-lg lg:flex lg:items-center  lg:justify-center "
          style={{
            backgroundColor: "rgb(212,228,248)",
          }}
        >
          {items1.map((item, i) => (
            <Navbarbtn
              name={item.name}
              key={i}
              gotoId={() => scrollToSection(item.id)}
            />
          ))}
        </div>
      </div>
      <div>
        <div>
          <div className="lg:hidden relative ">
            <button
              onClick={toggleMenu}
              className="focus:outline-none absolute  right-0 m-2 lg:hidden ml-96  "
            >
              <svg
                className="w-6 h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } bg-white w-1/3 absolute  right-0 my-10  z-50 shadow-2xl `}
      >
        <div className="max-w-sm  mx-auto border-b bg-indigo-50 border-gray-300 flex flex-col  items-center p-4">
          {items1.map((item, i) => (
            <Navbarbtn
              name={item.name}
              key={i}
              gotoId={() => scrollToSection(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
