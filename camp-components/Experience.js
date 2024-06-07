import Courses from "@/components/Courses";
import React from "react";

import ExpeCard from "./ExpeCard";
import Gallary from "./Gallary";

const Experience = () => {
  const exp=[{
    title:"KRISHNA KATHA",
    src:"camp01.jpg",
    alt:"img",
    disc:"Do not miss the Krishna Katha by HG Kumar Lila Pr. Relish the nectar 2 times a day which includes the pastimes of the dham and pastimes from scriptures."
  },
  {
    title:"ECSTATIC KIRTAN",
    src:"camp02.jpg",
    alt:"img",
    disc:"Do not miss the Krishna Katha by HG Kumar Lila Pr. Relish the nectar 2 times a day which includes the pastimes of the dham and pastimes from scriptures."
  },
  {
    title:"EXCITING DRAMA",
    src:"camp13.jpg",
    alt:"img",
    disc:"Do not miss the Krishna Katha by HG Kumar Lila Pr. Relish the nectar 2 times a day which includes the pastimes of the dham and pastimes from scriptures."
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
        className="text-5xl p-8 text-center font-semibold"
        style={{
          
          fontSize: "4rem", // Default font size for small to medium screens
          "@media (min-width: 700px)": {
            
            fontSize: "6.25rem", 
          },
        }}
      >
        Experience The Unlimited
      </h1>
      <div className="md:flex">
      {exp.map((e, i) => (
          <ExpeCard exp={e}/>
        ))}
      </div>
      
    </div>
    </div>
  );
};

export default Experience;
