import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Research from './components/Research'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Research />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App 