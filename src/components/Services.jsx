import React from 'react'
import ServicePageHeadSection from './ServicePageComponents/ServicePageHeadSection'
import ServicesSection2 from './ServicePageComponents/ServicesSection2'

const Services = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <ServicePageHeadSection />
        <ServicesSection2 />
      </div>
    </div>
  );
}

export default Services
