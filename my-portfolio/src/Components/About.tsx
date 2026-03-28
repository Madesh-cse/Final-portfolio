import { motion } from "framer-motion";
import AboutImg from "../assets/about.png";

function About() {
  return (
    <section className="section" id="about">
      <div className="about-layout">

        {/* LEFT */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-image">
            <img src={AboutImg} alt="About Image" />
          </div>

          <div className="about-caption">
            <span>Madesh Mohan — MERN Developer</span>
            <span>Madurai, India</span>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="section-index">03 — About</span>

          <h2>
            Building scalable apps with <em>MERN Stack</em>
          </h2>

          <p>
            I'm a passionate MERN Stack Developer focused on building modern,
            scalable, and user-friendly web applications using MongoDB,
            Express.js, React, and Node.js.
          </p>

          <p>
            As a fresher, I continuously explore new technologies and apply my
            skills through real-world projects.
          </p>

          <div className="about-divider"></div>

          <ul className="expertise-list">
            {[
              "Frontend Development (React, TypeScript)",
              "Backend APIs (Node.js, Express.js)",
              "Database Management (MongoDB, SQL)",
              "REST API & Authentication",
              "Docker & Containerization",
              "Responsive Web Design",
              "Styling (SCSS / CSS Preprocessor)",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="expertise-item"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default About;