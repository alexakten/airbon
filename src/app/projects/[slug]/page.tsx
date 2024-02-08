"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import ProjectData from "@/app/ProjectData";
import Navbar from "@/app/components/Navbar";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function ProjectPage() {
  const pathname = usePathname();
  // Example parsing, adjust based on your URL structure
  const slug = pathname.split("/").pop();

  const project = ProjectData.find((p) => p.slug === slug);

  // Handle case where project is not found
  if (!project) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        Project not found
      </div>
    );
  }
  return (
    <main className="flex h-full flex-col items-center bg-lightgray px-3 py-6 text-base text-offblack sm:px-8 2xl:text-lg">
      <Navbar navColor="offblack" />
      <section className="relative flex w-full max-w-8xl flex-col justify-center pt-16">
        <div className="mb-8">
          <Link href="/projects">
            <button className="transform transition-transform duration-200 ease-in-out hover:-translate-x-1">
              {" "}
              <span className={inter.className}> {"<"}- </span>
              Back to Projects
            </button>
          </Link>
        </div>

        <h1 className="mb-4 text-3xl sm:text-4xl">{project.projectName}</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          <div className="relative col-span-2 row-span-2 min-h-56 rounded-lg border border-black bg-gray-200 ">
            <Image
              src={project.projectImage}
              alt={project.projectName}
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <div className="col-span-2 row-span-1 rounded-lg border border-black">
            <div className="p-4">
              <p className="text-medium mb-4 text-xl">Background</p>
              <p>{project.projectDescription}</p>
            </div>
          </div>
          <div className="col-span-2 min-h-56 rounded-lg border border-black bg-gray-200 md:col-span-1">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?key=${
                process.env.GOOGLE_MAPS_API_KEY
              }&q=${encodeURIComponent(project.projectLocation)}`}
            ></iframe>
          </div>
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
                <a
                  href={`mailto:${project.projectContact}`}
                  className="email-link"
                >
                  Email
                </a>
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
