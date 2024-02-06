import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// Define the Project type
type Project = {
  projectID: string;
  projectName: string;
  projectDescription: string;
  projectLocation: string;
  projectWebsite: string;
  projectVerifier: string;
  projectContact: string;
  projectLink: string;
  slug: string;
};

interface ProjectCardProps {
  project: Project; // Add this prop to your component
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="grid h-[400px] w-full grid-rows-2 overflow-hidden rounded-xl border border-black">
      <div className="row-span-1 bg-gray-300"></div>
      <div className="row-span-1 flex flex-col p-4">
        <p className="text-sm opacity-50">{project.projectLocation}</p>
        <h3 className="pt-4 text-2xl">{project.projectName}</h3>
        <p className="pt-1 text-base opacity-75">
          {project.projectDescription}
        </p>
        <div className="flex h-full items-end justify-end">
          <Link href={`/projects/${project.slug}`}>
            <button className="transform transition-transform duration-200 ease-in-out hover:translate-x-1">
              {" "}
              See project
              <span className={inter.className}> -&gt;</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}