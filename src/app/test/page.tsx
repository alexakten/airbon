import Navbar from "../components/Navbar";

export default function Landing() {
  return (
    <main className="flex flex-col items-center bg-lightgray px-3 text-base text-offblack sm:px-8 2xl:text-lg">
      <section
        className="relative flex w-screen max-w-8xl flex-col justify-end bg-black px-4"
        style={{ height: "100svh" }}
      >
        <div className="grid h-3/4 grid-cols-9 grid-rows-9 gap-4 bg-gray-900">
          <div className="col-span-3 row-span-9	bg-red-400"></div>
          <div className="col-span-4 row-span-5 bg-blue-200"></div>
          <div className="col-span-2 row-span-8 bg-gray-200"></div>
        </div>
      </section>
    </main>
  );
}

// <main className="flex h-screen items-center justify-center bg-white">
//   <div className="flex items-center gap-2">
//     <div className="blob"></div>
//     <h1 className="relative text-3xl font-light text-black">
//       Humane(AI)
//       <p
//         className="absolute bottom-2.5 -right-2 text-black font-extralight"
//         style={{ fontSize: "14px" }}
//       >
//         ®
//       </p>
//     </h1>
//   </div>
// </main>
