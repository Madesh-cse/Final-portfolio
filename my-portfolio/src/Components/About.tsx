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
    title: "Cloud & DevOps",
    description: "Docker, GitHub Actions, AWS S3, AWS EC2",
  },
  {
    title: "Authentication & APIs",
    description: "JWT, OAuth, API design and secure integrations",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-layout">
        {/* =========================
            LEFT — IMAGE
        ========================= */}

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="about-image-wrapper">
            {/* Decorative Number */}
            <span className="about-number">03</span>

            {/* Image */}
            <div className="about-image">
              <img src={AboutImg} alt="Madesh Mohan - Full Stack Developer" />

              <div className="image-overlay" />
            </div>

            {/* Small Floating Label */}
            <motion.div
              className="about-floating-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              viewport={{ once: true }}
            >
              <span className="floating-dot" />

              <div>
                <strong>Open to work</strong>
                <small>Full Stack / AI Roles</small>
              </div>
            </motion.div>
          </div>

          {/* Caption */}
          <div className="about-caption">
            <span>Madesh Mohan — Developer</span>

            <span className="caption-location">Madurai, India</span>
          </div>
        </motion.div>

        {/* =========================
            RIGHT — CONTENT
        ========================= */}

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Label */}
          <div className="section-heading">
            <span className="section-index">03 — About</span>

            <span className="heading-line" />
          </div>

          {/* Heading */}
          <h2 className="about-title">
            Turning ideas into
            <br />
            <em>thoughtful digital</em>
            <br />
            experiences.
          </h2>

          {/* Intro */}
          <p className="about-intro">
            I'm a Full Stack Developer who enjoys building products at the
            intersection of <strong>web development and AI</strong>.
          </p>

          {/* Description */}
          <p className="about-description">
            I work across the frontend and backend to create scalable
            applications with clean architecture, intuitive interfaces, and
            reliable APIs. My current focus is expanding into AI-powered
            applications using modern LLM technologies and agentic workflows.
          </p>
          <div className="about-divider" />
          <div className="expertise-heading">
            <span>01</span>

            <h3>What I work with</h3>
          </div>
          <motion.div
            className="expertise-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                className="expertise-card"
                variants={itemVariants}
              >
                <div className="expertise-top">
                  <span className="expertise-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="expertise-arrow">↗</span>
                </div>

                <h4>{item.title}</h4>

                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="about-bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            viewport={{ once: true }}
          >
            <span className="bottom-line" />

            <p>
              Always learning. Always building.
              <br />
              Always looking for the next challenge.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
