import Link from "next/link"

export default function ButtonSecondary() {
  return (
    <Link href={"mailto:alex.akten@outlook.com"}>
      <button className="group rounded-md bg-zinc-950 px-3 py-2 text-sm text-white hover:bg-blue">
        Go regenerative <span className="inline-block tracking-normal translate-x-0 group-hover:translate-x-1 transition-transform duration-200">-&gt;</span>
      </button>
    </Link>
  )
}