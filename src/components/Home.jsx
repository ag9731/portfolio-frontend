import React from 'react'
import HomePageBanner from './HomePageComponents/HomePageBanner'
import HomePageSliderBelowBanner from './HomePageComponents/HomePageSliderBelowBanner'
import Services from './Services'
import Skills from './Skills'
import ProjectsSection from './ProjectsSection'
import Experience from './Experience'
import Footer from './Nav/Footer'

const Home = () => {
  return (
    <div>
      <HomePageBanner/>
      <HomePageSliderBelowBanner/>
      <Experience/>
      <ProjectsSection/>
      <Services/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default Home
