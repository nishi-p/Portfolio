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
          <li className="work-item work-item-soon">More to come...</li>
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
    </section>
  )
}
