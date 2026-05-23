export default function Contact() {
  return (
    <section className="section">
      <div className="section-tag">Contact</div>

      <h2 className="section-title">
        Let’s <em>Connect</em>
      </h2>

      <div className="contact-grid">
        <div>
          <p className="contact-text">
            Feel free to contact me for internships, collaborations, projects,
            or just to say hello.
          </p>

          <div className="contact-links">
            <a
              href="https://github.com/panvithachowdary"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/panvitha-chowdary/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:panvithachowdary@gmail.com">
              Email
            </a>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}