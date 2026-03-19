function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow">MCA Student / Full-Stack Developer / Chip-Level Technician</p>
          <h1>Bridging software development and hardware diagnostics.</h1>
          <p className="hero-text">
            I build full-stack applications with modern web technologies and solve
            complex hardware issues at the component level. My work combines
            application development, troubleshooting, and system-level thinking.
          </p>
          <div className="hero-actions">
          
            <a className="button primary" href="#projects">
              View Projects
            </a>
            <a className="button secondary" href="mailto:srj.nandu@gmail.com">
              Contact Me
            </a>
          </div>
        </div>

        <aside className="hero-card">
          <span className="card-label">Focus Areas</span>
          <h2>React, Node.js, automation, and hardware repair.</h2>
          <p>
            Open to software development, technical support, and system-level
            engineering opportunities.
          </p>
        </aside>
      </div>
    </header>
  )
}

export default Hero
