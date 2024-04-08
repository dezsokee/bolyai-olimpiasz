"use client";
import TextFileReader from "@/components/TextFileReader";

const Page = () => {
  return (
    <main>
      <TextFileReader fileName="texts/tortenelem_maros.txt" />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mures_county_coat_of_arms.svg/800px-Mures_county_coat_of_arms.svg.png"
        className="h-auto w-28 mt-3"
      />
    </main>
  );
}
export default Page;