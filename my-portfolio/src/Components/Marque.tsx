import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type Track = {
  label: string;
  category: string;
  direction: "forward" | "reverse";
  speed: number; // px/s at rest
  skills: string[];
};

const skillTracks: Track[] = [
  {
    label: "01",
    category: "DEVELOPMENT",
    direction: "forward",
    speed: 42,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "SCSS", "Redux"],
  },
  {
    label: "02",
    category: "BACKEND & AI",
    direction: "reverse",
    speed: 36,
    skills: [
      "Node.js", "Express.js", "Python", "FastAPI", "SQL", "MongoDB", "NLP", "LLMs",
      "LangChain", "LangGraph", "AWS S3", "AWS EC2", "Git & GitHub", "GitHub Actions",
      "Postman", "Responsive Design",
    ],
  },
];

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);
const vars = (v: Record<string, string | number>) => v as CSSProperties;

/*
  One scrolling row. It drifts at a calm speed, speeds up and leans while the
  page scrolls, reverses when you scroll back up, and eases to a stop on hover.
*/
function SkillTrack({ track, row }: { track: Track; row: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const firstGroup = () => inner.firstElementChild as HTMLElement;
    let groupWidth = firstGroup().offsetWidth;
    let x = 0;
    let vel = 0;
    let hover = 1;
    let hovering = false;
    let visible = true;
    let scrollDir = 1;
    let lastY = window.scrollY;
    let last = performance.now();
    let raf = 0;
    const base = track.direction === "forward" ? -1 : 1;

    const resize = new ResizeObserver(() => (groupWidth = firstGroup().offsetWidth));
    resize.observe(inner);
    const visibility = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    visibility.observe(container);

    const onEnter = () => (hovering = true);
    const onLeave = () => (hovering = false);
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;
      if (!visible || !dt || !groupWidth) return;

      if (Math.abs(dy) > 0.5) scrollDir = Math.sign(dy);
      vel += (dy / dt - vel) * 0.08;
      hover += ((hovering ? 0 : 1) - hover) * 0.08;

      const boost = 1 + Math.min(Math.abs(vel) / 500, 4);
      x += base * scrollDir * track.speed * boost * hover * dt;
      if (x <= -groupWidth) x += groupWidth;
      if (x > 0) x -= groupWidth;

      const skew = clamp(-vel / 150, -6, 6);
      inner.style.transform = `translate3d(${x}px, 0, 0) skewX(${skew}deg)`;
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      resize.disconnect();
      visibility.disconnect();
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, [track.direction, track.speed]);

  return (
    <div className="marquee-row" style={vars({ "--row": row })}>
      <div className="marquee-row-label">
        <span className="marquee-row-number">{track.label}</span>
        <span className="marquee-row-category">{track.category}</span>
      </div>

      <div
        className="marquee-container"
        ref={containerRef}
        aria-label={`${track.category} technologies`}
      >
        <div className="marquee-inner" ref={innerRef}>
          {[0, 1].map((copy) => (
            <div
              className="marquee-group"
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {track.skills.map((skill, index) => (
                <span
                  className={`marquee-skill ${index % 4 === 0 ? "marquee-skill-accent" : ""}`}
                  key={`${copy}-${skill}`}
                  style={vars({ "--i": index })}
                >
                  <span className="marquee-skill-dot" aria-hidden="true" />
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Marque() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  /* Plays the entrance sequence once, when the section scrolls into view */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`marquee-strip${inView ? " in-view" : ""}`}
      aria-label="Technologies and development skills"
    >
      <div className="marquee-intro">
        <div className="marquee-heading">
          <span className="marquee-eyebrow">
            <span className="marquee-heading-dot" />
            THE TOOLKIT
          </span>

          <h2>
            <span className="line">
              <span className="line-inner" style={vars({ "--d": "0.15s" })}>
                Tools for turning
              </span>
            </span>
            <span className="line">
              <span
                className="line-inner marquee-accent-line"
                style={vars({ "--d": "0.3s" })}
              >
                ideas into reality.
              </span>
            </span>
          </h2>
        </div>

        <p className="marquee-description">
          A growing collection of technologies I use to design, develop, and
          build intelligent applications.
        </p>

        <span className="marquee-index" aria-hidden="true">
          01 — 02
        </span>
      </div>

      <div className="marquee-tracks">
        {skillTracks.map((track, row) => (
          <SkillTrack track={track} row={row} key={track.label} />
        ))}
      </div>

      <div className="marquee-footer">
        <span className="marquee-footer-line" />
        <p>
          ALWAYS LEARNING <span>·</span> ALWAYS BUILDING
        </p>
        <span className="marquee-footer-line" />
      </div>
    </section>
  );
}

export default Marque;