import React from 'react';
import './css/Article44Section1.css';

export default function Article44Section1() {
  return (
    <main className="a44-page">
      <div className="a44-frame">
        <header className="a44-header">
          <div className="a44-contract">UPS NATIONAL MASTER AGREEMENT</div>
          <div className="a44-reference">ARTICLE 44 <span>·</span> SECTION 1</div>
        </header>

        <section className="a44-intro" aria-labelledby="a44-title">
          <p className="a44-kicker">ON-AREA PACKAGE HANDLING</p>
          <h1 id="a44-title">OVER <span>70</span> POUNDS?</h1>
          <p className="a44-deck">You can ask for help handling it.</p>
        </section>

        <section className="a44-quote" aria-label="Contract language">
          <div className="a44-quote-label">THE CONTRACT SAYS</div>
          <blockquote>
            No employee shall be required to handle any over-70-pound package alone if it is the employee's good-faith belief that such handling would be a safety hazard to themselves.
          </blockquote>
        </section>

        <footer className="a44-footer">
          <div className="a44-action">DON’T HANDLE IT ALONE</div>
          <p>If you believe handling the package alone would be unsafe, tell a supervisor and request help.</p>
          <div className="a44-rule" />
          <div className="a44-footer-ref">ARTICLE 44 · SECTION 1 <span>ON-AREA PACKAGE HANDLING</span></div>
        </footer>
      </div>
    </main>
  );
}
