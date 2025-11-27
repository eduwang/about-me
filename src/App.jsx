import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
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
  useEffect(() => {
    Swal.fire({
      title: '작업 중인 페이지',
      html: '이 페이지는 현재 작업 중에 있어 몇 가지 정보는 부정확합니다.<br><br>This page is currently under construction, so some information might be inaccurate.',
      icon: 'info',
      confirmButtonText: '확인',
      confirmButtonColor: '#3085d6'
    })
  }, [])

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