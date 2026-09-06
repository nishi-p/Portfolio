"use client"

import { useState } from "react"

const projects = [
  {
    id: "ocr-translation",
    title: "OCR with Translation",
    kind: "APP",
    year: "2026",
    subtitle: "Extract text from images and translate it",
    stack: ["PYTHON"],
    summary:
      "An app that reads text from images and translates it into another language.",
    status: "ACTIVE",
    href: "https://github.com/nishi-p",
    note: "Words travel further when you can read them.",
  },
  {
    id: "kv-store",
    title: "Distributed Key-Value Store",
    kind: "SYSTEM",
    year: "2026",
    subtitle: "Put, get, and stay consistent across machines",
    stack: ["GO"],
    summary:
      "A distributed key-value store for fast reads and writes across more than one node.",
    status: "ACTIVE",
    href: "https://github.com/nishi-p",
    note: "Simple storage, hard promises.",
  },
  {
    id: "financial-ledger",
    title: "Financial Ledger",
    kind: "SYSTEM",
    year: "2026",
    subtitle: "Record and track money as it moves",
    stack: ["PYTHON"],
    summary:
      "A ledger for recording transactions and keeping a clear history of money in and out.",
    status: "ACTIVE",
    href: "https://github.com/nishi-p",
    note: "Count it twice.",
  },
  {
    id: "content-recommendation",
    title: "Content Recommendation Platform",
    kind: "SYSTEM",
    year: "2026",
    subtitle: "Suggest the next thing worth reading or watching",
    stack: ["PYTHON"],
    summary:
      "A platform that ranks and recommends content based on what a person has already engaged with.",
    status: "ACTIVE",
    href: "https://github.com/nishi-p",
    note: "Taste is a system.",
  },
  {
    id: "ai-agent-platform",
    title: "AI Agent Platform",
    kind: "SYSTEM",
    year: "2026",
    subtitle: "Run agents that can take steps, not just answers",
    stack: ["PYTHON"],
    summary:
      "A platform for building and running AI agents that plan, call tools, and finish a task.",
    status: "ACTIVE",
    href: "https://github.com/nishi-p",
    note: "Do the next step.",
  },
  {
    id: "robot-helper",
    title: "Robot Helper",
    kind: "APP",
    year: "2026",
    subtitle: "A helper that can take a task and do the next step",
    stack: ["PYTHON"],
    summary:
      "A robot helper that takes a request and carries out the work around it.",
    status: "ACTIVE",
    href: "https://github.com/nishi-p",
    note: "Ask, then it moves.",
  },
  {
    id: "routine",
    title: "Routine",
    kind: "IOS",
    year: "2026",
    subtitle: "A shipped iOS app, live and monetized",
    stack: ["SWIFT"],
    summary:
      "An iOS app for daily routines. This one is in the store and making money — not a personal demo.",
    status: "SHIPPED",
    href: "https://github.com/nishi-p",
    note: "Shipped beats perfect.",
  },
  {
    id: "outfitter",
    title: "Outfitter",
    kind: "IOS",
    year: "2026",
    subtitle: "A shipped iOS outfit app with AI chat, live and monetized",
    stack: ["SWIFT"],
    summary:
      "An iOS app for outfits with an AI chat. This one is in the store and making money — not a personal demo.",
    status: "SHIPPED",
    href: "https://github.com/nishi-p",
    note: "What should I wear?",
  },
  {
    id: "lilt",
    title: "Lilt",
    kind: "IOS",
    year: "2026",
    subtitle: "A shipped iOS app for clearer speech, live and monetized",
    stack: ["SWIFT"],
    summary:
      "An iOS app that helps you improve your accent. This one is in the store and making money — not a personal demo.",
    status: "SHIPPED",
    href: "https://github.com/nishi-p",
    note: "Say it so they hear you.",
  },
]

export default function WorkSection() {
  const [selectedId, setSelectedId] = useState(projects[0].id)
  const selected = projects.find((project) => project.id === selectedId) ?? projects[0]
  const selectedNumber = String(
    projects.findIndex((project) => project.id === selected.id) + 1,
  ).padStart(2, "0")

  return (
    <section id="projects">
      <div className="work-index">
        <p className="work-section-num">03</p>
        <h2>Selected Projects</h2>
        <p className="work-lede">Systems, experiments and ideas in progress.</p>
        <ul className="work-list">
          {projects.map((project, i) => {
            const number = String(i + 1).padStart(2, "0")
            const active = project.id === selected.id

            return (
              <li key={project.id}>
                <button
                  type="button"
                  className={active ? "work-item is-active" : "work-item"}
                  aria-pressed={active}
                  onClick={() => setSelectedId(project.id)}
                >
                  <span className="work-item-num">{number}</span>
                  <span className="work-item-title">{project.title}</span>
                  {project.status === "SHIPPED" ? (
                    <span className="work-item-mark">Shipped</span>
                  ) : null}
                  <span className="work-item-arrow">→</span>
                </button>
              </li>
            )
          })}
          <li>
            <a
              className="work-item work-item-github"
              href="https://github.com/niship007"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="More at GitHub"
            >
              <span>more at</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.22 3.38 9.64 8.08 11.2.59.12.8-.26.8-.57v-2.2c-3.29.73-3.98-1.42-3.98-1.42-.53-1.39-1.3-1.76-1.3-1.76-1.07-.75.08-.73.08-.73 1.18.08 1.8 1.24 1.8 1.24 1.05 1.84 2.76 1.31 3.43 1 .1-.8.41-1.31.74-1.61-2.62-.3-5.38-1.34-5.38-5.97 0-1.32.46-2.4 1.22-3.24-.12-.3-.53-1.53.12-3.18 0 0 1-.33 3.3 1.23a11.2 11.2 0 0 1 6 0c2.3-1.56 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.76.84 1.22 1.92 1.22 3.24 0 4.64-2.76 5.66-5.39 5.96.42.37.8 1.1.8 2.22v3.29c0 .31.21.7.81.57A11.5 11.5 0 0 0 23.5 12.3 11.5 11.5 0 0 0 12 .5Z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <article className="work-card">
        <p className="work-card-note">{selected.note}</p>
        <div className="work-card-top">
          <p className="work-card-meta">
            <span>
              {selectedNumber} / {selected.kind}
            </span>
            <span>{selected.year}</span>
          </p>
          <h3>{selected.title}</h3>
          <p className="work-card-sub">{selected.subtitle}</p>
          <ul className="work-card-stack">
            {selected.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="work-card-bottom">
          <p className="work-card-summary">{selected.summary}</p>
          <p className="work-card-status">
            Status <span className="work-card-dot"></span> {selected.status}
          </p>
          <a
            href={selected.href}
            className="work-card-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>
      </article>
      <a href="#scrapbook" className="scroll-cue">
        Scroll
        <span className="scroll-cue-arrow">↓</span>
      </a>
    </section>
  )
}
