import React from "react";
import Project_card from "./Project_card";

const Projects = () => {
  const props = [
    {
      switch: 0,
      header: "Youth Center",
      discription:
        "Mission :-   ISKCON Youth Centers aim to empower young individuals by providing a supportive environment where they can explore their spirituality, develop life skills, and engage in meaningful service. The centers strive to help youth lead purposeful and fulfilling lives grounded in the principles of Krishna consciousness",
      img: {
        src: "Br14.jpg",
        alt: "iskcon image",
      },
    },
    {
      switch: 1,
      header: "Gurukuls",
      discription:
        "Vision and Pledge: At the heart of our Gurukul lies the vision to nurture the next generation with the wisdom of Vedic teachings, fostering a society rooted in spiritual growth and moral values. We envision a world where children are empowered with focus, tolerance, patience, and character; where they are equipped to discern the good from the bad, and contribute positively to society. Our mission is to instill in our students a deep-seated contentment and satisfaction with life, as bestowed by divine grace, while"+
        
        " encouraging them to strive with earnest effort. We aim to cultivate in them a profound respect for all beings, viewing every woman with the reverence of a mother, and treating others' possessions with the detachment of dust. Through our residential education, provided almost free of cost, we are committed to bringing this transformative experience to every child, ensuring they remain steadfast in any situation, content in their being, and become the wise leaders our society and nation need. This is our pledge, our vision, for the Gurukul we have founded.",
      img: {
        src: "Br12.jpg",
        alt: "iskcon image",
      },
    },
    {
      switch: 0,
      header: "Gowsala",
      discription:
        "Mission :-   ISKCON Youth Centers aim to empower young individuals by providing a supportive environment where they can explore their spirituality, develop life skills, and engage in meaningful service. The centers strive to help youth lead purposeful and fulfilling lives grounded in the principles of Krishna consciousness",
      img: {
        src: "Br11.jpg",
        alt: "iskcon image",
      }
    }
  ];
  return (
    <div id="projects">
      <h1 className="flex justify-center font-bold text-3xl">Our Projects</h1>
      {
        props.map((m)=>(
          
            <Project_card props={m} key={m.header} />
          
        ))
      }
      {/* <Project_card/> */}
    </div>
  );
};

export default Projects;
