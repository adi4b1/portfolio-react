import React, { useRef } from 'react'
import {Routes,Route} from 'react-router-dom'
import Nav from '../src/pro/Nav'
import Home from '../src/pro/Home'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'

const App=()=>{

  const skillRef=useRef(null)
  const projectRef=useRef(null)
  const experienceRef=useRef(null)
  const InfoRef=useRef(null)

  return(
    <div>
      <Nav
      skillRef={skillRef}
      projectRef={projectRef}
      experienceRef={experienceRef}
      InfoRef={InfoRef}
      />
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes> */}


    
     <Home skillRef={skillRef}
     InfoRef={InfoRef}
      projectRef={projectRef}
      experienceRef={experienceRef}/>
    </div>
  )
}


export default App