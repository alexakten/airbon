import Navbar from "@/app/components/ui/Navbar";
import { Inter } from "next/font/google";
import FarmerGrid from "@/app/components/ui/FarmerGrid";


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

      <section className="mt-36 flex w-full max-w-8xl flex-col items-center">
        <FarmerGrid cards={8} />
      </section>
    </main>
  );
}
