import { experience, projects, technicalSkills } from './projectData.js'

function Portfolio() {
  const proofItems = [
    {
      value: String(projects.length).padStart(2, '0'),
      label: 'Projects already mapped into this portfolio',
    },
    {
      value: String(Object.keys(technicalSkills).length).padStart(2, '0'),
      label: 'Skill groups showcased as service cards',
    },
    {
      value: String(experience.length).padStart(2, '0'),
      label: 'Experience tracks supporting your pitch',
    },
  ]

  const reasons = [
    'Tells people what you do in the first screen',
    'Feels closer to a premium agency or freelancer landing page',
    'Keeps your actual work, skills, and contact system intact',
  ]

  return (
    <section className="section highlight" id="portfolio">
      <div className="highlight-copy">
        <p className="section-tag">Portfolio Focus</p>
        <h2>A stronger “why hire me” section inspired by premium portfolio landing pages.</h2>
        <p>
          The original site already had the content. This version reframes it with
          clearer hierarchy, better contrast, and proof-driven cards so the page
          feels more intentional and more client-facing.
        </p>
        <ul className="highlight-list">
          {reasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
      </div>
      <div className="proof-grid" aria-label="Portfolio proof">
        {proofItems.map((item) => (
          <article key={item.label} className="proof-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
