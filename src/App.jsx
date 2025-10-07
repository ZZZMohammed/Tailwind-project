import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Gallory from './components/Gallory'

function App() {


  return (
    <>
     <Navbar /> 

     <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <Gallory />
     </main> 
    </>
  )
}

export default App
