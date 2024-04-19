import Link from "next/link";
import { usePathname } from "next/navigation";

const items = {
  Bizottságok: {
    "Szervező bizottság": "Comisia de organizare",
    "Központi bizottság": "Comisia centrală",
  },
  "Résztvevő diákok": "Concurenți",
  Eredmények: "Rezultate",
  Tételek: "Subiecte & bareme",
  Információk: {
    "Program.": "Program",
    Terembeosztás: "Repartizarea pe săli de concurs",
    Szállás: "Cazare",
  },
  Kultúra: {
    "Maros megyéről": "Despre jud. Mureș",
    Marosvásárhelyről: "Despre Târgu Mureș",
    "Református Kollégium & Bolyai Farkas Elméleti Líceum":
      'Despre Colegiul Reformat și Liceul Teoretic "Bolyai Farkas"',
  },
};

const links = {
  "Szervező bizottság": "/hu/szervezobizottsag/",
  "Comisia de organizare": "/ro/organizare/",
  "Központi bizottság": "/hu/kozpontibizottsag/",
  "Comisia centrală": "/ro/centrala/",
  "Résztvevő diákok": "/hu/resztvevok/",
  Concurenți: "/ro/concurenti/",
  Eredmények: "/hu/eredmenyek/",
  Rezultate: "/ro/rezultate/",
  Tételek: "/hu/tetelek/",
  "Subiecte & bareme": "/ro/subiecte/",
  "Program.": "/hu/program/",
  Program: "/ro/program/",
  Terembeosztás: "/hu/terembeosztas/",
  "Repartizarea pe săli de concurs": "/ro/repartizare/",
  Szállás: "/hu/szallas/",
  Cazare: "/ro/cazare/",
  "Díjátadó ünnepség": "/hu/galeria/dijatado/",
  "Festivitate de premiere": "/ro/galerie/premiere/",
  "Ünnepélyes megnyitó": "/hu/galeria/megnyito/",
  "Festivitate de deschidere": "/ro/galerie/deschidere/",
  Marosvásárhely: "/hu/galeria/marosvasarhely/",
  "Târgu Mureș": "/ro/galerie/targumures/",
  "Maros megyéről": "/hu/kultura/maros/",
  "Despre jud. Mureș": "/ro/cultura/mures/",
  Marosvásárhelyről: "/hu/kultura/vasarhely/",
  "Despre Târgu Mureș": "/ro/cultura/targumures/",
  "Református Kollégium & Bolyai Farkas Elméleti Líceum": "/hu/kultura/bolyai/",
  'Despre Colegiul Reformat și Liceul Teoretic "Bolyai Farkas"':
    "/ro/cultura/bolyai/",
};

const translation = {
  Bizottságok: "Comisii",
  Információk: "Informații",
  Kultúra: "Cultură",
};

export default function NavItems({ openModal }) {
  const lang = usePathname().includes("/hu") ? "hu" : "ro";

  const renderLinks = (key, value) => {

    if (typeof value !== "object") {

      return (

        <Link
          href={lang == "hu" ? links[key] : links[value]}
          key={key}
          className="border-2 border-papyrus/50 px-3 py-2 text-lg text-raisin-black backdrop-blur-2xl transition-colors hover:bg-papyrus/50 md:text-sm"
          onClick={() => {
            if (openModal) {
              openModal(false);
            }
          }}
        >
          {lang == "hu" ? key : value}

        </Link>
      );

    } else {
      
      const objectArray = Object.entries(value);

      return (

        <div key={key}>

          <button className="peer relative border-2 border-papyrus/50 px-3 py-2 text-lg text-raisin-black backdrop-blur-2xl transition-colors hover:bg-papyrus/50 md:text-sm">
            {lang == "hu" ? key : translation[key]}
          </button>

          <div className="absolute z-[60] hidden w-[200px] flex-col bg-white text-center drop-shadow-lg hover:flex focus:flex peer-hover:flex peer-focus:flex">
            
            {objectArray.map(([objectKey, objectValue]) => {

              return (
                <Link
                  href={lang == "hu" ? links[objectKey] : links[objectValue]}
                  key={objectKey}
                  className="z-[100] text-raisin-black transition-colors hover:bg-gray-100"
                  tabIndex="1"
                  onClick={() => {
                    openModal(false);
                  }}
                >
                  {lang == "hu" ? objectKey : objectValue}
                  
                </Link>
              );

            })}

          </div>

        </div>
      );
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-2 md:flex-row md:flex-wrap md:justify-center">

      {Object.entries(items).map(([key, value]) => {
        return renderLinks(key, value);
      })}

    </section>
  );
}