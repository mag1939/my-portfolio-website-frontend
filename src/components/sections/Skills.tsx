type Skill = {
  name: string;
  logo: string;
};

type SkillGroup = {
  category: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React",        logo: "/skills/react.png" },
      { name: "TypeScript",   logo: "/skills/typescript.png" },
      { name: "Tailwind CSS", logo: "/skills/tailwindcss.svg" },
      { name: "Vite",         logo: "/skills/vite.png" },
      { name: "HTML",         logo: "/skills/html.png" },
      { name: "CSS",          logo: "/skills/css.png" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js",    logo: "/skills/nodejs.svg" },
      { name: "Express",    logo: "/skills/express.png" },
      { name: "PostgreSQL", logo: "/skills/postgresql.png" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git",     logo: "/skills/git.png" },
      { name: "GitHub",  logo: "/skills/github.png" },
      { name: "Figma",   logo: "/skills/figma.png" },
      { name: "VS Code", logo: "/skills/vscode.png" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 md:px-16 py-4">
      <h2 className="font-syne text-4xl font-extrabold text-brand-secondary mb-10">
        Skills
      </h2>

      <div className="flex flex-col gap-8">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-brand-secondary mb-3">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-5">
              {group.skills.map(({ name, logo }) => (
                <span
                  key={name}
                  className="flex items-center gap-2 bg-white/5 border border-brand-secondary/20 text-brand-primary/80 px-6 py-3 rounded-full text-sm font-medium 
                          hover:border-brand-secondary hover:text-brand-primary transition-all duration-200 hover:scale-110 active:scale-100 cursor-default"
                >
                  <img
                    src={logo}
                    alt={name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;