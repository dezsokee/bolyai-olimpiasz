"use client";
import Table from "@/components/Table";

const Page = () => {
  return (
    <main>

      <h1 className="text-center text-2xl font-semibold">
      PROTESTÁNS FELEKEZETEK ORSZÁGOS TANTÁRGYVERSENYÉNEK PROGRAMJA
      </h1>
      
      <h2 className="mb-16 text-center text-xl">
        Marosvásárhely, 2024 április 24-26
      </h2>
    
      <h3 className="mb-2 mt-5 text-lg">2024. április 24. szerda</h3>
      <Table fileName="/assets/program_hu/apr24.csv" />
      <h3 className="mb-2 mt-5 text-lg">2024. április 25. - csütörtök</h3>
      <Table fileName="/assets/program_hu/apr25.csv" />
      <h3 className="mb-2 mt-5 text-lg">2024. április 26. - péntek</h3>
      <Table fileName="/assets/program_hu/apr26.csv" />
    
    </main>
  );
};
export default Page;
