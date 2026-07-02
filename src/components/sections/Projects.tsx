import { FaGithub, FaLink } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "Personal portfolio built with React, Tailwind v4 and Vite. Features smooth scroll and responsive layout.",
    image: "/projects/placeholder.png", // เปลี่ยน path ให้ตรงกับรูปของคุณ
    github: "https://github.com/yourusername/portfolio",
    demoLink: "#",
    skills: [
      { name: "React"},
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Anime Tracker App",
    description: "A web app to track anime watchlists, ratings, and discover new series with AniList API integration.",
    image: "/projects/placeholder.png",
    github: "https://github.com/yourusername/anime-tracker",
    demoLink: "#",
    skills: [
      { name: "React"},
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "E-Commerce Dashboard",
    description: "Admin dashboard with real-time charts, order management, and inventory tracking built with React.",
    image: "/projects/placeholder.png",
    github: "https://github.com/yourusername/dashboard",
    demoLink: "#",
    skills: [
      { name: "React"},
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: 4,
    name: "Weather App",
    description: "Minimal weather app using OpenWeather API with location search and 5-day forecast display. Minimal weather app using OpenWeather API with location search and 5-day forecast display.",
    image: "/projects/placeholder.png",
    github: "https://github.com/yourusername/weather-app",
    demoLink: "#",
    skills: [
      { name: "React"},
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
  }
];

function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 md:px-16 py-4">
      <h2 className="font-syne text-4xl font-extrabold text-brand-secondary mb-8">
        Projects
      </h2>

      {/* Horizontal scroll row */}
      <div className="flex flex-col md:flex-row gap-5 md:items-start md:overflow-x-auto pb-4 pt-5 scrollbar-thin scrollbar-thumb-brand-secondary scrollbar-track-white/5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full md:min-w-[300px] md:max-w-[300px] bg-white/5 border border-brand-secondary/20
            rounded-2xl overflow-hidden flex-shrink-0 flex flex-col
            hover:border-brand-secondary hover:-translate-y-1 transition-all duration-200"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-60 object-cover"
            />

            {/* Body */}
            <div className="p-4 flex flex-col gap-3 flex-1">
              <p className="font-syne font-bold text-brand-primary text-base">
                {project.name}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.skills.map(({name}) => (
                  <span
                    key={name}
                    className="flex items-center gap-2 border border-brand-primary/20 text-brand-primary/60 px-3 py-1.5 rounded-full text-xs font-medium hover:text-brand-primary hover:border-brand-primary/50 transition-all"
                  >
                    {name}
                  </span>
                ))}
              </div>

              <p className="text-brand-primary/55 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* link */}
              <div className="flex gap-2 justify-end">
                <div>
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 border border-brand-primary/20 text-brand-primary/60 px-3 py-1.5 rounded-full text-xs font-medium hover:text-brand-primary hover:border-brand-primary/50 transition-all"
                  >
                    <FaGithub size={13} />
                    GitHub
                  </a>
                </div>
                <div>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    className="flex items-center gap-2 border bg-brand-secondary border-brand-primary/20 text-black px-3 py-1.5 rounded-full text-xs font-medium hover:text-brand-primary hover:border-brand-secondary transition-all"
                  >
                    <FaLink size={13} />
                    Demo
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;