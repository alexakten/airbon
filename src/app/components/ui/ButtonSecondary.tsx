import Link from "next/link"

export default function ButtonSecondary() {
  return (
    <Link href={"mailto:alex.akten@outlook.com"}>
      <button className="group font-medium rounded-md bg-zinc-950 px-3 py-2 text-sm text-white hover:bg-blue">
        Get started
      </button>
    </Link>
  )
}