"use client";
import Link from "next/link";
import React from "react";
import Features from "./Features";
import Collapsable from "./Collapsable";

const Date = () => {
  return (
    <div
      id="date"
      className="flex flex-col md:flex-row items-center gap-2 justify-center m-4 "
    >
      
      <div className=" bg-black text-white flex md:w-1/2 w-full rounded-lg">
        <Collapsable />
      </div>
      <div
        className="flex text-center items-center justify-center m-2 rounded-xl lg:w-1/3"
        style={{
          backgroundColor: "rgb(27,36,46)",
        }}
      >
        <div
          className="p-4 md:m-10"
          style={{
            color: "white",
            border: "1px solid white ",
            borderRadius: "30px",
            // minWidth:"500px",
          }}
        >
          {" "}
          <h1 className="font-bold text-4xl m-4">Important Dates</h1>
          <h1 className="md:text-2xl font-semibold text-2xl  m-2">
            {" "}
            Database Entry
          </h1>
          <h1 className="md:text-xl text-xl mb-4 underline">➢ 21th June</h1>
          <div className="p-2">
          <h1 className="md:text-2xl font-semibold text-2xl  m-2">
            {" "}
            Registration Starts
          </h1>
          <h1 className="md:text-xl text-xl mb-4 underline ">➢ 15th July  </h1></div>
          <h1 className="md:text-2xl font-semibold text-2xl  m-2">
            {" "}
            Last date of Registration
          </h1>
          <h1 className="md:text-xl text-xl mb-4 underline ">➢ 28th July</h1>
          <h1 className="md:text-2xl font-semibold text-2xl  m-2">
            {" "}
            Accommodation Booking
          </h1>
          <h1 className="md:text-xl text-xl mb-4 underline ">➢ 8th August-18th August</h1>
          <h1 className="md:text-2xl font-semibold text-2xl  m-2">
            {" "}
            Arrival of devotees
          </h1>
          <h1 className="md:text-xl text-xl mb-4 underline ">➢ 20th Nov</h1>
          <h1 className="md:text-2xl font-semibold text-2xl  m-2">
            {" "}
            Yatra Dates
          </h1>

          <h1 className="md:text-xl text-xl mb-4 underline ">➢ 20th Nov - 24th Nov</h1>
          <h1 className="md:text-2xl font-semibold text-2xl  m-2">
            {" "}
            Departure from Yatra
          </h1>
          <h1 className="md:text-xl text-xl mb-4 underline">➢ 25th Nov</h1>
          {/* <h1 className="md:text-4xl text-2xl mb-4 m-2">more information coming soon</h1> */}
          {/* <Link href="http://gaurangavedic.org.in/yatra" passHref className="">
      
          <button className="p-4 abs rounded-lg text-2xl" style={{
            backgroundColor:"rgb(290,160,50)",
            color:"white"
          }}  >Rgister Now</button>
      
      </Link> */}
        </div>
      </div>

    
    </div>
  );
};

export default Date;
