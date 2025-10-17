import React from 'react'
import { profileHeader } from '@/constants/profile'

const ProfileSection = () => {
  return (
    <section className='uppercase text-justify font-sans whitespace-pre-line text-zinc-600 items-center'>
      <h2>{profileHeader.title}</h2>
      <p>{profileHeader.description}</p>
    </section>
  )
}

export default ProfileSection