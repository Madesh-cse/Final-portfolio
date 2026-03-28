import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function BackToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / height) * 100;

      setScrollProgress(progress);
      setShow(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          className="progress-btn"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 40 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg width="50" height="50">
            {/* Background circle */}
            <circle
              cx="25"
              cy="25"
              r={radius}
              stroke="#e0e0e0"
              strokeWidth="3"
              fill="none"
            />

            {/* Progress circle */}
            <circle
              cx="25"
              cy="25"
              r={radius}
              stroke="#000"
              strokeWidth="3"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{
                transition: "stroke-dashoffset 0.2s ease",
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
              }}
            />
          </svg>

          <span className="progress-arrow">↑</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;