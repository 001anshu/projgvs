// import { global } from "styled-jsx/css";
import React from "react";

const Features = () => {
  
  return (
    <div id="features">
      <div className="lg:flex bg-gradient-to-r to-sky-500 md:mx-32 m-10 rounded-xl md:min-h-50  p-2   lg:justify-center  text-xl text-white">
        <div className="flex flex-col items-center md:mx-10  ">
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
        </div>
        <div className="flex flex-col items-center md:mx-10 hover:bg-white">
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
        </div>
        <div className="flex flex-col items-center md:mx-10">
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
        </div>
      </div>
    </div>
  );
};

export default Features;
