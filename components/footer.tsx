import { ArrowUp, ArrowUpRight, BotMessageSquare } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const contactLinks = [
    { href: "mailto:ezraearlvillanueva@gmail.com", label: "GMAIL" },
    { href: "https://github.com/VEEpforge", label: "GITHUB", external: true },
    { href: "https://linkedin.com/in/ezraearlvillanueva", label: "LINKEDIN" },
  ]

  return (
    <footer className='sticky bottom-0 z-50 p-6 flex justify-between font-sans text-sm items-end'>
      <div className='flex flex-col'>
        {contactLinks.map(link => (
          <Link key={link.label} href={link.href} target={link.external ? '_blank' : undefined} className='hover:underline hover:text-zinc-500'>
            {link.label} <ArrowUpRight className='inline w-4 -mt-1' />
          </Link>
        ))}
        <p className='text-zinc-500'>© 2025 EE.VILL</p>
      </div>
      <div className='flex flex-col'>
        <BotMessageSquare className='w-5' />
        <ArrowUp className='w-5' />
      </div>
    </footer>
  )
}

export default Footer