import resume from "../assets/resume.pdf";
export default function Navbar({ page, setPage }) {
  const links = [
    ["home", "Home"],
    ["education", "Education"],
    ["experience", "Experience"],
    ["projects", "Projects"],
    ["opensource", "Open Source"],
    ["contact", "Contact"],
  ];

  return (
    <nav className="navbar">
       <div className="logo-text" onClick={() => setPage("home")}>

        <div>
          <h2>Panvitha Chowdary</h2>
          <p>B.Tech CSE</p>
        </div>
      </div>

      <div className="nav-links">
        {links.map(([id, label]) => (
          <button
            key={id}
            className={page === id ? "active" : ""}
            onClick={() => setPage(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <a
  className="resume-btn"
  href={resume}
  target="_blank"
  rel="noreferrer"
>
  Resume ↗
</a>
    </nav>
  );
}