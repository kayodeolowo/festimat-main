import React from 'react'
import Header from '../Layouts/Header'
import { Container } from '../Layouts/Container'
import Hero from './Hero'

import HomeEvents from './HomeEvents'
import Footer from './Footer'

const LandingPages = () => {
  return (
   <section>
    <Header/>  
    <Hero/>   
    <HomeEvents/>
    <Footer/>
   </section>
  )
}

export default LandingPages