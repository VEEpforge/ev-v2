import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { experiences } from '@/constants/profile'
import { Dot } from 'lucide-react'

const ExperiencesSection = () => {
  return (
    <section className='uppercase font-sans w-full text-sm'>
      <Table>
        <TableHeader>
          <TableRow className='hover:bg-transparent'>
            <TableHead className='mx-0 px-0'>
              Experiences
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='border-b'>
          {
            experiences.map((exp, index) => (
              <TableRow key={index}>
                <TableCell className='mx-0 px-0'>
                  {exp.icon}
                  <span className=''>{exp.company}</span>{exp.company && <span className='mx-1'><Dot className='inline-block text-zinc-600' size={12} /></span>}
                  <span className='text-zinc-600 underline decoration-dotted underline-offset-2'>{exp.title}</span>
                </TableCell>
                <TableCell className='text-zinc-600 mx-0 px-0 text-right'>{exp.years}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </section>
  )
}

export default ExperiencesSection