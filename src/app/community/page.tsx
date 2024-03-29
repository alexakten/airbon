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
import FarmerMap from "../components/ui/FarmerMap";
import FarmerData from "../FarmerData";

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
    <main className="relative flex flex-col items-center bg-lightgray px-3 text-base text-darkgreen sm:px-10 2xl:text-lg">
      <Navbar />

      <section className="mt-56 flex max-w-8xl flex-col items-center justify-center">
        <div className="relative flex max-w-5xl flex-col items-center text-center">
          <h1 className="text-[clamp(36px,5.5vw,72px)] font-medium leading-[1.05] tracking-tighter">
            Growing community of <br className="hidden sm:block" /> regenerative
            farmers!
          </h1>
          <div className="absolute -top-[80px] right-2 sm:-right-12 sm:-top-24">
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
            Become a regenerative farmer to improve soil health, boost
            biodiversity, and sequester carbon. Join our community to build a
            sustainable future for our planet.
          </p>
          <button className="mt-7 rounded-xl bg-darkgreen px-6 py-3 text-lg text-white hover:bg-deepgreen">
            Join community!
          </button>
        </div>
      </section>

      <section className="mt-36 flex w-full max-w-8xl flex-col items-center">
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
