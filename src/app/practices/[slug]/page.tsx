"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import PracticeData from "@/app/PracticeData";
import Navbar from "@/app/components/ui/Navbar";
import { Inter } from "next/font/google";
import Image from "next/image";
import PracticeGrid from "@/app/components/ui/PracticeGrid";

const inter = Inter({ subsets: ["latin"] });

export default function PracticePage() {
  const pathname = usePathname();
  // Example parsing, adjust based on your URL structure
  const slug = pathname.split("/").pop();

  const practice = PracticeData.find((p) => p.slug === slug);

  // Handle case where practice is not found
  if (!practice) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        Practice not found
      </div>
    );
  }
  return (
    <main className="relative flex flex-col items-center bg-lightgray px-3 text-base text-offblack sm:px-8 2xl:text-lg">
      <div className="relative flex max-w-8xl flex-col items-center">
        <Navbar/>
        <section className="relative flex w-full max-w-8xl flex-col justify-center pt-32">
          <div className="mb-8">
            <Link href="/practices">
              <button className="transform transition-transform duration-200 ease-in-out hover:-translate-x-1">
                {" "}
                <span className={inter.className}> &lt;- </span>
                Back to Practices
              </button>
            </Link>
          </div>

          <h1 className="mb-4 text-3xl sm:text-4xl">{practice.practiceName}</h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            <div className="relative col-span-2 row-span-2 min-h-56 overflow-hidden rounded-lg border border-black bg-gray-200 ">
              <Image
                src={practice.practiceImage}
                alt={practice.practiceName}
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="col-span-2 row-span-1 rounded-lg border border-black">
              <div className="p-4">
                <p className="mb-4 text-xl ">Description</p>
                <p className="opacity-75">{practice.practiceDescription}</p>
              </div>
            </div>
            <div className="col-span-2 rounded-lg border border-black p-4 md:col-span-1">
              <p className="mb-4 text-xl">Benefits</p>
              <p className="opacity-75">{practice.practiceBenefits}</p>
              {/* <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={practice.practiceMapLink}
              ></iframe> */}
            </div>
            <div className="col-span-2 flex flex-col justify-between rounded-lg border border-black p-4 md:col-span-1">
              <div>
                <p className="text-medium mb-4 text-xl">Get started</p>
                <p className="opacity-75">
                  If you want to get started with this carbon farming technique,
                  reach out to us.
                </p>
              </div>

              {/* <div className="flex justify-between border-b border-t border-gray-400 py-2">
                Website
                <span className="font-normal opacity-50">
                  {practice.practiceWebsite}
                </span>
              </div>
              <div className="flex justify-between border-b border-t border-gray-400 py-2">
                Verifier
                <span className="font-normal opacity-50">
                  {practice.practiceVerifier}
                </span>
              </div>
              <div className="flex justify-between border-b border-t border-gray-400 py-2">
                Contact
                <span className="font-normal opacity-50">
                  <a
                    href={`mailto:${practice.practiceContact}`}
                    className="email-link"
                  >
                    Email
                  </a>
                </span>
              </div> */}

              <div className="flex w-full justify-end">
                <Link href="mailto:alex.akten@outlook.com">
                  <button className="mt-4 transform rounded-full bg-black px-3 py-1 font-normal text-white transition-transform duration-200 ease-in-out hover:translate-x-1">
                    Contact us
                    <span className={inter.className}> -&gt;</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-8xl py-36">
          <h2 className="pb-8 text-3xl sm:text-4xl">Discover more practices</h2>
          <div className="hidden lg:block ">
            <PracticeGrid cards={8} currentPracticeID={practice.practiceID} />
          </div>
          <div className="hidden sm:block lg:hidden">
            <PracticeGrid cards={6} currentPracticeID={practice.practiceID} />
          </div>
          <div className="block sm:hidden">
            <PracticeGrid cards={4} currentPracticeID={practice.practiceID} />
          </div>
        </section>
      </div>
    </main>
  );
}
