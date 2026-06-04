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

      {/* Timeline */}
      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-[6px] top-1 bottom-1 w-0.5 bg-gradient-to-b from-brand-secondary to-brand-secondary/10 rounded-full" />

        {experiences.map((exp) => (
          <div key={exp.id} className="relative mb-10 last:mb-0">
            {/* Dot */}
            <div className="absolute -left-8 top-1 w-3.5 h-3.5 rounded-full bg-brand-secondary border-2 border-dark outline outline-2 outline-brand-secondary" />

            <p className="text-xs font-medium tracking-[0.1em] uppercase text-brand-secondary mb-1">
              {exp.period}
            </p>
            <p className="font-syne font-bold text-brand-primary text-lg mb-0.5">
              {exp.role}
            </p>
            <p className="text-brand-primary/50 text-sm mb-2">
              {exp.company}
            </p>
            <p className="text-brand-primary/55 text-sm leading-relaxed max-w-lg">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;