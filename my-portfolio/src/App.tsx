import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Marque from './Components/Marque'
import Status from './Components/Status'
import Project from './Components/Project'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import BackToTop from './Components/BackToTop'

function App() {
  return (
    <>
    <main>
      <Navbar/>
      <Hero/>
      <Marque/>
      <Status/>
      <Project/>
      <About/>
      <Contact/>
      <Footer/>
    </main>
    <BackToTop/>
    </>
  )
}

export default App
