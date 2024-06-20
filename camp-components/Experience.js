import Courses from "@/components/Courses";
import React from "react";

import ExpeCard from "./ExpeCard";
import Gallary from "./Gallary";

const Experience = () => {
  const exp=[{
    title:"KRISHNA KATHA",
    src:"camp32.webp",
    alt:"img",
    disc:"Do not miss the Krishna Katha by HG Kumar Lila Pr. Relish the nectar 2 times a day which includes the pastimes of the dham and pastimes from scriptures."
  },
  {
    title:"ECSTATIC KIRTAN",
    src:"camp15.webp",
    alt:"img",
    disc:"Hear the ecstatic kirtan by Devotees in the Nama Sankirtan."
  },
  {
    title:"EXCITING DRAMA",
    src:"drama.png",
    alt:"img",
    disc:"By drama, you can preach. Just like Caitanya Mahāprabhu, He was a very great scholar, but He took part in the drama.-  Srila Prabhupada"
  },

]
  return (
    <div>
    <div
      id="experience"
      className=" "
      style={{
        backgroundColor: "rgb(27,37,46)",
        color: "white",
      }}
    >
      
      <h1
        className="md:text-7xl text-5xl p-8 text-center font-semibold"
        
      >
        Experience The Unlimited
      </h1>
      <div className="md:flex justify-center w-full">
      {exp.map((e, i) => (
          <ExpeCard key={i} exp={e}/>
        ))}
      </div>
      
    </div>
    </div>
  );
};

export default Experience;
