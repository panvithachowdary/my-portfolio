const experience = [
    {
      role: "AI & Python Training",
      company: "Vishwam AI",
      type: "Training Program",
      time: "May 2025 – July 2025",
      points: [
        "Completed structured training in Python programming and foundational Artificial Intelligence concepts.",
        "Worked on problem-solving exercises involving data processing and algorithmic logic.",
        "Gained understanding of AI fundamentals including data handling and basic model concepts.",
      ],
    },
  
    {
      role: "GirlScript Summer of Code",
      company: "GSSoC 2026",
      type: "Open Source Program",
      time: "2026",
      points: [
        "Participating in open-source collaboration and contribution programs.",
        "Exploring real-world development workflows using Git and GitHub.",
        "Contributing to community-driven projects and improving technical collaboration skills.",
      ],
    },
  ];
  
  export default function Experience() {
    return (
      <section className="section">
        <div className="section-tag">Journey</div>
  
        <h2 className="section-title">
          Training & <em>Programs</em>
        </h2>
  
        <div className="experience-wrap">
          {experience.map((item, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-time">
                {item.time}
              </div>
  
              <div className="experience-content">
                <div className="exp-top">
                  <h3>{item.role}</h3>
  
                  <span>{item.type}</span>
                </div>
  
                <h4>{item.company}</h4>
  
                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }