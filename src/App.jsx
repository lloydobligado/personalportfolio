import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
// import About from './components/About'
// import Skills from './components/Skills'
import './App.scss'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
const App = () => {

  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Project />
    </>
  )
}

export default App
