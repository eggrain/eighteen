import "./css/Article18OutOfServiceFlyerV2.css";

export default function Article18OutOfServiceFlyer() {
  return (
    <main className="defect-flyer">
      <header className="defect-flyer__header">
        <p className="defect-flyer__agreement">
          <strong>UPS</strong>
          <span>National Master Agreement</span>
        </p>

        <p className="defect-flyer__reference">
          Article 18 <span aria-hidden="true">/</span> Section 2
        </p>
      </header>

      <section className="defect-flyer__hero">
        <p className="defect-flyer__eyebrow">Known defect?</p>
        <h1>
          Stop <span>&amp;</span> report.
        </h1>
        <p className="defect-flyer__subject">Out of service equipment</p>
      </section>

      <section className="defect-flyer__contract">
        <p className="defect-flyer__label">The contract says</p>
        <blockquote>
          “Employees shall immediately, or at the end of their shifts, report
          all known defects of equipment on a suitable form furnished by the
          Employer.”
        </blockquote>
      </section>

      <section className="defect-flyer__steps" aria-label="What to do">
        <article className="defect-flyer__step">
          <span className="defect-flyer__number">01</span>
          <div>
            <h2>Report every defect</h2>
            <p>Report every known equipment defect.</p>
          </div>
        </article>

        <article className="defect-flyer__step">
          <span className="defect-flyer__number">02</span>
          <div>
            <h2>If you believe it is unsafe</h2>
            <p>
              If the defect makes the equipment unsafe, stop using it and
              notify a supervisor immediately.
            </p>
          </div>
        </article>

        <article className="defect-flyer__step">
          <span className="defect-flyer__number">03</span>
          <div>
            <h2>Document it</h2>
            <p>
              Document the unsafe condition on the safety concerns log form on
              the bulletin board opposite the bathrooms in the hallway at the
              southwest corner (between PDs 4 and 5).
            </p>
          </div>
        </article>
      </section>

      <footer className="defect-flyer__footer" aria-label="See it, stop it, report it">
        <span>See it</span>
        <i aria-hidden="true" />
        <span>Stop it</span>
        <i aria-hidden="true" />
        <span>Report it</span>
      </footer>
    </main>
  );
}
