import { FaGithub, FaLink } from "react-icons/fa6";
import { useEffect, useState } from "react";
import api from "../../api/axios.js";

type Project = {
    _id: string
    name: string
    description: string
    githubLink: string
    imageLink: string
    demoLink?: string
    skills: { name: string }[]
  }

function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get("/projects")
        setProjects(res.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section id="projects" className="min-h-screen px-6 md:px-16 py-4">
      <h2 className="font-syne text-4xl font-extrabold text-brand-secondary mb-8">
        Projects
      </h2>

      {/* Horizontal scroll row */}
      <div className="flex flex-col md:flex-row gap-5 md:items-start md:overflow-x-auto pb-4 pt-5 scrollbar-thin scrollbar-thumb-brand-secondary scrollbar-track-white/5">
        {projects.map((project) => (
          <div
            key={project._id}
            className="w-full md:min-w-75 md:max-w-75 bg-white/5 border border-brand-secondary/20
            rounded-2xl overflow-hidden shrink-0 flex flex-col
            hover:border-brand-secondary hover:-translate-y-1 transition-all duration-200"
          >
            {/* Image */}
            <img
              src={project.imageLink}
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

              <p className="text-brand-primary/55 text-sm leading-relaxed grow">
                {project.description}
              </p>

              {/* link */}
              <div className="flex gap-2 justify-end">
                <div>
                  <a
                    href={project.githubLink}
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