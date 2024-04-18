"use client";
import { usePathname } from "next/navigation";

const Footer = () => {
  const lang = usePathname().includes("/hu") ? "hu" : "ro";

  return (
    <footer className="flex flex-col gap-10 border-t-2 border-black bg-white px-5 py-16 md:px-28">

      <section className="flex w-full flex-wrap items-center justify-center gap-10">
        <img alt="" src="/assets/images/minister.png" className="h-20" />
        <img alt="" src="/assets/images/isj.png" className="h-20" />

        <img alt="" src="/assets/images/megye.png" className="h-20" />
        <img alt="" src="/assets/images/vasarhely.jpg" className="h-20" />

        <img alt="" src="/assets/images/bolyai.png" className="h-20" />
        <img alt="" src="/assets/images/refi.jpg" className="h-20" />
      </section>

      <section className="flex w-full flex-wrap items-center justify-center gap-10">
        <img alt="" src="/assets/images/bbte.png" className="h-28" />
        <img alt="" src="/assets/images/kmti.png" className="h-16" />
        <img alt="" src="/assets/images/torifilo.jpg" className="h-24" />
        <img alt="" src="/assets/images/muveszeti.jpg" className="h-24" />
      </section>

      <h2 className="-mb-2 mt-6 text-center text-2xl font-semibold tracking-tighter">
        {lang == "hu" ? "Támogatóink" : "Sponsori"}
      </h2>

      <section className="flex w-full flex-wrap items-center justify-center gap-10">
        <img alt="" src="/assets/images/harmattan.jpg" className="h-16" />
        <img alt="" src="/assets/images/multkor.png" className="h-16" />
        <img alt="" src="/assets/images/szovetseg.png" className="h-20" />
        <img alt="" src="/assets/images/kolpenyi.jpg" className="h-24" />
      </section>

      <section className="flex w-full flex-wrap items-center justify-center gap-10">
        <img alt="" src="/assets/images/sovidek.png" className="h-16" />
        <img alt="" src="/assets/images/rakoczi.png" className="h-20" />
        <img alt="" src="/assets/images/triplast.png" className="h-14" />
        <img alt="" src="/assets/images/visit.png" className="h-24" />
      </section>
      
    </footer>
  );
};
export default Footer;
