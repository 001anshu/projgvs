import React from "react";

const Contact = () => {
  return (
    <div
    id="contact"
      style={{
        backgroundColor: "rgb(27,37,45)",
        color: "white",
        padding: "20px",
      }}
    >
      <h1
        className="text-center font-semibold"
        style={{
          fontSize: "3rem",
        }}
      >
        CONTACT US
      </h1>
      <div className="text-center md:flex flex-col md:flex-row justify-center items-center">
        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-center"
          style={{
            padding: "10px",
            // margin: "20px",
          }}
        >
          <h1
            className="font-semibold text-xl "
            style={{
              
            }}
          >
            FIND US HERE
          </h1>
          <p>GAURANGA VEDIC SOCIETY</p>
          <p>HALDIA, WEST BENGAL</p>
        </div>
        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-center mt-4 md:mt-0"
          style={{
            // margin: "20px",
            padding: "10px",
          }}
        >
          <h1 className="font-semibold text-xl">GET IN TOUCH</h1>
          <p>yatra.gaurangavedic@gmail.com</p>
          <p>+91 8986472757</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
