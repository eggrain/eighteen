import React from 'react';
import './css/Over70V2.css';

export default function Over70V2() {
  return (
    <main className="over70v2-page">
      <header className="over70v2-topline">
        <span>UPS NATIONAL MASTER AGREEMENT</span>
        <span>ARTICLE 44 / SECTION 1</span>
      </header>

      <section className="over70v2-hero" aria-labelledby="over70v2-title">
        <div className="over70v2-rule" />
        <p className="over70v2-section">ON-AREA PACKAGE HANDLING</p>
        <h1 id="over70v2-title">
          <span>OVER</span>
          <strong>70</strong>
          <span>POUNDS<span className="over70v2-question">?</span></span>
        </h1>
        <div className="over70v2-hero-foot">
          <span>YOU CAN ASK FOR HELP.</span>
          <span className="over70v2-square" aria-hidden="true" />
        </div>
      </section>

      <section className="over70v2-contract" aria-label="Contract language">
        <div className="over70v2-label"><span className="over70v2-label-square" /> THE CONTRACT SAYS</div>
        <blockquote>No employee shall be required to handle any over 70 pound packages alone if it is the employee's good faith belief that such handling would be a safety hazard to themselves.</blockquote>
      </section>

      <footer className="over70v2-footer">
        <div className="over70v2-footer-rule" />
        <strong>DON’T HANDLE IT ALONE.</strong>
        <p>If you believe it would be unsafe to handle the package alone, tell a supervisor and request help.</p>
        <div className="over70v2-bottomline">
          <span>ARTICLE 44 / SECTION 1</span>
          <span>ON-AREA PACKAGE HANDLING</span>
        </div>
      </footer>
    </main>
  );
}
