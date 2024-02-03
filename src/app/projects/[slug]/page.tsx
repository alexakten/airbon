export default function ProjectPage() {
  return (
    <main className="flex flex-col items-center bg-lightgray px-3 text-base text-offblack sm:px-8 2xl:text-lg">
      <section
        className="relative flex w-screen max-w-8xl flex-col justify-center bg-blue-200 py-6"
        style={{ height: "100svh" }}
      >
        <div className="grid h-1/2 grid-cols-4 grid-rows-2 gap-4 bg-blue-400">
          <div className="col-span-2 row-span-2	bg-green-200"></div>
          <div className="col-span-2 bg-green-200"></div>
          <div className="bg-green-200"></div>
          <div className="bg-green-200"></div>
        </div>
      </section>
    </main>
  );
}
