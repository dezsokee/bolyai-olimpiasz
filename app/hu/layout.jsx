"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const HuLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="overflow-y-hidden px-5 pb-32 sm:px-10 md:px-28">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default HuLayout;
