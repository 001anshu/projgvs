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
      desc: "A devotee should make a point of visiting all the places where the Lord performed His pastimes. In this way, he can make his life successful. — Srila Prabhupada",
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
      desc: "Simply by the liberal distribution of prasadam and by chanting the holy name of the Lord, we can bring about a revolution in the misdirected lives of the people of this materialistic world. — Srila Prabhupada",
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
      desc: "Our duty is to guide people to spiritual realization and to relieve them from the anxieties and sufferings of material existence through compassionate and thoughtful counseling. — Srila Prabhupada",
    },
  ];
  //passing props with all the data ke remember to do it
  return (
    <div className="md:mx-40">
      <h1 className="text-5xl font-semibold  flex justify-center">
        What we offer
      </h1>
      <div id="courses" className="lg:flex p-4 md:flex  md:flex-wrap  md:justify-center">
        {data.map((d, i) => (
          <CourseCard key={i} data={d} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
