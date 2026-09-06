const roles = [
  {
    dates: "2022 — Present",
    company: "Avalara",
    title: "Senior Software Engineer",
    summary:
      "I build and ship production software at Avalara.",
  },
  {
    dates: "2021",
    company: "Avalara",
    title: "Software Engineer Intern",
    summary:
      "I interned on the Connectors team at Avalara and worked on ETL pipelines.",
  },
  {
    dates: "2017 — 2018",
    company: "Patu IoT Solutions Private Limited",
    title: "IoT Solutions Engineer",
    summary:
      "I worked as an IoT solutions engineer, helping design and deliver connected-device solutions.",
  },
]

export default function ExperienceSection() {
  return (
    <section id="work">
      <p className="work-section-num">02</p>
      <h2>Work</h2>
      <p className="work-lede">A short timeline of where I have been.</p>
      <ol className="timeline">
        {roles.map((role) => (
          <li key={`${role.company}-${role.dates}`} className="timeline-item">
            <p className="timeline-dates">{role.dates}</p>
            <div className="timeline-body">
              <h3>
                {role.title}
                <span className="timeline-company"> · {role.company}</span>
              </h3>
              <p>{role.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
