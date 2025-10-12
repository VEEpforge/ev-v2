import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React, { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}
