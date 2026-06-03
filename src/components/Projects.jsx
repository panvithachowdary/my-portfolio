const projects = [
  {
    title: "AlgoVision",
    desc: "Interactive DSA visualizer that demonstrates sorting and searching algorithms through real-time animations, helping users understand algorithm behavior, complexity, and execution flow with an intuitive user interface.",
    tech: [
    "React",
    "JavaScript",
    "CSS",
    "Vite"
  ],
  github: "https://github.com/panvithachowdary",
  live: "https://dsa-visualizer-zeta-two.vercel.app/"
  },

  {
    title: "The Gifting Co.",
    desc: "AI-powered gift recommendation web application that generates personalized gift suggestions based on personality, interests, occasion, relationship, and budget with ranked recommendations and creativity controls.",
    tech: [
      "React",
      "Tailwind CSS",
      "Supabase",
      "Vercel",
    ],
    github: "https://github.com/panvithachowdary",
    live: "https://gifting-co-mu.vercel.app/",
  },

  {
    title: "StyleSelf AI",
    desc: "AI-powered fashion styling web application that generates outfits, completes looks from single clothing items, provides shopping links, and personalizes styling recommendations using AI.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Groq API",
      "Vercel",
    ],
    github: "https://github.com/panvithachowdary",
    live: "https://styleself-ai.vercel.app",
  },

  {
    title: "Asko AI",
    desc: "Full-stack conversational AI web application that processes one question at a time and instantly generates structured AI-powered responses using Groq LLaMA 3.1 with MongoDB storage and separate frontend/backend deployment.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Groq API",
      "Vercel",
    ],
    github: "https://github.com/panvithachowdary",
    live: "https://asko-ai-8bpp.vercel.app",
  },
];

export default function Projects() {
  return (
    <section className="section">
      <div className="section-tag">Featured Work</div>

      <h2 className="section-title">
        My <em>Projects</em>
      </h2>

      <div className="projects-grid">
        {projects.map((item, index) => (
          <div className="project-card card" key={index}>
            <div className="project-number">
              0{index + 1}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <div className="project-tech">
              {item.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub →
              </a>

              <a
                href={item.live}
                target="_blank"
                rel="noreferrer"
              >
                Live →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}