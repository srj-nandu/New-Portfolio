import { experience, featuredHighlights, projects, technicalSkills } from './projectData.js'

function Hero() {
  const quickStats = [
    { value: String(projects.length).padStart(2, '0'), label: 'Selected builds' },
    { value: String(Object.keys(technicalSkills).length).padStart(2, '0'), label: 'Skill domains' },
    { value: String(experience.length).padStart(2, '0'), label: 'Experience tracks' },
  ]

  const serviceAreas = [
    'Responsive frontend systems',
    'Backend workflow builds',
    'Chip-level diagnostics',
    'Automation support',
  ]

  return (
    <header className="hero" id="top">
      <div className="hero-panel">
        <div className="hero-backdrop" aria-hidden="true">
          <div className="hero-orb hero-orb-left" />
          <div className="hero-orb hero-orb-right" />
          <div className="hero-grid-glow" />
          <div className="hero-silhouette">
            <span>Available For</span>
            <strong>Portfolio sites</strong>
            <strong>Frontend builds</strong>
            <strong>Technical support</strong>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">MCA Student / Full-Stack Developer / Chip-Level Technician</p>
            <h1>Premium portfolio presence for a builder who works in code and circuits.</h1>
            <p className="hero-text">
              This redesign takes cues from high-converting freelancer portfolios:
              bold hero messaging, stronger proof sections, and a client-ready
              presentation adapted to your software and hardware profile.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Work
              </a>
              <a className="button secondary" href="#contact">
                Get a Quote
              </a>
            </div>
            <div className="hero-feature-strip" aria-label="Primary skills">
              {featuredHighlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <aside className="hero-sidekick">
            <span className="card-label">Selected Focus</span>
            <h2>Built to look premium and explain your value fast.</h2>
            <p>
              Instead of a plain resume-style layout, this version gives you a
              stronger landing page for freelance work, internships, and technical
              opportunities.
            </p>
            <div className="hero-mini-grid">
              {quickStats.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <ul className="hero-checklist">
              {serviceAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="hero-stats" aria-label="Key capabilities">
          <div>
            <strong>01</strong>
            <span>Dark editorial visual language</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Service-led section flow</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Proof cards and project highlights</span>
          </div>
          <div>
            <strong>04</strong>
            <span>Stronger CTA for enquiries</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
