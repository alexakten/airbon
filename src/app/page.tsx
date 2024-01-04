import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Landing() {
  return (
    <main className="bg-darkgreen sm:px:8 px-2 text-base">
      <section
        className="text-orange relative flex flex-col py-6"
        style={{ height: "100svh" }}
      >
        <Navbar navColor="orange"></Navbar>

        <div className="border-orange flex flex-col gap-4 pt-24 lg:flex-row lg:gap-0 lg:border-b lg:pb-12">
          <div className="flex max-w-6xl flex-col gap-4 lg:gap-14">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Restore the balance of our ecosystems with carbon offsets.
            </h1>
            <div className="flex gap-4 lg:flex-row">
              <Link
                href="/landowners"
                className="border-orange hover:bg-orange hover:text-darkgreen rounded-full border px-4 py-3 sm:px-8"
              >
                For landowners →
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
            Airbon helps landowners in Brazil measure and monitor their forests
            to create high quality tech-verified carbon offsets.
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

        <div className="hidden w-full justify-between pt-24 lg:flex">
          <p>Scroll to learn more ↓</p>
          <p>© 2024</p>
        </div>
      </section>

      {/* Steps on mobile*/}
      <section className="px-2 pb-40 sm:px-8 lg:hidden lg:pb-0">
        <div className="text-orange pt-24 ">
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
