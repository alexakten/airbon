import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import ButtonPrimary from "./ButtonPrimary";

interface PracticeCardProps {
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

const PracticeCard: React.FC<PracticeCardProps> = ({
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
    <div className="grid w-full grid-cols-3 gap-4 overflow-hidden rounded-xl py-12 tracking-tight text-zinc-950">
      <div className="relative z-0 h-[32rem] w-full col-span-2 overflow-hidden rounded-xl">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={imageAlt || "Project image"}
            layout="fill"
            objectFit="cover"
          />
        )}
        {/* <div className="absolute left-0 top-0 h-full w-full sm:w-3/4 bg-gradient-to-r from-black/90 to-black/40 sm:to-transparent"></div> */}
      </div>

      <div className="relative z-10 flex h-full col-span-1 flex-col justify-between rounded-xl border border-zinc-100 p-6 shadow-md">
        <div className="flex items-center gap-2">
          <p className="opacity-40">{tagText}</p>
        </div>
        <div className="flex flex-col gap-6">
          {/* <p>{subTitle}</p> */}
          <h3 className="text-4xl font-medium tracking-tight sm:text-5xl">
            {title}
          </h3>
          <p className="max-w-md tracking-tight opacity-50">{description}</p>
          {/* <ButtonPrimary /> */}
        </div>
      </div>
    </div>
  );
};

export default PracticeCard;
