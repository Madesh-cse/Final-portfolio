import { portfolio, type Project } from "../data/portfolio";

export interface ChatLink {
  label: string;
  url: string;
}

export interface BotResponse {
  text: string;
  links: ChatLink[];
  /** Suggested next questions shown as chips under the reply */
  followUps?: string[];
}

/* ---------- helpers ---------- */

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** True if the question contains any of the words or phrases (whole-word match) */
function has(question: string, terms: string[]): boolean {
  return terms.some((term) =>
    new RegExp(`(^|[^a-z0-9])${escapeRegExp(term)}($|[^a-z0-9])`, "i").test(
      question,
    ),
  );
}

const bullets = (items: string[]) =>
  items.map((item) => `• ${item}`).join("\n");

const profileLinks: ChatLink[] = [
  { label: "GitHub Profile", url: portfolio.github },
  { label: "LinkedIn", url: portfolio.linkedin },
];

const shortName = (project: Project) =>
  project.id === "chat-assistant"
    ? "AI Chat Assistant"
    : project.id === "document-platform"
      ? "Document Intelligence Platform"
      : project.id === "project-management"
        ? "Project Management System"
        : "E-Learning Web App";

const askAbout = (project: Project) =>
  `Tell me about the ${shortName(project)}`;

function projectResponse(project: Project): BotResponse {
  const others = portfolio.projects.filter((p) => p.id !== project.id);

  return {
    text: [
      project.name,
      project.role ? `Role: ${project.role}` : "",
      project.tagline,
      project.description,
      `What I did:\n${bullets(project.highlights)}`,
      `Tech stack: ${project.technologies.join(", ")}`,
    ]
      .filter(Boolean)
      .join("\n\n"),
    links: project.links,
    followUps: [...others.slice(0, 2).map(askAbout), "What are your skills?"],
  };
}

/* ---------- main ---------- */

