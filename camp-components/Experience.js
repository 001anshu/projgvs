import Courses from "@/components/Courses";
import React from "react";

import ExpeCard from "./ExpeCard";

const Experience = () => {
  const exp=[{
    title:"KRISHNA KATHA",
    src:"kirtan01.jpg",
    alt:"img",
    disc:"Do not miss the Krishna Katha by HG Kumar Lila Pr. Relish the nectar 2 times a day which includes the pastimes of the dham and pastimes from scriptures."
  },
  {
    title:"KRISHNA KATHA",
    src:"kirtan01.jpg",
    alt:"img",
    disc:"Do not miss the Krishna Katha by HG Kumar Lila Pr. Relish the nectar 2 times a day which includes the pastimes of the dham and pastimes from scriptures."
  },
  {
    title:"KRISHNA KATHA",
    src:"kirtan01.jpg",
    alt:"img",
    disc:"Do not miss the Krishna Katha by HG Kumar Lila Pr. Relish the nectar 2 times a day which includes the pastimes of the dham and pastimes from scriptures."
  },

]
  return (
    <div
      id="experience"
      className=""
      style={{
        backgroundColor: "rgb(255,17,74)",
        color: "white",
      }}
    >
      
      <h1
        className="text-5xl p-8 text-center"
        style={{
          fontSize: "3rem", // Default font size for small to medium screens
          "@media (min-width: 768px)": {
            // Apply styles for large screens (768px and above)
            fontSize: "6.25rem", // Change font size to 100px for large screens
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
  );
};

export default Experience;
