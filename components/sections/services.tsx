import React from 'react'
import { Item, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from '../ui/item'
import { services } from '@/constants/profile'
import { Separator } from '../ui/separator'
import { Badge } from '../ui/badge'

const ServicesSection = () => {
  return (
    <section className='uppercase font-sans w-full text-base mt-4'>
      <h1 className='font-medium'>What I Do</h1>
      <Separator className='mt-2' />
      <ItemGroup>
        {services.map((service, index) => (
          <div key={index}>
            <Item className='text-base font-normal'>
              <ItemMedia className='mt-0.5'>
                {service.icon}
              </ItemMedia>
              <ItemContent>
                <ItemTitle className='text-base font-normal underline decoration-dotted underline-offset-2'>{service.title}</ItemTitle>
                <ItemDescription>
                  {service.subservices.map((sub, subIndex) => (
                    <Badge key={subIndex} variant='secondary' className='mr-2 mb-2 last:mr-0 text-sm font-normal text-zinc-600 font-mono'>
                      {sub}
                    </Badge>
                  ))}
                </ItemDescription>
              </ItemContent>
            </Item>
            {index !== services.length && <Separator/>}
          </div>
        ))}
      </ItemGroup>
    </section>
  )
}

export default ServicesSection