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
        <li><a href="#about-me" className="hover:text-brand-secondary cursor-pointer">About Me</a></li>
        <li><a href="#projects" className="hover:text-brand-secondary cursor-pointer">Projects</a></li>
        <li><a href="#experience" className="hover:text-brand-secondary cursor-pointer">Experience</a></li>
        <li><a href="#skills" className="hover:text-brand-secondary cursor-pointer">Skills</a></li>
        <li><a href="#contact" className="hover:text-brand-secondary cursor-pointer">Contact Me</a></li>
      </ul>

      <button
        className='md:hidden text-2xl'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-dark flex flex-col items-center gap-6 py-6 md:hidden shadow-lg border-t border-white/10">
          <li>
            <a
            href="#about-me"
            className="hover:text-brand-secondary cursor-pointer"
            onClick={() => setIsOpen(false)}
            >
              About Me
            </a>
          </li>
          <li>
            <a
            href="#projects"
            className="hover:text-brand-secondary cursor-pointer"
            onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
            href="#experience"
            className="hover:text-brand-secondary cursor-pointer"
            onClick={() => setIsOpen(false)}
            >
              Experience
            </a>
          </li>
          <li>
            <a
            href="#skills"
            className="hover:text-brand-secondary cursor-pointer"
            onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
            href="#contact"
            className="hover:text-brand-secondary cursor-pointer"
            onClick={() => setIsOpen(false)}
            >
              Contact Me
            </a>
          </li>
        </ul>
      )}

    </nav>
  )
}

export default Navbar