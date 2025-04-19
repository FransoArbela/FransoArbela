import ProjectCard from "../components/ProjectCard"
import "../styles/projects.scss"
const Projects = () => {
  return (
    <>
    <section className="projects" id="projects">
        <div className="projects__container">
            <ProjectCard />
        </div>
    </section>
    </>
  )
}

export default Projects