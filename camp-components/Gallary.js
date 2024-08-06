"use client";
import Image from "next/image";
import React, { useState } from "react";

const Gallary = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const img = [
    {
      src: "https://yt3.ggpht.com/odG5pisRR4xw61ZEie0NlVPEp8xbO6Jhz9eZAlNuziQwm2fx_kag1GxSjU4HVBqrC8i47ye3QKtRfA=s800-c-fcrop64=1,20000000dfffffff-rw-nd-v1",
      alt: "camp01",
    },
    {
      src: "https://yt3.ggpht.com/U3gmjdr_uo4zUbNprdqESyve5YOo3Pm1mA51LAqQfLBEzcHXkcKExJs6E5YPk0jLoQY7KWRzviYtfg=s1080-c-fcrop64=1,20000000dfffffff-rw-nd-v1",
      alt: "camp02",
    },
    {
      src: "https://yt3.ggpht.com/416sHiKzI-yC5OA3U4ydk_AxRTckKRD3NE1kmualaUiZj7yQK4LtDTiOqwgnJraKgjmx6x_zHcVWIA=s960-c-fcrop64=1,20000000dfffffff-rw-nd-v1",
      alt: "camp03",
    },
    {
      src: "https://yt3.ggpht.com/0353CFlz2gOCCHMFn6S-Oo7ln19PpOnKPVtGy-tn4XWoCqSlWhUxBjFq9G05tOwNWbwvUrax-qJa=s800-c-fcrop64=1,20000000dfffffff-rw-nd-v1",
      alt: "camp04",
    },
    {
      src: "https://yt3.ggpht.com/dS_Cc8K9y79NKTwRVMbVJNTfB8C8i5vj4qLwUW6DpNhPcV3K2bx5ji83urv6dUBrbaOs-qtXNyonNA=s1280-rw-nd-v1",
      alt: "camp05",
    },
    {
      src: "https://yt3.ggpht.com/wLa-Kq3lnSaj4vuHFtDK-d8ov3CCxNNK4zmiCJvJA6bvsgGoNyCGx79_p3FUFlDjxAtCiTqzhr_0=s1080-c-fcrop64=1,00000ac4fffff544-rw-nd-v1",
      alt: "camp06",
    },
    {
      src: "https://yt3.ggpht.com/2LPIkPYQD5P0t__F-6RDQ9Mbc_3VZDgDr_NwDYHzaEzuFqek2QrBjP1dJnGELQ6kupWqpVl6mwVsI5s=s800-c-fcrop64=1,00000000b96effff-rw-nd-v1",
      alt: "camp07",
    },
    // { src: "/camp08.webp", alt: "camp08" },
    // { src: "/camp09.webp", alt: "camp09" },
    // { src: "/camp10.jpg", alt: "camp10" },
    // { src: "/camp11.jpg", alt: "camp11" },
    // { src: "/camp12.webp", alt: "camp12" },
    // { src: "/camp13.jpg", alt: "camp13" },
    // { src: "/camp14.webp", alt: "camp14" },
    // { src: "/camp15.webp", alt: "camp15" },
    // { src: "/camp16.webp", alt: "camp16" },
    // { src: "/camp17.webp", alt: "camp17" },
    // { src: "/camp18.webp", alt: "camp18" },
    // { src: "/camp19.webp", alt: "camp19" },
    // { src: "/camp20.webp", alt: "camp20" },
    // { src: "/camp21.webp", alt: "camp21" },
    // { src: "/camp22.jpg", alt: "camp22" },
    // { src: "/camp23.jpg", alt: "camp23" },
    // { src: "/camp24.webp", alt: "camp24" },
    // { src: "/camp25.jpg", alt: "camp25" },
    // { src: "/camp26.webp", alt: "camp26" },
    // { src: "/camp27.webp", alt: "camp27" },
    // { src: "/camp28.webp", alt: "camp28" },
    // { src: "/camp29.webp", alt: "camp29" },
    // { src: "/camp30.webp", alt: "camp30" },
    // { src: "/camp31.webp", alt: "camp31" },
    // { src: "/camp32.webp", alt: "camp32" },
    // { src: "/camp33.webp", alt: "camp33" },
    // { src: "/camp34.webp", alt: "camp34" },
  ];

  return (
    <div className="flex justify-center">
      {" "}
      <div
        className="text-center w-3/4  "
        style={{ backgroundColor: "rgb(27,37,46)", padding: "" }}
        id="memories"
      >
        <div>
          <p
            className="py-10"
            style={{ fontSize: "3rem", color: "white", padding: "" }}
          >
            YATRA MEMORIES
          </p>
        </div>
        <div
          className=" scrollbar-hide scroll-smooth"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxHeight: "600px",
            overflowY: "scroll",
          }}
        >
          {img.map((image, index) => (
            <div key={index} style={{ width: "300px", padding: "8px" }}>
              <img
                src={image.src}
                alt={image.alt}
                width="300"
                height="200"
                className="object-cover w-full transition-transform duration-300 ease-in-out"
                loading="lazy"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallary;
