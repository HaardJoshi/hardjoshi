import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import Contact from './components/Contact'
import './App.css'

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about" className="scroll-mt-20">
          <About />
        </section>
        
        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>
        
        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>
        
        <section id="certifications" className="scroll-mt-20">
          <Certifications />
        </section>
        
        <section id="experience" className="scroll-mt-20">
          <Experience />
        </section>
        
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
