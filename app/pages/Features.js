import { book, laptop, teacher } from "@/public/constant";
import React from "react";

const Features = () => {

  return (
    <div id="features">
      
      <div className="lg:flex bg-indigo-500 md:mx-32 m-10 rounded-xl md:min-h-72  p-8   lg:justify-center  text-xl text-white">
        <div className="flex flex-col items-center md:mx-16  ">
          <img className="h-40 w-40" src={book} />
          <p className="lg:text-2xl p-2 flex text-center  ">Bhagwat geeta Seminars</p>
        </div>
        <div className="flex flex-col items-center md:mx-16">
          <img className="h-40 w-40" src={teacher} />
          <p className="lg:text-2xl flex text-center   p-2">Peronality Development Course</p>
        </div>
        <div className="flex flex-col items-center md:mx-16">
          <img className="h-40 w-40" src={laptop} />
          <p className="lg:text-2xl flex text-center  p-2">Offline And Online Classes</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
