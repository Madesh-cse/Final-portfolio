import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import udemyImg1 from "../assets/udemy-img-1.png";
import udemyImg2 from "../assets/udemy-img-2.png";
import udemyImg3 from "../assets/udemy-img-3.png";
import udemyImg4 from "../assets/udemy-img-4.png";
import udemyImg5 from "../assets/udemy-img-5.png";
import udemyImg6 from "../assets/udemy-img-6.png";
import Elearning from "../assets/Video/E-Learning.mp4";

// PMS IMG
import pmsImg1 from "../assets/Screenshot 2026-03-26 071435.png";
import pmsImg2 from "../assets/Screenshot 2026-03-26 071547.png";
import pmsImg3 from "../assets/Screenshot 2026-03-26 072158.png";
import pmsImg4 from "../assets/Screenshot 2026-03-26 072253.png";
import pmsImg5 from "../assets/pms-img-5.png";
import pmsImg6 from "../assets/Screenshot 2026-03-26 072330.png";
import pmsImg7 from "../assets/Screenshot 2026-03-26 072414.png";
import pmsImg8 from "../assets/Screenshot 2026-03-26 072610.png";
import pmsImg9 from "../assets/Screenshot 2026-03-26 072744.png";
import pmsVideo from "../assets/Video/PMW.mp4";

//CH IMG
import CH1 from "../assets/CH (1).png";
import CH2 from "../assets/CH 2.png";
import CH3 from "../assets/CH 3.png";
import CH4 from "../assets/CH 4.png";
import CHVideo from "../assets/Video/Video Project.mp4";

// Food application
import fawImg from "../assets/faw-img-1.png";
import fawImg1 from "../assets/faw-img-2.png";
import fawImg2 from "../assets/faw-img-3.png";
import fawImg3 from "../assets/faw-img-4.png";
import fawImg4 from "../assets/faw-img-5.png";
import fawImg5 from "../assets/faw-img-6.png";
import fawImg6 from "../assets/faw-img-7.png";
import FoodDemo from "../assets/Video/Food-order.mp4";

type Project = {
  idx: string;
  title: string;
  sub: string;
  category: string;
  year: string;
  techStack: string[];
  description: string[];
  images: string[];
  video: string;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    idx: "01",
    title: "AI Project Management System",
    sub: "Agent-based intelligent system",
    category: "AI + Full Stack",
    year: "2026",
    techStack: ["React", "LangChain", "Node", "MongoDB"],
    description: [
      "AI-powered project assistant",
      "LangChain & LangGraph integration",
      "Predictive workload analysis",
      "GitHub OAuth workflow",
    ],
    images: [
      pmsImg1,
      pmsImg2,
      pmsImg3,
      pmsImg4,
      pmsImg5,
      pmsImg6,
      pmsImg7,
      pmsImg8,
      pmsImg9,
    ],
    video: pmsVideo,
    github: "https://github.com/yourrepo/ai-project",
    live: "#",
  },
  {
    idx: "02",
    title: "E-Learning Web App (Udemy-Like Platform)",
    sub: "Full-stack scalable learning platform",
    category: "Full Stack",
    year: "2025",
    techStack: ["React", "Node", "MongoDB", "Stripe", "JWT"],
    description: [
      "Built scalable e-learning platform",
      "JWT authentication & role-based access",
      "Stripe payment integration",
      "Optimized backend performance",
    ],
    images: [udemyImg1, udemyImg2, udemyImg3, udemyImg4, udemyImg5, udemyImg6],
    video: Elearning,
    github: "https://github.com/yourrepo/elearning",
    live: "#",
  },
  {
    idx: "03",
    title: "AI Note Taker with Contextual Highlights",
    sub: "AI-powered notes + collaboration",
    category: "AI App",
    year: "2025",
    techStack: ["React", "TypeScript", "Node", "MongoDB", "NLP", "WebRTC"],
    description: [
      "Built AI-powered note-taking system",
      "Integrated NLP summarization model",
      "Enabled real-time collaboration",
      "Developed scalable backend APIs",
    ],
    images: [CH1, CH2, CH3, CH4],
    video: CHVideo,
    github: "https://github.com/yourrepo/notes",
    live: "#",
  },
  {
    idx: "04",
    title: "Online Food Ordering System",
    sub: "Cross-device ordering platform",
    category: "Frontend + Firebase",
    year: "2024",
    techStack: ["React", "Redux", "Firebase"],
    description: [
      "Built responsive food ordering platform",
      "Used Redux for state management",
      "Integrated Firebase authentication",
      "Optimized UI performance",
    ],
    images: [fawImg, fawImg1, fawImg2, fawImg3, fawImg4, fawImg5, fawImg6],
    video: FoodDemo,
    github: "https://github.com/Madesh-cse/online-food-order-react-app",
    live: "https://online-food-order-react-app-cfp4.vercel.app/",
  },
];

