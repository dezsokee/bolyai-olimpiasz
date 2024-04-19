"use client";
import Table from "@/components/Table";

const Page = () => {
  return (
    <main>

      <h1 className="text-center text-2xl font-semibold">
        A Magyar Kisebbség Történelme és Hagyományai Országos Tantárgyverseny
        programja
      </h1>
      
      <h2 className="mb-16 text-center text-xl">
        Marosvásárhely, 2023 április 20-23
      </h2>
      
      <h3 className="mb-2 mt-5 text-lg">2023. április 20. - csütörtök</h3>
      <Table fileName="/assets/program_hu/apr20.csv" />
      
      <h3 className="mb-2 mt-5 text-lg">2023. április 21. - péntek</h3>
      <Table fileName="/assets/program_hu/apr21.csv" />
      
      <h3 className="mb-2 mt-5 text-lg">2023. április 22. - szombat</h3>
      <Table fileName="/assets/program_hu/apr22.csv" />
      
      <h3 className="mb-2 mt-5 text-lg">2023. április 23. - vasárnap</h3>
      <Table fileName="/assets/program_hu/apr23.csv" />
    
    </main>
  );
};
export default Page;
