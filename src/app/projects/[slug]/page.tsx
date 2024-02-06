"use client";

import { usePathname, useSearchParams } from "next/navigation";
import ProjectData from "@/app/ProjectData";
import Navbar from "@/app/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ProjectPage() {
  const pathname = usePathname();
  // Example parsing, adjust based on your URL structure
  const slug = pathname.split("/").pop();

  const project = ProjectData.find((p) => p.slug === slug);

  // Handle case where project is not found
  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <main className="flex flex-col items-center bg-lightgray px-3 text-base text-offblack sm:px-8 2xl:text-lg">
      <Navbar navColor="offblack" />

      <section
        className="relative flex w-full max-w-8xl flex-col justify-center py-36"
        style={{ height: "100svh" }}
      >
        <h1 className="mb-4 text-4xl">{project.projectName}</h1>
        <div className="grid h-auto grid-cols-1 gap-4 md:h-screen md: grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          <div className="col-span-2 row-span-2 h-56 rounded-lg border border-black bg-gray-200 md:h-auto"></div>
          <div className="col-span-2 row-span-1 rounded-lg border border-black">
            <div className="p-4">
              <p className="text-medium mb-4 text-xl">Background</p>
              <p>{project.projectDescription}</p>
            </div>
          </div>
          <div className="col-span-2 rounded-lg border border-black bg-gray-200 p-4 md:col-span-1"></div>
          <div className="col-span-2 rounded-lg border border-black p-4 md:col-span-1">
            <p className="text-medium mb-4 text-xl">Invest in project</p>
            <div className="flex justify-between border-b border-t border-gray-400 py-2">
              Website
              <span className="font-normal opacity-50">
                {project.projectWebsite}
              </span>
            </div>
            <div className="flex justify-between border-b border-t border-gray-400 py-2">
              Verifier
              <span className="font-normal opacity-50">
                {project.projectVerifier}
              </span>
            </div>
            <div className="flex justify-between border-b border-t border-gray-400 py-2">
              Contact
              <span className="font-normal opacity-50">
                {project.projectContact}
              </span>
            </div>

            <div className="flex w-full justify-end">
              <button className="mt-4 transform rounded-full bg-black px-3 py-1 font-normal text-white transition-transform duration-200 ease-in-out hover:translate-x-1">
                Visit website
                <span className={inter.className}> -&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
