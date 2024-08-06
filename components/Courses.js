import React from "react";
import CourseCard from "./CourseCard";

const Courses = () => {
  const data = [
    {
      img: [
        {
          src: "https://yt3.ggpht.com/cO51hNLgslk6H0DgFLE7rrZ3XuAasHq8yDLHkLU0uheQIRUr7acZoZjWbZcQO9inps37lk85DYSw8n8=s1516-nd-v1",
        },
       
        {
          src: "https://yt3.ggpht.com/1FJ9NWNconyNOE2YGefU4J15T3hjmhkFrIIS0jSo0U3atY9q83cIVRtQdnrcVbWuy1Y7nF2Ev2c3lA=s800-c-fcrop64=1,00000000ffffffff-rw-nd-v1",
        },
        {
          src: "https://yt3.ggpht.com/416sHiKzI-yC5OA3U4ydk_AxRTckKRD3NE1kmualaUiZj7yQK4LtDTiOqwgnJraKgjmx6x_zHcVWIA=s960-c-fcrop64=1,20000000dfffffff-rw-nd-v1",
        },
      ],
      link:"/yatra",
      name: "Yatra",
      desc: "A devotee should make a point of visiting all the places where the Lord performed His pastimes. In this way, he can make his life successful. — Srila Prabhupada",
    },
    {
      img: [{
          src: "https://www.padayatra.com/wp-content/uploads/2019/01/maha-prasad-plate.jpg",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ZF5EoEVm1bVlDH0VsymV199FW8MbraqSpw&s",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUitFujIoeHQMmGAxwGSyswaoYOlXdUDvcFXNdMLLg1O-2K2Kr66nVQoC_kbMQ8dkFTJQ",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKsDGVADMdg4ppjmB1zbtlYUuHeiElwZDQW15oEQt4xBKLm4tVHM_N3hopYZoLaoqplT0&usqp=CAU",
        },
       
      ],
      link:"/",
      name: "Prasad",
      desc: "Simply by the liberal distribution of prasadam and by chanting the holy name of the Lord, we can bring about a revolution in the misdirected lives of the people of this materialistic world. — Srila Prabhupada",
    },
    {
      img: [
        {
          src:"https://yt3.ggpht.com/IGXeLLE_LQHRT6aAWwUQ4SHIXGCLbV04VUFW-cq6YJUmVDTIonR1lVlgucPH4WzD8gLnJBeHym7gLQ=s1080-c-fcrop64=1,00000000ffffffff-rw-nd-v1",
        },
        {
          src:"https://iskconcongregation.com/wp-content/uploads/2019/04/CT16-114.png"
        }
      
        
      ],
      link:'/',
      name: "Counseling",
      desc: "Our duty is to guide people to spiritual realization and to relieve them from the anxieties and sufferings of material existence through compassionate and thoughtful counseling. — Srila Prabhupada",
    },
  ];
  //passing props with all the data ke remember to do it
  return (
    <div className="md:mx-40 flex flex-col items-center">
      <h1 className="flex justify-center mt-10 font-bold text-3xl">
        What we offer
      </h1>
      <div id="courses" className="p-4 flex md:flex-row items-center flex-col justify-center  md:flex-wrap  ">
        {data.map((d, i) => (
          <CourseCard key={i} data={d} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
