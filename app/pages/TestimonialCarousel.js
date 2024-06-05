"use client"
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { logo, monk_img, students, temple_img } from "@/public/constant";

export default function TestimonialCarousel({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    };

    const autoplayInterval = setInterval(autoplay, 5000); // Change slide every 3 seconds

    return () => clearInterval(autoplayInterval); // Cleanup interval on component unmount
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container h-full w-full ">
        {images?.map((i) => (
          <div
            className="embla__slide flex max-h-[450px] flex-col justify-center"
            key={i.src}
          >
            <img className="flex justify-center items-center max-h-[300px] max-w-[320px]" src={i.src} alt=".." />
          </div>
        ))}
      </div>
    </div>
  );
}
