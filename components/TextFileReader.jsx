"use client";
import { useState, useEffect } from "react";

const TextFileReader = ({ fileName }) => {
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    const fetchTextFile = async () => {
      const response = await fetch(`/assets/${fileName}`);
      const text = await response.text();
      const paragraphsArray = text.split("\n");

      setParagraphs(paragraphsArray);
    };

    fetchTextFile();
  }, [fileName]);

  const shouldBold = (paragraph) => {
    if (paragraph.startsWith("***")) {
      return "font-semibold text-lg";
    }

    return "";
  };

  const removeFirstAsterisks = (paragraph) => {
    return paragraph.replace(/^[\*+&]+/, "");
  };

  const getImageUrl = (paragraph) => {
    const urlPattern = /\[(.*?)\]/g;
    const urlMatch = urlPattern.exec(paragraph);

    if (urlMatch) {
      return urlMatch[1];
    }

    return null;
  };

  return (
    <div className="flex flex-col gap-2 text-justify">

      {Array.isArray(paragraphs) &&
        paragraphs.map((paragraph, index) => {
          const imageUrl = getImageUrl(paragraph);

          if (imageUrl) {

            const paragraphWithoutUrl = paragraph.replace(`[${imageUrl}]`, "");

            return (
              
              <p key={index} className={shouldBold(paragraphWithoutUrl)}>
                <img
                  src={imageUrl}
                  alt={`Image ${index}`}
                  className="float-left max-w-lg object-cover pr-3"
                />
                <span>{removeFirstAsterisks(paragraphWithoutUrl)}</span>
              </p>

            );
          } else if (paragraph.startsWith("+")) {

            return (
              <p key={index}>
                
                <span className="mr-2">•</span>
                {removeFirstAsterisks(paragraph)}

              </p>
            );

          } else if (paragraph.startsWith("&")) {

            return (
              <p key={index} className="text-sm uppercase text-slate-800 -mt-2">
                
                {removeFirstAsterisks(paragraph)}
              
              </p>
            );

          } else {
            
            return (
              <p key={index} className={shouldBold(paragraph)}>
              
                {removeFirstAsterisks(paragraph)}
              
              </p>
            );
          }
        })}

    </div>
  );
};
export default TextFileReader;
