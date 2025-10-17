import { Club, Diamond, GraduationCap, Heart, Landmark, Laptop, LibraryBig } from "lucide-react"
import { title } from "process"
import { SiCanva, SiGit, SiGithub, SiGithubcopilot, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiOpenai, SiPrisma, SiPython, SiReact, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si"

export const profileHeader = {
  title: null,
  description: `
    Nice to meet you,

    I'm Ezra, a thriving developer across digital and physical spaces. I approach things with a blend of fun and minimalism, seamlessly navigating challenges and delivering creative and functional solutions.
    
    For the past few years, I explored different roles in my academics, in my organizations, as well as, during my student assistantship, internship, and research study. But my interests always drawn to designing, maybe it was an organizational business plans or processes or even publication materials. I find comfort on building something that was on the middle of being creative and functional.
    
    When I'm not coding, I love to cook and take photos. I also enjoy trying out things I find interesting on TikTok.
    `
}

export const experiences = [
  {
    icon: <Laptop size={16} className='inline-block mr-1.5 mb-0.5' />,
    title: 'Freelancer',
    company: '',
    years: 'Current',
  },
  {
    icon: <Landmark size={16} className='inline-block mr-1.5 mb-0.5' />,
    title: 'Web Developer/Thesis Student',
    company: 'UPLB-MNH',
    years: '2022 - 2024',
  },
  {
    icon: <GraduationCap size={16} className='inline-block mr-1.5 mb-0.5' />,
    title: 'Student Assistant',
    company: 'UPLB GRADUATE SCHOOL',
    years: '2022 - 2023',
  },
  {
    icon: <LibraryBig size={16} className='inline-block mr-1.5 mb-0.5' />,
    title: 'Product Development and Tech Intern',
    company: 'BookSpine Inc.',
    years: '2021',
  },
]

export const services = [
  {
    icon: <Heart size={16} className='inline-block mr-1.5 mb-0.5' />,
    title: 'App Development',
    subservices: ['Application Design', 'Application Development', 'Basic UI/UX Design'],
  },
  {
    icon: <Diamond size={16} className='inline-block mr-1.5 mb-0.5' />,
    title: 'Graphic Design',
    subservices: ['Branding and Visual Identity', 'Publication Materials'],
  },
  {
    icon: <Club size={16} className='inline-block mr-1.5 mb-0.5' />,
    title: 'Miscellaneous',
    subservices: ['Research', 'Strategy', 'Slide Decks', 'Tutoring', 'Photography'],
  }
]

export const techstacks = [
  {
    name: 'Next.js',
    icon: <SiNextdotjs size={16} className='inline-block mr-1.5 mb-0.5' />
  },
  {
    name: 'React',
    icon: <SiReact size={16} className='inline-block mr-1.5 mb-0.5' />
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript size={16} className='inline-block mr-1.5 mb-0.5' />
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss size={16} className='inline-block mr-1.5 mb-0.5' />
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript size={16} className='inline-block mr-1.5 mb-0.5' />
  },
  {
    name: 'Python',
    icon: <SiPython size={16} className='inline-block mr-1.5 mb-0.5' />
  },
  {
    name: 'GitHub',
    icon: <SiGithub size={16} className='inline-block mr-1.5 mb-0.5' />
  },
  {
    name: 'Git',
    icon: <SiGit size={16} className='inline-block mr-1.5 mb-0.5' />
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs size={16} className='inline-block mr-1.5 mb-0.5' />
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb size={16} className='inline-block mr-1.5 mb-0.5' />
  },
  {
    name: 'Canva',
    icon: <SiCanva size={16} className='inline-block mr-1.5 mb-0.5' />
  },
  {
    name: 'Copilot',
    icon: <SiGithubcopilot size={16} className='inline-block mr-1.5 mb-0.5' />
  },
  {
    name: 'Prisma',
    icon: <SiPrisma size={16} className='inline-block mr-1.5 mb-0.5' />
  },
  {
    name: 'Vercel',
    icon: <SiVercel size={16} className='inline-block mr-1.5 mb-0.5' />
  },
  {
    name: 'ChatGPT',
    icon: <SiOpenai size={16} className='inline-block mr-1.5 mb-0.5' />
  }
]