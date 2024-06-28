import Main from './component/Main/Main'
import About from './component/About/About'
import Project from './component/Project/Project';
import Contact from './component/Contact/Contact';
import './App.css'
import { useRef } from 'react';

function App() {
  const mainRef = useRef(null)
  const aboutRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToProject = () => {
    projectRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToMain = () => {
    mainRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className='nav-container'>
        <img src='/logo.svg' alt='logo' className='logo' onClick={scrollToMain}/>
        <ul className='nav-button-container'>
          <li className='nav-button' onClick={scrollToAbout}>About</li>
          <li className='nav-button' onClick={scrollToProject}>Project</li>
          <li className='nav-button' onClick={scrollToContact}>Contact</li>
        </ul>
      </div>
      <section ref={mainRef}>
        <Main />
      </section>
      <section ref={aboutRef} >
        <About />
      </section>
      <section ref={projectRef}>
        <Project />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
    </>
  )
}

export default App
