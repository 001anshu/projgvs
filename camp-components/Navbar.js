"use client";
import Navbarbtn from "@/components/Navbarbtn";
import React, { useEffect, useState } from "react";



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
    // { name: "Accomodation", id: "accomodation" }, //done
    // { name: "Eligibility", id: "eligibility" }, //done
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
    <div className=" bg-white ">
      <div className="bg-gradient-to-l from-sky-400 flex items-center drop-shadow-2xl shadow-indigo-400  justify-between   ">
        <img
          src="/header_logo.jpeg"
          alt="Description of the image"
          className="w-10 m-2  lg:w-18 md:w-16"
        />

        <div className="text-xl lg:text-2xl text-black font-semibold font-mono ">GVS Dham Yatra Services</div>
        <div>
        <div className="hidden m-2 lg:flex  lg:justify-center ">
          {items1.map((item, i) => (
             
            <Navbarbtn
              name={item.name}
              key={i}
              gotoId={() => scrollToSection(item.id)}
            />
            
          ))}
          
        </div>
        </div>
        <div className="">
          <button onClick={toggleMenu} className="focus:outline-none m-2 lg:hidden ">
            <svg
              className="w-6 h-6"
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
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } bg-white w-1/3 absolute  right-0 z-50 shadow-2xl `}
      >
        <div className="max-w-sm mx-auto border-b bg-indigo-50 border-gray-300 flex flex-col items-center p-4">
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
