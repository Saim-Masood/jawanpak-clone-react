import React from 'react'
import './App.css'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import { Stack } from '@mui/material'
import AboutUs from './Components/AboutUs'
import Info from './Components/Aim'
import Training from './Components/TrainingSection'
import Contacts from './Components/ContactForm'
import Footer from './Components/Footer'

function App() {
  
  return (
    <Stack spacing={2} sx={{width:"100%"}}>
    <Header/>
    <HeroSection/>
    <AboutUs/>
    <Info/>
    <Training/>
    <Contacts/>
    <Footer/>
    </Stack >
  )
}

export default App