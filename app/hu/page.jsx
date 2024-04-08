"use client";
import Slideshow from "@/components/Slideshow";
import TextFileReader from "@/components/TextFileReader";

const Page = () => {
  return (
    <main className="flex flex-col gap-10">
      <Slideshow />
      <section className="gap-10 md:flex">
        <img
          alt=""
          src="/assets/images/pascan.jpg"
          className="mb-2 max-h-[600px] w-full object-cover shadow-2xl md:mb-0 md:w-[380px]"
        />
        <TextFileReader fileName="texts/pascan_hu.txt" />
      </section>
      <section className="gap-10 md:flex">
        <img
          alt=""
          src="/assets/images/antal.jpeg"
          className="mb-2 max-h-[600px] w-full object-cover shadow-2xl md:mb-0 md:w-[380px]"
        />
        <TextFileReader fileName="texts/antal_hu.txt" />
      </section>
      <section className="gap-10 md:flex">
        <img
          alt=""
          src="/assets/images/kallos.jpeg"
          className="mb-2 max-h-[600px] w-full object-cover shadow-2xl md:mb-0 md:w-[380px]"
        />
        <TextFileReader fileName="texts/kallos_hu.txt" />
      </section>
      <section className="gap-10 md:flex">
        <img
          alt=""
          src="/assets/images/peter.jpeg"
          className="mb-2 max-h-[600px] w-full object-cover shadow-2xl md:mb-0 md:w-[380px]"
        />
        <TextFileReader fileName="texts/peterferenc_hu.txt" />
      </section>
      <section className="gap-10 md:flex">
        <img
          alt=""
          src="/assets/images/soos.jpeg"
          className="mb-2 max-h-[600px] w-full object-cover shadow-2xl md:mb-0 md:w-[380px]"
        />
        <TextFileReader fileName="texts/soos_hu.txt" />
      </section>
    </main>
  );
};
export default Page;
