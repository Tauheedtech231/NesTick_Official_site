import React from 'react'

import Hero from './src/portfolio/components/Hero'
import Services from './src/portfolio/components/Services'

import TestimonialsSlider from './src/portfolio/components/Testimonials'
import FAQ from './src/portfolio/components/FAQ'
import WhyChooseUs from './src/portfolio/components/WhyChooseUs'

function page() {
  return (
    <div>
    
      
      <Hero/>
      <Services/>
     
      
      <TestimonialsSlider/>
      <WhyChooseUs/>
      <FAQ/>


      
    </div>
  )
}

export default page
