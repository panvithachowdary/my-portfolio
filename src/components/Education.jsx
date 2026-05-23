import bvritLogo from "../assets/bvrit.png";
import sriChaitanyaLogo from "../assets/sri-chaitanya.png";
import schoolLogo from "../assets/school.png";

import googleLogo from "../assets/google.png";
import ibmLogo from "../assets/ibm.png";
import codechefLogo from "../assets/codechef.png";
import juniperLogo from "../assets/juniper.png";
import courseraLogo from "../assets/coursera.png";
import boardLogo from "../assets/boardinfinity.png";
const education = [
  {
    logo: bvritLogo,
    title: "BVRIT Hyderabad College of Engineering for Women",
    degree: "B.Tech — Computer Science & Engineering",
    year: "2024 - 2028",
    grade: "CGPA: 8.48",
    desc: "Currently pursuing B.Tech in Computer Science and Engineering with interest in web development, programming, data structures, and emerging technologies.",
  },
  {
    logo: sriChaitanyaLogo,
    title: "Sri Chaitanya Junior College",
    degree: "Intermediate — MPC",
    year: "2022 - 2024",
    grade: "Score: 957 / 1000",
    desc: "Completed Intermediate in Mathematics, Physics and Chemistry with strong academic performance.",
  },
  {
    logo: schoolLogo,
    title: "Sri Chaitanya School",
    degree: "SSC — Class X",
    year: "Passed 2022",
    grade: "CGPA: 9.8 / 10",
    desc: "Completed Class X under SSC curriculum with excellent academic performance.",
  },
];

export default function Education() {
  return (
    <section className="section education-section">
      <div className="section-tag">Academic Journey</div>

      <h2 className="section-title">
        My <em>Education</em>
      </h2>

      <div className="edu-timeline">
        {education.map((item, index) => (
          <div className="edu-item" key={index}>
            <div className="edu-card">
              <div className="edu-head">
                <img src={item.logo} alt={item.title} className="edu-logo-img" />

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.degree}</p>

                  <div className="edu-badges">
                    <span>{item.year}</span>
                    <span>{item.grade}</span>
                  </div>
                </div>
              </div>

              <p className="edu-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="sub-section">
  <div className="sub-tag">Coding Profiles</div>

  <div className="coding-grid">
    <a
      href="https://github.com/panvithachowdary"
      target="_blank"
      rel="noreferrer"
      className="coding-card"
    >
      <h3>GitHub</h3>
      <p>@panvithachowdary</p>
    </a>

    <a
      href="https://leetcode.com/u/panvitha_chowdary/"
      target="_blank"
      rel="noreferrer"
      className="coding-card"
    >
      <h3>LeetCode</h3>
      <p>@panvitha_chowdary</p>
    </a>

    <a
      href="https://www.codechef.com/users/panvitha1243"
      target="_blank"
      rel="noreferrer"
      className="coding-card"
    >
      <h3>CodeChef</h3>
      <p>@panvitha1243</p>
    </a>

    <a
      href="https://codeforces.com/profile/panvitha1243"
      target="_blank"
      rel="noreferrer"
      className="coding-card"
    >
      <h3>Codeforces</h3>
      <p>@panvitha1243</p>
    </a>
  </div>
</div>
<div className="sub-section">
  <div className="sub-tag">Certifications</div>

  <div className="cert-grid">

    <div className="cert-card">
      <div className="cert-top">
        <img src={googleLogo} alt="" />
        <img src={courseraLogo} alt="" />
      </div>

      <h3>Crash Course on Python</h3>
      <p>Google × Coursera</p>
      <span>2025</span>
    </div>

    <div className="cert-card">
      <div className="cert-top">
        <img src={ibmLogo} alt="" />
        <img src={courseraLogo} alt="" />
      </div>

      <h3>Generative AI: Prompt Engineering Basics</h3>
      <p>IBM × Coursera</p>
      <span>2025</span>
    </div>

    <div className="cert-card">
      <div className="cert-top">
        <img src={ibmLogo} alt="" />
        <img src={courseraLogo} alt="" />
      </div>

      <h3>Java Programming for Beginners</h3>
      <p>IBM × Coursera</p>
      <span>2025</span>
    </div>

    <div className="cert-card">
      <div className="cert-top">
        <img src={boardLogo} alt="" />
        <img src={courseraLogo} alt="" />
      </div>

      <h3>Fundamentals of Java Programming</h3>
      <p>Board Infinity × Coursera</p>
      <span>2025</span>
    </div>

    <div className="cert-card">
      <div className="cert-top">
        <img src={codechefLogo} alt="" />
      </div>

      <h3>Object Oriented Programming Through Java</h3>
      <p>CodeChef</p>
      <span>2025</span>
    </div>

    <div className="cert-card">
      <div className="cert-top">
        <img src={codechefLogo} alt="" />
      </div>

      <h3>CS302PC: Data Structures</h3>
      <p>CodeChef</p>
      <span>2025</span>
    </div>

    <div className="cert-card">
      <div className="cert-top">
        <img src={juniperLogo} alt="" />
      </div>

      <h3>Open Learning - JNCIA Junos</h3>
      <p>Juniper Networks</p>
      <span>2026</span>
    </div>

  </div>
</div>
    </section>
  );
}