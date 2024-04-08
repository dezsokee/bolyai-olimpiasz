"use client";
import { useState } from "react";

const Mosaic = ({ images }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleImageHover = (index) => {
    setHoveredIndex(index);
  };

  const handleImageLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section
      className="grid grid-cols-2 gap-8 pt-28 md:grid-cols-3 lg:grid-cols-4"
      id="mosaic_container"
    >
      {images.map((url, index) => {
        return (
          <img
            src={url}
            key={index}
            alt={`Image ${index}`}
            className={`h-full w-full shadow-2xl object-cover transition-all hover:z-10 hover:scale-[1.1] md:hover:scale-[1.7] ${
              hoveredIndex !== null && index !== hoveredIndex
                ? "opacity-20"
                : ""
            }`}
            onMouseEnter={() => handleImageHover(index)}
            onMouseLeave={handleImageLeave}
          />
        );
      })}
    </section>
  );
};
export default Mosaic;
