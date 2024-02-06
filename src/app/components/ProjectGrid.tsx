import ProjectCard from "./ProjectCard";
import ProjectData from "../ProjectData"; // Ensure this is the correct path to your project data

interface ProjectGridProps {
  cards: number;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ cards }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}>
      {ProjectData.slice(0, cards).map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
