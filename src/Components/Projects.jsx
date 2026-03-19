import { projects } from './projectData.js'

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <div>
          <p className="section-tag">Projects</p>
          <h2>Case-study style cards across web, desktop, automation, and hardware.</h2>
        </div>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article key={project.title} className="project-card">
            <div className="project-card-top">
              <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
              <p className="project-stack">{project.subtitle}</p>
            </div>
            <h3>{project.title}</h3>
            <ul>
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <span className="project-footer">Outcome-focused presentation</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
