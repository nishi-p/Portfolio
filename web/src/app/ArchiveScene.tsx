export default function ArchiveScene() {
  return (
    <div className="archive-scene" aria-hidden="true">
      <div className="archive-desk">
        <div className="archive-crt">
          <div className="archive-handle"></div>
          <div className="archive-bezel">
            <div className="archive-glass">
              <div className="archive-screen">
                <p className="archive-os">NISHI ARCHIVE SYSTEM v1.0</p>
                <div className="archive-screen-body">
                  <div className="archive-prompt">
                    <p className="archive-prompt-idle">INSERT DISK</p>
                    <p className="archive-prompt-read">READING DISK</p>
                    <p className="archive-cursor">
                      &gt; <span>_</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="archive-dials">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="archive-drive">
            <div className="archive-bay">
              <div className="archive-slot"></div>
            </div>
            <span className="archive-led"></span>
            <p className="archive-badge">NAS / 001</p>
          </div>
          <div className="archive-vents"></div>
          <div className="archive-keys">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="archive-insert">
          <div className="archive-sleeve"></div>
          <div className="archive-hand"></div>
          <div className="archive-floppy">
            <div className="archive-label">
              <p>NISHI</p>
              <p>ARCHIVE</p>
              <p>
                <span>001</span>
                <span>SEP 06 2026</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
