import { useState } from 'react'

function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center gap-12 px-6 md:px-16 py-4 text-brand-primary bg-dark/80 backdrop-blur-md sticky top-0 z-50">
      <div>
        <span className='font-extrabold text-2xl'>Mag</span><span className="text-brand-secondary font-extrabold text-2xl">.Dev</span>
      </div>

      <ul className="hidden md:flex gap-10">
        <li><a href="#home" className="hover:text-brand-secondary cursor-pointer">Home</a></li>
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
            href="#home"
            className="hover:text-brand-secondary cursor-pointer"
            onClick={() => setIsOpen(false)}
            >
              Home
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