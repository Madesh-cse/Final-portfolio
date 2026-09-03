
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: "500+", label: "Hours of Coding" },
  { value: "1", label: "Hackathon Participated" },
  { value: "7", label: "Projects on GitHub" },
  { value: "1", label: "Published Article" },
];

function Status() {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const duration = 1800;
    const startTime = performance.now();

    let animationFrame: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out animation
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((stat) => {
          const target = parseInt(stat.value, 10);
          return Math.floor(target * easeOut);
        })
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCounts(stats.map((stat) => parseInt(stat.value, 10)));
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="stats-section" aria-label="Developer statistics">
      <div className="stats-header">
        <span className="stats-index">04 — Numbers</span>
        <span className="stats-line" />
        <span className="stats-caption">A few things I've built</span>
      </div>

      <motion.div
        className="stats-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {stats.map((stat, index) => (
          <motion.div
            className="stat-cell"
            key={stat.label}
            variants={{
              hidden: {
                opacity: 0,
                y: 35,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: "easeOut",
                },
              },
            }}
          >
            <div className="stat-top">
              <span className="stat-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="stat-arrow">↗</span>
            </div>

            <span className="stat-big">
              {counts[index]}
              {stat.value.includes("+") && <sup>+</sup>}
            </span>

            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Status;
