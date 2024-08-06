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
   
    
  
  ];
  
  const images = [
    {
      name: "Br02",
      src: "https://yt3.ggpht.com/4tvRSiA0CoxOh_4zwZFqXeXb_H_IiLLiUXeTiZgJSGZjVY6qRkuYFZzI6fYGpSFUC2sFrFrgvtnkTQ=s800-c-fcrop64=1,01c70000fe44ffff-rw-nd-v1",
    },
    {
      name: "Br4",
      src: "https://yt3.ggpht.com/IE3Y5RQYhH8ax1-wuNFf3Qn_SLa2YorUoKU6k8hVgIHIDbFxxeXzgsg-QKVbFqTCC5BCMvKXbvm6=s618-c-fcrop64=1,2e320000d1cdffff-rw-nd-v1",
    },
    {
      name: "Br10",
      src: "https://yt3.ggpht.com/IME8mUu_zau1af-8elXHm-wVd8vPMPtLdDlxcDgSx77IyMBhfqozXsfhF1PlTlj7judkraikmZ9GEw=s723-c-fcrop64=1,347c0000c516ffff-rw-nd-v1",
    },
    {
      name: "Br11",
      src: "https://yt3.ggpht.com/vFxAoaR8IQcUkYg3AoC3iMhp5Dgj_G-YHnEsjHBLGc0-HHO42NLxHG6I81BuP3Up0W_s8g46PwoY0A=s800-c-fcrop64=1,124e0000edb1ffff-rw-nd-v1",
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
