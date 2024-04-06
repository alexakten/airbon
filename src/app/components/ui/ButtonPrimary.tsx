import Link from "next/link"

export default function ButtonPrimary() {
  return (
    <Link href={"mailto:alex.akten@outlook.com"}>
      <button className="text-md group hover:bg-blue rounded-md bg-zinc-950 px-4 py-3 text-white">
        Go regenerative{" "}
        <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
          -&gt;
        </span>
      </button>
    </Link>
  )
}