import Navbar from "./components/Navbar";

export default function Landing() {
  return (
    <main>
      <section className="bg-darkgreen flex h-screen flex-col justify-between p-8">
        <Navbar></Navbar>

        <div className="text-orange flex flex-col gap-4 lg:flex-row lg:gap-0">
          <div className="flex max-w-6xl flex-col gap-4 lg:gap-14">
            <h1 className="text-5xl lg:text-8xl">
              Restore the balance of our ecosystem with carbon credits.
            </h1>
            <div className="hidden gap-4 sm:flex lg:flex-row">
              <button
                className="bg-orange text-darkgreen rounded-full px-8 py-3"
                type="button"
              >
                For landowners →
              </button>
              <button
                className="bg-lightgreen text-orange rounded-full px-8 py-3"
                type="button"
              >
                For investors →
              </button>
            </div>
          </div>
          <div className="text-md flex h-full w-full max-w-lg items-end justify-end lg:text-2xl">
            Airbon helps landowners in South America monitor and measure their
            forests to create high quality tech-verified carbon credits.
          </div>
        </div>

        <div className="">
          <p className="text-orange">Scroll to learn more ↓</p>
        </div>
      </section>
    </main>
  );
}
