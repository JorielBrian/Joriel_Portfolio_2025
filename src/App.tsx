import './App.css'
import Navigation from './Components/Navigation'
import Welcome from './Components/Welcome'
import About from './Components/About'
import Skills from './Components/Skills'
import Qualifications from './Components/Qualifications'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Navigation/>
      <Welcome />
      <About />
      <Skills />
      <Qualifications />
      <Footer />
    </div>
  )
}

export default App
