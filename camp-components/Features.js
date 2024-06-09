// import { global } from "styled-jsx/css";
import Link from "next/link";
import React from "react";

const Features = () => {
  
  return (
    <div id="features">
      <div className="lg:flex bg-gradient-to-r to-sky-500 md:mx-32 m-10 rounded-xl md:min-h-50  p-2   lg:justify-center  text-xl text-white">
        <div className="flex flex-col items-center md:mx-10  ">
        <Link href="http://gaurangavedic.org.in/yatra" passHref>
          <button
            className="lg:text-2xl text-center bg_black  rounded-lg hover_yellow  p-2 change"
            style={{
              // backgroundColor: "rgb(27,36,46)",
              padding: "20px",
              fontSize: "1.5rem",
              margin: "10px",
              width: "300px",
              
            }}
          >
            Registration
          </button>
          </Link>
        </div>
        
        <div className="flex flex-col items-center md:mx-10 hover:bg-white">
        <Link href={"/construction"}>
          <button
            className="lg:text-2xl text-center bg_black  rounded-lg hover_yellow  p-2 change"
            style={{
              // backgroundColor: "rgb(27,36,46)",
              padding: "20px",
              fontSize: "1.5rem",
              margin: "10px",
              width: "300px",
              
            }}
          >
            Database Entry
          </button>
          </Link>
        </div>
        <div className="flex flex-col items-center md:mx-10">
          <Link href={"/construction"}>
          <button
            className="lg:text-2xl text-center bg_black  rounded-lg hover_yellow  p-2 change"
            style={{
              // backgroundColor: "rgb(27,36,46)",
              padding: "20px",
              fontSize: "1.5rem",
              margin: "10px",
              width: "300px",
              
            }}
          >
            Accomodation
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
