import { useEffect } from "react";

export default function Preloader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="preloader">
      <div className="pre-marquee">
        <span>Panvitha</span>
        <span>Panvitha</span>
        <span>Panvitha</span>
        <span>Panvitha</span>
      </div>

      <div className="pre-content">
        <h1>
          <span>Panvitha</span> Chowdary
        </h1>

        <div className="pre-line"></div>

      </div>
    </div>
  );
}