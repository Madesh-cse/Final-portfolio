
function Marque() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express",
    "SQL",
    "MongoDB",
    "Python",
    "Redux",
    "SCSS",
    "Git",
    "GitHub",
    "GitHub Actions",
    "AWS S3",
    "AWS EC2",
    "Postman",
    "Responsive Web Design",
  ];

  return (
    <section className="marquee-strip">
      <div className="marquee-container">
        <div className="marquee-inner">
          {/* First set */}
          <div className="marquee-group">
            {skills.map((skill, index) => (
              <span
                key={`first-${skill}`}
                className={index % 3 === 0 ? "accent" : ""}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Duplicate set */}
          <div className="marquee-group" aria-hidden="true">
            {skills.map((skill, index) => (
              <span
                key={`second-${skill}`}
                className={index % 3 === 0 ? "accent" : ""}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marque;

