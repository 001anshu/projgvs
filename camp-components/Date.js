"use client";
import Link from "next/link";
import React from "react";
import Features from "./Features";
import Collapsable from "./Collapsable";

const Date = () => {
  return (

    <div
      id="date"
      className="w-full flex justify-center"
    >
      <div className="flex flex-col md:flex-row items-center gap-5 md:w-3/4 w-full   justify-center m-4 ">
      
      <div className=" bg-black text-white flex md:w-3/4 w-full  rounded-lg">
        <Collapsable />
      </div>
      <div
        className="flex text-center items-center justify-center  rounded-xl md:w-1/3"
        // style={{
        //   backgroundColor: "rgb(27,36,46)",
        // }}
      >
        <div
          className="p-4 w-full max-h-[600px] overflow-y-auto  scrollbar-hide scroll-smooth "
          style={{
            color: "white",
            border: "1px solid white ",
            borderRadius: "30px",
            // minWidth:"500px",
          }}
        >
          {" "}
          <h1 className="font-bold text-3xl m-4 underline">Important Dates</h1>
          <div className="p-2">
          <h1 className="md:text-xl font-semibold text-xl   m-2">
            {" "}
            Database Entry
          </h1>
          <h1 className="md:text-lg text-lg mb-4 ">➢ 25th July</h1>
          
          <h1 className="md:text-xl font-semibold text-xl  m-2">
            {" "}
            Registration Dates
          </h1>
          <h1 className=" text-lg mb-4  ">➢ 4th August (Tentative)</h1>
          
          <h1 className=" font-semibold text-xl  m-2">
            {" "}
            Accommodation Booking
          </h1>
          <h1 className=" text-lg mb-4 ">➢  Will be announced soon</h1>
          <h1 className="md:text-xl font-semibold text-xl  m-2">
            {" "}
            Arrival of Devotees
          </h1>
          <h1 className="md:text-lg text-lg mb-4 ">➢ 20th November</h1>
          <h1 className="md:text-xl font-semibold text-xl  m-2">
            {" "}
            Yatra Dates
          </h1>

          <h1 className="md:text-lg text-lg mb-4 ">➢ 20th November - 24th November</h1>
          <h1 className="md:text-xl font-semibold text-xl  m-2">
            {" "}
            Departure from Yatra
          </h1>
          <h1 className="md:text-lg text-lg mb-4 ">➢ 25th November</h1>
          </div>
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
    </div>
  );
};

export default Date;
