import "./css/Article44Over150Flyer.css";

export default function Article44Over150Flyer() {
  return (
    <main className="over150-flyer">
      <div className="over150-flyer__hazard-stripe" aria-hidden="true" />

      <header className="over150-flyer__header">
        <div className="over150-flyer__contract-mark">
          <span>UPS TEAMSTERS</span>
          <strong>CONTRACT</strong>
        </div>
        <div className="over150-flyer__reference">
          ARTICLE 44 <span>§</span> SECTION 3
        </div>
      </header>

      <section className="over150-flyer__hero">
        <p className="over150-flyer__over">OVER</p>
        <div className="over150-flyer__weight" aria-label="150 pounds">
          <span className="over150-flyer__number">150</span>
          <span className="over150-flyer__unit">LB</span>
        </div>
        <div className="over150-flyer__slash" aria-hidden="true" />
      </section>

      <section className="over150-flyer__verdict">
        <span className="over150-flyer__verdict-small">THEN IT IS</span>
        <strong>NOT GETTING<br />PICKED UP.</strong>
      </section>

      <section className="over150-flyer__quote-panel">
        <span className="over150-flyer__quote-label">THE ACTUAL CONTRACT LANGUAGE</span>
        <blockquote>
          Packages over 150 pounds shall not be picked up.
        </blockquote>
      </section>

      <footer className="over150-flyer__footer">
        <span>INSIDE PACKAGE HANDLING PROCEDURES</span>
        <strong>I MADE THIS ONE FOR FUN</strong>
      </footer>

      <div className="over150-flyer__hazard-stripe over150-flyer__hazard-stripe--bottom" aria-hidden="true" />
    </main>
  );
}
