"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const RoLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden px-5 pb-32 sm:px-10 md:px-28">
        {children}
      </main>
      <Footer />
    </>
  );
};
export default RoLayout;
