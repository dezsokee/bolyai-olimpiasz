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
      <h3 className="mb-2 mt-5 text-lg">20 aprilie 2023 - Joi</h3>
      <Table fileName="/assets/program_ro/apr20.csv" />
      <h3 className="mb-2 mt-5 text-lg">21 aprilie 2023 - Vineri</h3>
      <Table fileName="/assets/program_ro/apr21.csv" />
      <h3 className="mb-2 mt-5 text-lg">22 aprilie 2023 - Sâmbătă</h3>
      <Table fileName="/assets/program_ro/apr22.csv" />
      <h3 className="mb-2 mt-5 text-lg">23 aprilie 2023 - Duminică</h3>
      <Table fileName="/assets/program_ro/apr23.csv" />
    </main>
  );
};
export default Page;
