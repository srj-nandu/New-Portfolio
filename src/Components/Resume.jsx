import { experience, softSkills } from './projectData.js'

function Resume() {
  return (
    <section id="resume" className="section">
      <div className="section-heading">
        <div>
          <p className="section-tag">Resume</p>
          <h2>Experience, education, and soft skills in one section.</h2>
        </div>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <article key={item.role} className="timeline-item">
            <div className="timeline-header">
              <div>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <span>{item.duration}</span>
            </div>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}

        <article className="timeline-item education-card">
          <div className="timeline-header">
            <div>
              <h3>Master of Computer Applications (MCA)</h3>
              <p>University or College Name - Update required</p>
            </div>
            <span>Expected Graduation Year - Update required</span>
          </div>
          <p className="education-note">
            Keep this updated with your college name and graduation year so the
            page reads like a polished client-ready profile instead of a draft CV.
          </p>
          <p className="resume-soft-skills">{softSkills.join(' / ')}</p>
        </article>
      </div>
    </section>
  )
}

export default Resume
