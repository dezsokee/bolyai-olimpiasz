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

        <img alt="" src="/assets/images/refi.jpg" className="h-20" />
      </section>

      <h2 className="-mb-2 mt-6 text-center text-2xl font-semibold tracking-tighter">
        {lang == "hu" ? "Támogatóink" : "Sponsori"}
      </h2>

      <section className="flex w-full flex-wrap items-center justify-center gap-10">
        <img alt="" src="/assets/images/zoo.png" className="h-20" />
        <img alt="" src="/assets/images/uvegcentrum.jpg" className="h-20" />
        <img alt="" src="/assets/images/unitarius.png" className="h-20" />
        <img alt="" src="/assets/images/timko.jpg" className="h-20" />
      </section>

      <section className="flex w-full flex-wrap items-center justify-center gap-10">
        <img alt="" src="/assets/images/muzeum.jpg" className="h-24" />
        <img alt="" src="/assets/images/kiralyhago.png" className="h-20" />
        <img alt="" src="/assets/images/erdelyireformatusegyhazk.png" className="h-14" />
        <img alt="" src="/assets/images/therezia.png" className="h-20" />
      </section>

      <section className="flex w-full flex-wrap items-center justify-center gap-10">
        <h1 className="text-l tracking-tighter">
          KÜKÜLLŐI REFORMÁTUS EGYHÁZMEGYE
        </h1>
        <h1 className="text-l  tracking-tighter">
          MAROS-MEZŐSÉGI REFORMÁTUS EGYHÁZMEGYE
        </h1>
        <h1 className="text-l tracking-tighter">
          MAROSI REFORMÁTUS EGYHÁZMEGYE
        </h1>
        <h1 className="text-l tracking-tighter">
          GÖRGÉNYI REFORMÁTUS EGYHÁZMEGYE
        </h1>
        <h1 className="text-l tracking-tighter">
          MAROSVÁRÁHELYI REFORMÁTUS EGYHÁZKÖZSÉGEK KURATORIUMA
        </h1>
      </section>
      
    </footer>
  );
};
export default Footer;
