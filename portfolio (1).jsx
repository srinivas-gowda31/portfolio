import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, ExternalLink } from "lucide-react";

const SECTIONS = ["about", "skills", "projects", "experience", "education", "contact"];

const SKILL_GROUPS = [
  {
    label: "Languages",
    items: ["Java (Advanced)", "Python", "React.js", "HTML5", "CSS"],
  },
  {
    label: "Java frameworks",
    items: ["Spring Boot", "Spring MVC", "Hibernate / JPA", "Maven"],
  },
  {
    label: "Agentic AI & LLMs",
    items: ["LangGraph", "LangChain", "Tool / Function calling", "Model Context Protocol"],
  },
  {
    label: "ML & data science",
    items: [
      "Machine learning",
      "NLP",
      "EDA",
      "Feature engineering",
      "Model evaluation",
      "DSA",
    ],
  },
  {
    label: "Frameworks & libraries",
    items: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow", "PySpark"],
  },
  {
    label: "Backend & APIs",
    items: ["Django", "REST APIs", "Async processing", "Message queues"],
  },
  {
    label: "DevOps & cloud",
    items: ["Docker", "Kubernetes", "AWS"],
  },
  {
    label: "Databases & storage",
    items: ["PostgreSQL", "MongoDB", "ChromaDB", "PGVector"],
  },
];

const PROJECTS = [
  {
    title: "Smart Cart AI",
    subtitle: "AI-powered automated retail system",
    date: "Aug 2025 — Dec 2025",
    tags: ["Python", "Tailwind CSS", "JavaScript", "PostgreSQL", "System design"],
    points: [
      "Real-time product detection and billing using computer vision",
      "Image classification & object detection to manage cart inventory",
      "SQL-backed billing and transaction handling",
    ],
  },
  {
    title: "Hand Gesture & Speech Recognition",
    subtitle: "Multimodal human–computer interaction system",
    date: "Oct 2024 — Mar 2025",
    tags: ["Python", "Computer vision", "NLP", "Signal processing"],
    points: [
      "Combined gesture recognition with voice input for control",
      "Feature extraction & classification for gesture detection",
      "Speech-to-text and NLP to interpret spoken commands",
    ],
  },
  {
    title: "Agentic AI Orchestration Platform",
    subtitle: "Multi-agent LLM system",
    date: "Sep 2022 — May 2023",
    tags: ["LangGraph", "MCP", "Django REST", "AWS", "Docker", "OpenAI"],
    points: [
      "Stateful super-agent moving through listen → route → answer states",
      "Tool/function calling with structured Pydantic outputs into Django REST",
      "Async pipelines via RabbitMQ producers and consumers",
    ],
    featured: true,
  },
];

const EXPERIENCE = [
  {
    role: "Software Engineering Intern",
    org: "Mind Matrix",
    date: "Jan 2026",
    points: [
      "Built Python-based applications with exposure to real-world, scalable system design",
      "Collaborated cross-functionally; sharpened debugging and optimization skills",
    ],
  },
  {
    role: "AI / Full-Stack Intern",
    org: "KodNest",
    date: "Oct 2025",
    points: [
      "Trained on Python, DSA, and full-stack fundamentals",
      "Shipped mini-projects focused on backend logic and system design",
      "Practiced SDLC, clean code, and team workflows",
    ],
  },
];

const EDUCATION = [
  { degree: "B.E. — Artificial Intelligence & Machine Learning", org: "AMC Engineering College", date: "2022 — 2026", score: "CGPA 9.4" },
  { degree: "PUC", org: "Vikas PU College", date: "2020 — 2022", score: "91%" },
  { degree: "10th Standard", org: "Kendriya Vidyalaya", date: "2019 — 2020", score: "90%" },
];

const CERTS = [
  { title: "Hackathon — 1st place", date: "Mar 2025", desc: "Built an AI teaching assistant using NLP and LLMs for interactive, adaptive learning." },
  { title: "Udemy certifications", date: "Aug 2025", desc: "JavaScript, and Data Science with AI/ML using Python." },
];

const STATES = ["listen", "route", "answer"];

function usePulse(intervalMs = 1400) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % STATES.length), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return active;
}

