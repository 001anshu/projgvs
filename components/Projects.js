import React from "react";
import Project_card from "./Project_card";

const Projects = () => {
  const props = [
    {
      switch: 0,
      header: "GVS Public School",
      discription:
        "  Vision: Envisioning a modern academic institution rooted in spiritual values, the school aims to harmonize traditional wisdom with contemporary knowledge. The curriculum is designed to foster critical thinking, innovation, and ethical reasoning, preparing students to excel in a globalized world while remaining grounded in their cultural heritage. This non-residential school will provide a balanced education that nurtures the mind, body, and spirit, equipping young minds to lead with compassion, integrity, and a sense of responsibility towards society and the environment. The vision is to create leaders who are not only academically proficient but also spiritually attuned, capable of guiding society towards a more enlightened and sustainable future.",
      img: {
        src: "https://yt3.ggpht.com/3ujK6_RSgemKxRRFNCNA2-Dg8EoXQBnwzlMBA-GeW7IpuId2ptAJJ0WPFVKAE6CmV2UOQUNA1PlP=s1600-rw-nd-v1",
        alt: "iskcon image",
      },
    },
    {
      switch: 1,
      header: "Gurukul",
      discription:
        "Vision and Pledge: At the heart of our Gurukul lies the vision to nurture the next generation with the wisdom of Vedic teachings, fostering a society rooted in spiritual growth and moral values. We envision a world where children are empowered with focus, tolerance, patience, and character; where they are equipped to discern the good from the bad, and contribute positively to society. Our mission is to instill in our students a deep-seated contentment and satisfaction with life, as bestowed by divine grace, while"+

        " encouraging them to strive with earnest effort. We aim to cultivate in them a profound respect for all beings, viewing every woman with the reverence of a mother, and treating others' possessions with the detachment of dust. Through our residential education, provided almost free of cost, we are committed to bringing this transformative experience to every child, ensuring they remain steadfast in any situation, content in their being, and become the wise leaders our society and nation need. This is our pledge, our vision, for the Gurukul we have founded.",
      img: {
        src: "https://yt3.ggpht.com/5HLO52YSoCcvQEiLphcGpM08miI6a7yfNmAZlgpHpNUxae8iceEfCDTiW-5Cv4Ukhvir44QdrJyR=s1600-rw-nd-v1",
        alt: "iskcon image",
      },
    },
    {
      switch: 0,
      header: "Goshala",
      discription:
        "Srila Prabhupada, the founder of ISKCON, emphasized the importance of goshala (cow protection) as essential for both spiritual and material well-being. He regarded cows as sacred and integral to Vedic culture, teaching that protecting cows is a key aspect of practicing dharma and non-violence (ahimsa). Prabhupada highlighted that cows contribute significantly to sustainable agriculture through their byproducts, which serve as natural fertilizers and pesticides, and support rural economies. He believed that caring for cows cultivates compassion, ethical behavior, and spiritual advancement, fostering a harmonious and humane society aligned with Vedic principles.",
      img: {
        src: "https://yt3.ggpht.com/m5cd6ScyIxq_quBanxIfk-FBtEMytbmDdDBWi9GTCDfYlMlgwJscgSVuSrZD7JsjcOsw7hNh8yXH=s1600-rw-nd-v1",
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
