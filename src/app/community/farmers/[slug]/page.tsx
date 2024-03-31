// Use necessary imports
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import FarmerData from "@/app/FarmerData"; // Adjust this path as needed
import Navbar from "@/app/components/ui/Navbar";
import { Inter } from "next/font/google";
import Image from "next/image";
import FarmerGrid from "@/app/components/ui/FarmerGrid"; // Make sure you have a FarmerGrid component

const inter = Inter({ subsets: ["latin"] });

export default function FarmerPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const farmer = FarmerData.find((f) => f.slug === slug);

  // Handle case where farmer is not found
  if (!farmer) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        Farmer not found
      </div>
    );
  }

  return (
    <main className="text-offblack relative flex w-full flex-col items-center bg-lightgray px-3 text-base sm:px-10 2xl:text-lg">
      <Navbar />
      <div className="relative flex w-full max-w-8xl flex-col items-center">
        <section className="relative flex w-full max-w-8xl flex-col justify-center pt-32">
          <div className="mb-8">
            <Link href="/community">
              <button className="transform transition-transform duration-200 ease-in-out hover:-translate-x-1">
                <span className={inter.className}> &lt;- </span>
                Back to community
              </button>
            </Link>
          </div>

          <h1 className="mb-4 text-3xl sm:text-4xl">{farmer.name}</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            <div className="relative col-span-2 row-span-2 min-h-56 overflow-hidden rounded-lg border border-black bg-gray-200">
              <Image
                src={farmer.image}
                alt={farmer.name}
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="col-span-2 row-span-1 rounded-lg border border-black">
              <div className="p-4">
                <p className="mb-4 text-xl">Location</p>
                <p className="opacity-75">{farmer.location}</p>
              </div>
            </div>
            {/* Additional content about the farmer can go here, like a description, practices, etc. */}

            <div className="col-span-2 flex flex-col justify-between rounded-lg border border-black p-4 md:col-span-1">
              {/* Contact or other action-oriented section */}
              <div className="flex w-full justify-end">
                <Link href="mailto:contact@example.com">
                  {" "}
                  {/* Update mailto link */}
                  <button className="mt-4 transform rounded-full bg-black px-3 py-1 font-normal text-white transition-transform duration-200 ease-in-out hover:translate-x-1">
                    Contact Farmer
                    <span className={inter.className}> -&gt;</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-8xl py-36">
          <h2 className="pb-8 text-3xl sm:text-4xl">Discover more farmers</h2>
          {/* Adjust the grid display as needed */}
          <div className="hidden lg:block ">
            <FarmerGrid cards={8} currentFarmerID={farmer.id} />
          </div>
          <div className="hidden sm:block lg:hidden">
            <FarmerGrid cards={6} currentFarmerID={farmer.id} />
          </div>
          <div className="block sm:hidden">
            <FarmerGrid cards={4} currentFarmerID={farmer.id} />
          </div>
        </section>
      </div>
    </main>
  );
}
