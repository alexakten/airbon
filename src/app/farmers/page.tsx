import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <main className="bg-deeporange px-2 text-base sm:px-8">
      <section
        className="text-frostwhite relative flex flex-col py-6 "
        style={{ height: "100svh" }}
      >
        <Navbar navColor="frostwhite"></Navbar>

        <div className="border-frostwhite flex flex-col gap-4 pt-24 lg:flex-row lg:gap-0 lg:border-b lg:pb-12">
          <div className="flex max-w-6xl flex-col gap-4 lg:gap-14">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Generate income and protect your land with carbon offsets.
            </h1>
            <div className="flex gap-4 lg:flex-row">
              <button
                className="border-frostwhite hover:bg-frostwhite hover:text-darkgreen rounded-full border px-4 py-3 sm:px-8"
                type="button"
              >
                Start project →
              </button>
            </div>
          </div>
          <p className="absolute bottom-4 w-full max-w-lg  items-end justify-end text-lg sm:static sm:flex lg:text-2xl">
            Airbon helps farmers in Brazil adopt sustainable carbon farming
            practices to create high quality tech-verified carbon credits.
          </p>
        </div>

        {/* Steps on desktop*/}
        <div className="hidden pt-16 lg:block">
          <div className="grid grid-cols-4 gap-20">
            <div className="col-span-1">
              <p className="text-sm">1</p>
              <h2 className="pt-6 text-2xl">Educate</h2>
              <p className="pt-3">
                We help farmers get started with carbon farming practices that
                generate credits.
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm">2</p>
              <h2 className="pt-6 text-2xl">Measure</h2>
              <p className="pt-3">
                We measure and verify impact using satellite imagery, IoT
                devices and AI.
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm">3</p>
              <h2 className="pt-6 text-2xl">Analyze</h2>
              <p className="pt-3">
                Our digital platform allows for analysis and reporting of carbon
                sequestration.
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm">4</p>
              <h2 className="pt-6 text-2xl">Sell</h2>
              <p className="pt-3">
                We connect farmers with climate conscious businesses going
                net-zero.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 hidden w-full justify-between lg:flex">
          <p>v1.0 launching soon</p>
          <p>© 2024</p>
        </div>
      </section>

      {/* Steps on mobile*/}
      <section className="pb-40 lg:hidden lg:pb-0">
        <div className="pt-24 ">
          <div className="grid grid-cols-1 gap-12">
            <div className="col-span-1">
              <p className="text-sm">1</p>
              <h2 className="pt-6 text-2xl">Educate</h2>
              <p className="pt-3">
                We help farmers get started with carbon farming practices that
                generate credits.
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm">2</p>
              <h2 className="pt-6 text-2xl">Measure</h2>
              <p className="pt-3">
                We measure and verify impact using satellite imagery, IoT
                devices and AI.
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm">3</p>
              <h2 className="pt-6 text-2xl">Analyze</h2>
              <p className="pt-3">
                Our digital platform allows for analysis and reporting of carbon
                sequestration.
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm">4</p>
              <h2 className="pt-6 text-2xl">Sell</h2>
              <p className="pt-3">
                We connect farmers with climate conscious businesses going
                net-zero.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
