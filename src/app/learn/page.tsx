import Navbar from "../components/ui/Navbar";
import Link from "next/link";
import PracticeGrid from "../components/ui/PracticeGrid";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function LearnPage() {
  return (
    <main className="relative flex flex-col items-center bg-lightgray px-3 text-base text-offblack sm:px-8 2xl:text-lg">
      <section className="relative flex h-[100svh] max-w-8xl flex-col items-center sm:h-auto">
        <Navbar />
        <div className="flex flex-col gap-4 border-offblack pt-32 lg:flex-row lg:gap-0 lg:border-b lg:pb-12">
          <div className="flex max-w-6xl flex-col gap-4 lg:gap-14 2xl:max-w-7xl">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 px-2 py-2 pl-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400"></span>
                </span>
                <p className="text-sm">v.01 launching soon</p>
              </div>
              <h1 className="text-[clamp(32px,5.5vw,84px)] leading-[1.05]">
                Go net zero and support farmers with carbon credits.
              </h1>
            </div>

            <div className="flex gap-4 lg:flex-row">
              <Link
                href="mailto:alex.akten@outlook.com"
                className="rounded-full border border-offblack px-4 py-3 hover:bg-green-400 hover:text-offblack sm:px-8"
              >
                Get started <span className={inter.className}>-&gt;</span>
              </Link>
            </div>
          </div>
          <p className="absolute bottom-4 flex w-full max-w-lg items-end justify-end pt-4 text-lg sm:static sm:text-2xl">
            Airbon helps farmers adopt carbon farming practices to create high
            quality tech-verified carbon credits.
          </p>
        </div>

        {/* -------------------------Steps on desktop----------------------------- */}
        <div className="hidden pt-16 sm:block">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-20">
            <div className="col-span-1">
              <p className="text-sm">1</p>
              <h2 className="pt-4 text-2xl">Enable</h2>
              <p className="pt-2">
                We help farmers get started with carbon farming to generate
                credits.
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm">2</p>
              <h2 className="pt-4 text-2xl">Measure</h2>
              <p className="pt-2">
                We measure and verify impact using satellite imagery, IoT
                devices and AI.
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm">3</p>
              <h2 className="pt-4 text-2xl">Analyze</h2>
              <p className="pt-2">
                Our digital platform allows for analysis and reporting of carbon
                sequestration.
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm">4</p>
              <h2 className="pt-4 text-2xl">Sell</h2>
              <p className="pt-2">
                We connect farmers with climate conscious businesses going
                net-zero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------Steps on mobile-------------------------------- */}
      <section className="w-full py-24 sm:hidden lg:pb-0">
        <div className="flex justify-start">
          <div className="grid w-full grid-cols-1 gap-12 sm:grid-cols-2">
            <div className="col-span-1">
              <p className="text-sm">1</p>
              <h2 className="pt-4 text-2xl">Enable</h2>
              <p className="pt-2">
                We help farmers get started with carbon farming to generate
                credits.
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm">2</p>
              <h2 className="pt-4 text-2xl">Measure</h2>
              <p className="pt-2">
                We measure and verify impact using satellite imagery, IoT
                devices and AI.
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm">3</p>
              <h2 className="pt-4 text-2xl">Analyze</h2>
              <p className="pt-2">
                Our digital platform allows for analysis and reporting of carbon
                sequestration.
              </p>
            </div>

            <div className="col-span-1">
              <p className="text-sm">4</p>
              <h2 className="pt-4 text-2xl">Sell</h2>
              <p className="pt-2">
                We connect farmers with climate conscious businesses going
                net-zero.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-8xl py-12 sm:py-40">
        <h2 className="pb-8 text-3xl sm:text-4xl">Discover practices</h2>
        <PracticeGrid cards={8} />
      </section>
    </main>
  );
}
