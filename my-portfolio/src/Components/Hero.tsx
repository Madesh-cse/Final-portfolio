
import { useEffect, useState } from "react";
import type { CSSProperties, MouseEvent } from "react";
import portfolioImg from "../assets/portfolio-img.png";

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Learning AI Engineering",
];

const TECH_STACK = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "AI / LLM",
];

const delay = (seconds: number): CSSProperties =>
  ({ "--d": `${seconds}s` }) as CSSProperties;

function useTypewriter(
  words: string[],
  speed = 70,
  hold = 1600
) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index] ?? words[0];
    let timer: number;

    if (!word) return;

    if (!deleting && text === word) {
      timer = window.setTimeout(
        () => setDeleting(true),
        hold
      );
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((current) => (current + 1) % words.length);
      return;
    } else {
      timer = window.setTimeout(
        () => {
          setText(
            deleting
              ? word.slice(0, text.length - 1)
              : word.slice(0, text.length + 1)
          );
        },
        deleting ? speed / 2 : speed
      );
    }

    return () => window.clearTimeout(timer);
  }, [text, deleting, index, words, speed, hold]);

  return text;
}

function CountUp({
  to,
  duration = 1400,
  startAfter = 1000,
}: {
  to: number;
  duration?: number;
  startAfter?: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }

    let frame = 0;
    let startTime: number | null = null;

    const timer = window.setTimeout(() => {
      const tick = (now: number) => {
        if (startTime === null) startTime = now;

        const progress = Math.min(
          (now - startTime) / duration,
          1
        );

        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(to * eased));

        if (progress < 1) {
          frame = window.requestAnimationFrame(tick);
        }
      };

      frame = window.requestAnimationFrame(tick);
    }, startAfter);

    return () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(frame);
    };
  }, [to, duration, startAfter]);

  return <>{value}+</>;
}

function Hero() {
  const role = useTypewriter(ROLES);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(hover: none)").matches) return;

    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();

    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    element.style.setProperty("--px", px.toFixed(3));
    element.style.setProperty("--py", py.toFixed(3));
  };

  const handleLeave = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--px", "0");
    event.currentTarget.style.setProperty("--py", "0");
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="gradient gradient-1" />
        <div className="gradient gradient-2" />
        <div className="hero-glow" />
      </div>

      <div className="hero-container">
        {/* LEFT: INTRODUCTION */}
        <div className="left">
          <div className="availability">
            <span className="status-dot" />
            <span>Available for opportunities</span>
          </div>

          <p className="subtitle">
            <span className="role-text">{role}</span>
            <span className="caret" aria-hidden="true" />
            <span className="sr-only">
              Full Stack Developer and AI Engineering learner
            </span>
          </p>

          <h1 className="title">
            <span className="line">
              <span className="line-inner" style={delay(0.2)}>
                Building digital
              </span>
            </span>

            <span className="line">
              <span className="line-inner" style={delay(0.35)}>
                <span className="accent">experiences</span> that
              </span>
            </span>

            <span className="line">
              <span className="line-inner" style={delay(0.5)}>
                make an impact.
              </span>
            </span>
          </h1>

          <p className="description">
            I’m Madesh, a Full Stack Developer specializing in
            <strong> MERN, TypeScript, Next.js, Python, and AI.</strong>{" "}
            I build scalable web applications with clean architecture,
            modern interfaces, and intelligent AI-powered features.
          </p>

          <div className="actions">
            <a href="#works" className="primaryBtn">
              <span>View My Work</span>
              <span className="button-arrow" aria-hidden="true">
                ↗
              </span>
            </a>

            <a href="#contact" className="secondaryBtn">
              Let’s Talk
            </a>
          </div>

          <div className="tech-stack">
            <span className="section-label">Tech I work with</span>

            <div className="tech-list">
              {TECH_STACK.map((tech, index) => (
                <span
                  className="tech-item"
                  key={tech}
                  style={delay(0.8 + index * 0.08)}
                >
                  <span className="tech-dot" aria-hidden="true" />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="stats">
            <div className="stat">
              <h3><CountUp to={10} /></h3>
              <p>Projects built</p>
            </div>

            <div className="stat">
              <h3><CountUp to={2} /></h3>
              <p>Years learning</p>
            </div>

            <div className="stat">
              <h3><CountUp to={15} /></h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>

        {/* RIGHT: INTERACTIVE PORTRAIT */}
        <div className="right">
          <div
            className="image-area"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
          >
            <div className="portrait-label portrait-label-top">
              <span className="label-index">01 /</span>
              <span>Creative developer</span>
            </div>

            <div className="image-ring image-ring-1" />
            <div className="image-ring image-ring-2" />
            <div className="image-ring image-ring-3" />

            <div className="portrait-orbit-dot orbit-dot-1" />
            <div className="portrait-orbit-dot orbit-dot-2" />
            <div className="portrait-orbit-dot orbit-dot-3" />

            <div className="tilt">
              <div className="portrait-backdrop" />
              <div className="imageWrapper">
                <img
                  src={portfolioImg}
                  alt="Madesh, Full Stack Developer"
                  fetchPriority="high"
                />
                <div className="portrait-overlay" />
              </div>
            </div>

            {/* FLOATING ARCHITECTURE CARD */}
            <div
              className="floating-card card-one"
              style={delay(0.9)}
            >
              <span className="card-icon icon-orange">↗</span>
              <div>
                <strong>Fast &amp; Scalable</strong>
                <small>Modern architecture</small>
              </div>
            </div>

            {/* FLOATING AI CARD */}
            <div
              className="floating-card card-two"
              style={delay(1.1)}
            >
              <span className="card-icon icon-purple">✳</span>
              <div>
                <strong>AI Powered</strong>
                <small>LLM applications</small>
              </div>
            </div>

            {/* CODE WINDOW */}
            <div className="code-card" style={delay(1.3)}>
              <div className="code-header">
                <span />
                <span />
                <span />
                <small>developer.ts</small>
              </div>

              <pre>
                <code>
                  <span className="code-keyword">const</span>{" "}
                  developer = {"{"}
                  {"\n"}  stack:{" "}
                  <span className="code-string">"MERN + AI"</span>,
                  {"\n"}  focus:{" "}
                  <span className="code-string">"Innovation"</span>
                  {"\n"}{"}"};
                </code>
              </pre>
            </div>

            <div className="portrait-caption">
              <span className="caption-line" />
              <span>Building ideas into reality</span>
            </div>

            <div className="orbit-note" aria-hidden="true">
              <span>DESIGN</span>
              <span>BUILD</span>
              <span>INNOVATE</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#works" className="scroll-cue" aria-label="Scroll to projects">
        <span className="scroll-line" />
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-arrow">↓</span>
      </a>

      <span className="hero-index" aria-hidden="true">
        PORTFOLIO — 2026
      </span>
    </section>
  );
}

export default Hero;
