
import { motion } from "framer-motion";
import AboutImg from "../assets/about.png";

interface Expertise {
  title: string;
  description: string;
}

const expertise: Expertise[] = [
  {
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, responsive interfaces",
  },
  {
    title: "Backend Development",
    description: "Node.js, Express.js, FastAPI, REST APIs",
  },
  {
    title: "AI & LLM Applications",
    description: "LangChain, LangGraph, LLM integrations, MCP",
  },
  {
    title: "Database & Storage",
    description: "MongoDB, PostgreSQL, SQL, Redis",
  },
  {
    title: "Cloud",
    description: "Docker, GitHub Actions, AWS S3, AWS EC2",
  },
  {
    title: "Authentication & APIs",
    description: "JWT, OAuth, API design and secure integrations",
  },
];

const expertiseContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

const expertiseItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-shell">
        {/* Section intro */}
        <motion.div
          className="about-topline"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-eyebrow">
            <span className="about-eyebrow-dot" />
            A little about me
          </span>

          <span className="about-index">03 / THE DEVELOPER</span>
        </motion.div>

        {/* Main introduction */}
        <div className="about-hero">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <p className="about-kicker">
              FULL STACK DEVELOPER <span>×</span> AI EXPLORER
            </p>

            <h2 className="about-title">
              I build for the
              <br />
              <span className="about-title-accent">
                curious minds.
              </span>
            </h2>

            <p className="about-intro">
              I’m a developer who enjoys turning ideas into useful digital
              products — from thoughtful interfaces to backend systems and
              AI-powered experiences.
            </p>

            <p className="about-description">
              I work with modern web technologies to build complete
              applications, solve practical problems, and understand how each
              layer works together. Lately, I’ve been exploring LLM
              applications, agentic workflows, and ways to make AI genuinely
              useful in real-world products.
            </p>

            <div className="about-signature">
              <span className="about-signature-line" />
              <span>Learning by building, growing with every project.</span>
            </div>

            <div className="about-focus">
              <div className="about-focus-item">
                <span className="about-focus-number">01</span>
                <div>
                  <strong>Build</strong>
                  <span>Useful products</span>
                </div>
              </div>

              <div className="about-focus-item">
                <span className="about-focus-number">02</span>
                <div>
                  <strong>Explore</strong>
                  <span>Emerging AI tools</span>
                </div>
              </div>

              <div className="about-focus-item">
                <span className="about-focus-number">03</span>
                <div>
                  <strong>Improve</strong>
                  <span>Through practice</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Profile visual */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="about-visual-top">
              <span>BASED IN INDIA</span>
              <span className="about-visual-cross">✳</span>
            </div>

            <div className="about-portrait-frame">
              <span className="about-portrait-outline" />

              <div className="about-portrait">
                <img
                  src={AboutImg}
                  alt="Portrait of Madesh Mohan, full stack developer"
                  loading="lazy"
                />
              </div>

              <span className="about-portrait-index">MM.</span>

              <div className="about-availability">
                <span className="about-availability-dot" />
                <div>
                  <strong>Open to opportunities</strong>
                  <span>Software Development · AI</span>
                </div>
                <span className="about-availability-arrow">↗</span>
              </div>
            </div>

            <div className="about-visual-caption">
              <span>Madesh Mohan</span>
              <span>Developer / Problem Solver</span>
            </div>

            <div className="about-stamp" aria-hidden="true">
              <span>CODE</span>
              <span className="about-stamp-star">✳</span>
              <span>CREATE</span>
              <span className="about-stamp-star">✳</span>
              <span>REPEAT</span>
            </div>
          </motion.div>
        </div>

        {/* Expertise section */}
        <div className="about-expertise">
          <div className="about-expertise-header">
            <div>
              <span className="about-section-label">THE TOOLKIT / 01</span>
              <h3>
                Things I work <em>with.</em>
              </h3>
            </div>

            <p>
              A growing set of tools for building full-stack applications
              and exploring intelligent software.
            </p>
          </div>

          <motion.div
            className="expertise-grid"
            variants={expertiseContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {expertise.map((item, index) => (
              <motion.article
                key={item.title}
                className="expertise-card"
                variants={expertiseItem}
                whileHover={{ y: -5 }}
              >
                <div className="expertise-card-top">
                  <span className="expertise-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="expertise-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>

                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <span className="expertise-card-line" />
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* Closing statement */}
        <motion.div
          className="about-footer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-footer-symbol">✳</span>
          <p>
            Still curious.
            <br />
            <em>Still becoming.</em>
          </p>
          <span className="about-footer-note">
            THE NEXT IDEA IS ALWAYS IN PROGRESS.
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
