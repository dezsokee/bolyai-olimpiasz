import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "https://bolyai.ro/images/slideshow/n/3.jpg?1680455832514",
  "https://www.edums.ro/onigim2023/common-files/imag2.jpg",
  "https://bolyai.ro/images/slideshow/n/6.jpg?1681330132801",
];

export default function Slideshow() {
  return (
    <div className="slide-container">
      <Slide arrows={false} canSwipe={false} autoplay infinite duration={3000}>
        {slideImages.map((slideImage, index) => (
          <img
            src={slideImage}
            key={index}
            className="h-[390px] w-full object-cover"
          />
        ))}
      </Slide>
    </div>
  );
}
