import Navbar from "./components/ui/Navbar";
import Link from "next/link";
import PracticeGrid from "./components/ui/PracticeGrid";
import { Inter } from "next/font/google";
import FarmerGrid from "./components/ui/FarmerGrid";
import PlanetIcon from "./components/assets/PlanetIcon";
import ProjectCard from "./components/ui/ProjectCard";
import PracticeCarousel from "./components/ui/PracticeCarousel";
import ServiceCard from "./components/ui/ServiceCard";

const inter = Inter({ subsets: ["latin"] });

const services = [
  {
    icon: "farmer.svg",
    title: "Learn",
    description:
      "Learn about regenerative agriculture and its benefits",
    buttonText: "Start learning",
  },
  {
    icon: "field.svg",
    title: "Plan",
    description:
      "Get a custom regenerative agriculture plan for your farm",
    buttonText: "Get custom plan",
  },
  {
    icon: "house.svg",
    title: "Monitor",
    description:
      "Monitor your soil health and carbon sequestration",
    buttonText: "Monitor soil",
  },
  {
    icon: "earth.svg",
    title: "Connect",
    description:
      "Connect with a community of experienced farmers.",
    buttonText: "Join community",
  },
];

export default function Landing() {
  return (
    <main className="relative flex flex-col items-center bg-lightgray px-3 text-base text-darkgreen sm:px-8 2xl:text-lg">
      <Navbar />

      <section className="mt-56 flex max-w-8xl flex-col items-center justify-center">
        <div className="relative flex max-w-5xl flex-col items-center text-center">
          <h1 className="text-7xl font-medium leading-[1.05] tracking-tight">
            Rebalance our planet <br />
            with regenerative farming
          </h1>
          <div className="absolute -right-12 -top-24">
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
        <PracticeCarousel />
      </section>

      <section className="m-36 flex w-full max-w-8xl flex-col items-center text-center">
        <h2 className="text-6xl">Our services</h2>
        <p className="mt-4 max-w-2xl text-lg">
          Become a regenerative farmer to improve soil health, boost
          biodiversity, and sequester carbon. Join our community to build a
          sustainable future for our planet.
        </p>
        <div className="mt-16 grid grid-cols-4 gap-4">
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
    </main>
  );
}
