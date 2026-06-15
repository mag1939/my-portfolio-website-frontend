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
      <div className="flex flex-row items-start overflow-x-auto pb-8">
       
        {experiences.map((exp) => (
          <div key={exp.id} className="flex flex-col items-center min-w-[320px] max-w-[320px]">
            {/* เส้น + dot */}
            <div className="flex items-center w-full mb-4">
              <div className="flex-1 h-0.5 bg-white/20" />
              <div className={`w-3.5 h-3.5 rounded-full shrink-0 ${exp.period.includes("Present")
                ? "bg-brand-secondary"
                : "bg-white/20"
              }`} />
              <div className="flex-1 h-0.5 bg-white/20" />
            </div>

            {/* ข้อความ — จัดกึ่งกลาง */}
            <div className="px-4">
              <p className="text-xs font-medium tracking-[0.1em] uppercase text-brand-secondary mb-1 text-center">
                {exp.period}
              </p>
              <p className="font-syne font-bold text-brand-primary text-lg mb-0.5 text-center">
                {exp.role}
              </p>
              <p className="text-brand-primary/50 text-sm mb-2 text-center">
                {exp.company}
              </p>
              <p className="text-brand-primary/55 text-sm leading-relaxed text-center">
                {exp.description}
              </p>
            </div>
            

          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;