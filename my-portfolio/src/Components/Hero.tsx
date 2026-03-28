import portfolioImg from "../assets/portfolio-img.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="left">
          <p className="subtitle">Full Stack Developer (MERN)</p>
          <h1 className="title">
            Crafting clean <br />
            and modern <br />
            web experiences.
          </h1>
          <p className="description">
            I develop full stack web applications using the MERN stack, focusing
            on performance, clean code, and seamless user experiences.
          </p>
          <div className="actions">
            <a href="#works" className="primaryBtn">
              View Work
            </a>
            <a href="#contact" className="secondaryBtn">
              Contact Me
            </a>
          </div>
        </div>
        <div className="right">
          <div className="imageWrapper">
            <img src={portfolioImg} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
