import Navbar from "./components/ui/Navbar";
import Link from "next/link";
import PracticeGrid from "./components/ui/PracticeGrid";
import { Inter } from "next/font/google";
import FarmerGrid from "./components/ui/FarmerGrid";
import PlanetIcon from "./components/assets/PlanetIcon";
import ProjectCard from "./components/ui/ProjectCard";
import PracticeCarousel from "./components/ui/PracticeCarousel";
import ServiceCard from "./components/ui/ServiceCard";
import WhyCard from "./components/ui/WhyCard";

const inter = Inter({ subsets: ["latin"] });

const services = [
  {
    icon: "farmer.svg",
    title: "Learn",
    description: "Learn about regenerative agriculture and its benefits",
    buttonText: "Start learning",
  },
  {
    icon: "field.svg",
    title: "Plan",
    description: "Get a custom regenerative agriculture plan for your farm",
    buttonText: "Get custom plan",
  },
  {
    icon: "house.svg",
    title: "Monitor",
    description: "Monitor your soil health and carbon sequestration",
    buttonText: "Monitor soil",
  },
  {
    icon: "earth.svg",
    title: "Community",
    description: "Join our community of regenerative farmers.",
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

export default function Landing() {
  return (
    <main className="relative flex flex-col items-center bg-lightgray px-3 text-base text-darkgreen sm:px-8 2xl:text-lg">
      <Navbar />

      <section className="mt-56 flex max-w-8xl flex-col items-center justify-center">
        <div className="relative flex max-w-5xl flex-col items-center text-center">
          <h1 className="text-[clamp(36px,5.5vw,72px)] font-medium leading-[1.05] tracking-tight">
            Rebalance our planet <br className="hidden sm:block"/> with regenerative farming
          </h1>
          <div className="absolute -right-0 -top-36 sm:-right-12 sm:-top-24">
            <PlanetIcon />
          </div>
          <p className="mt-6 max-w-3xl text-xl">
            Become a regenerative farmer to improve soil health, boost
            biodiversity, and sequester carbon. Join our community to build a
            sustainable future for our planet.
          </p>
          <button className="mt-7 rounded-xl bg-darkgreen px-6 py-3 text-lg text-white hover:bg-deepgreen">
            Go regenerative!
          </button>
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
          description="Regenerative farmin is a holistic approach to farming that boosts soil health by augmenting organic matter, enriching microbial diversity, and improving water retention. This approach minimizes erosion, curtails the reliance on chemical inputs, and actively sequesters carbon."
          buttonLink=""
          buttonText="Get started"
        />
      </section>

      <section className="mt-36 flex w-full max-w-8xl flex-col items-center text-center">
        <h2 className="text-4xl sm:text-6xl">Our services</h2>
        <p className="mt-4 max-w-xl text-lg">
          We provide various tools to help farmers become regenerative depending
          on where they are on their journey
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

      <section className="m-36 w-full max-w-8xl">
        <h3 className="max-w-xl text-4xl sm:text-6xl">
          The many benefits of regenerative farming
        </h3>
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
    </main>
  );
}
