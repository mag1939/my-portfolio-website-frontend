import { useEffect, useState } from "react";
import api from "../../api/axios.js";

type Skill = {
  _id: string
  category: string
  skills: { name: string, logo: string}[]
}

function Skills() {
  const [skills, setSkills] = useState<Skill[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSkills = async() => {
      try {
        setIsLoading(true)
        const res = await api.get("/skills")
        setSkills(res.data)
      } catch (error) {
        setError("Loading Failed, please try again.")
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSkills()
  }, [])

  return (
    <section id="skills" className="min-h-screen px-6 md:px-16 py-4">
      <h2 className="font-syne text-4xl font-extrabold text-brand-secondary mb-10">
        Skills
      </h2>

      {isLoading
        ? <p className="text-brand-primary/50">Waking up my backend, please wait... 🥱</p>
        : error
          ? <p className="text-red-400">{error}</p>
          : <div className="flex flex-col gap-8">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-brand-secondary mb-3">
              {group.category}
            </p>
           <div className="my-scroll flex gap-3 overflow-x-auto md:flex-wrap md:overflow-x-visible pb-3 pt-1 pl-2">
              {group.skills.map(({ name, logo }) => (
                <span
                  key={name}
                  className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 shrink-0 bg-white/5 border border-brand-secondary/20 text-brand-primary/80 rounded-full text-sm font-medium 
                          hover:border-brand-secondary hover:text-brand-primary transition-all duration-200 hover:scale-110 active:scale-100 cursor-default"
                >
                  <img
                    src={logo}
                    alt={name}
                    width={24}
                    height={24}
                    className="md:w-10 md:h-10 object-contain"
                  />
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
            </div>
      }
    </section>
  );
}

export default Skills;