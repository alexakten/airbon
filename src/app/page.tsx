import Navbar from "./components/Navbar";

export default function Landing() {
  return (
    <main>
      <section className="bg-darkgreen relative flex h-screen flex-col p-2 sm:p-8">
        <Navbar></Navbar>

        <div className="text-orange flex flex-col gap-4 pt-40 lg:flex-row lg:gap-0">
          <div className="flex max-w-6xl flex-col gap-4 lg:gap-14">
            <h1 className="text-4xl lg:text-8xl">
              Restore the balance of our ecosystem with carbon credits.
            </h1>
            <div className="flex gap-4 lg:flex-row">
              <button
                className="bg-orange text-darkgreen rounded-full px-4 py-3 sm:px-8"
                type="button"
              >
                For landowners →
              </button>
              <button
                className="bg-lightgreen text-orange rounded-full px-4 py-3 sm:px-8"
                type="button"
              >
                For investors →
              </button>
            </div>
          </div>
          <p className="absolute bottom-4 w-full max-w-lg items-end justify-end text-lg sm:static sm:flex lg:text-2xl">
            Airbon helps landowners in South America monitor and measure their
            forests to create high quality tech-verified carbon credits.
          </p>
        </div>

        <div className="hidden">
          <p className="text-orange">Scroll to learn more ↓</p>
        </div>
      </section>
    </main>
  );
}
