import { FaGithub, FaLinkedin, FaEnvelope,  FaCode } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="section hero">
      <div className="hero-tag">
        <span></span>
        Available for internships
      </div>

      <h1>
        <em>Panvitha Chowdary</em>
        <br />
        Murakonda
      </h1>

      <div className="hero-roles">
        <div>Full Stack Developer</div>
        <div>ML / AI Explorer</div>
        <div>DSA Enthusiast</div>
        <div>Open Source</div>
      </div>

      <p>
        A passionate Computer Science student crafting elegant digital
        experiences with beautiful UI, modern frontend technologies, and
        interactive animations.
      </p>
      <div className="hero-socials">
  <a
    href="https://github.com/panvithachowdary"
    target="_blank"
    rel="noreferrer"
    title="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/panvitha-chowdary/"
    target="_blank"
    rel="noreferrer"
    title="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:panvithachowdary@gmail.com"
    title="Gmail"
  >
    <FaEnvelope />
  </a>

  <a
    href="https://leetcode.com/u/panvitha_chowdary/"
    target="_blank"
    rel="noreferrer"
    title="LeetCode"
  >
    <FaCode />
  </a>
</div>
    </section>
  );
}