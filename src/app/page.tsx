import TextCard from "./components/TextCard";
import Navbar from "./components/Navbar";

export default function Landing() {
  return (
    <main className="px-8 py-4">
      <section className="py-2">
        <div className="flex h-[95vh] flex-row gap-4">
          <div className=" flex flex-col justify-between rounded-2xl bg-gray-50 px-8 py-10">
            <Navbar />
            <div className="flex w-full flex-col justify-end pr-12">
              <h1 className="leading-12 text-6xl">
                Discover meaningful carbon removal projects and
                <span className="text-indigo-400"> restore the balance </span>
                of our ecosystem.
              </h1>
              <div className="p-4"></div>
              <p className="text-2xl">
                Airspace helps you find the highest quality carbon removal
                projects all around the globe. It is a win-win-win for buyers,
                sellers, and the planet.
              </p>
              <div className="p-6"></div>
              <div>
                <button
                  type="button"
                  className="transform rounded-full border border-black px-10 
            py-3 transition-transform hover:scale-105 
            hover:border-indigo-400 hover:bg-indigo-400 hover:text-white"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <TextCard
              number="[ 1 ]"
              title="Credits"
              description="A meaningful opportunity to balance your carbon footprint and 
          support the transition to a more sustainable world."
            />
            <TextCard
              number="[ 2 ]"
              title="Offsets"
              description="A meaningful opportunity to balance your carbon footprint and 
          support the transition to a more sustainable world."
            />
            <TextCard
              number="[ 3 ]"
              title="Investing"
              description="A meaningful opportunity to balance your carbon footprint and 
          support the transition to a more sustainable world."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
