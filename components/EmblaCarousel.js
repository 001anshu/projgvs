"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { logo, monk_img, students, temple_img } from "@/public/constant";

export default function EmblaCarousel({images}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });


  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    };

    const autoplayInterval = setInterval(autoplay, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoplayInterval); // Cleanup interval on component unmount
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container h-full w-full ">
        
        {images?.map((i,ind) => (
          <div className="embla__slide flex justify-center" key={ind}>
            
            <img 
            key={ind}
            className="md:h-1/2"
            src={i.src} alt=".." />
          </div>
        ))}
      </div>
    </div>
  );
}
