import React from 'react'
import HomePageBanner from './HomePageComponents/HomePageBanner'
import HomePageSliderBelowBanner from './HomePageComponents/HomePageSliderBelowBanner'
import Services from './Services'
import Skills from './Skills'
import ProjectsSection from './ProjectsSection'

const Home = () => {
  return (
    <div>
      <HomePageBanner/>
      <HomePageSliderBelowBanner/>
      <Services/>
      <Skills/>
      <ProjectsSection/>
    </div>
  )
}

export default Home
