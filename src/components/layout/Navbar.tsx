import LogoImg from '../../assets/towa_heh_v3.png'
import { useState } from 'react'

function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center gap-12 px-6 py-4 text-brand-primary bg-dark/80 backdrop-blur-md sticky top-0 z-50">
      <img
        src={LogoImg}
        alt="Logo"
        className='h-10 w-auto'
      />
      <ul className="hidden md:flex gap-10">
        <li className="hover:text-brand-secondary cursor-pointer">About Me</li>
        <li className="hover:text-brand-secondary cursor-pointer">Projects</li>
        <li className="hover:text-brand-secondary cursor-pointer">Experience</li>
        <li className="hover:text-brand-secondary cursor-pointer">Skills</li>
        <li className="hover:text-brand-secondary cursor-pointer">Contact Me</li>
      </ul>

      <button
        className='md:hidden text-2xl'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-dark flex flex-col items-center gap-6 py-6 md:hidden shadow-lg border-t border-white/10">
          <li
            className="hover:text-brand-secondary cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </li>
          <li
            className="hover:text-brand-secondary cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </li>
          <li
            className="hover:text-brand-secondary cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </li>
          <li
            className="hover:text-brand-secondary cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </li>
          <li
            className="hover:text-brand-secondary cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </li>
        </ul>
      )}

    </nav>
  )
}

export default Navbar