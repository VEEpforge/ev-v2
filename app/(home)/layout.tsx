import React, { PropsWithChildren } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}
