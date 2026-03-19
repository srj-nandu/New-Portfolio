import { featuredHighlights } from './projectData.js'

const approachItems = [
  {
    title: 'Build',
    copy: 'React interfaces, full-stack workflows, and structured problem solving for practical products.',
  },
  {
    title: 'Diagnose',
    copy: 'Chip-level analysis, PCB troubleshooting, and component-level repair experience.',
  },
  {
    title: 'Present',
    copy: 'A cleaner portfolio format that feels closer to a premium freelancer site than a static resume.',
  },
]

function About() {
  return (
    <section id="about" className="section two-column about-section">
      <div className="section-copy">
        <p className="section-tag">Professional Summary</p>
        <h2>Software development and hardware diagnostics in one profile.</h2>
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
      <div className="approach-grid">
        {approachItems.map((item) => (
          <article key={item.title} className="approach-card">
            <p className="card-label">{item.title}</p>
            <h3>{item.title} with clarity.</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default About
