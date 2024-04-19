"use client";
import Table from "@/components/Table";

const Page = () => {
  return (
    <main>
      <h1 className="text-center text-2xl font-semibold">
        Programul Olimpiadei Naționale de Istoria și Tradițiile Minorității
        Maghiare
      </h1>
      <h2 className="mb-16 text-center text-xl">
        Târgu-Mureș, 20-23 aprilie 2023
      </h2>
      <h3 className="mb-2 mt-5 text-lg">24 aprilie 2024 - Miercuri</h3>
      <Table fileName="/assets/program_ro/apr24.csv" />
      <h3 className="mb-2 mt-5 text-lg">25 aprilie 2024 - Joi</h3>
      <Table fileName="/assets/program_ro/apr25.csv" />
      <h3 className="mb-2 mt-5 text-lg">26 aprilie 2024 - Vineri</h3>
      <Table fileName="/assets/program_ro/apr26.csv" />
      
    </main>
  );
};
export default Page;
