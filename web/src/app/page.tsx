export default function Home() {
  return (
    <div>
      <section className="intro">
        <div>
          <h1>An archive of things I build, think & notice.</h1>
          <p>Software Engineer</p>
          <p className="cities">
            <span>Mumbai</span>
            <span className="cities-line"></span>
            <span>Seattle</span>
          </p>
        </div>
        <div className="intro-photo">
          <img src="/seattle.png" alt="Seattle" />
          <p className="photo-note">Seattle</p>
          <p className="sticky-note">A quieter internet please.</p>
        </div>
        <a href="#work" className="scroll-cue">
          Scroll
          <span className="scroll-cue-arrow">↓</span>
        </a>
      </section>
      <section id="work">
        <a href="/project"> Project</a>
      </section>
      <section id="about">
        <p>Avalara</p>
        <a href="mailto:niship007@gmail.com">niship007@gmail.com</a>
        <a href="https://github.com/niship007"> GitHub</a>
        <a href="https://linkedin.com/in/niship007"> LinkedIn</a>
      </section>
    </div>
  )
}
