import Mosaic from "@/components/Mosaic";

const pictures = [...Array(40)].map((_, index) => {
  return `https://www.edums.ro/onigim2023/images/tirgumures/images/img-${index}.jpg`;
});

export default function Page() {
  return (
    <main>
      <Mosaic images={pictures} />
    </main>
  );
}
