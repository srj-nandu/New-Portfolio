import { projects } from './projectData.js'

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <div>
          <p className="section-tag">Projects</p>
          <h2>Application builds across web, desktop, automation, and hardware.</h2>
        </div>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <p className="project-stack">{project.subtitle}</p>
            <h3>{project.title}</h3>
            <ul>
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
