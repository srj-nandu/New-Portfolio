import { technicalSkills } from './projectData.js'

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <div>
          <p className="section-tag">Technical Skills</p>
          <h2>Modern web stack, system-level thinking, and repair expertise.</h2>
        </div>
      </div>

      <div className="skills-grid services-grid">
        {Object.entries(technicalSkills).map(([category, values]) => (
          <article key={category} className="info-card service-card">
            <p className="card-label">Service Area</p>
            <h3>{category}</h3>
            <div className="chip-cloud">
              {values.map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
