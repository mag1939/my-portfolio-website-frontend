import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import api from "../../api/axios.js";

type Experience = {
  _id: string
  role: string
  company: string
  description: string[]
  startDate: Date
  endDate?: Date
}

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric"
  })
}

function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([])

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await api.get("/experiences")
        setExperiences(res.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchExperiences()
  }, [])

  return (
    <section id="experience" className="min-h-screen px-6 md:px-16 py-4">
      <h2 className="font-syne text-4xl font-extrabold text-brand-secondary mb-10">
        Experience
      </h2>

      <div className="flex flex-col md:flex-row gap-5 md:items-start md:overflow-x-auto pb-4 pt-5 scrollbar-thin scrollbar-thumb-brand-secondary scrollbar-track-white/5">
        {experiences.map((exp, index) => (
          <React.Fragment key={exp._id}>
            <div
              key={exp._id}
              className={`w-full md:min-w-75 md:max-w-75
                rounded-2xl overflow-hidden shrink-0 flex flex-col hover:-translate-y-1 transition-all duration-200
                ${!exp.endDate
                  ? "bg-brand-secondary/10 border border-brand-secondary"
                  : "bg-white/5 border border-brand-secondary/20 hover:border-brand-secondary"
                }`}
            >
              <div className="p-4 flex flex-col gap-3 flex-1">
                <p className="font-syne font-bold text-brand-primary text-base">
                  {exp.role}
                </p>
                <div>
                  <p className="text-brand-primary/80 text-sm leading-relaxed grow">
                    {exp.company}
                  </p>
                  <p className="text-brand-primary/60 text-sm leading-relaxed grow">
                    {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : "Present"}
                  </p>
                </div>
                <ul className="list-disc list-inside">
                  {exp.description.map((point, i) => (
                    <li key={i} className="text-brand-primary/45 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {index < experiences.length - 1 && (<FaArrowLeft className="hidden md:block shrink-0 text-brand-primary/30 self-center" />)}
          </React.Fragment>
        ))}
      </div>

    </section>
  );
}

export default Experience;