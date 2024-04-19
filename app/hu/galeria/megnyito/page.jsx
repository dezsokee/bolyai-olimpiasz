import Mosaic from "@/components/Mosaic";

const pictures = [...Array(55)].map((_, index) => {
  return `https://bolyai.ro/images/2023/kissebbsegolimpiasz/img${index+1}.jpg`;
});

export default function Page() {
  return (
    <main>

      <Mosaic images={pictures} />
      
    </main>
  );
}
