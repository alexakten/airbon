import Link from "next/link";
import ButtonSecondary from "../ui/ButtonSecondary";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-start justify-between bg-white px-3 sm:px-8 pb-3 pt-6">
      <Link href={"/"}>
        <Logo />
      </Link>
      {/* Buttons */}
      <div className="flex gap-4">
        <Link href={"/dashboard"}>
          <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
            Try demo
          </button>
        </Link>

        <ButtonSecondary />
      </div>
    </nav>
  );
}