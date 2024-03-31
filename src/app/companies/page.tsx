import dynamic from "next/dynamic";

import Navbar from "../components/ui/Navbar";
import Link from "next/link";
import PracticeGrid from "../components/ui/PracticeGrid";
import { Inter } from "next/font/google";
import FarmerGrid from "../components/ui/FarmerGrid";
import PlanetIcon from "../components/assets/PlanetIcon";
import ProjectCard from "../components/ui/ProjectCard";
import PracticeCarousel from "../components/ui/PracticeCarousel";
import ServiceCard from "../components/ui/ServiceCard";
import WhyCard from "../components/ui/WhyCard";
import Image from "next/image";

import FarmerData from "../FarmerData";

const FarmerMap = dynamic(() => import("../components/ui/FarmerMap"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

const services = [
  {
    icon: "farmer.svg",
    title: "Educate",
    description: "We teach farmers about regenerative practices through courses and workshops.",
    buttonText: "Start learning",
  },
  {
    icon: "field.svg",
    title: "Plan",
    description: "We provide tailored regenerative agriculture plans to help farmers get started.",
    buttonText: "Get custom plan",
  },
  {
    icon: "house.svg",
    title: "Monitor",
    description: "We monitor soil health and carbon sequestration to verify and report progress.",
    buttonText: "Coming soon",
  },
  {
    icon: "earth.svg",
    title: "Community",
    description: "We provide a community where farmers and experts can connect & share learnings.",
    buttonText: "Join community",
  },
];

const why = [
  {
    icon: "farmer.svg",
    title: "Soil health",
    description:
      "Revitalize your land by enriching the soil with vital nutrients and organic matter fostering a vibrant, healthy soil ecosystem.",
  },
  {
    icon: "field.svg",
    title: "Resilience",
    description:
      "Create farming systems that withstand climate change and environmental challenges like and extreme weather. ",
  },
  {
    icon: "house.svg",
    title: "Carbon sequestration",
    description:
      "Capture atmospheric carbon dioxide and store it in the soil, aiding in climate change mitigation.",
  },
  {
    icon: "earth.svg",
    title: "Biodiversity",
    description:
      "Promote a diverse ecosystem of plants, animals, and microorganisms for ecological balance.",
  },
  {
    icon: "farmer.svg",
    title: "Economic benefits",
    description:
      "Improve long-term economic sustainability for farmers through reduced input costs and healthier soils.",
  },
  {
    icon: "field.svg",
    title: "Water conservation",
    description:
      "Improve soil structure to enhance water retention and reduce the need for irrigation.",
  },
];

export default function CompaniesLanding() {
  return (
    <main className="relative flex flex-col items-center bg-lightgray px-3 text-base text-darkgreen sm:px-10 2xl:text-lg">
      <Navbar />

      <section className="mt-56 flex max-w-8xl flex-col items-center justify-center">
        <div className="relative flex max-w-5xl flex-col items-center text-center">
          <h1 className="text-[clamp(36px,5.5vw,72px)] font-medium leading-[1.05] tracking-tighter">
            Turn your supply chain    <br className="hidden sm:block" /> of farmers regenerative
          </h1>
          <div className="absolute -top-[80px] right-2 sm:-right-14 sm:-top-24">
            <div className="h-20 w-20 sm:h-36 sm:w-36">
              <Image
                src="/icons/planet.svg"
                width={120}
                height={120}
                alt="Planet icon"
                layout="responsive"
              />
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-xl">
            We help food companies turn their supply chain of farmers
            sustainable using regenerative agriculture. Join our mission to
            rebalance the planet!
          </p>
          <div className="flex gap-4">
            <Link href={"/farmers"}>
              <button className="mt-7 rounded-xl bg-darkgreen px-6 py-3 text-lg text-white hover:bg-deepgreen">
                For farmers <span className={inter.className}></span>
              </button>
            </Link>
            <Link href={"/companies"}>
              <button className="mt-7 rounded-xl bg-darkgreen px-6 py-3 text-lg text-white hover:bg-deepgreen">
                For companies <span className={inter.className}></span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-36 w-full max-w-8xl">
        <ProjectCard
          imageUrl="/images/regenerative_farmer.avif"
          imageAlt="Regenerative farmer"
          tagIcon=""
          tagText="Regenerative farming"
          subTitle="Regenerative farmers"
          title="Build resilience"
          description="Regenerative farming is a holistic approach to farming that boosts soil health by augmenting organic matter, enriching microbial diversity, and improving water retention. This approach minimizes erosion, curtails the reliance on chemical inputs, and actively sequesters carbon."
          buttonLink=""
          buttonText="Get started"
        />
      </section>

      <section className="mt-36 flex w-full max-w-8xl flex-col items-center text-center">
        <h2 className="text-4xl sm:text-6xl">Our services</h2>
        <p className="mt-4 max-w-xl text-lg">
          We provide various tools to help farmers become regenerative.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              serviceIcon={service.icon}
              serviceTitle={service.title}
              serviceDescription={service.description}
              serviceButtonText={service.buttonText} // Assuming you want a common button text
            />
          ))}
        </div>
      </section>

      <section className="mt-36 w-full max-w-8xl">
        <PracticeCarousel />
      </section>

      <section className="mt-36 flex w-full max-w-8xl flex-col items-center text-center">
        <h2 className="max-w-xl text-4xl sm:text-6xl">
          The many benefits of regenerative farming
        </h2>
        <p className="mt-4 max-w-md text-lg">
          Here&apos;s why you should start today!
        </p>
        <div className="mt-12 grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {why.map((item, index) => (
            <WhyCard
              key={index}
              whyIcon={item.icon}
              whyTitle={item.title}
              whyDescription={item.description}
            />
          ))}
        </div>
      </section>

      <section className="mt-36 flex w-full max-w-8xl flex-col items-center text-center">
        <h2 className="text-4xl sm:text-6xl">Join the community!</h2>
        <p className="mt-4 max-w-xl text-lg">
          Connect with others already on their regenerative journey!
        </p>
        <Link
          href="community"
          className="mb-16 mt-4 rounded-xl bg-darkgreen px-4 py-3 text-white hover:bg-deepgreen"
        >
          Join community!
        </Link>
        <FarmerGrid cards={8} />
      </section>

      <section className="m-36 flex w-full max-w-8xl flex-col items-center text-center">
        <h2 className="text-4xl sm:text-6xl">Discover farmers near you!</h2>
        <p className="mt-4 max-w-xl text-lg">
          Connect with others already on their regenerative journey!
        </p>
        <Link
          href="community"
          className="mb-16 mt-4 rounded-xl bg-darkgreen px-4 py-3 text-white hover:bg-deepgreen"
        >
          Join community!
        </Link>
        <FarmerMap farmers={FarmerData} />
      </section>
    </main>
  );
}
