import Navbar from "../components/ui/Navbar";
import Link from "next/link";
import FarmerGrid from "../components/ui/FarmerGrid";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function FarmersPage() {
  return (
    <main className="relative flex flex-col items-center bg-lightgray px-3 text-base text-offblack sm:px-8 2xl:text-lg">
      <section className="relative flex w-full max-w-8xl flex-col items-center bg-lightgray text-base text-offblack 2xl:text-lg">
        <Navbar />
        <div className="flex w-full flex-col items-center">
          <div className="w-full max-w-8xl pb-32 pt-32">
            <h2 className="pb-8 text-3xl sm:text-4xl">
              Discover regenerative farmers
            </h2>
            <div className="block">
              <FarmerGrid cards={8} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
