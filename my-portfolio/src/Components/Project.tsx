import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import udemyImg1 from "../assets/udemy-img-1.png";
import udemyImg2 from "../assets/udemy-img-2.png";
import udemyImg3 from "../assets/udemy-img-3.png";
import udemyImg4 from "../assets/udemy-img-4.png";
import udemyImg5 from "../assets/udemy-img-5.png";
import udemyImg6 from "../assets/udemy-img-6.png";
import Elearning from "../assets/Video/E-Learning.mp4";

import chatAiImg1 from "../assets/chat-ai-1.jpeg";
import chatAiImg2 from "../assets/chat-ai-2.jpeg";
import chatAiImg3 from "../assets/chat-ai-3.jpeg";
import chatAiImg4 from "../assets/chat-ai-4.jpeg";
import chatAiImg5 from "../assets/chat-ai-5.jpeg";
import chatAiImg6 from "../assets/chat-ai-6.jpeg";
import chatAiImg7 from "../assets/chat-ai-7.jpeg";
import chatAiImg8 from "../assets/chat-ai-8.jpeg";
import chatAiImg9 from "../assets/chat-ai-9.jpeg";
import chatAiImg10 from "../assets/chat-ai-10.jpeg";
import chatAiImg11 from "../assets/chat-ai-11.jpeg";
import chatAiImg12 from "../assets/chat-ai-12.jpeg";
import chatAiImg13 from "../assets/chat-ai-13.jpeg";
import chatAiImg14 from "../assets/chat-ai-14.jpeg";
import chatAiImg15 from "../assets/chat-ai-15.jpeg";
import chatAiImg16 from "../assets/chat-ai-16.jpeg";

// PMS
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

// Contextual Highlights
import CH1 from "../assets/CH (1).png";
import CH2 from "../assets/CH 2.png";
import CH3 from "../assets/CH 3.png";
import CH4 from "../assets/CH 4.png";
import CHVideo from "../assets/Video/Video Project.mp4";