export function getBotResponse(message: string): BotResponse {
  const question = message.toLowerCase().trim();
  const wordCount = question.split(/\s+/).length;

  // 1. Greetings and small talk
  if (
    wordCount <= 4 &&
    has(question, [
      "hi",
      "hello",
      "hey",
      "hola",
      "good morning",
      "good evening",
    ])
  ) {
    return {
      text: `Hi! I'm ${portfolio.name}'s portfolio assistant. Ask me about my projects, skills, education, or how to get in touch.`,
      links: [],
      followUps: [
        "Tell me about your projects",
        "What are your skills?",
        "Are you open to opportunities?",
      ],
    };
  }

  if (has(question, ["thanks", "thank you", "thx", "bye", "goodbye"])) {
    return {
      text: "You're welcome! If you'd like to talk further, feel free to reach out.",
      links: [{ label: "Email Me", url: `mailto:${portfolio.email}` }],
      followUps: ["How can I contact you?"],
    };
  }

  // 2. A specific project
  const project = portfolio.projects.find((p) => has(question, p.keywords));
  if (project) return projectResponse(project);

  // 3. Projects overview
  if (
    has(question, [
      "project",
      "projects",
      "work",
      "built",
      "portfolio",
      "apps",
      "applications",
    ])
  ) {
    return {
      text:
        "Here are the four end-to-end applications I've built:\n\n" +
        portfolio.projects
          .map((p, i) => `${i + 1}. ${p.name}\n${p.tagline}`)
          .join("\n\n") +
        "\n\nPick one below and I'll go into the details.",
      links: [],
      followUps: portfolio.projects.map(askAbout),
    };
  }

  // 4. Skills (a specific group, or everything)
  const skillAsk = has(question, [
    "skill",
    "skills",
    "technologies",
    "technology",
    "tech stack",
    "stack",
    "tools",
    "good at",
    "know",
    "experience with",
    "proficient",
    "expertise",
  ]);
  const group = portfolio.skillGroups.find((g) => has(question, g.keywords));

  if (skillAsk || group) {
    if (group) {
      return {
        text: `${group.label}:\n${group.items.join(", ")}`,
        links: [],
        followUps: ["Tell me about your projects", "What are your skills?"],
      };
    }

    return {
      text:
        "Here's my toolkit:\n\n" +
        portfolio.skillGroups
          .map((g) => `${g.label}\n${g.items.join(", ")}`)
          .join("\n\n"),
      links: [],
      followUps: [
        "Tell me about your projects",
        "Which AI skills do you have?",
        "Tell me about your education",
      ],
    };
  }

  // 5. Education
  if (
    has(question, [
      "education",
      "college",
      "university",
      "degree",
      "study",
      "studied",
      "cgpa",
      "graduate",
      "graduation",
      "school",
      "qualification",
    ])
  ) {
    return {
      text: portfolio.education
        .map((e) => [e.school, e.detail, e.date].filter(Boolean).join("\n"))
        .join("\n\n"),
      links: [],
      followUps: [
        "Do you have any certifications?",
        "Tell me about your projects",
      ],
    };
  }

  // 6. Certifications
  if (
    has(question, [
      "certification",
      "certifications",
      "certificate",
      "certificates",
      "courses taken",
      "udemy",
      "udacity",
    ])
  ) {
    return {
      text: `Courses and certifications:\n\n${bullets(portfolio.certifications)}`,
      links: [],
      followUps: ["Tell me about your education", "What are your skills?"],
    };
  }

  // 7. Achievements
  if (
    has(question, [
      "achievement",
      "achievements",
      "leetcode",
      "dsa",
      "hackathon",
      "techathon",
      "problem solving",
      "competitive",
      "award",
      "awards",
    ])
  ) {
    return {
      text: `Achievements:\n\n${bullets(portfolio.achievements)}`,
      links: [{ label: "LeetCode Profile", url: portfolio.leetcode }],
      followUps: [
        "Tell me about your projects",
        "Tell me about your education",
      ],
    };
  }

  // 8. Hiring and availability
  if (
    has(question, [
      "hire",
      "hiring",
      "available",
      "availability",
      "open to work",
      "opportunities",
      "opportunity",
      "job",
      "jobs",
      "looking for",
      "recruit",
      "recruiter",
      "role",
      "roles",
      "position",
      "internship",
    ])
  ) {
    return {
      text:
        `Yes, I'm open to opportunities. I'm looking for roles as ${portfolio.seeking.slice(0, -1).join(", ")} or ${portfolio.seeking[portfolio.seeking.length - 1]}, ` +
        "where I can contribute to real-world software.\n\nThe best way to reach me is by email or LinkedIn.",
      links: [
        { label: "Email Me", url: `mailto:${portfolio.email}` },
        { label: "LinkedIn", url: portfolio.linkedin },
      ],
      followUps: ["Tell me about your projects", "What are your skills?"],
    };
  }

  if (
    /\b(email|email id|email address|phone|phone number|mobile number|contact number|gmail)\b/i.test(
      message,
    )
  ) {
    return {
      text: "Here are my contact details:\n\n📧 Email: madesh10cse@gmail.com\n📱 Phone: 6382979054",
      links: [],
      followUps: [
        "View my resume",
        "Tell me about my projects",
        "Are you open to opportunities?",
      ],
    };
  }

  // 9. GitHub and source code
  if (
    has(question, [
      "github",
      "repository",
      "repositories",
      "repo",
      "repos",
      "source code",
      "code",
    ])
  ) {
    return {
      text: "You can explore all my repositories on GitHub. Each project's frontend and backend code is linked in its details too.",
      links: [{ label: "GitHub Profile", url: portfolio.github }],
      followUps: ["Tell me about your projects"],
    };
  }

  // 10. Contact
  if (
    has(question, [
      "contact",
      "email",
      "mail",
      "reach",
      "linkedin",
      "touch",
      "connect",
      "message you",
      "talk to you",
    ])
  ) {
    return {
      text: `Here's how you can reach me.\n\nEmail: ${portfolio.email}`,
      links: [
        { label: "Email Me", url: `mailto:${portfolio.email}` },
        { label: "LinkedIn", url: portfolio.linkedin },
        { label: "GitHub Profile", url: portfolio.github },
      ],
      followUps: ["Are you open to opportunities?"],
    };
  }

  if (/\b(resume|résumé|cv|curriculum vitae)\b/i.test(message)) {
    return {
      text: "You can view my resume using the link below. It includes my skills, projects, education, and experience.",
      links: [
        {
          label: "View My Resume",
          url: "https://drive.google.com/file/d/1W3bsutSldY03Z53Cl2-4TUMjXNFaVPbf/view?usp=drive_link",
        },
      ],
      followUps: [
        "Tell me about your projects",
        "What are your skills?",
        "How can I contact you?",
      ],
    };
  }

  // 11. About, background and experience
  if (
    has(question, ["experience", "experienced", "fresher", "work experience"])
  ) {
    return {
      text:
        "I graduated in 2026, so my hands-on experience comes from four end-to-end projects. " +
        "That includes leading a final-year team on a Human–AI project management system, " +
        "and building and deploying full-stack apps with Docker, AWS EC2 and CI/CD pipelines.",
      links: [],
      followUps: ["Tell me about your projects", "What are your skills?"],
    };
  }

  if (
    has(question, [
      "about",
      "who",
      "yourself",
      "introduce",
      "intro",
      "summary",
      "background",
      "madesh",
    ])
  ) {
    return {
      text: `I'm ${portfolio.name}, a ${portfolio.role}.\n\n${portfolio.summary}`,
      links: profileLinks,
      followUps: [
        "Tell me about your projects",
        "What are your skills?",
        "Tell me about your education",
      ],
    };
  }

  // 12. Fallback
  return {
    text: "I can tell you about my projects, skills, education, certifications, achievements, or how to contact me. Try one of these:",
    links: [
      { label: "Explore Projects", url: "#works" },
      { label: "GitHub Profile", url: portfolio.github },
    ],
    followUps: [
      "Tell me about your projects",
      "What are your skills?",
      "How can I contact you?",
    ],
  };
}
