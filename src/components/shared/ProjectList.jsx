import PropTypes from "prop-types"
import ProjectCard from "./ProjectCard"

function ProjectList({ projects }) {
  return (
    <div className="flex flex-col gap-10">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
}

export default ProjectList