// Food
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
    title: "AI Chat Assistant",
    sub: "Agentic LLM with tool integration",
    category: "AI + Full Stack",
    year: "2026",
    techStack: ["Next.js", "FastAPI", "LangChain", "PostgreSQL"],
    description: [
      "Agentic LLM workflows via LangGraph",
      "Real-time token-level response streaming",
      "8+ external tool integrations",
      "Redis caching & persistent chat history",
    ],
    images: [
      chatAiImg1,
      chatAiImg2,
      chatAiImg3,
      chatAiImg4,
      chatAiImg5,
      chatAiImg6,
      chatAiImg7,
      chatAiImg8,
      chatAiImg9,
      chatAiImg10,
      chatAiImg11,
      chatAiImg12,
      chatAiImg13,
      chatAiImg14,
      chatAiImg15,
      chatAiImg16,
    ],
    video: pmsVideo,
    github: "https://github.com/Madesh-cse/AI-Chat-Assistant-Backend",
    live: "#",
  },
  {
    idx: "03",
    title: "E-Learning Web App",
    sub: "Udemy-like full-stack learning platform",
    category: "Full Stack",
    year: "2025",
    techStack: ["React", "Node", "MongoDB", "Stripe", "JWT"],
    description: [
      "Built a scalable e-learning platform",
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
    idx: "04",
    title: "AI Note Taker",
    sub: "AI-powered notes + collaboration",
    category: "AI Application",
    year: "2025",
    techStack: ["React", "TypeScript", "Node", "MongoDB", "NLP", "WebRTC"],
    description: [
      "Built an AI-powered note-taking system",
      "Integrated NLP summarization",
      "Enabled real-time collaboration",
      "Developed scalable backend APIs",
    ],
    images: [CH1, CH2, CH3, CH4],
    video: CHVideo,
    github: "https://github.com/yourrepo/notes",
    live: "#",
  },
  {
    idx: "05",
    title: "Online Food Ordering System",
    sub: "Cross-device ordering platform",
    category: "Frontend + Firebase",
    year: "2024",
    techStack: ["React", "Redux", "Firebase"],
    description: [
      "Built a responsive food ordering platform",
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
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setActiveImg(0);
    setActiveTab("demo");
    setThumbStart(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setActiveImg(0);
    setThumbStart(0);
  };

  const nextThumbs = () => {
    if (!selectedProject) return;

    const maxStart = Math.max(
      selectedProject.images.length - VISIBLE_THUMBS,
      0
    );

    setThumbStart((prev) => Math.min(prev + 1, maxStart));
  };

  const prevThumbs = () => {
    setThumbStart((prev) => Math.max(prev - 1, 0));
  };

  const selectImage = (index: number) => {
    setActiveImg(index);

    if (index < thumbStart) {
      setThumbStart(index);
    }

    if (index >= thumbStart + VISIBLE_THUMBS) {
      setThumbStart(index - VISIBLE_THUMBS + 1);
    }
  };

  return (
    <section className="section projects-section" id="works">
      {/* =========================
          SECTION HEADER
      ========================= */}

      <div className="projects-heading">
        <div className="projects-eyebrow">
          <span>05</span>
          <span className="heading-line" />
          <span>Selected Work</span>
        </div>

        <div className="projects-heading-content">
          <h2 className="section-title">
            Things I&apos;ve
            <br />
            <em>built.</em>
          </h2>

          <p>
            A selection of projects exploring full-stack development,
            artificial intelligence, and thoughtful user experiences.
          </p>
        </div>
      </div>

      {/* =========================
          PROJECT LIST
      ========================= */}

      <div className="works-list">
        {projects.map((project) => (
          <motion.button
            key={project.idx}
            className="work-row"
            onClick={() => openProject(project)}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ x: 8 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            <span className="work-idx">{project.idx}</span>

            <span className="work-main">
              <span className="work-title">{project.title}</span>
              <span className="work-sub">{project.sub}</span>
            </span>

            <span className="work-category">{project.category}</span>

            <span className="work-year">{project.year}</span>

            <span className="work-arrow">↗</span>
          </motion.button>
        ))}
      </div>

      {/* =========================
          PROJECT MODAL
      ========================= */}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            onClick={closeProject}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} project details`}
              onClick={(e) => e.stopPropagation()}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 25,
                scale: 0.97,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
            >
              {/* Close */}
              <button
                className="close-btn"
                onClick={closeProject}
                aria-label="Close project"
              >
                ×
              </button>

              {/* Project number */}
              <div className="modal-project-number">
                Project / {selectedProject.idx}
              </div>

              {/* Tabs */}
              <div className="modal-tabs">
                <button
                  className={activeTab === "demo" ? "active" : ""}
                  onClick={() => setActiveTab("demo")}
                >
                  <span>01</span>
                  Live Demo
                </button>

                <button
                  className={activeTab === "images" ? "active" : ""}
                  onClick={() => setActiveTab("images")}
                >
                  <span>02</span>
                  Screenshots
                </button>
              </div>

              {/* Media */}
              <AnimatePresence mode="wait">
                {activeTab === "demo" && (
                  <motion.div
                    key="demo"
                    className="video-wrapper"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <video controls autoPlay muted loop playsInline>
                      <source
                        src={selectedProject.video}
                        type="video/mp4"
                      />
                      Your browser does not support video playback.
                    </video>
                  </motion.div>
                )}

                {activeTab === "images" && (
                  <motion.div
                    key="images"
                    className="screenshots-wrapper"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="main-image">
                      <img
                        src={selectedProject.images[activeImg]}
                        alt={`${selectedProject.title} screenshot ${
                          activeImg + 1
                        }`}
                      />

                      <div className="image-counter">
                        {String(activeImg + 1).padStart(2, "0")} /{" "}
                        {String(selectedProject.images.length).padStart(
                          2,
                          "0"
                        )}
                      </div>
                    </div>

                    <div className="thumb-carousel">
                      <button
                        className="arrow"
                        onClick={prevThumbs}
                        disabled={thumbStart === 0}
                        aria-label="Previous screenshots"
                      >
                        <FaArrowLeft />
                      </button>

                      <div className="thumb-window">
                        <motion.div
                          className="thumb-track"
                          animate={{
                            x: `-${thumbStart * 120}px`,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 130,
                            damping: 20,
                          }}
                        >
                          {selectedProject.images.map((image, index) => (
                            <button
                              key={image}
                              className={`thumb ${
                                index === activeImg ? "active" : ""
                              }`}
                              onClick={() => selectImage(index)}
                              aria-label={`View screenshot ${
                                index + 1
                              }`}
                            >
                              <img
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                              />
                            </button>
                          ))}
                        </motion.div>
                      </div>

                      <button
                        className="arrow"
                        onClick={nextThumbs}
                        disabled={
                          thumbStart >=
                          Math.max(
                            selectedProject.images.length -
                              VISIBLE_THUMBS,
                            0
                          )
                        }
                        aria-label="Next screenshots"
                      >
                        <FaArrowRight />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* =========================
                  PROJECT DETAILS
              ========================= */}

              <div className="modal-details">
                <div className="modal-title-row">
                  <div>
                    <span className="modal-category">
                      {selectedProject.category}
                    </span>

                    <h3>{selectedProject.title}</h3>

                    <p className="modal-subtitle">
                      {selectedProject.sub}
                    </p>
                  </div>

                  <span className="modal-year">
                    {selectedProject.year}
                  </span>
                </div>

                {/* Tech */}
                <div className="tech-section">
                  <span className="detail-label">Technology</span>

                  <div className="tech">
                    {selectedProject.techStack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="description-section">
                  <span className="detail-label">Highlights</span>

                  <div className="desc">
                    {selectedProject.description.map(
                      (description, index) => (
                        <p key={description}>
                          <span>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {description}
                        </p>
                      )
                    )}
                  </div>
                </div>

                {/* Links */}
                <div className="links">
                  {selectedProject.github &&
                    selectedProject.github !== "#" && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>GitHub</span>
                        <span>↗</span>
                      </a>
                    )}

                  {selectedProject.live &&
                    selectedProject.live !== "#" && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Live Project</span>
                        <span>↗</span>
                      </a>
                    )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Project;