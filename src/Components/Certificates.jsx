import { certificates } from './projectData.js'

function Certificates() {
  return (
    <section id="certificates" className="section">
      <div className="section-heading">
        <div>
          <p className="section-tag">Credentials</p>
          <h2>Proof, ongoing learning, and placeholders for verified credentials.</h2>
        </div>
      </div>

      <div className="timeline credentials-grid">
        {certificates.map((item) => (
          <article key={item} className="timeline-item credential-card">
            <p className="card-label">In Progress</p>
            <h3>Update Credential Slot</h3>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certificates
