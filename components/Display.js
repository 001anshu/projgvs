import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import About from "./About";
import Information from "./Information";
import { Br02 } from "@/public/constant";

const Display = () => {
  const info = [
    { text: "Chitrakut Camp Registration -> click here",
      link:"/yatra"
     },
    { text: "Rath Yatra At Chaouparan🥳",
      link:'/'
     },
    
  
  ];
  
  const images = [
    {
      name: "Br02",
      src: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZ5ffUmDNcuJT4Eb5xMsdtTMy73eG_fU6s6fI32oZMI7BCXNR8sBh5NL6r7xeZx4G29a-n-m-7nIwPknghLdQIgtWBs3_zTYw=w1160-h878",
    },
    {
      name: "Br4",
      src: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihb0PRWwmOU4ucIpjlxnKy6ME1rBgyyyEyadEHqVRLK5b42cGwaBPUeuVpbbDTd487bvhHuZwdzBbbGCLgkl8ckz4hqky-7-9nw=w1160-h878-rw-v1",
    },
    {
      name: "Br10",
      src: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbXhei1B5fujPs65dzk2NJbWJzfAeynPLbDgEHPwRYh80PUtbx9pDvtLAJ2B_f582FlJVRwjeRO5UYEbMKlu2bTZHrYs-sv8_g=w1160-h878-rw-v1",
    },
    {
      name: "Br11",
      src: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbeSzd2Fm6aI5_Qfdke2IY9ZNmFFRKJQV4n-qqki1UawncrJpyK29S26Lgs6gHQlDwStUVbcswkfs0gEmOY37UvRkZvzmBwxg=w1160-h878-rw-v1",
    },
  ];
  return (
    <div className="md:h-[400px] h-full p-8 m-4 md:flex md:justify-center md:items-center ">
      <div className="md:w-1/3  mb-4 p-2 w-full h-full overflow-auto max-h-[400px] custom-scrollbar ">
        <Information info={info}/>
      </div>
      <div className="md:w-1/2 w-full p-2 mb-4 max-h-[500px] h-full overflow-hidden relative">
        <EmblaCarousel images={images} />
       
      </div>
    </div>
  );
};

export default Display;
