import "./css/Article18Section24FlyerV2.css";

export default function Article18Section24FlyerV2() {
  return (
    <main className="clear-path-flyer">
      <header className="clear-path-flyer__header">
        <div className="clear-path-flyer__contract">
          <strong>UPS</strong>
          <span>National Master Agreement</span>
        </div>

        <div className="clear-path-flyer__article">
          Article 18 · Section 24
        </div>
      </header>

      <section className="clear-path-flyer__hero">
        <p>A safe work area includes</p>
        <h1>
          A clear
          <br />
          path.
        </h1>
      </section>

      <section className="clear-path-flyer__quote">
        <div className="clear-path-flyer__quote-label">The contract says</div>
        <blockquote>
          “The Employer and Union shall monitor conditions in and around all
          work areas including but not limited to sort aisles and areas where
          vehicles are loaded or unloaded to ensure that temporary impediments
          created by placed or fallen packages are minimized.”
        </blockquote>
      </section>

      <section className="clear-path-flyer__action">
        <p>You have the right to</p>
        <h2>Clear your egress.</h2>
      </section>

      <footer className="clear-path-flyer__footer">
        <span>Walkways</span>
        <i aria-hidden="true" />
        <span>Sort aisles</span>
        <i aria-hidden="true" />
        <span>Load areas</span>
        <strong>Keep them clear.</strong>
      </footer>
    </main>
  );
}
