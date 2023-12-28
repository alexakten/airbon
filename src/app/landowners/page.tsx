import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <main className="bg-deeporange px-2 text-base sm:px-8">
      <section
        className="text-frostwhite relative flex flex-col py-6 "
        style={{ height: "100svh" }}
      >
        <Navbar logoColor="frostwhite"></Navbar>

        <div className="border-frostwhite flex flex-col gap-4 pt-24 lg:flex-row lg:gap-0 lg:border-b lg:pb-12">
          <div className="flex max-w-6xl flex-col gap-4 lg:gap-14">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Generate income from your land with carbon credits.
            </h1>
            <div className="flex gap-4 lg:flex-row">
              <button
                className="border-frostwhite hover:bg-frostwhite hover:text-darkgreen rounded-full border px-4 py-3 sm:px-8"
                type="button"
              >
                For landowners →
              </button>
              <button
                className="border-frostwhite hover:bg-frostwhite hover:text-darkgreen rounded-full border px-4 py-3 sm:px-8"
                type="button"
              >
                For investors →
              </button>
            </div>
          </div>
          <p className="absolute bottom-4 w-full max-w-lg  items-end justify-end text-lg sm:static sm:flex lg:text-2xl">
            Airbon helps landowners in Brazil measure and monitor their forests
            to create high quality tech-verified carbon credits.
          </p>
        </div>

        {/* Steps on desktop*/}
        <div className="hidden pt-16 lg:block">
          <div className="grid grid-cols-4 gap-24">
            <div className="col-span-1">
              <p className="text-sm">1</p>
              <h2 className="pt-6 text-2xl">Measure</h2>
              <p className="pt-3">
                Measure the size and impact of your forest using satellite
                imagery and AI.
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm">2</p>
              <h2 className="pt-6 text-2xl">Verify</h2>
              <p className="pt-3">
                Credits are verified by independent third parties all around the
                globe.
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm">3</p>
              <h2 className="pt-6 text-2xl">Market</h2>
              <p className="pt-3">
                Use our platform to market your projects to buyers worldwide.
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm">4</p>
              <h2 className="pt-6 text-2xl">Sell</h2>
              <p className="pt-3">
                We facilitate the sale of your credits and help you find trusted
                buyers.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 hidden w-full justify-between lg:flex">
          <p>Scroll to learn more ↓</p>
          <p>© 2023</p>
        </div>
      </section>

      {/* Steps on mobile*/}
      <section className="pb-40 lg:hidden lg:pb-0">
        <div className="text-frostwhite pt-24 ">
          <div className="grid grid-cols-1 gap-12">
            <div className="col-span-1">
              <p className="text-sm">1</p>
              <h2 className="pt-6 text-2xl">Measure</h2>
              <p className="pt-3">
                We measure the size and impact of your forest using satellite
                imagery and AI.
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm">2</p>
              <h2 className="pt-6 text-2xl">Verify</h2>
              <p className="pt-3">
                Credits are verified by independent third parties all around the
                globe.
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm">3</p>
              <h2 className="pt-6 text-2xl">Market</h2>
              <p className="pt-3">
                Use our platform to market your projects to buyers worldwide.
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm">4</p>
              <h2 className="pt-6 text-2xl">Sell</h2>
              <p className="pt-3">
                We facilitate the sale of your credits and help you find trusted
                buyers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
