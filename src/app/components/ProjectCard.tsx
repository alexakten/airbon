import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

// Define the Project type
type Project = {
  projectID: string;
  projectName: string;
  projectImage: string;
  projectDescription: string;
  projectBenefits: string;
  slug: string;
};

interface ProjectCardProps {
  project: Project; // Add this prop to your component
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="grid min-h-[400px] w-full grid-rows-2 overflow-hidden rounded-xl border border-black">
      <div className="relative row-span-1 bg-gray-300">
        <Image
          src={project.projectImage}
          alt={project.projectName}
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="row-span-1 flex flex-col p-4">
        {/* <p className="text-sm opacity-50">{project.projectLocation}</p> */}
        <h3 className="text-2xl">{project.projectName}</h3>
        <p className="pt-1 text-base opacity-75">
          {project.projectDescription.length > 70
            ? `${project.projectDescription.slice(0, 80)}...`
            : project.projectDescription}
        </p>
        <div className="flex h-full items-end justify-end">
          <Link href={`/projects/${project.slug}`}>
            <button className="transform transition-transform duration-200 ease-in-out hover:translate-x-1">
              {" "}
              Learn more
              <span className={inter.className}> -&gt;</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
