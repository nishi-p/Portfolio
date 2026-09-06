import ExperienceSection from "./ExperienceSection"
import WorkSection from "./WorkSection"

export default function Home() {
  return (
    <div>
      <section id="home" className="intro">
        <div>
          <p className="work-section-num">01</p>
          <h1>An archive of things I build, think & notice.</h1>
          <p>Software Engineer</p>
          {/* <p className="cities">
            <span>Mumbai</span>
            <span className="cities-line"></span>
            <span>Seattle</span>
          </p> */}
        </div>
        <div className="intro-photo">
          <img src="/seattle1.png" alt="Seattle" />
          <p className="photo-note">Seattle</p>
          <p className="sticky-note">A quieter internet please.</p>
        </div>
        <a href="#work" className="scroll-cue">
          Scroll
          <span className="scroll-cue-arrow">↓</span>
        </a>
      </section>
      <ExperienceSection />
      <WorkSection />
      <section id="scrapbook">
        <p className="work-section-num">04</p>
        <h2>Scrapbook</h2>
        <p className="work-lede">Things I will pin here.</p>
        <ul className="scrap-index">
          <li>Articles</li>
          <li>Photos</li>
          <li>Conferences</li>
          <li>Education</li>
          <li>Events attended</li>
          <li>Awards</li>
          <li>Books and movies</li>
          <li>Public policy discussion</li>
          <li>Media events and articles</li>
          <li>Recognition</li>
          <li>Papers published</li>
          <li>Videos</li>
        </ul>
        <div className="scrap-note">
          <p>To be added</p>
        </div>
        <a href="#about" className="scroll-cue">
          Scroll
          <span className="scroll-cue-arrow">↓</span>
        </a>
      </section>
      <section id="about">
        <div className="about-copy">
          <p className="work-section-num">05</p>
          <h2>About</h2>
          <div className="about-bio">
            <p className="about-lead">
              <strong>I am Nishi.</strong>
            </p>
            <p>
              A software engineer interested in technology, numbers, books, movies
              and public-policy.
            </p>
            <div className="about-links">
              <a href="mailto:niship007@gmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z" />
                </svg>
              </a>
              <a href="https://github.com/niship007" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.22 3.38 9.64 8.08 11.2.59.12.8-.26.8-.57v-2.2c-3.29.73-3.98-1.42-3.98-1.42-.53-1.39-1.3-1.76-1.3-1.76-1.07-.75.08-.73.08-.73 1.18.08 1.8 1.24 1.8 1.24 1.05 1.84 2.76 1.31 3.43 1 .1-.8.41-1.31.74-1.61-2.62-.3-5.38-1.34-5.38-5.97 0-1.32.46-2.4 1.22-3.24-.12-.3-.53-1.53.12-3.18 0 0 1-.33 3.3 1.23a11.2 11.2 0 0 1 6 0c2.3-1.56 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.76.84 1.22 1.92 1.22 3.24 0 4.64-2.76 5.66-5.39 5.96.42.37.8 1.1.8 2.22v3.29c0 .31.21.7.81.57A11.5 11.5 0 0 0 23.5 12.3 11.5 11.5 0 0 0 12 .5Z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/niship007" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12M7.12 20.45H3.56V9h3.56ZM22.23 0H1.77A1.77 1.77 0 0 0 0 1.76v20.48A1.77 1.77 0 0 0 1.77 24h20.46A1.78 1.78 0 0 0 24 22.24V1.76A1.78 1.78 0 0 0 22.23 0" />
                </svg>
              </a>
              <a href="https://x.com/nishiPiiiiii" target="_blank" rel="noopener noreferrer" aria-label="X">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.9 1.5h3.7l-8.1 9.2L24 22.5h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.9L0 1.5h7.6l5.2 6.9ZM17.6 20.3h2L6.5 3.6H4.3Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="about-shot">
          <div className="about-photo">
            <img src="/self1.png" alt="Nishi" />
            <p className="about-photo-note">me, circa 2026</p>
          </div>
        </div>
      </section>
    </div>
  )
}
