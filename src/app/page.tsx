import Navbar from "./components/Navbar";
import Link from "next/link";
import ProjectGrid from "./components/ProjectGrid";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const steps = [
  {
    number: "1",
    title: "Connect",
    description:
      "Get matched with local experts depending on farming needs.",
  },
  {
    number: "2",
    title: "Implement",
    description:
      "Get a customized regenerative agriculture plan for your farm.",
  },
  {
    number: "3",
    title: "Measure",
    description:
      "Monitor soil health and carbon sequestration with our tools.",
  },
  {
    number: "4",
    title: "Monetize",
    description:
      "Get rewarded for your sustainability efforts. It's a win-win.",
  },
];

export default function Landing() {
  return (
    <main className="relative flex flex-col items-center bg-lightgray px-3 text-base text-offblack sm:px-8 2xl:text-lg">
      <section className="relative flex h-[100svh] max-w-8xl flex-col items-center sm:h-auto">
        <Navbar navColor="offblack" />
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
                Restore the balance of our ecosystems with regenerative farming.
              </h1>
            </div>

            <div className="flex gap-4 lg:flex-row">
              <Link
                href="/farmers"
                className="rounded-full border border-offblack px-4 py-3 hover:bg-green-400 hover:text-offblack sm:px-8"
              >
                For farmers <span className={inter.className}>-&gt;</span>
              </Link>
              <Link
                href="/investors"
                className="rounded-full border border-offblack px-4 py-3 hover:bg-green-400 hover:text-offblack sm:px-8"
              >
                For buyers <span className={inter.className}>-&gt;</span>
              </Link>
            </div>
          </div>
          <p className="absolute bottom-4 flex w-full max-w-lg items-end justify-end pt-4 text-lg sm:static sm:text-2xl">
            Airbon connects farmers to local regenerative agriculture experts to
            improve soil health, reduce emissions, and rebalance our planet.
          </p>
        </div>

        {/* -------------------------Steps on desktop----------------------------- */}
        <div className="hidden pt-16 sm:block">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-20">
            {steps.map((step, index) => (
              <div key={index} className="col-span-1">
                <p className="text-sm">{step.number}</p>
                <h2 className="pt-4 text-2xl">{step.title}</h2>
                <p className="pt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------Steps on mobile-------------------------------- */}
      <section className="w-full py-24 sm:hidden lg:pb-0">
        <div className="flex justify-start">
          <div className="grid w-full grid-cols-1 gap-12 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div key={index} className="col-span-1">
                <p className="text-sm">{step.number}</p>
                <h2 className="pt-4 text-2xl">{step.title}</h2>
                <p className="pt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-8xl py-12 sm:py-40">
        <h2 className="pb-8 text-3xl sm:text-4xl">Discover projects</h2>
        <ProjectGrid cards={8} />
      </section>
    </main>
  );
}
