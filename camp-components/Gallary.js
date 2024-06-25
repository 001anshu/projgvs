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
      src: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbV53e3DoaDzj6WYa4Z3PXLk95ZX0maWTKjSdnPsvrkZnObnADaKRgHKC4heqfhlpBSgwM9pKTdifG3VeHIUOypP_ZO2E8vmdw=w1160-h878-rw-v1",
      alt: "camp01",
    },
    {
      src: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbh4A-QtC1iFuw39NKo-2G-gbHEbhtiAK2dqTcX_zAOqQBYvoH8mcQVLnxg4LLFI5Cp6t6wfO5hVh7A1zIiXDasrGaPSsg6OWI=w1160-h878-rw-v1",
      alt: "camp02",
    },
    {
      src: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbXz97UgHPO1MGQ4p-hdKaQfRKFNXijVGczl1538FAviWGfcoJCOsfyiEtLof9pfnU6ryLgIvuWjmsrSAC0bNRXugG_9n8hZog=w1160-h878",
      alt: "camp03",
    },
    {
      src: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZ716Lm47psFdJgx0rYj3HNf5V05fP8W_qrFVZpsRj5yCKmuXCYk2Pe26y9je8j9xF1uligeieJbgTOgapkV0bEIbNd8tSNSw=w1160-h878",
      alt: "camp04",
    },
    {
      src: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZYYdRsCsjeNayeltZyAOnY1u4H6fAo61UY6BwZFQbuFmqergz8TrqBqdF_26vs9fNp5CKH3Y9of4w9gZ82ZEj98zAOfdycrQ=w1160-h878",
      alt: "camp05",
    },
    {
      src: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihY3yCuxTFxEqiKW-kkszfnOCyicOJA-T9gx87EtE4q2qhxbVrcGNUAZwU4HI7nnzP1KcEHJKTIz1x9mnK_i9ESzn33sg7-vldU=w1160-h878",
      alt: "camp06",
    },
    {
      src: "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYcVtPxChiSpjskRpFNa4jTZ9UBKz5cV-5iCt9b77rRFRqnWxZ2fK2kO6d7ubvMxwcfdVQlGb5zgx9moR_deLWg5VHJP--vY2g=w1160-h878",
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