function Project() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState<"demo" | "images">("demo");
  const [thumbStart, setThumbStart] = useState(0);

  const VISIBLE_THUMBS = 4;

  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  const nextThumbs = () => {
    if (selectedProject) {
      setThumbStart((prev) =>
        Math.min(prev + 1, selectedProject.images.length - VISIBLE_THUMBS),
      );
    }
  };

  const prevThumbs = () => {
    setThumbStart((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="section">
      <div id="works">
        <h2 className="section-title">Projects</h2>
        <div className="works-list">
          {projects.map((p) => (
            <motion.div
              key={p.idx}
              className="work-row"
              onClick={() => {
                setSelectedProject(p);
                setActiveImg(0);
                setActiveTab("demo");
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="work-idx">{p.idx}</div>

              <div>
                <div className="work-title">{p.title}</div>
                <div className="work-sub">{p.sub}</div>
              </div>

              <div>{p.category}</div>
              <div>{p.year}</div>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                className="modal-backdrop"
                onClick={() => setSelectedProject(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <motion.div
                className="project-modal"
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                transition={{ duration: 0.4 }}
              >
                <button
                  className="close-btn"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </button>
                <div className="modal-tabs">
                  <button
                    className={activeTab === "demo" ? "active" : ""}
                    onClick={() => setActiveTab("demo")}
                  >
                    Demo
                  </button>
                  <button
                    className={activeTab === "images" ? "active" : ""}
                    onClick={() => setActiveTab("images")}
                  >
                    Screenshots
                  </button>
                </div>
                <AnimatePresence mode="wait">
                  {activeTab === "demo" && (
                    <motion.div
                      key="demo"
                      className="video-wrapper"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                    >
                      <video controls autoPlay muted loop>
                        <source src={selectedProject.video} type="video/mp4" />
                      </video>
                    </motion.div>
                  )}

                  {activeTab === "images" && (
                    <motion.div
                      key="images"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                    >
                      <div className="main-image">
                        <img src={selectedProject.images[activeImg]} alt="" />
                      </div>
                      <div className="thumb-carousel">
                        {/* LEFT BUTTON */}
                        <button
                          className="arrow left"
                          onClick={prevThumbs}
                          disabled={thumbStart === 0}
                        >
                          <FaArrowLeft />
                        </button>

                        <div className="thumb-window">
                          <motion.div
                            className="thumb-track"
                            animate={{
                              x: `-${thumbStart * 110}px`,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 120,
                              damping: 18,
                            }}
                          >
                            {selectedProject.images.map((img, i) => (
                              <motion.div
                                key={i}
                                className={`thumb ${i === activeImg ? "active" : ""}`}
                                onClick={() => setActiveImg(i)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <img src={img} />
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>
                        <button
                          className="arrow right"
                          onClick={nextThumbs}
                          disabled={
                            thumbStart >=
                            selectedProject.images.length - VISIBLE_THUMBS
                          }
                        >
                          <FaArrowRight />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {selectedProject.title}
                </motion.h3>

                <div className="meta">
                  {selectedProject.category} • {selectedProject.year}
                </div>

                <div className="tech">
                  {selectedProject.techStack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                <div className="desc">
                  {selectedProject.description.map((d, i) => (
                    <p key={i}>• {d}</p>
                  ))}
                </div>
                <div className="links">
                  <a href={selectedProject.github} target="_blank">
                    GitHub
                  </a>
                  <a href={selectedProject.live} target="_blank">
                    Live
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Project;
