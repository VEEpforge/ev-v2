import ExperiencesSection from '@/components/sections/experiences'
import ProfileSection from '@/components/sections/profile'
import ServicesSection from '@/components/sections/services'
import TechStacksSection from '@/components/sections/techstacks'
import React from 'react'

const AboutPage = () => {
  return (
    <div className='max-w-2xl container mx-auto px-4 flex flex-col items-center gap-y-8'>
      <div className='w-32 h-32 bg-primary'>
        Image
      </div>
      <ProfileSection />
      <ExperiencesSection />
      <ServicesSection />
      <TechStacksSection />
    </div>
  )
}

export default AboutPage