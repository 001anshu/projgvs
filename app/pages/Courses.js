import React from "react";
import CourseCard from "./CourseCard";

const Courses = () => {
  const data = [
    {
      img: [
        {
          src: "yatra01.jpg",
        },
        {
          src: "yatra02.jpg",
        },
        {
          src: "yatra03.jpg",
        },
        {
          src: "yatra04.jpg",
        },
      ],
      name: "Yatra",
      desc: "",
    },
    {
      img: [{
          src: "prasad.jpg",
        },
        {
          src: "prasad02.jpg",
        },
        {
          src: "prasad03.jpg",
        },
        {
          src: "prasad04.jpg",
        },
       
      ],
      name: "Prasad",
      desc: "",
    },
    {
      img: [
        {
          src:"counseling01.jpg",
        },
        {
          src:"counseling02.jpg"
        }
      
        
      ],
      name: "Counseling",
      desc: "",
    },
  ];
  //passing props with all the data ke remember to do it
  return (
    <div className="md:mx-40">
      <h1 className="text-5xl font-semibold  flex justify-center">
        What we offer
      </h1>
      <div id="courses" className="lg:flex p-4 md:flex  md:flex-wrap     md:justify-center">
        {data.map((d, i) => (
          <CourseCard key={i} data={d} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
