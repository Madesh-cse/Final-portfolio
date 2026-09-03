
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

const slideLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const slideRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

function Contact() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      setStatus("");

      await emailjs.send(
        "service_q0o6sfa",
        "template_ri68xjk",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "FZlueMMZ_K6xpBCHy"
      );

      setStatus("Message sent successfully.");
      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setOpen(false);
        setStatus("");
      }, 1600);
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact-wrap" id="contact">
        {/* Decorative background */}
        <div className="contact-bg-text" aria-hidden="true">
          CONTACT
        </div>

        <div className="contact-grid">
          {/* ================= LEFT ================= */}
          <motion.div
            className="contact-left"
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="contact-eyebrow" variants={fadeUp}>
              <span className="eyebrow-number">06</span>
              <span className="eyebrow-line" />
              <span>Let&apos;s Connect</span>
            </motion.div>

            <motion.h2 className="contact-title" variants={fadeUp}>
              Have an idea?
              <br />
              Let&apos;s make it
              <br />
              <em>happen.</em>
            </motion.h2>

            <motion.p className="contact-desc" variants={fadeUp}>
              I&apos;m always interested in hearing about new projects,
              creative ideas, and opportunities to build meaningful digital
              experiences.
            </motion.p>

            <motion.div className="contact-availability" variants={fadeUp}>
              <span className="availability-dot" />
              <span>Currently available for opportunities</span>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT ================= */}
          <motion.div
            className="contact-right"
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="contact-info-list"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div className="contact-info-item" variants={fadeUp}>
                <span className="contact-info-index">01</span>

                <div className="contact-info-content">
                  <span className="contact-info-label">Email</span>
                  <a
                    href="mailto:madesh10cse@gmail.com"
                    className="contact-info-value"
                  >
                    madesh10cse@gmail.com
                  </a>
                </div>

                <span className="contact-info-arrow">↗</span>
              </motion.div>

              <motion.div className="contact-info-item" variants={fadeUp}>
                <span className="contact-info-index">02</span>

                <div className="contact-info-content">
                  <span className="contact-info-label">Location</span>
                  <span className="contact-info-value">
                    Madurai, India
                  </span>
                </div>

                <span className="contact-info-arrow">↗</span>
              </motion.div>

              <motion.div className="contact-info-item" variants={fadeUp}>
                <span className="contact-info-index">03</span>

                <div className="contact-info-content">
                  <span className="contact-info-label">Availability</span>

                  <span className="contact-info-value availability-value">
                    <span className="mini-dot" />
                    Open to Work
                  </span>
                </div>

                <span className="contact-info-arrow">↗</span>
              </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.button
              className="contact-cta"
              onClick={() => setOpen(true)}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ x: 6 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Start a conversation</span>
              <span className="cta-arrow">↗</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom line */}
        <motion.div
          className="contact-footer-line"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span>Available for freelance &amp; full-time opportunities</span>
          <span>© {new Date().getFullYear()} Madesh Mohan</span>
        </motion.div>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="contact-modal-overlay"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="contact-modal"
              onClick={(e) => e.stopPropagation()}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
            >
              <button
                className="contact-close-btn"
                onClick={() => setOpen(false)}
                aria-label="Close contact form"
              >
                ×
              </button>

              <div className="modal-header">
                <span>06 — Contact</span>
                <h3>
                  Let&apos;s start
                  <br />
                  <em>something.</em>
                </h3>
                <p>
                  Tell me a little about your project and I&apos;ll get back
                  to you soon.
                </p>
              </div>

              <div className="contact-form">
                <div className="form-field">
                  <label htmlFor="name">01 — Name</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">02 — Email</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="message">03 — Message</label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  className="form-submit"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  <span>↗</span>
                </button>

                <AnimatePresence mode="wait">
                  {status && (
                    <motion.p
                      className={`status-msg ${
                        status.includes("successfully")
                          ? "success"
                          : "error"
                      }`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      {status}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Contact;

