import './App.css'
import Welcome from './Pages/Welcome'
import Qualifications from './Pages/Qualifications'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout'
import Projects from './Pages/Projects';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Welcome />} />
            <Route path='/experience' element={<Qualifications />} />
            <Route path='/project' element={<Projects />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
