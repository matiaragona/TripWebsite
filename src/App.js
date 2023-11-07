import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Popular from './components/Popular/Popular'
import Offers from './components/Offers/Offers'
import Footer from './components/Footer/Footer'
import './app.css'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Popular/>
    <Offers/>
    <Footer/>      
    </>
  )
}

export default App