function useScrollSpy(ids) {
  const [current, setCurrent] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrent(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return current;
}

function Pipeline({ active, size = "md" }) {
  return (
    <div className={`pipeline pipeline-${size}`}>
      {STATES.map((s, i) => (
        <React.Fragment key={s}>
          <div className={`pipeline-node ${active === i ? "is-active" : ""} node-${s}`}>
            <span className="pipeline-dot" />
            <span className="pipeline-label">{s}</span>
          </div>
          {i < STATES.length - 1 && <span className={`pipeline-link ${active === i ? "is-active" : ""}`} />}
        </React.Fragment>
      ))}
    </div>
  );
}

function Chip({ children }) {
  return <span className="chip">{children}</span>;
}

export default function Portfolio() {
  const active = usePulse();
  const current = useScrollSpy(SECTIONS);
  const [navOpen, setNavOpen] = useState(false);

  const scrollTo = (id) => {
    setNavOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pf-root">
      <style>{`
        .pf-root {
          --bg-0: #0a0c10;
          --bg-1: #12151b;
          --bg-2: #171b22;
          --border: #262b34;
          --border-soft: #1c2028;
          --text-0: #e9ebee;
          --text-1: #9aa2b1;
          --text-2: #666e7d;
          --cyan: #5eead4;
          --violet: #a78bfa;
          --amber: #f5b342;
          --font-display: 'Space Grotesk', 'Inter', sans-serif;
          --font-body: 'Inter', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;

          background: var(--bg-0);
          color: var(--text-0);
          font-family: var(--font-body);
          width: 100%;
          min-height: 100vh;
          line-height: 1.6;
        }
        .pf-root * { box-sizing: border-box; }
        .pf-root a { color: inherit; text-decoration: none; }
        .pf-root ::selection { background: var(--cyan); color: #06120f; }

        .pf-container { max-width: 880px; margin: 0 auto; padding: 0 28px; }

        /* nav */
        .pf-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 40;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 28px;
          background: rgba(10,12,16,0.82);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--border-soft);
        }
        .pf-brand { font-family: var(--font-mono); font-size: 13px; color: var(--text-1); display:flex; align-items:center; gap:10px; }
        .pf-brand b { color: var(--text-0); font-weight: 500; }
        .pf-navlinks { display: flex; gap: 26px; font-family: var(--font-mono); font-size: 12.5px; text-transform: lowercase; }
        .pf-navlinks button {
          background: none; border: none; color: var(--text-2); cursor: pointer;
          padding: 4px 0; letter-spacing: 0.02em; position: relative;
        }
        .pf-navlinks button.is-current { color: var(--cyan); }
        .pf-navlinks button.is-current::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -6px; height: 1px; background: var(--cyan);
        }
        .pf-navmobile { display: none; }
        @media (max-width: 720px) {
          .pf-navlinks { display: none; }
          .pf-navmobile { display: block; background: none; border: 1px solid var(--border); color: var(--text-0); font-family: var(--font-mono); font-size: 12px; padding: 6px 10px; border-radius: 4px; }
        }

        /* hero */
        .pf-hero { padding: 168px 0 96px; }
        .pf-eyebrow {
          font-family: var(--font-mono); font-size: 12.5px; color: var(--cyan);
          display: flex; align-items: center; gap: 10px; margin-bottom: 22px;
        }
        .pf-eyebrow .cursor { display:inline-block; width:7px; height:14px; background:var(--cyan); animation: blink 1.1s steps(1) infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        .pf-name {
          font-family: var(--font-display); font-weight: 500;
          font-size: clamp(40px, 7vw, 68px); line-height: 1.04; letter-spacing: -0.01em;
          margin: 0 0 18px;
        }
        .pf-role {
          font-size: 18px; color: var(--text-1); max-width: 560px; margin: 0 0 40px;
        }
        .pf-role .hl { color: var(--text-0); }

        .pipeline { display: flex; align-items: center; gap: 0; margin-bottom: 44px; }
        .pipeline-node { display: flex; align-items: center; gap: 8px; font-family: var(--font-mono); font-size: 12.5px; color: var(--text-2); text-transform: lowercase; transition: color 0.4s ease; padding: 8px 2px;}
        .pipeline-node.is-active { color: var(--text-0); }
        .pipeline-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--border); transition: background 0.4s ease, box-shadow 0.4s ease; }
        .node-listen.is-active .pipeline-dot { background: var(--cyan); box-shadow: 0 0 0 3px rgba(94,234,212,0.15); }
        .node-route.is-active .pipeline-dot { background: var(--violet); box-shadow: 0 0 0 3px rgba(167,139,250,0.15); }
        .node-answer.is-active .pipeline-dot { background: var(--amber); box-shadow: 0 0 0 3px rgba(245,179,66,0.15); }
        .pipeline-link { width: 34px; height: 1px; background: var(--border); margin: 0 6px; transition: background 0.4s ease; }
        .pipeline-link.is-active { background: var(--text-1); }
        .pipeline-md .pipeline-label { font-size: 12.5px; }
        .pipeline-sm { gap: 0; }
        .pipeline-sm .pipeline-node { font-size: 10.5px; padding: 0; gap: 5px; }
        .pipeline-sm .pipeline-link { width: 16px; margin: 0 4px; }

        .pf-cta-row { display: flex; gap: 14px; flex-wrap: wrap; }
        .pf-btn {
          font-family: var(--font-mono); font-size: 13px; padding: 11px 20px;
          border-radius: 4px; border: 1px solid var(--border); cursor: pointer;
          display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--text-0);
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .pf-btn:hover { border-color: var(--text-1); background: var(--bg-1); }
        .pf-btn.primary { background: var(--cyan); color: #06120f; border-color: var(--cyan); font-weight: 500; }
        .pf-btn.primary:hover { background: #7ff2df; border-color: #7ff2df; }

        /* section shell */
        .pf-section { padding: 88px 0; border-top: 1px solid var(--border-soft); }
        .pf-section:first-of-type { border-top: none; }
        .pf-section-head { display: flex; align-items: baseline; gap: 16px; margin-bottom: 40px; }
        .pf-section-num { font-family: var(--font-mono); font-size: 12.5px; color: var(--cyan); }
        .pf-section-title { font-family: var(--font-display); font-size: 26px; font-weight: 500; margin: 0; }

        .pf-about-text { font-size: 16.5px; color: var(--text-1); max-width: 620px; }
        .pf-about-text b { color: var(--text-0); font-weight: 500; }
        .pf-meta-row { display: flex; gap: 28px; margin-top: 30px; flex-wrap: wrap; }
        .pf-meta-item { font-family: var(--font-mono); font-size: 12.5px; color: var(--text-2); }
        .pf-meta-item b { display: block; color: var(--text-0); font-family: var(--font-body); font-size: 15px; margin-bottom: 3px; font-weight: 500;}

        /* skills */
        .pf-skill-groups { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px 40px; }
        @media (max-width: 640px) { .pf-skill-groups { grid-template-columns: 1fr; } }
        .pf-skill-label { font-family: var(--font-mono); font-size: 12px; color: var(--text-2); text-transform: lowercase; margin-bottom: 12px; letter-spacing: 0.02em; }
        .pf-skill-chips { display: flex; flex-wrap: wrap; gap: 8px; }
        .chip {
          font-size: 13px; padding: 6px 12px; border: 1px solid var(--border); border-radius: 4px;
          color: var(--text-1); background: var(--bg-1);
        }

        /* projects */
        .pf-project { border: 1px solid var(--border); border-radius: 8px; padding: 28px; margin-bottom: 20px; background: var(--bg-1); position: relative; }
        .pf-project.featured { border-color: rgba(94,234,212,0.35); }
        .pf-project-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; margin-bottom: 6px; flex-wrap: wrap; }
        .pf-project-title { font-family: var(--font-display); font-size: 19px; font-weight: 500; margin: 0; }
        .pf-project-date { font-family: var(--font-mono); font-size: 12px; color: var(--text-2); white-space: nowrap; }
        .pf-project-subtitle { color: var(--text-1); font-size: 14.5px; margin: 0 0 18px; }
        .pf-project-points { margin: 0 0 18px; padding-left: 18px; color: var(--text-1); font-size: 14.5px; }
        .pf-project-points li { margin-bottom: 6px; }
        .pf-project-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .pf-featured-tag {
          position: absolute; top: -11px; right: 24px; font-family: var(--font-mono); font-size: 10.5px;
          background: var(--bg-0); border: 1px solid rgba(94,234,212,0.35); color: var(--cyan);
          padding: 3px 10px; border-radius: 3px; text-transform: lowercase;
        }

        /* experience timeline */
        .pf-timeline { position: relative; padding-left: 28px; }
        .pf-timeline::before { content: ''; position: absolute; left: 5px; top: 6px; bottom: 6px; width: 1px; background: var(--border); }
        .pf-tl-item { position: relative; margin-bottom: 36px; }
        .pf-tl-item:last-child { margin-bottom: 0; }
        .pf-tl-dot { position: absolute; left: -28px; top: 5px; width: 11px; height: 11px; border-radius: 50%; background: var(--bg-0); border: 2px solid var(--cyan); }
        .pf-tl-head { display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin-bottom: 6px; }
        .pf-tl-role { font-family: var(--font-display); font-size: 17px; font-weight: 500; }
        .pf-tl-org { color: var(--text-1); font-size: 14px; }
        .pf-tl-date { font-family: var(--font-mono); font-size: 12px; color: var(--text-2); }
        .pf-tl-points { margin: 8px 0 0; padding-left: 18px; color: var(--text-1); font-size: 14.5px; }
        .pf-tl-points li { margin-bottom: 5px; }

        /* education */
        .pf-edu-row { display: flex; justify-content: space-between; align-items: center; padding: 16px 0; border-bottom: 1px solid var(--border-soft); gap: 16px; flex-wrap: wrap; }
        .pf-edu-row:last-child { border-bottom: none; }
        .pf-edu-degree { font-size: 15px; color: var(--text-0); font-weight: 500; }
        .pf-edu-org { font-size: 13.5px; color: var(--text-2); }
        .pf-edu-right { text-align: right; }
        .pf-edu-date { font-family: var(--font-mono); font-size: 12px; color: var(--text-2); }
        .pf-edu-score { font-family: var(--font-mono); font-size: 13px; color: var(--cyan); }

        .pf-certs { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 36px; }
        @media (max-width: 640px) { .pf-certs { grid-template-columns: 1fr; } }
        .pf-cert { border: 1px solid var(--border); border-radius: 8px; padding: 18px 20px; background: var(--bg-1); }
        .pf-cert-title { font-size: 14.5px; font-weight: 500; margin-bottom: 4px; }
        .pf-cert-date { font-family: var(--font-mono); font-size: 11px; color: var(--text-2); margin-bottom: 8px; }
        .pf-cert-desc { font-size: 13.5px; color: var(--text-1); }

        /* contact */
        .pf-contact { padding-bottom: 120px; }
        .pf-contact-title { font-family: var(--font-display); font-size: clamp(28px, 5vw, 42px); font-weight: 500; margin: 0 0 18px; max-width: 560px; }
        .pf-contact-sub { color: var(--text-1); max-width: 480px; margin-bottom: 36px; font-size: 15.5px; }
        .pf-contact-links { display: flex; flex-direction: column; gap: 14px; margin-bottom: 40px; }
        .pf-contact-link { display: flex; align-items: center; gap: 12px; font-family: var(--font-mono); font-size: 14.5px; color: var(--text-1); width: fit-content; }
        .pf-contact-link:hover { color: var(--cyan); }
        .pf-footer { border-top: 1px solid var(--border-soft); padding: 24px 0; }
        .pf-footer-row { display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 12px; color: var(--text-2); flex-wrap: wrap; gap: 10px; }
      `}</style>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap" />

      <nav className="pf-nav">
        <div className="pf-brand">
          <Pipeline active={active} size="sm" />
        </div>
        <div className="pf-navlinks">
          {SECTIONS.map((s) => (
            <button key={s} className={current === s ? "is-current" : ""} onClick={() => scrollTo(s)}>
              {s}
            </button>
          ))}
        </div>
        <button className="pf-navmobile" onClick={() => setNavOpen((v) => !v)}>menu</button>
      </nav>
      {navOpen && (
        <div style={{ position: "fixed", top: 54, right: 20, background: "var(--bg-1)", border: "1px solid var(--border)", borderRadius: 6, padding: "10px 0", zIndex: 50, display: "flex", flexDirection: "column" }}>
          {SECTIONS.map((s) => (
            <button key={s} onClick={() => scrollTo(s)} style={{ background: "none", border: "none", color: "var(--text-1)", fontFamily: "var(--font-mono)", fontSize: 13, padding: "8px 20px", textAlign: "left", cursor: "pointer" }}>
              {s}
            </button>
          ))}
        </div>
      )}

      <header className="pf-container pf-hero">
        <div className="pf-eyebrow">
          <span>{'>'} whoami</span>
          <span className="cursor" />
        </div>
        <h1 className="pf-name">C Srinivas Gowda</h1>
        <p className="pf-role">
          Full-stack developer building <span className="hl">agentic AI systems</span> — LLMs that
          reason, call tools, and ship on real backends. Currently pursuing a B.E. in AI &amp; ML.
        </p>
        <Pipeline active={active} size="md" />
        <div className="pf-cta-row">
          <button className="pf-btn primary" onClick={() => scrollTo("projects")}>
            View projects <ArrowUpRight size={15} />
          </button>
          <button className="pf-btn" onClick={() => scrollTo("contact")}>
            Get in touch
          </button>
        </div>
      </header>

      <main className="pf-container">
        <section id="about" className="pf-section">
          <div className="pf-section-head">
            <span className="pf-section-num">01</span>
            <h2 className="pf-section-title">About</h2>
          </div>
          <p className="pf-about-text">
            I'm an enthusiastic full-stack developer with a foundation in <b>Java</b>, <b>Python</b>,
            and system design, now applying that to agentic AI — building LLM-based assistants that
            focus on tool use, retrieval, and scalable backend integration. I'm looking to design
            agent workflows, connect LLMs to production APIs, and deploy agents on real
            infrastructure rather than notebooks.
          </p>
          <div className="pf-meta-row">
            <div className="pf-meta-item"><b>AMC Engineering College</b>B.E. AI &amp; ML, 2022–2026</div>
            <div className="pf-meta-item"><b>9.4 CGPA</b>current standing</div>
            <div className="pf-meta-item"><b>Bengaluru</b>India</div>
          </div>
        </section>

        <section id="skills" className="pf-section">
          <div className="pf-section-head">
            <span className="pf-section-num">02</span>
            <h2 className="pf-section-title">Skills</h2>
          </div>
          <div className="pf-skill-groups">
            {SKILL_GROUPS.map((g) => (
              <div key={g.label}>
                <div className="pf-skill-label">{g.label}</div>
                <div className="pf-skill-chips">
                  {g.items.map((it) => (
                    <Chip key={it}>{it}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="pf-section">
          <div className="pf-section-head">
            <span className="pf-section-num">03</span>
            <h2 className="pf-section-title">Projects</h2>
          </div>
          {PROJECTS.map((p) => (
            <div key={p.title} className={`pf-project ${p.featured ? "featured" : ""}`}>
              {p.featured && <span className="pf-featured-tag">signature build</span>}
              <div className="pf-project-top">
                <h3 className="pf-project-title">{p.title}</h3>
                <span className="pf-project-date">{p.date}</span>
              </div>
              <p className="pf-project-subtitle">{p.subtitle}</p>
              <ul className="pf-project-points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="pf-project-tags">
                {p.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="experience" className="pf-section">
          <div className="pf-section-head">
            <span className="pf-section-num">04</span>
            <h2 className="pf-section-title">Experience</h2>
          </div>
          <div className="pf-timeline">
            {EXPERIENCE.map((e) => (
              <div key={e.role + e.org} className="pf-tl-item">
                <span className="pf-tl-dot" />
                <div className="pf-tl-head">
                  <div>
                    <div className="pf-tl-role">{e.role}</div>
                    <div className="pf-tl-org">{e.org}</div>
                  </div>
                  <span className="pf-tl-date">{e.date}</span>
                </div>
                <ul className="pf-tl-points">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="pf-section">
          <div className="pf-section-head">
            <span className="pf-section-num">05</span>
            <h2 className="pf-section-title">Education &amp; certificates</h2>
          </div>
          <div>
            {EDUCATION.map((e) => (
              <div key={e.degree} className="pf-edu-row">
                <div>
                  <div className="pf-edu-degree">{e.degree}</div>
                  <div className="pf-edu-org">{e.org}</div>
                </div>
                <div className="pf-edu-right">
                  <div className="pf-edu-date">{e.date}</div>
                  <div className="pf-edu-score">{e.score}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="pf-certs">
            {CERTS.map((c) => (
              <div key={c.title} className="pf-cert">
                <div className="pf-cert-title">{c.title}</div>
                <div className="pf-cert-date">{c.date}</div>
                <div className="pf-cert-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="pf-section pf-contact">
          <div className="pf-section-head">
            <span className="pf-section-num">06</span>
            <h2 className="pf-section-title">Contact</h2>
          </div>
          <h3 className="pf-contact-title">Open to full-stack &amp; agentic AI roles — let's talk.</h3>
          <p className="pf-contact-sub">
            Reach out directly, or connect on LinkedIn. I usually reply within a day.
          </p>
          <div className="pf-contact-links">
            <a className="pf-contact-link" href="mailto:srinivasgowda1299@gmail.com">
              <Mail size={16} /> srinivasgowda1299@gmail.com
            </a>
            <a className="pf-contact-link" href="tel:7776978017">
              <Phone size={16} /> +91 77769 78017
            </a>
            <a className="pf-contact-link" href="https://linkedin.com/in/srinivas-gowda" target="_blank" rel="noreferrer">
              <Linkedin size={16} /> linkedin.com/in/srinivas-gowda <ExternalLink size={12} />
            </a>
            <span className="pf-contact-link">
              <MapPin size={16} /> Bengaluru, India
            </span>
          </div>
        </section>
      </main>

      <footer className="pf-footer">
        <div className="pf-container pf-footer-row">
          <span>C Srinivas Gowda — built 2026</span>
          <span>listen → route → answer</span>
        </div>
      </footer>
    </div>
  );
}
