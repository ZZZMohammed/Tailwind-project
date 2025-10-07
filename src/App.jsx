

import './App.css'
import Navbar from '../src/components/Navbar'
import Home from '../src/pages/Home'
import Contact from '../src/pages/Contact'
import { Routes , Route } from 'react-router-dom'



function App() {


  return (
    <>
        <Navbar />
       <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  )
}

export default App
