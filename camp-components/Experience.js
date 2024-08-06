import Courses from "@/components/Courses";
import React from "react";

import ExpeCard from "./ExpeCard";
import Gallary from "./Gallary";

const Experience = () => {
  const exp=[{
    title:"KRISHNA KATHA",
    src:"https://yt3.ggpht.com/JgsBmk2Ah4wssM6kAKbGrvjPcJZslJB62fYQ6PicrW3vgVjBKgDtpwi6oaEXn9I6_yysLA00rNCZkw=s1080-rw-nd-v1",
    alt:"img",
    disc:"Do not miss the Krishna Katha by HG Kumar Lila Pr. Relish the nectar 2 times a day which includes the pastimes of the dham and pastimes from scriptures."
  },
  {
    title:"ECSTATIC KIRTAN",
    src:"https://yt3.ggpht.com/d7L8PCc4rR8z4WXEknZFVkVBhLWzmp8jKWHv1D9iX8la1GJARwn7wLMqD1Y_xHk_Sn2ovaz0PBTb=s1080-c-fcrop64=1,00002000ffffdfff-rw-nd-v1",
    alt:"img",
    disc:"Hear the ecstatic kirtan by Devotees in the Nama Sankirtan."
  },
  {
    title:"EXCITING DRAMA",
    src:"https://yt3.ggpht.com/ldffFDNRardJTUPStkCH_O_PNJiF1BklncZbDwNhWvW858q2f6m3DRCzqmdblGP1vfCszt50modlVI4=s1098-rw-nd-v1",
    alt:"img",
    disc:"By drama, you can preach. Just like Caitanya Mahāprabhu, He was a very great scholar, but He took part in the drama.-  Srila Prabhupada"
  },

]
  return (
    <div className=" flex justify-center  ">
    <div
      id="experience"
      className="w-3/4 "
      style={{
        backgroundColor: "rgb(27,37,46)",
        color: "white",
      }}
    >
      
      <h1
        className=" text-center items-center py-10 "
        style={{ fontSize: "3rem", color: "white",  }}
        
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
