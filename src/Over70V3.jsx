import React from 'react';
import './css/Over70V3.css';

export default function Over70V3() {
  return (
    <main className="over70v3-page">
      <div className="over70v3-topbar" aria-hidden="true" />

      <header className="over70v3-header">
        <span>UPS NATIONAL MASTER AGREEMENT</span>
        <span>ARTICLE 44 <b>/</b> SECTION 1</span>
      </header>

      <section className="over70v3-intro" aria-labelledby="over70v3-title">
        <div className="over70v3-intro-copy">
          <p className="over70v3-eyebrow">ON-AREA PACKAGE HANDLING</p>
          <h1 id="over70v3-title">OVER<br /><span>70</span> POUNDS<span className="over70v3-mark">?</span></h1>
        </div>
        <div className="over70v3-aside">
          <div className="over70v3-aside-rule" />
          <p>YOU CAN<br />ASK FOR<br /><strong>HELP.</strong></p>
        </div>
      </section>

      <div className="over70v3-divider" aria-hidden="true"><span /></div>

      <section className="over70v3-quote-section" aria-label="Contract language">
        <div className="over70v3-quote-heading">
          <span className="over70v3-label">THE CONTRACT SAYS</span>
          <span className="over70v3-quote-mark" aria-hidden="true">“</span>
        </div>
        <blockquote>No employee shall be required to handle any over 70 pound packages alone if it is the employee's good faith belief that such handling would be a safety hazard to themselves.</blockquote>
        <div className="over70v3-quote-end" aria-hidden="true" />
      </section>

      <footer className="over70v3-footer">
        <div className="over70v3-action"><span>DON’T HANDLE IT ALONE.</span><span className="over70v3-action-square" aria-hidden="true" /></div>
        <p>If you believe handling the package alone would be unsafe, tell a supervisor and request help.</p>
        <div className="over70v3-bottomline"><span>ARTICLE 44 / SECTION 1</span><span>ON-AREA PACKAGE HANDLING</span></div>
      </footer>
    </main>
  );
}
