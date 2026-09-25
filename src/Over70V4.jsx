import React from 'react';
import './css/Over70V4.css';

export default function Over70V4() {
  return (
    <main className="over70v4-page">
      <div className="over70v4-corner" aria-hidden="true">44</div>

      <header className="over70v4-masthead">
        <span>UPS NATIONAL<br />MASTER AGREEMENT</span>
        <span className="over70v4-masthead-right">ARTICLE 44<br />SECTION 1</span>
      </header>

      <section className="over70v4-hero" aria-labelledby="over70v4-title">
        <div className="over70v4-sideword" aria-hidden="true">PACKAGE HANDLING</div>
        <p className="over70v4-section">ON-AREA PACKAGE HANDLING</p>
        <h1 id="over70v4-title">
          <span className="over70v4-over">OVER</span>
          <span className="over70v4-number">70<span className="over70v4-burst" aria-hidden="true">!</span></span>
          <span className="over70v4-pounds">POUNDS<span>?</span></span>
        </h1>
        <div className="over70v4-hero-tag">GOOD-FAITH SAFETY CONCERN? ASK FOR HELP.</div>
      </section>

      <div className="over70v4-stripes" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /></div>

      <section className="over70v4-quote" aria-label="Contract language">
        <div className="over70v4-quote-top"><span>THE CONTRACT SAYS</span><span className="over70v4-star" aria-hidden="true">✳</span></div>
        <blockquote>No employee shall be required to handle any over 70 pound packages alone if it is the employee's good faith belief that such handling would be a safety hazard to themselves.</blockquote>
        <div className="over70v4-quote-base"><span>GOOD FAITH BELIEF</span><span>SAFETY HAZARD</span></div>
      </section>

      <footer className="over70v4-footer">
        <div className="over70v4-footer-callout">ASK<br />FOR<br /><span>HELP.</span></div>
        <div className="over70v4-footer-detail">
          <p>If you believe handling the package alone would be unsafe, tell a supervisor and request help.</p>
          <div>ARTICLE 44 / SECTION 1 <span>·</span> ON-AREA PACKAGE HANDLING</div>
        </div>
      </footer>
    </main>
  );
}
