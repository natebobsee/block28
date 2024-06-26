import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Red from './red.jsx' 
import Blue from './blue.jsx'

import { Routes, Route, Link } from "react-router-dom";

function App() {
 

  return (
    <>
   
  <div id="container">
      <h1>Hello React Router!</h1>   <ul class = "navigation">
           

      <li><Link to= '/red'>red</Link></li>
      <li><Link to= '/blue'>blue</Link></li>
      <li><Link to= '/'>home</Link></li>
      </ul>
      <div id="navbar">{}</div>
      <div id="main-section">
  
   <Routes>
     <Route path="/blue" element={<Blue/>} />
     <Route path="/red" element={<Red/>} />
   </Routes>
</div>
    </div>
    <div>
    <Link to= '/red'>red</Link></div>
      <div><Link to= '/blue'>blue</Link></div>
      <Link to= '/'>home</Link>
    
    </>
  )
}

export default App
