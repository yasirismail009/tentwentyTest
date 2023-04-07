import React from 'react'
import '../Assets/styles/index.scss'
import Navbar from './Navbar'
import MainSection from './sections/MainSection'
import DragComponent from './sections/Carrousal'

export default function App() {
  return (
    <div className='container'>
        <Navbar/>
        <MainSection/>
        <DragComponent/>
    </div>
  )
}
