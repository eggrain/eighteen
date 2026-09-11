import "./css/Article18OutOfServiceFlyer.css";

export default function Article18OutOfServiceFlyer() {
  return (
    <main className="outservice-flyer">
      <header className="outservice-flyer__masthead">
        <div className="outservice-flyer__agreement">
          <span>UPS</span>
          <strong>NATIONAL MASTER AGREEMENT</strong>
        </div>
        <div className="outservice-flyer__reference">
          ARTICLE 18 <span>/</span> SECTION 2
        </div>
      </header>

      <section className="outservice-flyer__hero">
        <div className="outservice-flyer__hero-copy">
          <span>KNOWN DEFECT?</span>
          <h1>STOP<br />&amp; REPORT</h1>
        </div>

        <div className="outservice-flyer__tag" aria-label="Out of service equipment">
          <div className="outservice-flyer__tag-hole" aria-hidden="true" />
          <span>OUT OF</span>
          <strong>SERVICE</strong>
          <small>EQUIPMENT</small>
        </div>
      </section>

      <section className="outservice-flyer__contract">
        <div className="outservice-flyer__contract-label">THE CONTRACT SAYS</div>
        <blockquote>
          Employees shall immediately, or at the end of their shifts, report all
          known defects of equipment on a suitable form furnished by the
          Employer.
        </blockquote>
      </section>

      <section className="outservice-flyer__actions" aria-label="What to do">
        <article>
          <span className="outservice-flyer__step">01</span>
          <div>
            <h2>REPORT EVERY DEFECT</h2>
            <p>Report every known equipment defect.</p>
          </div>
        </article>

        <article>
          <span className="outservice-flyer__step">02</span>
          <div>
            <h2>IF YOU BELIEVE IT IS UNSAFE</h2>
            <p>
              If the defect makes the equipment unsafe,
              stop using it and notify a supervisor immediately.
            </p>
          </div>
        </article>

        <article className="outservice-flyer__location">
          <span className="outservice-flyer__step">03</span>
          <div>
            <h2>DOCUMENT IT</h2>
            <p>
              Document the unsafe condition on the safety concerns log form on the bulletin board
               opposite the bathrooms in the hallway at the southwest corner (between PDs 4 and 5).
            </p>
          </div>
        </article>
      </section>

      <footer className="outservice-flyer__footer">
        <span>SEE IT</span>
        <i aria-hidden="true">→</i>
        <span>STOP IT</span>
        <i aria-hidden="true">→</i>
        <span>REPORT IT</span>
      </footer>
    </main>
  );
}
