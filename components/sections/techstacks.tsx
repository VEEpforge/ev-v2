import React from 'react'
import { Separator } from '../ui/separator'
import { Item, ItemContent, ItemGroup, ItemMedia, ItemTitle } from '../ui/item'
import { techstacks } from '@/constants/profile'

const TechStacksSection = () => {
  return (
    <section className='uppercase font-sans w-full text-base mt-4'>
      <h1 className='font-medium'>Tech Stacks</h1>
      <Separator className='mt-2' />
      <ItemGroup className='grid grid-cols-3 gap-2'>
        { techstacks.map((tech, index) => (
          <div key={index}>
            <Item>
              <ItemMedia>
                {tech.icon}
              </ItemMedia>
              <ItemContent>
                <ItemTitle className='text-base font-normal'>{tech.name}</ItemTitle>
              </ItemContent>
            </Item>
            <Separator/>
          </div>
        ))}
      </ItemGroup>
    </section>
  )
}

export default TechStacksSection