import React from 'react'
import { Routes, Route} from 'react-router-dom'

import HomePage from './client/pages/HomePage'
import Navbar from './client/components/navbar'
import ParcelsPage from './client/pages/ParcelsPage'

function App() {
    
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/parcels' element={<ParcelsPage />} />
      </Routes>
    </>
  )
}

export default App