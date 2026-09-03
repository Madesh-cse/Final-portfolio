
import portfolioImg from "../assets/portfolio-img.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <span className="gradient gradient-1"></span>
        <span className="gradient gradient-2"></span>
      </div>

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="left">
          {/* Availability Badge */}
          <div className="availability">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <p className="subtitle">
            Full Stack Developer <span>•</span> AI Engineer
          </p>

          <h1 className="title">
            Building digital
            <br />
            <span>experiences</span> that
            <br />
            make an impact.
          </h1>

          <p className="description">
            I’m Madesh, a Full Stack Developer specializing in
            <strong> MERN, TypeScript, Next.js, Python, and AI</strong>.
            I build scalable web applications with clean architecture,
            modern interfaces, and intelligent AI-powered features.
          </p>

          {/* CTA */}
          <div className="actions">
            <a href="#works" className="primaryBtn">
              View My Work
              <span>↗</span>
            </a>

            <a href="#contact" className="secondaryBtn">
              Let's Talk
            </a>
          </div>

          {/* Tech Stack */}
          <div className="tech-stack">
            <span>Tech I work with</span>

            <div className="tech-list">
              <div className="tech-item">React</div>
              <div className="tech-item">Next.js</div>
              <div className="tech-item">Node.js</div>
              <div className="tech-item">Python</div>
              <div className="tech-item">AI / LLM</div>
            </div>
          </div>

          {/* Stats */}
          <div className="stats">
            <div className="stat">
              <h3>10+</h3>
              <p>Projects Built</p>
            </div>

            <div className="stat">
              <h3>2+</h3>
              <p>Years Learning</p>
            </div>

            <div className="stat">
              <h3>15+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="right">
          <div className="image-area">
            <div className="image-ring"></div>

            <div className="imageWrapper">
              <img
                src={portfolioImg}
                alt="Madesh - Full Stack Developer"
              />
            </div>

            {/* Floating Card 1 */}
            <div className="floating-card card-one">
              <span className="card-icon">⚡</span>

              <div>
                <strong>Fast & Scalable</strong>
                <small>Modern architecture</small>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="floating-card card-two">
              <span className="card-icon">🤖</span>

              <div>
                <strong>AI Powered</strong>
                <small>LLM & AI Applications</small>
              </div>
            </div>

            {/* Code Decoration */}
            <div className="code-card">
              <span>const</span> developer = {"{"}
              <br />
              &nbsp;&nbsp;stack: <b>"MERN + AI"</b>,
              <br />
              &nbsp;&nbsp;focus: <b>"Innovation"</b>
              <br />
              {"}"};
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
