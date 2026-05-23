import { useState } from "react";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import OpenSource from "./components/OpenSource";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Particles";
import FloralBackground from "./components/FloralBackground";

export default function App() {
  const [page, setPage] = useState("home");
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Preloader onFinish={() => setLoaded(true)} />}
      <Cursor />
      <Particles />
      <FloralBackground />

      <div className={loaded ? "app show" : "app"}>
        <Navbar page={page} setPage={setPage} />

        {page === "home" && <Hero />}
        {page === "education" && <Education />}
        {page === "experience" && <Experience />}
        {page === "projects" && <Projects />}
        {page === "opensource" && <OpenSource />}
        {page === "contact" && <Contact />}

        <Footer />
      </div>
    </>
  );
}