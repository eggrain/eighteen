import "./css/Article18Section24Flyer.css";

export default function Article18Section24Flyer() {
  return (
    <main className="egress-flyer">
      <aside className="egress-flyer__rail" aria-label="Contract reference">
      <div className="egress-flyer__rail-label">NATIONAL MASTER UPS AGREEMENT</div>

        <div className="egress-flyer__rail-reference">
          ARTICLE 18
          <span>SECTION 24</span>
        </div>
      </aside>

      <section className="egress-flyer__content">
        <header className="egress-flyer__header">
          <p className="egress-flyer__eyebrow">A SAFE WORK AREA INCLUDES</p>
          <h1>
            A CLEAR
            <span>PATH</span>
          </h1>
        </header>

        <div className="egress-flyer__route" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="egress-flyer__quote-card">
          <div className="egress-flyer__contract-tag">THE CONTRACT SAYS</div>
          <blockquote>
            The Employer <strong>and Union</strong> shall monitor conditions in
            and around all work areas including but not limited to sort aisles
            and areas where vehicles are loaded or unloaded to ensure that
            temporary impediments created by placed or fallen packages are
            minimized.
          </blockquote>
        </div>

        <div className="egress-flyer__message">
          <div className="egress-flyer__message-icon" aria-hidden="true">
            <span />
          </div>
          <p>
            YOU HAVE THE RIGHT TO
            <strong>CLEAR YOUR EGRESS</strong>
          </p>
        </div>

        <footer className="egress-flyer__footer">
          <span>KEEP WALKWAYS · SORT AISLES · LOAD AREAS CLEAR</span>
          <span aria-hidden="true">→</span>
        </footer>
      </section>
    </main>
  );
}