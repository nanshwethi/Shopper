import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Shipping from '../pages/Shipping'
import Faq from '../pages/Faq'
import HomePage from '../components/HomePage'
import Shop from '../components/Shop'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Docs from '../pages/Docs'
import Catalog from '../components/Catalog'


const Paths = () => {
  return (
    
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/shipping' element={<Shipping/>}/>
    <Route path='/faq' element={<Faq/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/catalog' element={<Catalog/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/docs' element={<Docs/>}/>

  </Routes>

  )
}

export default Paths