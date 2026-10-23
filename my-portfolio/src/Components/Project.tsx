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
import chatAiVideo from "../assets/Video/Ai-chat-assistant.mp4";

// AI-Powered Document Intelligence & Approval Platform
import aipdas1 from "../assets/AIDPAS-1.jpeg";
import aipdas2 from "../assets/AIDPAS-2.jpeg";
import aipdas3 from "../assets/AIDPAS-3.jpeg";
import aipdas4 from "../assets/AIDPAS-4.jpeg";
import aipdas5 from "../assets/AIDPAS-5.jpeg";
import aipdas6 from "../assets/AIDPAS-6.jpeg";
import aipdas7 from "../assets/AIDPAS-7.jpeg";
import aipdas8 from "../assets/AIDPAS-8.jpeg";
import aipdas9 from "../assets/AIDPAS-9.jpeg";
import aipdas10 from "../assets/AIDPAS-10.jpeg";

import aipoweredDocumentvideo from "../assets/Video/AI-Powered-Document-Approval-System.mp4"

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
    video: chatAiVideo,
    github: "https://github.com/Madesh-cse/AI-Chat-Assistant-Backend",
    live: "https://ai-chat-assistant-frontend-axxc.vercel.app",
  },
  {
    idx: "02",
    title: "AI-Powered Document Intelligence & Approval Platform",
    sub: "AI-driven document processing and approval workflows",
    category: "Full Stack + Agentic AI",
    year: "2026",
    techStack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "LangChain",
      "LangGraph",
      "RAG",
      "ChromaDB",
      "OpenAI",
      "MCP",
      "AWS S3",
      "Docker",
    ],
    description: [
      "Automated document classification, information extraction, and validation",
      "Implemented JWT authentication and role-based access control",
      "Built RAG-powered document Q&A with ChromaDB and LLM integration",
      "Integrated AWS S3 storage, Docker, and MCP-based Google Calendar approval scheduling",
    ],
    images: [aipdas1, aipdas2, aipdas3, aipdas4, aipdas5, aipdas6, aipdas7, aipdas8, aipdas9, aipdas10],
    video: aipoweredDocumentvideo,
    github: "https://github.com/Madesh-cse/AI-Document-Approval-system-backend",
    live: "https://drive.google.com/file/d/1QCYanANUBEmQn6LIpcwOEvcEy43g9GKv/view?usp=drive_link",
  },
  {
    idx: "03",
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
    github: "https://github.com/Madesh-cse/A-Human-AI-Collaborative-Project-Management-System-with-Agent-Based-Intelligence",
    live: "#",
  },
  {
    idx: "04",
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
    github: "https://github.com/Madesh-cse/Udemy-Clone",
    live: "#",
  },
  {
    idx: "05",
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
    github: "https://github.com/Madesh-cse/Real-time-ai-note-taker",
    live: "#",
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
      if (event.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
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

  const closeProject = () => setSelectedProject(null);

  const nextThumbs = () => {
    if (!selectedProject) return;

    const maxStart = Math.max(
      selectedProject.images.length - VISIBLE_THUMBS,
      0,
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
    } else if (index >= thumbStart + VISIBLE_THUMBS) {
      setThumbStart(index - VISIBLE_THUMBS + 1);
    }
  };

  return (
    <section className="section projects-section" id="works">
      <div className="projects-shell">
        {/* Section heading */}
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <div className="projects-eyebrow">
            <span className="eyebrow-index">05</span>
            <span className="eyebrow-line" />
            <span>Portfolio / Selected Work</span>
          </div>

          <div className="projects-heading-content">
            <div className="heading-copy">
              <h2 className="section-title">
                Ideas into
                <br />
                <em>real products.</em>
              </h2>
            </div>

            <div className="heading-aside">
              <span className="aside-mark">↘</span>
              <p>
                A collection of products, experiments, and intelligent
                applications built through curiosity and code.
              </p>

              <div className="project-count">
                <span>{String(projects.length).padStart(2, "0")}</span>
                <span>Projects showcased</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.idx}
              className={`project-card ${
                index === 0 ? "project-card-featured" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.55,
                delay: (index % 2) * 0.08,
                ease: "easeOut",
              }}
            >
              <button
                className="project-card-trigger"
                type="button"
                onClick={() => openProject(project)}
                aria-label={`View ${project.title} project details`}
              >
                <div className="project-visual">
                  <img
                    className="project-cover"
                    src={project.images[0]}
                    alt={`${project.title} preview`}
                    loading={index === 0 ? "eager" : "lazy"}
                  />

                  <div className="visual-overlay" />

                  <div className="visual-topline">
                    <span className="visual-index">
                      PROJECT / {project.idx}
                    </span>
                    <span className="visual-year">{project.year}</span>
                  </div>

                  <div className="visual-bottom">
                    <span className="visual-category">
                      {project.category}
                    </span>

                    <span className="project-open-icon" aria-hidden="true">
                      <span>↗</span>
                    </span>
                  </div>

                  <div className="visual-view-label">
                    <span>Explore project</span>
                    <span>↗</span>
                  </div>
                </div>

                <div className="project-card-content">
                  <div className="project-card-heading">
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.sub}</p>
                    </div>

                    <span className="card-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>

                  <div className="project-tech-preview">
                    {project.techStack.slice(0, 4).map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}

                    {project.techStack.length > 4 && (
                      <span className="tech-more">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            </motion.article>
          ))}
        </div>

        {/* Closing note */}
        <motion.div
          className="projects-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="footer-line" />
          <p>Built with curiosity. Improved with every iteration.</p>
          <span className="footer-spark">✳</span>
        </motion.div>
      </div>

      {/* Project detail modal */}
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
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="modal-topbar">
                <div className="modal-project-number">
                  <span className="modal-live-dot" />
                  PROJECT / {selectedProject.idx}
                </div>

                <button
                  className="close-btn"
                  onClick={closeProject}
                  aria-label="Close project details"
                  type="button"
                  autoFocus
                >
                  <span>×</span>
                </button>
              </div>

              <div className="modal-heading">
                <div>
                  <span className="modal-category">
                    {selectedProject.category}
                  </span>
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.sub}</p>
                </div>

                <span className="modal-year">{selectedProject.year}</span>
              </div>

              {/* Media tabs */}
              <div className="modal-tabs" role="tablist" aria-label="Project media">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "demo"}
                  className={activeTab === "demo" ? "active" : ""}
                  onClick={() => setActiveTab("demo")}
                >
                  <span>01</span>
                  Demo video
                </button>

                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "images"}
                  className={activeTab === "images" ? "active" : ""}
                  onClick={() => setActiveTab("images")}
                >
                  <span>02</span>
                  Screenshots
                  <span className="tab-count">
                    {String(selectedProject.images.length).padStart(2, "0")}
                  </span>
                </button>
              </div>

              {/* Media content */}
              <AnimatePresence mode="wait">
                {activeTab === "demo" && (
                  <motion.div
                    key="demo"
                    className="video-wrapper"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22 }}
                  >
                    <video
                      controls
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster={selectedProject.images[0]}
                    >
                      <source
                        src={selectedProject.video}
                        type="video/mp4"
                      />
                      Your browser does not support video playback.
                    </video>

                    <span className="media-caption">PRODUCT WALKTHROUGH</span>
                  </motion.div>
                )}

                {activeTab === "images" && (
                  <motion.div
                    key="images"
                    className="screenshots-wrapper"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22 }}
                  >
                    <div className="main-image">
                      <img
                        src={selectedProject.images[activeImg]}
                        alt={`${selectedProject.title} screenshot ${activeImg + 1}`}
                      />

                      <div className="image-counter">
                        <span>
                          {String(activeImg + 1).padStart(2, "0")}
                        </span>
                        <span className="counter-divider">/</span>
                        <span>
                          {String(selectedProject.images.length).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <div className="thumb-carousel">
                      <button
                        className="arrow"
                        type="button"
                        onClick={prevThumbs}
                        disabled={thumbStart === 0}
                        aria-label="Previous screenshots"
                      >
                        <FaArrowLeft />
                      </button>

                      <div className="thumb-window">
                        <motion.div
                          className="thumb-track"
                          animate={{ x: `-${thumbStart * 100}px` }}
                          transition={{
                            type: "spring",
                            stiffness: 160,
                            damping: 24,
                          }}
                        >
                          {selectedProject.images.map((image, index) => (
                            <button
                              key={`${selectedProject.idx}-${index}`}
                              type="button"
                              className={`thumb ${
                                index === activeImg ? "active" : ""
                              }`}
                              onClick={() => selectImage(index)}
                              aria-label={`View screenshot ${index + 1}`}
                              aria-pressed={index === activeImg}
                            >
                              <img
                                src={image}
                                alt=""
                                loading="lazy"
                              />
                            </button>
                          ))}
                        </motion.div>
                      </div>

                      <button
                        className="arrow"
                        type="button"
                        onClick={nextThumbs}
                        disabled={
                          thumbStart >=
                          Math.max(
                            selectedProject.images.length - VISIBLE_THUMBS,
                            0,
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

              {/* Project details */}
              <div className="modal-details">
                <div className="detail-block">
                  <div className="detail-heading">
                    <span className="detail-index">01</span>
                    <span className="detail-label">Technology stack</span>
                  </div>

                  <div className="tech">
                    {selectedProject.techStack.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>

                <div className="detail-block">
                  <div className="detail-heading">
                    <span className="detail-index">02</span>
                    <span className="detail-label">Key highlights</span>
                  </div>

                  <div className="desc">
                    {selectedProject.description.map((description, index) => (
                      <div className="desc-item" key={description}>
                        <span className="desc-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p>{description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  {selectedProject.github &&
                    selectedProject.github !== "#" && (
                      <a
                        className="project-link project-link-primary"
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>View source code</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}

                  {selectedProject.live &&
                    selectedProject.live !== "#" && (
                      <a
                        className="project-link project-link-secondary"
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Explore project</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                </div>
              </div>

              <div className="modal-footer">
                <span>SELECTED WORK</span>
                <span>{selectedProject.idx} / {String(projects.length).padStart(2, "0")}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Project;

