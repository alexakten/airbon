import ProjectCard from "./ProjectCard";
import ProjectData from "../ProjectData"; // Ensure this is the correct path to your project data

interface ProjectGridProps {
  cards: number;
  currentProjectID?: string; // This prop is optional
}

const ProjectGrid: React.FC<ProjectGridProps> = ({
  cards,
  currentProjectID,
}) => {
  const projectsToShow = ProjectData.filter(
    (project) => !currentProjectID || project.projectID !== currentProjectID,
  );

  return (
    <div
      className={`grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
    >
      {projectsToShow.slice(0, cards).map((project, index) => (
        // Assuming you pass necessary project data to ProjectCard
        <ProjectCard key={project.projectID} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
