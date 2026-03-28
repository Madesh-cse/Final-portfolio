import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
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
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus("❌ Please fill all fields");
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

      setStatus("✅ Message sent!");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => {
        setOpen(false);
        setStatus("");
      }, 1500);
    } catch (err) {
      setStatus("❌ Failed to send");
    } finally {
      setLoading(false);
    }
  };

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
          and user-friendly applications.
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
            { label: "Email", value: "madesh10cse@gmail.com" },
            { label: "Location", value: "Madurai, India" },
            { label: "Availability", value: "Open to Work" },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="contact-info-item"
              variants={fadeUp}
            >
              <span className="contact-info-label">{item.label}</span>
              <span className="contact-info-value">{item.value}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* 🔥 BUTTON → OPEN MODAL */}
        <motion.button
          className="btn-white"
          onClick={() => setOpen(true)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let’s Talk →
        </motion.button>
      </motion.div>

      {/* 🔥 MODAL */}
      {open && (
        <div className="contact-modal-overlay" onClick={() => setOpen(false)}>
          <motion.div
            className="contact-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <button className="contact-close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>

            <h3>Send Message</h3>

            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />

            <button onClick={handleSubmit} disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="status-msg">{status}</p>}
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Contact;

// service id: service_q0o6sfa
// template id: template_utcxqkc
// public key: FZlueMMZ_K6xpBCHy