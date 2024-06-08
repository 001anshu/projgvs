import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";
import Link from "next/link";

const CourseCard = ({ data }) => {
  return (
    <div>
      <div className="border w-[300px] md:h-[700px]   relative  bg-indigo-50 rounded-lg p-2 m-4 ">
        <div className="md:w-[280px] md:h-[400px] flex justify-center">
          <TestimonialCarousel images={data.img} />
        </div>

        <h2 className="flex justify-center text-2xl">{data.name}</h2>
        <p className="text-center font-mono">{data.desc}</p>
        <div className="flex justify-center items-center">
          {data.link!='/' &&
          <Link href={data.link} className="flex justify-center items-center">
            <button className="bg-indigo-500 md:w-1/2 m-2  flex justify-center items-center font-mono rounded-md text-xl text-white p-2 md:absolute md:bottom-0 hover_yellow">
              Register
            </button>
          </Link>
}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
