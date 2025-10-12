'use client'

import { Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import clsx from 'clsx'
import React from 'react'
import { usePathname } from 'next/navigation'
import { navLinks, location } from '@/constants/navlinks'

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className='sticky top-0 z-50 p-6 flex justify-between font-sans'>
      <div>
        <Link href="/" className='text-zinc-500'>EE.VILL</Link>
        <nav className='flex flex-col text-sm'>
          {navLinks.map((link) => (
            <Link
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            className={clsx('hover:text-zinc-500',
              pathname === link.href
              ? 'text-zinc-500'
              : null
            )}
            >
              {link.icon}
              {link.label !== 'RESUME' && <span className='text-zinc-500'>/</span>}
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className='flex flex-col text-right text-sm'>
        <div>
          <Sun className='inline w-4 text-zinc-500 mr-1.5' />
          <Moon className='inline w-4 text-zinc-500 mr-1.5' />
        </div>
        <p>{location}</p>
        <p></p>
      </div>
    </header>
  )
}

export default Navbar