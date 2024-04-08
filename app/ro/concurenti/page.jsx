"use client";
import Table from "@/components/Table";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl pt-8 pb-5">Concurenți</h1>
      <Table fileName="/assets/resztvevok/romanul_diakok.csv" />
      <h1 className="text-2xl pt-8 pb-5">Profesori însoțitori</h1>
      <Table fileName="/assets/resztvevok/romanul_tanarok.csv" />
    </main>
  );
};

export default Page;