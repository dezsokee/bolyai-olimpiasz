"use client";
import Table from "@/components/Table";

const Page = () => {
  return (
    <main>
      
      <h1 className="pb-5 pt-8 text-2xl">Résztvevő diákok</h1>
      <Table fileName="/assets/resztvevok/magyarul_diakok.csv" />

      <h1 className="pb-5 pt-8 text-2xl">Kisérő tanárok</h1>
      <Table fileName="/assets/resztvevok/magyarul_tanarok.csv" />
    
    </main>
  );
};
export default Page;
