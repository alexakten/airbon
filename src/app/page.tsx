import Navbar from "./components/ui/Navbar";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "./components/ui/ButtonPrimary";
import StepCard from "./components/ui/StepCard";

const steps = [
  {
    tagText: "Step 1",
    title: "Onboard",
    description: "Get your farmers connected on our platform.",
  },
  {
    tagText: "Step 2",
    title: "Educate",
    description: "We teach farmers about regenerative practices.",
  },
  {
    tagText: "Step 3",
    title: "Plan",
    description:
      "Farmers create a tailored plan to transition to regenerative.",
  },
  {
    tagText: "Step 4",
    title: "Monitor",
    description:
      "Monitor and verify the progress of your regenerative transition.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white px-3 tracking-tight text-zinc-950 sm:px-8">
      <Navbar />

      {/* Hero Section */}
      <section className="mt-52 flex w-full max-w-8xl flex-col items-center justify-center text-center">
        {/* Notification Bar */}
        <div className="flex items-center gap-2 rounded-full border border-zinc-100 bg-white px-6 py-1 text-sm shadow-md">
          <div className="flex ">
            <p className="text-zinc-400">v.1 launching soon</p>
            <Link href={"mailto:alex.akten@outlook.com"}>
              <button className="hover:text-blue group ml-2 border-l pl-2 font-medium">
                Book demo{" "}
                <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                  -&gt;
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* H1 */}
        <h1 className="mt-6 max-w-5xl text-[clamp(36px,5.5vw,72px)] font-[450] leading-[1.05] tracking-tighter">
          Rebalance our planet <br /> with regenerative farming.
        </h1>

        {/* Subtext */}
        <h3 className="mt-8 max-w-2xl text-lg tracking-tight opacity-100 md:text-xl">
          We help food companies turn their supply chain of farmers
          regenerative.
          <span className="font-medium"> Start building resilience </span> into
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
            <p className="mt-4 text-sm ">
              Regenerative farming — boost soil health.
            </p>
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
              Regenerative farming — boost soil health.
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

      {/* How it works Section */}
      <section className="mt-48 flex w-full max-w-6xl flex-col items-center ">
        <h2 className="max-w-3xl text-center text-5xl font-medium tracking-tight">
          Go regenerative — fast.
        </h2>
        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <StepCard
              showTag={true}
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
              Regenerative farming — boost soil health.
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
            <p className="mt-4 text-sm ">
              Regenerative farming — boost soil health.
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

      {/* Why Section */}
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
              tagColor="purple"
              tagText="Research"
              title="Soil health"
              description="Revitalize your land by enriching the soil with vital nutrients and organic matter fostering a vibrant, healthy soil ecosystem."
            />
          </div>
          <div className="col-span-1">
            <StepCard
              tagColor="blue"
              tagText="Messaging"
              title="Resilience"
              description="Create farming systems that withstand climate change and environmental challenges like and extreme weather.
              "
            />
          </div>
          <div className="col-span-1">
            <StepCard
              tagColor="green"
              tagText="Timing"
              title="Carbon sequestration"
              description="Capture atmospheric carbon dioxide and store it in the soil, aiding in climate change mitigation."
            />
          </div>
          <div className="col-span-1">
            <StepCard
              tagColor="yellow"
              tagText="Research"
              title="Biodiversity"
              description="Promote a diverse ecosystem of plants, animals, and microorganisms for ecological balance."
            />
          </div>
          <div className="col-span-1">
            <StepCard
              tagColor="blue"
              tagText="Messaging"
              title="Economic benefits"
              description="Improve long-term economic sustainability for farmers through reduced input costs and healthier soils.
              "
            />
          </div>
          <div className="col-span-1">
            <StepCard
              tagColor="green"
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

      {/* Footer */}
      <section className="m-48 flex w-full max-w-6xl flex-col items-center rounded-xl bg-zinc-100 p-32 ">
        <h2 className="max-w-xl text-center text-3xl font-medium  tracking-tight sm:text-5xl">
          The next step for your supply chain sustainability
        </h2>
        <p className="mt-8 max-w-xl text-center text-lg tracking-tight opacity-100 md:text-xl">
          Darwin is the first AI BDR that learns over time and answers your
          prospects&apos; questions without human interference.
        </p>
        <div className="mt-8">
          <ButtonPrimary />
        </div>
      </section>
    </main>
  );
}