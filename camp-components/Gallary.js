"use client";
import Image from "next/image";
import React from "react";

const Gallary = () => {
  const handleMouseEnter = (e) => {
    e.target.style.transform = "scale(1.1)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
  };
  const img = [
    { src: "/camp01.jpg", alt: "camp01" },
    { src: "/camp02.jpg", alt: "camp02" },
    { src: "/camp03.webp", alt: "camp03" },
    { src: "/camp04.webp", alt: "camp04" },
    { src: "/camp05.webp", alt: "camp05" },
    { src: "/camp06.webp", alt: "camp06" },
    { src: "/camp07.webp", alt: "camp07" },
    { src: "/camp08.webp", alt: "camp08" },
    { src: "/camp09.webp", alt: "camp09" },
    { src: "/camp10.jpg", alt: "camp10" },
    { src: "/camp11.jpg", alt: "camp11" },
    { src: "/camp12.webp", alt: "camp12" },
    { src: "/camp13.jpg", alt: "camp13" },
    { src: "/camp14.webp", alt: "camp14" },
    { src: "/camp15.webp", alt: "camp15" },
    { src: "/camp16.webp", alt: "camp16" },
    { src: "/camp17.webp", alt: "camp17" },
    { src: "/camp18.webp", alt: "camp18" },
    { src: "/camp19.webp", alt: "camp19" },
    { src: "/camp20.webp", alt: "camp20" },
    { src: "/camp21.webp", alt: "camp21" },
    { src: "/camp22.jpg", alt: "camp22" },
    { src: "/camp23.jpg", alt: "camp23" },
    { src: "/camp24.webp", alt: "camp24" },
    { src: "/camp25.jpg", alt: "camp25" },
    { src: "/camp26.webp", alt: "camp26" },
    { src: "/camp27.webp", alt: "camp27" },
    { src: "/camp28.webp", alt: "camp28" },
    { src: "/camp29.webp", alt: "camp29" },
    { src: "/camp30.webp", alt: "camp30" },
    { src: "/camp31.webp", alt: "camp31" },
    { src: "/camp32.webp", alt: "camp32" },
    { src: "/camp33.webp", alt: "camp33" },
    { src: "/camp34.webp", alt: "camp34" },
  ];
  const img2 = [
    { src: "/camp01.jpg", alt: "camp01" },
    { src: "/camp02.jpg", alt: "camp02" },
    { src: "/camp03.webp", alt: "camp03" },
    { src: "/camp04.webp", alt: "camp04" },
    { src: "/camp05.webp", alt: "camp05" },
    { src: "/camp06.webp", alt: "camp06" },
    { src: "/camp07.webp", alt: "camp07" },
    { src: "/camp08.webp", alt: "camp08" },
    { src: "/camp09.webp", alt: "camp09" },
    { src: "/camp10.jpg", alt: "camp10" },
    { src: "/camp11.jpg", alt: "camp11" },
    { src: "/camp12.webp", alt: "camp12" },
    { src: "/camp13.jpg", alt: "camp13" },
    { src: "/camp14.webp", alt: "camp14" },
    { src: "/camp15.webp", alt: "camp15" },
  ];
  return (
    <div className='text-center ' style={{ backgroundColor: "rgb(27,37,46)", padding: "40px" }} id='memories'>
      <div>
        <p className="" style={{ fontSize: "3rem", color: 'white', padding: "40px" }}>YATRA MEMORIES</p>
      </div>
      <div className="" style={{
         display: "flex", flexWrap: "wrap", justifyContent: "center" 
      }}>
        {img.map((image, index) => (
          <div key={index} style={{ width: "300px", padding: "8px" }}>
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              style={{ objectFit: "cover", width: "100%", transition: "transform 0.3s ease-in-out" }}
              loading="lazy"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        ))}
      </div>
      
    </div>
  );
  
};

export default Gallary;
