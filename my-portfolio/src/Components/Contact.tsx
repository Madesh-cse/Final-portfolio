
import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  message: "",
};

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const listReveal = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

function Contact() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [form, setForm] = useState<FormData>(initialForm);

  const closeModal = () => {
    if (loading) return;
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !loading) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, loading]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (status) {
      setStatus("");
      setStatusType("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (loading) return;

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      setStatusType("error");
      setStatus("Please complete all fields.");
      return;
    }

    try {
      setLoading(true);
      setStatus("");
      setStatusType("");

      await emailjs.send(
        "service_q0o6sfa",
        "template_ri68xjk",
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          message: form.message.trim(),
        },
        "FZlueMMZ_K6xpBCHy"
      );

      setStatusType("success");
      setStatus("Thanks for reaching out. Your message has been sent.");
      setForm(initialForm);
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setStatusType("error");
      setStatus("Unable to send your message. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-section-top">
            <span className="contact-section-label">
              <span className="contact-label-dot" />
              06 — Get in touch
            </span>
            <span className="contact-top-note">GOOD THINGS START WITH A HELLO.</span>
          </div>

          <div className="contact-layout">
            {/* Introduction */}
            <motion.div
              className="contact-intro"
              variants={listReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.p className="contact-kicker" variants={reveal}>
                HAVE A PROJECT IN MIND?
              </motion.p>

              <motion.h2 className="contact-title" variants={reveal}>
                Let&apos;s build
                <br />
                something <em>meaningful.</em>
              </motion.h2>

              <motion.p className="contact-description" variants={reveal}>
                Whether you have a project idea, an opportunity, or simply want
                to talk about web development and AI, I&apos;d be glad to hear
                from you.
              </motion.p>

              <motion.button
                type="button"
                className="contact-primary-button"
                onClick={() => {
                  setStatus("");
                  setStatusType("");
                  setOpen(true);
                }}
                variants={reveal}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Start a conversation</span>
                <span className="contact-button-arrow" aria-hidden="true">
                  ↗
                </span>
              </motion.button>

              <motion.div className="contact-availability" variants={reveal}>
                <span className="contact-status-dot" />
                <span>Open to software development and AI opportunities</span>
              </motion.div>
            </motion.div>

            {/* Contact details */}
            <motion.div
              className="contact-details"
              variants={listReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div className="contact-details-heading" variants={reveal}>
                <span>CONTACT DETAILS</span>
                <span>01 — 03</span>
              </motion.div>

              <motion.a
                className="contact-detail-row"
                href="mailto:madesh10cse@gmail.com"
                variants={reveal}
              >
                <span className="contact-detail-number">01</span>
                <span className="contact-detail-main">
                  <span className="contact-detail-label">Email</span>
                  <span className="contact-detail-value">
                    madesh10cse@gmail.com
                  </span>
                </span>
                <span className="contact-detail-arrow" aria-hidden="true">
                  ↗
                </span>
              </motion.a>

              <motion.div className="contact-detail-row" variants={reveal}>
                <span className="contact-detail-number">02</span>
                <span className="contact-detail-main">
                  <span className="contact-detail-label">Location</span>
                  <span className="contact-detail-value">Madurai, India</span>
                </span>
                <span className="contact-detail-symbol" aria-hidden="true">
                  +
                </span>
              </motion.div>

              <motion.div className="contact-detail-row" variants={reveal}>
                <span className="contact-detail-number">03</span>
                <span className="contact-detail-main">
                  <span className="contact-detail-label">Currently interested in</span>
                  <span className="contact-detail-value">
                    Full Stack Development · AI Engineering
                  </span>
                </span>
                <span className="contact-detail-symbol" aria-hidden="true">
                  +
                </span>
              </motion.div>

              <motion.div className="contact-note" variants={reveal}>
                <span className="contact-note-mark">“</span>
                <p>
                  Great products begin with good conversations. Let&apos;s see
                  what we can create together.
                </p>
              </motion.div>
            </motion.div>
          </div>

          <div className="contact-bottom-line">
            <span>Always learning. Always building.</span>
            <span>© {new Date().getFullYear()} Madesh Mohan</span>
          </div>
        </div>
      </section>

      {/* Contact form modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="contact-modal-backdrop"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeModal();
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="contact-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              aria-describedby="contact-modal-description"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="contact-modal-top">
                <span>06 / CONTACT FORM</span>
                <button
                  type="button"
                  className="contact-modal-close"
                  onClick={closeModal}
                  disabled={loading}
                  aria-label="Close contact form"
                >
                  ×
                </button>
              </div>

              <div className="contact-modal-heading">
                <h3 id="contact-modal-title">
                  Tell me about
                  <br />
                  <em>your idea.</em>
                </h3>
                <p id="contact-modal-description">
                  Share a few details below and I&apos;ll get back to you by email.
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-field">
                  <label htmlFor="contact-name">01 — Your name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    maxLength={100}
                    required
                  />
                </div>

                <div className="contact-form-field">
                  <label htmlFor="contact-email">02 — Email address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    maxLength={254}
                    required
                  />
                </div>

                <div className="contact-form-field">
                  <label htmlFor="contact-message">03 — Your message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="What would you like to build?"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    maxLength={5000}
                    required
                  />
                </div>

                <button
                  className="contact-form-submit"
                  type="submit"
                  disabled={loading}
                >
                  <span>{loading ? "Sending message..." : "Send message"}</span>
                  <span aria-hidden="true">{loading ? "…" : "↗"}</span>
                </button>

                <AnimatePresence mode="wait">
                  {status && (
                    <motion.p
                      key={status}
                      className={`contact-form-status ${statusType}`}
                      role="status"
                      aria-live="polite"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                    >
                      {status}
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Contact;
