import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

function Contact() {
  return (
    <section className="contact-wrap" id="contact">
      
      {/* LEFT */}
      <motion.div
        className="contact-left"
        variants={slideLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.span className="contact-eyebrow" variants={fadeUp}>
          06 — Let's Connect
        </motion.span>

        <motion.h2 className="contact-title" variants={fadeUp}>
          Let’s build scalable <em>web solutions.</em>
        </motion.h2>

        <motion.p className="contact-desc" variants={fadeUp}>
          I’m a MERN stack developer focused on building scalable, performant,
          and user-friendly applications. With experience in React,
          TypeScript, Node.js, and MongoDB, I enjoy solving real-world problems.
        </motion.p>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        className="contact-right"
        variants={slideRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.ul
          className="contact-info-list"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { label: "Email", value: "madesh10cse@gmail.com", link: true },
            { label: "Location", value: "Madurai, India" },
            {
              label: "Availability",
              value: "Open to Internships & Full-time Roles",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="contact-info-item"
              variants={fadeUp}
            >
              <span className="contact-info-label">{item.label}</span>

              {item.link ? (
                <a
                  href="mailto:madesh10cse@gmail.com"
                  className="contact-info-value"
                >
                  {item.value}
                </a>
              ) : (
                <span className="contact-info-value">{item.value}</span>
              )}
            </motion.li>
          ))}
        </motion.ul>

        {/* BUTTON */}
        <motion.a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=madesh10cse@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="btn-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Let’s Talk →
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Contact;