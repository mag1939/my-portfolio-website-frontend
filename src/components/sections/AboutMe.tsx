// เปลี่ยนจาก LinkedIn เป็น Linkedin (i ตัวเล็ก)
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi2";

function AboutMe() {

  return (

    <section id="about-me" className="min-h-screen px-6 py-4">
      <h1 className="text-4xl font-bold text-brand-secondary text-center md:text-left">About Me</h1>
      <div className="py-10">
        <p className="text-2xl font-bold text-brand-primary">
          My name is Songsak Thawaro, you can call me
          <span className="text-brand-secondary"> Mag</span>
        </p>

        {/* ส่วนของ Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          {/* Resume - ใช้ Heroicons */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-2 bg-brand-secondary text-dark px-6 py-2 rounded-full font-bold hover:bg-opacity-80 transition-all"
          >
            <HiOutlineDocumentText size={24} />
            Download Resume
          </a>
          {/* LinkedIn - ใช้ Simple Icons */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="flex items-center gap-2 border border-brand-primary text-brand-primary px-6 py-2 rounded-full font-bold hover:bg-brand-primary hover:text-dark transition-all"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
          {/* GitHub - ใช้ Simple Icons */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="flex items-center gap-2 border border-brand-primary text-brand-primary px-6 py-2 rounded-full font-bold hover:bg-brand-primary hover:text-dark transition-all"
          >
            <FaGithub size={20} />
            GitHub
          </a>

        </div>
      </div>

    </section>
  )
}

export default AboutMe
