import "./css/Article18OutOfServiceFlyerV3.css";

export default function Article18OutOfServiceFlyerV3() {
  return (
    <main className="stop-report-flyer">
      <header className="stop-report-flyer__header">
        <div className="stop-report-flyer__contract">
          <strong>UPS</strong>
          <span>National Master Agreement</span>
        </div>

        <div className="stop-report-flyer__article">
          Article 18 · Section 2
        </div>
      </header>

      <section className="stop-report-flyer__hero">
        <p>Defective equipment?</p>
        <h1>
          Stop.
          <br />
          Report.
        </h1>
      </section>

      <section className="stop-report-flyer__quote">
        <div className="stop-report-flyer__quote-label">The contract says</div>
        <blockquote>
          “Employees shall immediately, or at the end of their shifts, report
          all known defects of equipment on a suitable form furnished by the
          Employer.”
        </blockquote>
      </section>

      <section className="stop-report-flyer__action">
        <p>If you believe it is unsafe</p>
        <h2>Stop using it.</h2>
        <span>Notify a supervisor immediately.</span>
      </section>

      <section className="stop-report-flyer__document">
        <strong>Document the unsafe condition.</strong>
        <p>
          Use the safety concerns log on the bulletin board opposite the
          bathrooms in the southwest hallway between PDs 4 and 5.
        </p>
      </section>

      <footer className="stop-report-flyer__footer">
        <span>See it</span>
        <i aria-hidden="true" />
        <span>Stop it</span>
        <i aria-hidden="true" />
        <span>Report it</span>
        <strong>Report every known defect.</strong>
      </footer>
    </main>
  );
}
