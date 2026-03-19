import Header from './Components/Header.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Skills from './Components/Skills.jsx'
import Portfolio from './Components/Portfolio.jsx'
import Projects from './Components/Projects.jsx'
import Resume from './Components/Resume.jsx'
import Certificates from './Components/Certificates.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
import Scroll from './Components/Scroll.jsx'

function App() {
  return (
    <div className="page-shell">
      <Scroll />
      <Header />
      <Hero />

      <main className="content-stack">
        <About />
        <Skills />
        <Portfolio />
        <Projects />
        <Resume />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
