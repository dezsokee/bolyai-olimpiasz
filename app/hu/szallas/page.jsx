"use client";
const image =
  "https://cf.bstatic.com/xdata/images/hotel/max1280x900/19335983.jpg?k=d8491a095117b90db6bebce9b186ad4eca43220b6c3f3f71920a19eb69f7d55d&o=&hp=1";

const Page = () => {
  return (
    <div className="gap-10 md:flex">

      <img
        src={image}
        className="h-auto w-full object-cover shadow-2xl md:w-1/2"
      />

      <aside className="mt-10 flex w-full flex-col gap-5 md:mt-0 md:w-1/2">

        <h1 className="text-2xl font-semibold">Hotel Grand Târgu Mureș</h1>
        <div>
          <label className="text-sm uppercase text-slate-800">Cím</label>
          <br />
          <span className="text-lg">
            Piața Victoriei, nr. 28-30, Târgu Mureș, România
          </span>
        </div>

        <div>
          <label className="text-sm uppercase text-slate-800">Telefon</label>
          <br />
          <span className="text-lg">+40 365 730 003</span>
        </div>

        <div>
          <label className="text-sm uppercase text-slate-800">Email</label>
          <br />
          <span className="text-lg">rezervari@hotelgrand.ro</span>
        </div>
        
        <div>
          <label className="text-sm uppercase text-slate-800">Website</label>
          <br />
          <span className="text-lg">https://hotelgrand.ro/</span>
        </div>

      </aside>

    </div>
  );
};
export default Page;
