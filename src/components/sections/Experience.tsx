import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const experiences = [
  {
    id: 1,
    period: "2024 — Present",
    role: "Frontend Developer",
    company: "Company Name",
    description:
      "Built and maintained responsive web applications. Collaborated with designers and backend teams to deliver features on time.",
  },
  {
    id: 2,
    period: "2022 — 2024",
    role: "Junior Developer",
    company: "Another Company",
    description:
      "Developed internal tools and dashboards. Learned React ecosystem and improved performance of existing codebase.",
  },
  {
    id: 3,
    period: "2021 — 2022",
    role: "Intern Developer",
    company: "Startup Co.",
    description:
      "Assisted in building landing pages and fixing UI bugs. First exposure to real-world production code.",
  },
];

function Experience() {
  return (
    <section id="experience" className="min-h-screen px-6 md:px-16 py-4">
      <h2 className="font-syne text-4xl font-extrabold text-brand-secondary mb-10">
        Experience
      </h2>

      <div className="flex flex-col md:flex-row gap-5 md:items-start md:overflow-x-auto pb-4 pt-5 scrollbar-thin scrollbar-thumb-brand-secondary scrollbar-track-white/5">
        {experiences.map((exp, index) => (
          <React.Fragment key={exp.id}>
            <div
              key={exp.id}
              className={`w-full md:min-w-75 md:max-w-75
                rounded-2xl overflow-hidden shrink-0 flex flex-col hover:-translate-y-1 transition-all duration-200
                ${exp.period.includes("Present")
                  ? "bg-brand-secondary/10 border border-brand-secondary"
                  : "bg-white/5 border border-brand-secondary/20 hover:border-brand-secondary"
                }`}
            >
              <div className="p-4 flex flex-col gap-3 flex-1">
                <p className="font-syne font-bold text-brand-primary text-base">
                  {exp.role}
                </p>
                <div>
                  <p className="text-brand-primary/55 text-sm leading-relaxed grow">
                    {exp.company}
                  </p>
                  <p className="text-brand-primary/55 text-sm leading-relaxed grow">
                    {exp.period}
                  </p>
                </div>
                <p className="text-brand-primary/55 text-sm leading-relaxed grow">
                  {exp.description}
                </p>
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