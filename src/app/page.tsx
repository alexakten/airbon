import Navbar from "./components/Navbar";

export default function Landing() {
  return (
    <main className="bg-darkgreen p-3 sm:p-8">
      <section className="relative flex flex-col" style={{ height: "100svh" }}>
        <Navbar></Navbar>

        <div className="text-orange border-orange flex flex-col gap-4 pt-24 lg:flex-row lg:gap-0 lg:border-b lg:pb-12">
          <div className="flex max-w-6xl flex-col gap-4 lg:gap-14">
            <h1 className="text-4xl lg:text-8xl">
              Restore the balance of our ecosystem with carbon credits.
            </h1>
            <div className="flex gap-4 lg:flex-row">
              <button
                className="border-orange text-orange hover:bg-orange hover:text-darkgreen rounded-full border px-4 py-3 sm:px-8"
                type="button"
              >
                For landowners →
              </button>
              <button
                className="border-orange text-orange hover:bg-orange hover:text-darkgreen rounded-full border px-4 py-3 sm:px-8"
                type="button"
              >
                For investors →
              </button>
            </div>
          </div>
          <p className="absolute bottom-4 w-full max-w-lg items-end justify-end text-lg sm:static sm:flex lg:text-2xl">
            Airbon helps landowners in South America monitor and measure
            forests to create high quality tech-verified carbon credits.
          </p>
        </div>

        {/* Steps (hidden on smaller than lg*/}
        <div className="text-orange hidden pt-24 lg:block">
          <div className="grid grid-cols-4 gap-24">
            <div className="col-span-1">
              <p>1</p>
              <h2 className="pt-8 text-2xl">Measure</h2>
              <p className="pt-3">
                We measure the size and impact of your forest using satellite
                imagery and AI.
              </p>
            </div>

            <div className="col-span-1">
              <p>2</p>
              <h2 className="pt-8 text-2xl">Verify</h2>
              <p className="pt-3">
                Credits are verified by independent third parties all around the
                globe.
              </p>
            </div>

            <div className="col-span-1">
              <p>3</p>
              <h2 className="pt-8 text-2xl">Market</h2>
              <p className="pt-3">
                Use our platform to market your projects to buyers worldwide.
              </p>
            </div>

            <div className="col-span-1">
              <p>4</p>
              <h2 className="pt-8 text-2xl">Sell</h2>
              <p className="pt-3">
                We facilitate the sale of your credits and help you find trusted
                buyers.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden">
          <p className="text-orange">Scroll to learn more ↓</p>
        </div>
      </section>

      {/* Steps (hidden on larger than lg)*/}
      <section className="pb-40 lg:pb-0 lg:hidden">
        <div className="text-orange pt-24 ">
          <div className="grid grid-cols-1 gap-24">
            <div className="col-span-1">
              <p>1</p>
              <h2 className="pt-8 text-2xl">Measure</h2>
              <p className="pt-3">
                We measure the size and impact of your forest using satellite
                imagery and AI.
              </p>
            </div>

            <div className="col-span-1">
              <p>2</p>
              <h2 className="pt-8 text-2xl">Verify</h2>
              <p className="pt-3">
                Credits are verified by independent third parties all around the
                globe.
              </p>
            </div>

            <div className="col-span-1">
              <p>3</p>
              <h2 className="pt-8 text-2xl">Market</h2>
              <p className="pt-3">
                Use our platform to market your projects to buyers worldwide.
              </p>
            </div>

            <div className="col-span-1">
              <p>4</p>
              <h2 className="pt-8 text-2xl">Sell</h2>
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
