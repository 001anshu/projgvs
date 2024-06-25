import Courses from "@/components/Courses";
import React from "react";

import ExpeCard from "./ExpeCard";
import Gallary from "./Gallary";

const Experience = () => {
  const exp=[{
    title:"KRISHNA KATHA",
    src:"https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihabZx7yy8cQmoX1EUrGogFVQrWiccD6IBv_jqchUUEy9p6JBxYmJrAJJZ_xLQ5iTVI6S4iQbgn5tAg5T5dzkcp7lEP4upzDYv4=w1160-h878",
    alt:"img",
    disc:"Do not miss the Krishna Katha by HG Kumar Lila Pr. Relish the nectar 2 times a day which includes the pastimes of the dham and pastimes from scriptures."
  },
  {
    title:"ECSTATIC KIRTAN",
    src:"https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZS12ki6Y9sEllMUO_WoUtqoS4M4q8tMNJANgQSzXtBmxmhpgniz37ye-mY6EdU-BLI1HYb1LOSxLi-L6eNF_s8qCPdOGwPQA=w1160-h878",
    alt:"img",
    disc:"Hear the ecstatic kirtan by Devotees in the Nama Sankirtan."
  },
  {
    title:"EXCITING DRAMA",
    src:"https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbVbIyo9x1nDTd7f22evcBm4NJnhDXiwBWx6cDLc2BmIv3l-KJ5blgYjA3jzF0RJjT7-YHMQkUfVuO7fieTG7Djz6-zEcpFWI0=w828-h1792",
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
        className=" text-center "
        style={{ fontSize: "3rem", color: "white", padding: "40px" }}
        
      >
        EXPERIENCE THE UNLIMITED
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
