import React from "react";
import CourseCard from "./CourseCard";

const Courses = () => {
  const data = [
    {
      img: [
        {
          src: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZjW28rxUtSX5Rxj-_KgNXiqUqe7uGsmpKxSRvQksNOXMdSbg16JKTvaoOn99H2wJE0atUy5gmGBM4r9zcv5VV6jVpxhbNkbg=w1160-h878-rw-v1",
        },
       
        {
          src: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYeegnT0sxThGSN-iSV0cjTdxv-CiOXoJBm1fS0GJxYKHI7ARVtIcNkbzGjOUtlVNpsVkJzGEZHHx9SOym187TBvrL3cAxUNMo=w1160-h878-rw-v1",
        },
        {
          src: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbYVXWdLBl-HCTPP_tjfjwey6zFLUfGtbxTwKjlwmg_jJeNRrC-yhXQs7JpNZgdwCWUNg5eDfQxdo8mUWO5vpjDFfAUNFPgRQ=w1160-h878-rw-v1",
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
          src:"https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZ070nPwjcfxBsbeWeyf9Df4vRuQt2lD0hgeG--d0yOlfK4_fTQpL7rLQyKjlmZBRCH651mAyJbyMNOpQV9MhJwIqgjmTMdBf4=w1160-h878",
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
