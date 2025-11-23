import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Teaching from './components/Teaching.jsx'
import Research from './components/Research.jsx'
import Projects from './components/Projects.jsx'
import Applications from './components/Applications.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Teaching />
        <Research />
        <Projects />
        <Applications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App 