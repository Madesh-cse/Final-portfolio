import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
    >
      {/* COPYRIGHT */}
      <motion.span className="footer-copy" variants={fadeUp}>
        © {new Date().getFullYear()} Madesh Mohan. Built with MERN Stack.
      </motion.span>

      {/* LINKS */}
      <motion.ul className="footer-links" variants={container}>
        {[
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/madesh-m-36130627a/",
          },
          {
            name: "GitHub",
            link: "https://github.com/Madesh-cse",
          },
          { name: "Portfolio", link: "#" },
          { name: "Resume", link: "#" },
        ].map((item, index) => (
          <motion.li key={index} variants={fadeUp}>
            <motion.a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.footer>
  );
}

export default Footer;