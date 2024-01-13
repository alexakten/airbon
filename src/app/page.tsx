import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Landing() {
  return (
    <main className="bg-darkgreen text-orange px-2 text-base sm:px-8 2xl:text-lg">
      <section
        className="relative flex flex-col py-6"
        style={{ height: "100svh" }}
      >
        <Navbar navColor="orange"></Navbar>

        <div className="border-orange flex flex-col gap-4 pt-24 lg:flex-row lg:gap-0 lg:border-b lg:pb-12">
          <div className="flex max-w-6xl flex-col gap-4 lg:gap-14 2xl:max-w-7xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-9xl">
              Restore the balance of our ecosystems with carbon credits.
            </h1>
            <div className="flex gap-4 lg:flex-row">
              <Link
                href="/farmers"
                className="border-orange hover:bg-orange hover:text-darkgreen rounded-full border px-4 py-3 sm:px-8"
              >
                For farmers →
              </Link>
              <Link
                href="/investors"
                className="border-orange hover:bg-orange hover:text-darkgreen rounded-full border px-4 py-3 sm:px-8"
              >
                For investors →
              </Link>
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

        <div className="absolute  bottom-6 hidden w-full justify-between lg:flex">
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

      {/* <section className="text-orange bg-deepgreen relative flex flex-col items-center px-2 py-40 sm:px-8 ">
        <div className="grid h-full w-full grid-cols-2">
          <div className="col-span-1 flex h-full w-full max-w-lg flex-col items-start justify-center">
            <h2 className="text-6xl">It&apos;s time to heal our planet.</h2>
            <p className="pt-6">
              It&apos;s time to heal our planet with carbon removal. By applying
              biochar to soils we permanently remove CO2 for 1000+ years from
              the atmosphere. This supports people and food systems to prosper.
              A win-win for the people and the planet.
            </p>
          </div>
        </div>
      </section> */}
    </main>
  );
}
