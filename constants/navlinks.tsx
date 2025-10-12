import { CornerDownRight, Download} from 'lucide-react'

export const navLinks = [
  { href: '/', label: 'FEED', icon: <CornerDownRight className='inline w-3 text-zinc-500' /> },
  { href: '/about', label: 'ABOUT', icon: <CornerDownRight className='inline w-3 text-zinc-500' /> },
  { href: '/contact', label: 'CONTACT', icon: <CornerDownRight className='inline w-3 text-zinc-500' /> },
  { href: 'https://drive.google.com/file/d/1oK-MQmMRE0dM57BeTtRhdj4VtwbPuKbn/view?usp=sharing', label: 'RESUME', icon: <Download className='inline w-3 text-zinc-500 mr-1.5' />, external: true },
];

export const location = 'LAGUNA, PH';