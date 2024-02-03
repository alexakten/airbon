import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ProjectCard() {
  return (
    <div className="grid h-[400px] w-full grid-rows-2 overflow-hidden rounded-xl border border-black">
      <div className="row-span-1 bg-gray-300"></div>
      <div className="row-span-1 flex flex-col p-4">
        <p className="text-sm opacity-50">City, Country</p>
        <h3 className="pt-4 text-2xl">Project name</h3>
        <p className="pt-1 text-base opacity-75">
          The project description goes here. The project description goes here.{" "}
        </p>
        <div className="flex h-full items-end justify-end">
          <button className="transform transition-transform duration-200 ease-in-out hover:translate-x-1">
            {" "}
            See project
            <span className={inter.className}> -&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
}
