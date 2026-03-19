import { certificates } from './projectData.js'

function Certificates() {
  return (
    <section id="certificates" className="section">
      <div className="section-heading">
        <div>
          <p className="section-tag">Certificates</p>
          <h2>Space reserved for credentials and verified training.</h2>
        </div>
      </div>

      <div className="timeline">
        {certificates.map((item) => (
          <article key={item} className="timeline-item">
            <h3>Update Certificate</h3>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certificates
