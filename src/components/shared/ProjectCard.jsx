import PropTypes from "prop-types"
import Container from "./Container"

function ProjectCard({ project }) {
  return (
    <div className="group  bg-light-gray-2 rounded-2xl overflow-hidden md:rounded-2xl hover:bg-primary hover:text-white">
      <img src={project.image} className="mx-auto" alt="" />
      <Container className="py-8 px-7 text-center space-y-4">
        <h3 className="uppercase text-primary font-medium tracking-super-wide group-hover:text-white">{project.title}</h3>
        <p>{project.description}</p>
      </Container>
    </div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ProjectCard