import ProjectGrid from "../components/ProjectGrid";
import Navbar from "../components/Navbar";

export default function ProjectsPage() {
  return (
    <section className="relative flex flex-col items-center bg-lightgray px-3 text-base text-offblack sm:px-8 2xl:text-lg">
      <div className="relative flex max-w-8xl flex-col items-center">
        <Navbar navColor="offblack" />

        <div className="max-w-8xl pt-32 pb-32">
        <h2 className="pb-8 text-3xl sm:text-4xl">Explore regenerative practices</h2>
          <div className="block">
            <ProjectGrid cards={8} />
          </div>
        </div>
      </div>
    </section>
  );
}
