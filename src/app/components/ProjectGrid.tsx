import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  cards: number;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ cards }) => {

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}>
      {Array.from({ length: cards }).map((_, index) => (
        <ProjectCard key={index} />
      ))}
    </div>
  );
};
export default ProjectGrid;
