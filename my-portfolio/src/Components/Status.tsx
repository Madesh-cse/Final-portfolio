import { useEffect, useState } from "react";

type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: "500+", label: "Hours of Coding" },
  { value: "1", label: "Hackathons Participated" },
  { value: "7", label: "Projects on GitHub" },
  { value: "1", label: "Published Article" },
];

function Status() {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  useEffect(() => {
    const duration = 2500; 
    const frameRate = 30; 
    const totalFrames = duration / frameRate;

    const intervals = stats.map((stat, index) => {
      const target = parseInt(stat.value);
      let frame = 0;

      return setInterval(() => {
        frame++;

        const progress = frame / totalFrames;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        const current = Math.floor(target * easeOut);

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = current;
          return updated;
        });

        if (frame >= totalFrames) {
          clearInterval(intervals[index]);

          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = target;
            return updated;
          });
        }
      }, frameRate);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="stats-row">
      {stats.map((stat, index) => (
        <div className="stat-cell" key={index}>
          <span className="stat-big">
            {counts[index]}
            {stat.value.includes("+") && <sup>+</sup>}
          </span>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default Status;
