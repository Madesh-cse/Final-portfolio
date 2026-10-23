/*
  Single source of truth for the portfolio chatbot.
  Content is taken from the resume. Update it here and the chatbot follows.
*/

export interface PortfolioLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  role?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  links: PortfolioLink[];
  /** Words in a visitor's question that point to this project */
  keywords: string[];
}

export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
  /** Words in a visitor's question that point to this group */
  keywords: string[];
}

export const portfolio = {
  name: "Madesh M",

  role: "Full-Stack and AI Engineer",

  summary:
    "I'm a 2026 B.E. Computer Science and Engineering graduate who has built and " +
    "deployed 4 end-to-end applications with React, TypeScript, Node.js, Express, " +
    "FastAPI, MongoDB and PostgreSQL. I also build AI-powered applications using " +
    "LangChain, LangGraph, Model Context Protocol (MCP), RAG and LLM integrations.",

  seeking: ["Full-Stack Developer", "Associate Software Engineer", "AI Engineer"],

  skillGroups: [
    {
      id: "frontend",
      label: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Redux Toolkit", "SCSS", "Tailwind CSS"],
      keywords: ["frontend", "front-end", "front end", "react", "next", "nextjs", "css", "scss", "tailwind", "redux", "typescript", "javascript", "html", "ui"],
    },
    {
      id: "backend",
      label: "Backend & APIs",
      items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Authentication", "OOP", "OAuth"],
      keywords: ["backend", "back-end", "back end", "api", "apis", "node", "express", "fastapi", "jwt", "oauth", "rest"],
    },
    {
      id: "databases",
      label: "Databases",
      items: ["MongoDB", "Mongoose", "PostgreSQL", "SQL", "Redis", "Firebase"],
      keywords: ["database", "databases", "db", "sql", "mongodb", "mongo", "postgres", "postgresql", "redis", "firebase"],
    },
    {
      id: "ai",
      label: "AI & LLM Engineering",
      items: ["Python", "LLMs", "NLP", "LangChain", "LangGraph", "RAG", "MCP", "Agentic AI", "OpenAI"],
      keywords: ["ai", "llm", "llms", "nlp", "langchain", "langgraph", "rag", "mcp", "agentic", "openai", "python", "machine learning"],
    },
    {
      id: "devops",
      label: "DevOps & Cloud",
      items: ["Docker", "Docker Compose", "GitHub Actions (CI/CD)", "AWS EC2", "AWS S3"],
      keywords: ["devops", "docker", "aws", "cloud", "cicd", "deployment", "deploy", "ec2", "s3", "github actions"],
    },
    {
      id: "tools",
      label: "Tools & Core CS",
      items: ["Git", "GitHub", "Postman", "Data Structures & Algorithms", "DBMS", "System Design"],
      keywords: ["git", "postman", "dsa", "algorithms", "data structures", "dbms", "system design"],
    },
  ] as SkillGroup[],

  projects: [
    {
      id: "chat-assistant",
      name: "AI Chat Assistant with Agentic LLM and Tool Integration",
      tagline: "An agentic, ChatGPT-style assistant that picks the right tool for each task.",
      description:
        "I designed an end-to-end assistant that understands user intent, keeps conversation " +
        "context and dynamically selects external tools, going beyond static, single-turn chatbots.",
      highlights: [
        "Built the full stack with Next.js, TypeScript, FastAPI, PostgreSQL and Redis, including authentication, persistent conversations and a responsive chat interface.",
        "Engineered LangChain and LangGraph agent workflows with OpenRouter, with autonomous tool selection across 8+ integrations (web search, weather, news, Wikipedia, movies, Stack Overflow, Notion) and real-time token streaming.",
        "Productionised it with Docker, AWS EC2 and GitHub Actions CI/CD, with automated image builds, deployment and health checks.",
      ],
      technologies: [
        "Next.js", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL",
        "Redis", "LangChain", "LangGraph", "OpenRouter", "Docker", "AWS EC2", "GitHub Actions",
      ],
      links: [
        { label: "Live Demo", url: "https://ai-chat-assistant-frontend-axxc.vercel.app/" },
        { label: "Frontend Code", url: "https://github.com/Madesh-cse/AI-Chat-Assistant-Frontend" },
        { label: "Backend Code", url: "https://github.com/Madesh-cse/AI-Chat-Assistant-Backend" },
      ],
      keywords: ["chat assistant", "ai chat", "chatbot", "agentic", "openrouter", "tool integration", "cacheai"],
    },
    {
      id: "document-platform",
      name: "AI-Powered Document Intelligence & Approval Platform",
      tagline: "Automates document classification, extraction, validation and approval routing.",
      description:
        "An AI-powered document workflow with human-in-the-loop review, so automation speeds " +
        "things up while people still make the final approval decision.",
      highlights: [
        "Secure authentication and role-based access control for administrators, managers and employees, plus document lifecycle management, approval tracking and audit logging.",
        "Agentic document processing and RAG to extract structured information, apply validation guardrails, index content and answer questions from document-specific data.",
        "Integrated AWS S3 for document storage, Docker for containerised setup, and an MCP-based Google Calendar integration to schedule approval reviews.",
      ],
      technologies: [
        "Next.js", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "PostgreSQL", "SQLAlchemy",
        "LangChain", "LangGraph", "RAG", "ChromaDB", "OpenAI", "MCP", "AWS S3", "Docker",
      ],
      links: [
        {
          label: "Demo",
          url: "https://drive.google.com/file/d/1QCYanANUBEmQn6LIpcwOEvcEy43g9GKv/view?usp=drive_link",
        },
        { label: "Frontend Code", url: "https://github.com/Madesh-cse/AI-Document-Approval-system-frontend" },
        { label: "Backend Code", url: "https://github.com/Madesh-cse/AI-Document-Approval-system-backend" },
      ],
      keywords: ["document intelligence", "document approval", "document platform", "document", "documents", "approval", "invoice", "chromadb", "docintel"],
    },
    {
      id: "project-management",
      name: "Human–AI Collaborative Project Management System",
      tagline: "Agent-based task recommendations that keep humans in control of key decisions.",
      role: "Team Leader, AI Full-Stack Development (final-year project)",
      description:
        "I led a final-year team through requirements, architecture, task allocation, development, " +
        "testing and deployment, while contributing hands-on across frontend, backend, AI and DevOps.",
      highlights: [
        "Designed multi-agent workflows with LangChain and LangGraph that analyse project context, employee skills, workload and task dependencies to recommend task priorities, workload distribution and deadlines.",
        "Built RESTful APIs across 20+ Express.js endpoints and integrated GitHub OAuth and GitHub activity tracking.",
        "Set up Docker-based deployment with automated GitHub Actions CI/CD pipelines.",
      ],
      technologies: [
        "React.js", "TypeScript", "Python", "SCSS", "Node.js", "Express.js", "MongoDB",
        "LangChain", "LangGraph", "GitHub OAuth", "Docker", "GitHub Actions",
      ],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Madesh-cse/A-Human-AI-Collaborative-Project-Management-System-with-Agent-Based-Intelligence",
        },
        {
          label: "Demo Video",
          url: "https://drive.google.com/file/d/1gOxF3BB8CeC-jX5ygN9j225xlDpymHNy/view?usp=drive_link",
        },
      ],
      keywords: ["project management", "collaborative", "human-ai", "human ai", "team leader", "team lead", "multi-agent", "multi agent", "final year", "final-year", "leadership"],
    },
    {
      id: "e-learning",
      name: "E-Learning Web App (Udemy-Like Platform)",
      tagline: "A full learning platform with courses, enrollment, payments and role-based dashboards.",
      description:
        "An end-to-end Udemy-like platform covering registration, course creation and management, " +
        "enrollment, learning workflows and dashboards for students, instructors and administrators.",
      highlights: [
        "Secure JWT authentication and role-based access control, with Stripe payments for course purchases and enrollment.",
        "Optimised Mongoose queries and built multi-stage Docker images.",
        "Automated deployment with GitHub Actions CI/CD for a consistent release workflow.",
      ],
      technologies: [
        "React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Mongoose",
        "SCSS", "Stripe", "JWT", "Docker", "GitHub Actions",
      ],
      links: [
        { label: "GitHub", url: "https://github.com/Madesh-cse/Udemy-Clone" },
        {
          label: "Demo Video",
          url: "https://drive.google.com/file/d/1kR4L0tnaTpJ6geEA3jX-hWEcIi3-6Cxe/view?usp=drive_link",
        },
      ],
      keywords: ["e-learning", "elearning", "e learning", "udemy", "stripe", "course", "courses", "learning platform", "learning app"],
    },
  ] as Project[],

  education: [
    {
      school: "KLN College of Engineering, Sivagangai",
      detail: "Bachelor of Engineering in Computer Science, CGPA 8.21/10",
      date: "April 2026",
    },
    {
      school: "Fusco's Matriculation Higher Secondary School, Madurai",
      detail: "Higher Secondary Education (Class XII), 92.5%",
      date: "",
    },
  ],

  certifications: [
    "AWS AI Practitioner Challenge (Udacity)",
    "React – The Complete Guide, Redux & TypeScript (Udemy)",
    "Node.js – The Complete Guide, MVC and REST APIs (Udemy)",
  ],

  achievements: [
    "Solved 140+ Data Structures & Algorithms problems on LeetCode (arrays, trees, dynamic programming, graphs).",
    "Participated in Techathon 2K25, a 24-hour hackathon at K. Ramakrishnan College of Engineering (April 2025).",
  ],

  github: "https://github.com/Madesh-cse",
  linkedin: "https://www.linkedin.com/in/madesh-m-36130627a",
  leetcode: "https://leetcode.com/u/Madesh-cse/",
  email: "madesh10cse@gmail.com",
};

export type Portfolio = typeof portfolio;