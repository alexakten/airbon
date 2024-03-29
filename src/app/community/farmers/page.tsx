import Navbar from "@/app/components/ui/Navbar";
import FarmerGrid from "@/app/components/ui/FarmerGrid";

export default function FarmersPage() {
  return (
    <main className="relative flex flex-col items-center bg-lightgray px-3 text-base text-darkgreen sm:px-10 2xl:text-lg">
      <Navbar />

      <section className="mt-36 flex w-full max-w-8xl flex-col items-center">
        <FarmerGrid cards={8} />
      </section>
    </main>
  );
}
