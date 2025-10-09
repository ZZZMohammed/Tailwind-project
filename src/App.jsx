


import Navbar from '../src/components/Navbar'
import Home from '../src/pages/Home'
// import Contact from '../src/pages/Contact'
import { Routes , Route } from 'react-router-dom'
import Footer from './components/Footer'
import About from './pages/About'



function App() {


  return (
    <>
         
        <Navbar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         
        </Routes>
        <Footer />
    </>
  )
}

export default App
