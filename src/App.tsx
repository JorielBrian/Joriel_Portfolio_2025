import './App.css'
import Welcome from './Pages/Welcome'
import Qualifications from './Pages/Qualifications'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout'
import Projects from './Pages/Projects';
// import LoadingPage from './Components/Loading';
// import { useState, useEffect } from 'react';

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate loading delay
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return <LoadingPage />;
  // }

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
