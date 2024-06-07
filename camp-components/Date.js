import React from "react";

const Date = () => {
  return (
    <div id="date" className="flex flex-col md:flex-row justify-center m-4 ">
      <div className="md:hidden flex md:w-1/2">
        <img className="rounded-xl w-full " src="chitrakut03.jpg" />
      </div>
      <div
        className="flex text-center justify-center m-2 rounded-xl md:w-1/3"
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
          }}
        >
          {" "}
          <h1 className="font-bold text-5xl m-4">Important Dates</h1>
          <h1 className="md:text-4xl font-semibold text-2xl  m-2"> Registration Starts</h1>
          <h1 className="md:text-3xl text-xl mb-4 m-2">26th June</h1>
          <h1 className="md:text-4xl font-semibold text-2xl  m-2"> Last date of Registration</h1>
          <h1 className="md:text-3xl text-xl mb-4 m-2">26th July</h1>
          <h1 className="md:text-4xl font-semibold text-2xl  m-2"> Accomodation Booking</h1>
          <h1 className="md:text-3xl text-xl mb-4 m-2">8th August</h1>
          <h1 className="md:text-4xl font-semibold text-2xl  m-2"> Arrival of devotees</h1>
          <h1 className="md:text-3xl text-xl mb-4 m-2">19th Sept</h1>
          <h1 className="md:text-4xl font-semibold text-2xl  m-2"> Yatra Dates</h1>
          <h1 className="md:text-3xl text-xl mb-4 m-2">19th Sept - 23rd Sept</h1>
          <h1 className="md:text-4xl font-semibold text-2xl  m-2"> Departure from Yatra</h1>
          <h1 className="md:text-3xl text-xl mb-4 m-2">24th Sept</h1>
          {/* <h1 className="md:text-4xl text-2xl mb-4 m-2">more information coming soon</h1> */}
   
          

        </div>
      </div>
     
    </div>
  );
};

export default Date;
