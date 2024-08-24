import Link from "next/link";

export default function ButtonPrimary() {
  return (
    <Link href={"mailto:alex.akten@outlook.com"}>
      <button className="text-md group rounded-md flex items-center gap-1 bg-zinc-950 px-4 py-3 font-medium tracking-normal text-white hover:bg-blue">
        Go regenerative{" "}
        <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-arrow-right"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </button>
    </Link>
  );
}
