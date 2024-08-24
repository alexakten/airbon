import Navbar from "./components/ui/Navbar";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "./components/ui/ButtonPrimary";
import StepCard from "./components/ui/StepCard";
import PracticeCarousel from "./components/ui/PracticeCarousel";
import FarmerGrid from "./components/ui/FarmerGrid";
import FarmerData from "./FarmerData";
import dynamic from "next/dynamic";

const FarmerMap = dynamic(() => import("./components/ui/FarmerMap"), {
  ssr: false, // Disable server-side rendering if necessary
  loading: () => <p>Loading map...</p>, // Optional loading component
});

const steps = [
  {
    tagText: "Step 1",
    title: "Onboard",
    description: "Get your farmers connected on the platform.",
  },
  {
    tagText: "Step 2",
    title: "Plan",
    description:
      "Each farmer gets a tailored plan created by expert agronomists.",
  },
  {
    tagText: "Step 3",
    title: "Monitor",
    description:
      "Monitor and verify the progress of your regenerative transition.",
  },
  {
    tagText: "Step 4",
    title: "Reward",
    description: "Reward farmers that implement regenerative practices.",
  },
];

const stepsFarmer = [
  {
    tagText: "Step 1",
    title: "Join",
    description: "Connect your farm to the platform.",
  },
  {
    tagText: "Step 2",
    title: "Learn",
    description: "Get expert guidance from a local agronomist.",
  },
  {
    tagText: "Step 3",
    title: "Implement",
    description: "Implement regenerative practices on your farm.",
  },
  {
    tagText: "Step 4",
    title: "Receive",
    description: "Get rewarded for your sustainability efforts.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white px-3 tracking-tight text-zinc-950 sm:px-8">
      <Navbar />

      {/* Hero Section */}
      <section className="mt-32 flex w-full max-w-8xl flex-col items-center justify-center text-center sm:mt-48">
        {/* Notification Bar */}
        <div className="flex items-center gap-2 rounded-full border border-zinc-100 bg-white px-6 py-1 text-sm">
          <div className="flex ">
            <p className="text-zinc-400">Beta launching soon</p>
            <Link href={"mailto:alex.akten@outlook.com"}>
              <button className="group ml-2 flex gap-1 items-center border-l pl-2 font-medium tracking-normal hover:text-blue">
                Book demo{" "}
                <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* H1 */}
        <h1 className="mt-6 max-w-5xl text-[clamp(36px,5.5vw,64px)] font-[450] leading-[1.05] tracking-tighter">
          Rebalance our planet <br /> with regenerative farming
        </h1>

        {/* Subtext */}
        <h3 className="mt-8 max-w-2xl text-base opacity-100 md:text-xl">
          Airbon helps food companies turn their farmer supply chains
          regenerative —
          <span className="font-regular"> Start building resilience </span> into
          your supply chain today.
        </h3>

        {/* Button */}
        <div className="mt-8">
          {" "}
          <ButtonPrimary />{" "}
        </div>
      </section>

      {/* Images Section */}
      <section className="mt-32 flex w-full max-w-6xl flex-col items-center ">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-6">
          <div className="col-span-1 flex flex-col md:col-span-2">
            <div className="relative z-10 h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/regenerative_farmer.avif"
                alt="Regenerative Farming"
                layout="fill"
                objectFit="cover"
                priority
                className="scale-x-[1]"
              />
            </div>
            <p className="mt-4 text-sm ">Boost soil health and biodiversity.</p>
          </div>

          <div className="col-span-1 flex flex-col md:col-span-4">
            <div className="relative z-10 h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/regenerative-methods/practice_3.avif"
                alt="Regenerative Farming"
                layout="fill"
                objectFit="cover"
                priority
                className="scale-x-[1]"
              />
            </div>
            <p className="mt-4 text-sm ">
              Sequester carbon and store it underground.
            </p>
          </div>

          {/* <div className="col-span-1 flex flex-col md:col-span-4">
            <div className="relative h-[32rem] overflow-hidden rounded-xl bg-zinc-100">

              <div className="absolute -bottom-6 -right-6 flex h-4/5 w-4/5 items-start rounded-3xl border-[12px] border-black px-8 py-10 shadow-md">
              </div>
            </div>
            <p className="mt-4 text-sm">
              Darwin takes care of outreach for you.
            </p>
          </div> */}
        </div>
      </section>

      {/* How it works Companies Section */}
      <section className="mt-48 flex w-full max-w-6xl flex-col items-center ">
        <p className="opacity-40">For companies</p>
        <h2 className="mt-6 max-w-3xl text-center text-3xl font-medium tracking-tight sm:text-5xl">
          Turn your supply chain regenerative{" "}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-8 sm:gap-16 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <StepCard
              showTag={false}
              tagText={step.tagText}
              showBorder={false}
              key={index}
              title={step.title}
              description={step.description}
              hoverEffect={false}
            />
          ))}
        </div>

        <div className="mt-20">
          <ButtonPrimary />
        </div>
      </section>

      {/* Images Section */}
      <section className="mt-48 flex w-full max-w-6xl flex-col items-center ">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-6">
          <div className="col-span-1 flex flex-col md:col-span-4">
            <div className="relative z-10 h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/regenerative-methods/practice_1.avif"
                alt="Regenerative Farming"
                layout="fill"
                objectFit="cover"
                priority
                className="scale-x-[1]"
              />
            </div>
            <p className="mt-4 text-sm ">
              Improve soil structure to enhance water retention.
            </p>
          </div>

          <div className="col-span-1 flex flex-col md:col-span-2">
            <div className="relative z-10 h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/regenerative-methods/practice_9.avif"
                alt="Regenerative Farming"
                layout="fill"
                objectFit="cover"
                priority
                className="scale-x-[1]"
              />
            </div>
            <p className="mt-4 text-sm ">Promote a diverse ecosystem.</p>
          </div>

          {/* <div className="col-span-1 flex flex-col md:col-span-4">
            <div className="relative h-[32rem] overflow-hidden rounded-xl bg-zinc-100">

              <div className="absolute -bottom-6 -right-6 flex h-4/5 w-4/5 items-start rounded-3xl border-[12px] border-black px-8 py-10 shadow-md">
              </div>
            </div>
            <p className="mt-4 text-sm">
              Darwin takes care of outreach for you.
            </p>
          </div> */}
        </div>
      </section>

      {/* How it works Farmers Section */}
      <section className="mt-48 flex w-full max-w-6xl flex-col items-center ">
        <p className="opacity-40">For farmers</p>
        <h2 className="mt-6 max-w-3xl text-center text-3xl font-medium tracking-tight sm:text-5xl">
          Go regenerative — fast
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-8 sm:gap-16 md:grid-cols-2 lg:grid-cols-4">
          {stepsFarmer.map((step, index) => (
            <StepCard
              showTag={false}
              tagText={step.tagText}
              showBorder={false}
              key={index}
              title={step.title}
              description={step.description}
              hoverEffect={false}
            />
          ))}
        </div>

        <div className="mt-20">
          <ButtonPrimary />
        </div>
      </section>

      {/* Regenerative practices Section */}
      <section className="mt-48 flex  w-full max-w-6xl flex-col items-center ">
        <PracticeCarousel />
      </section>

      {/* Benefits Section */}
      <section className="mt-48 flex w-full max-w-6xl flex-col items-center ">
        <h2 className="max-w-xl text-center text-3xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
          The many benefits of regenerative agriculture{" "}
        </h2>
        {/* <p className="mt-8 max-w-xs text-center text-xl tracking-tight opacity-100">
          Getting your own AI agent has never been easier.
        </p> */}
        <div className="mt-16 grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          <div className="col-span-1">
            <StepCard
              showTag={false}
              tagColor="cyan"
              tagText="Research"
              title="Soil health"
              description="Revitalize your land by enriching the soil with vital nutrients and organic matter fostering a vibrant, healthy soil ecosystem."
            />
          </div>
          <div className="col-span-1">
            <StepCard
              showTag={false}
              tagColor="blue"
              tagText="Messaging"
              title="Resilience"
              description="Create farming systems that withstand climate change and environmental challenges like and extreme weather.
              "
            />
          </div>
          <div className="col-span-1">
            <StepCard
              showTag={false}
              tagColor="orange"
              tagText="Timing"
              title="Carbon sequestration"
              description="Capture atmospheric carbon dioxide and store it in the soil, aiding in climate change mitigation."
            />
          </div>
          <div className="col-span-1">
            <StepCard
              showTag={false}
              tagColor="purple"
              tagText="Research"
              title="Biodiversity"
              description="Promote a diverse ecosystem of plants, animals, and microorganisms for ecological balance."
            />
          </div>
          <div className="col-span-1">
            <StepCard
              showTag={false}
              tagColor="pink"
              tagText="Messaging"
              title="Economic benefits"
              description="Improve long-term economic sustainability for farmers through reduced input costs and healthier soils.
              "
            />
          </div>
          <div className="col-span-1">
            <StepCard
              showTag={false}
              tagColor="lightblue"
              tagText="Timing"
              title="Water conservation"
              description="Improve soil structure to enhance water retention and reduce the need for irrigation."
            />
          </div>
        </div>
        {/* <div className="mt-20">
          <ButtonPrimary />
        </div> */}
      </section>

      {/* Farmer Map Section */}
      {/* <section className="mt-48 flex w-full max-w-6xl flex-col items-center ">
        <h2 className="mb-8 max-w-xl text-center text-3xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
          Discover some of our regenerative farmers{" "}
        </h2>

        <ButtonPrimary />

        <div className="mt-16 h-[40rem] w-full">
          <FarmerMap farmers={FarmerData} />
        </div>
      </section> */}

      {/* Footer */}
      <section className="m-48 flex w-full max-w-6xl flex-col items-center rounded-xl ">
        <h2 className="max-w-xl text-center text-3xl font-medium tracking-tight sm:text-5xl">
          The next step for your supply chain sustainability
        </h2>
        <p className="mt-8 max-w-xl text-center text-base tracking-tight opacity-100 md:text-xl">
          Mitigate the effects of climate change and destructive farming
          practices. Start building resilience into your supply chain today.
        </p>
        <div className="mt-8">
          <ButtonPrimary />
        </div>
      </section>
    </main>
  );
}
