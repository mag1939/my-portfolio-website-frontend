import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi2";
import ProfileImg from '../../assets/towa_heh_v3.png'; // เปลี่ยน path ให้ตรงกับรูปของคุณ

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen px-6 md:px-16 flex items-center"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">

        {/* Left — Text */}
        <div>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-brand-secondary mb-3">
            こんにちは, I'm Songsak Thawaro
          </p>

          <h1 className="font-syne text-5xl md:text-6xl font-extrabold text-brand-primary leading-tight">
            You can call me 
          </h1>
          <h2 className="font-syne text-5xl md:text-6xl font-extrabold text-brand-secondary leading-tight mb-6">
            — Mag
          </h2>


          <p className="text-brand-primary/60 text-base leading-relaxed max-w-md mb-8">
            {/* เพิ่ม bio ของคุณตรงนี้ */}
            A developer who loves anime, Japanese culture.
          </p>

          <div className="flex flex-wrap gap-3">
            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 bg-brand-secondary text-dark px-6 py-2.5 rounded-full font-bold text-sm hover:opacity-80 transition-opacity"
            >
              <HiOutlineDocumentText size={18} />
              Download Resume
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              className="flex items-center gap-2 border border-brand-primary/30 text-brand-primary px-6 py-2.5 rounded-full font-medium text-sm hover:bg-brand-primary/10 hover:border-brand-primary/60 transition-all"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="flex items-center gap-2 border border-brand-primary/30 text-brand-primary px-6 py-2.5 rounded-full font-medium text-sm hover:bg-brand-primary/10 hover:border-brand-primary/60 transition-all"
            >
              <FaGithub size={16} />
              GitHub
            </a>
          </div>
        </div>

        {/* Right — Photo */}
        <div className="relative shrink-0 mx-auto md:mx-0">
          <div className="w-52 h-52 md:w-128 md:h-128 rounded-full p-1.5">
            <div className="w-full h-full rounded-full overflow-hidden bg-white/5
                            transition-transform duration-300 ease-in-out
                            hover:rotate-180
                            active:rotate-360
                            cursor-pointer">
              <img
                src={ProfileImg}
                alt="Songsak Thawaro"
                className="w-full h-full object-cover scale-125"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;