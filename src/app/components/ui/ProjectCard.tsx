import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import ForestIcon from "../assets/ForestIcon";

interface ProjectCardProps {
  tagIcon: string;
  tagText: string;
  subTitle: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  imageAlt?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  tagIcon,
  tagText,
  subTitle,
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl,
  imageAlt,
}) => {
  return (
    <div className="relative h-[42rem] w-full overflow-hidden rounded-3xl bg-darkgreen px-10 py-12 text-lg text-lightgray">
      <div className="absolute left-0 top-0 z-0 h-full w-full">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={imageAlt || "Project image"}
            layout="fill"
            objectFit="cover"
          />
        )}
        <div className="absolute left-0 top-0 h-full w-3/4 bg-gradient-to-r from-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center gap-2">
          <ForestIcon />
          <p>{tagText}</p>
        </div>
        <div className="flex flex-col gap-9">
          {/* <p>{subTitle}</p> */}
          <h3 className="text-7xl">{title}</h3>
          <p className="max-w-sm">{description}</p>
          <div>
            <Link href={buttonLink}>
              <button className="rounded-xl border border-lightgray px-6 py-3 hover:bg-lightgray hover:text-darkgreen">
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
