import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

// Define the Practice type
type Practice = {
  practiceID: string;
  practiceName: string;
  practiceImage: string;
  practiceDescription: string;
  practiceBenefits: string;
  slug: string;
};

interface PracticeCardProps {
  practice: Practice; // Add this prop to your component
}

export default function PracticeCard({ practice }: PracticeCardProps) {
  return (
    <Link href={`/practices/${practice.slug}`}>
      <div className="grid min-h-[400px] w-full grid-rows-2 overflow-hidden rounded-xl border border-black">
        <div className="relative row-span-1 bg-gray-300">
          <Image
            src={practice.practiceImage}
            alt={practice.practiceName}
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <div className="row-span-1 flex flex-col p-4">
          {/* <p className="text-sm opacity-50">{practice.practiceLocation}</p> */}
          <h3 className="text-2xl">{practice.practiceName}</h3>
          <p
            className="line-clamp-3 h-full leading-normal pt-1 text-base opacity-75"
          >
            {practice.practiceDescription}
          </p>

          <div className="flex h-full items-end justify-end">
            <button className="transform transition-transform duration-200 ease-in-out hover:translate-x-1">
              {" "}
              Learn more
              <span className={inter.className}> -&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
