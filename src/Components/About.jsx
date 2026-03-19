import { featuredHighlights } from './projectData.js'

function About() {
  return (
    <section id="about" className="section two-column">
      <div>
        <p className="section-tag">Professional Summary</p>
        <h2>Software development and hardware diagnostics in one profile.</h2>
      </div>
      <div className="section-copy">
        <p>
          MCA student and chip-level technician with practical experience in
          software development and hardware diagnostics. Strong in building
          full-stack applications, troubleshooting complex electronic systems,
          and bridging hardware and software to solve real technical problems.
        </p>
        <div className="skill-list">
          {featuredHighlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
