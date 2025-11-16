import React from 'react'
import HomePageBanner from './HomePageComponents/HomePageBanner'
import HomePageSliderBelowBanner from './HomePageComponents/HomePageSliderBelowBanner'
import Services from './Services'
import Skills from './Skills'

const Home = () => {
  return (
    <div>
      <HomePageBanner/>
      <HomePageSliderBelowBanner/>
      <Services/>
      <Skills/>
    </div>
  )
}

export default Home
