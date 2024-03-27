import PracticeGrid from "../components/ui/PracticeGrid";
import Navbar from "../components/ui/Navbar";

export default function PracticesPage() {
  return (
    <section className="relative flex flex-col items-center bg-lightgray px-3 text-base text-offblack sm:px-8 2xl:text-lg">
      <div className="relative flex max-w-8xl flex-col items-center">
        <Navbar />

        <div className="max-w-8xl pt-32 pb-32">
        <h2 className="pb-8 text-3xl sm:text-4xl">Explore regenerative practices</h2>
          <div className="block">
            <PracticeGrid cards={8} />
          </div>
        </div>
      </div>
    </section>
  );
}
