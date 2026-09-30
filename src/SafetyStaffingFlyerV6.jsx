import React from 'react';
import './css/SafetyStaffingFlyerV6.css';

export default function SafetyStaffingFlyerV6() {
  return (
    <main className="ssfv6">
      <section className="ssfv6-page ssfv6-front" aria-label="Flyer front: staffing and safety">
        <header className="ssfv6-top"><span>UPS NATIONAL MASTER AGREEMENT</span><span>ARTICLE 18 + ARTICLE 3</span></header>
        <div className="ssfv6-kicker">A SAFETY CONCERN WE SHARE</div>
        <h1>SAFE WORK<br /><em>TAKES PEOPLE.</em></h1>
        <div className="ssfv6-rule" />
        <div className="ssfv6-label">ARTICLE 18 · PREAMBLE</div>
        <blockquote>“The Employer and the Union agree that the safety of the employees and the general public is of utmost importance.”</blockquote>
        <blockquote className="ssfv6-quote-small">“The Employer and the Union have developed the following Sections and Subsections of this Agreement to respond to that <strong>mutual concern</strong> for safety.”</blockquote>
        <div className="ssfv6-band">SAFETY REQUIRES SUFFICIENT STAFFING.</div>
        <div className="ssfv6-label">ARTICLE 3 · SECTION 7</div>
        <blockquote className="ssfv6-quote-small">“The Employer agrees that the function of supervisors is the supervision of Employees and not the performance of the work of the employees they supervise.”</blockquote>
        <blockquote className="ssfv6-quote-small">“The Employer shall make every reasonable effort to maintain a sufficient workforce to staff its operations with bargaining unit employees.”</blockquote>
        <div className="ssfv6-conclusion"><strong>Supervisors are working every day.</strong> That raises a straightforward safety question: are enough bargaining unit employees staffed to do the work safely?</div>
        <footer className="ssfv6-footer"><span>TURN OVER →</span></footer>
      </section>

      <section className="ssfv6-page ssfv6-back" aria-label="Flyer back: safety concern reporting">
        <header className="ssfv6-top"><span>UPS NATIONAL MASTER AGREEMENT</span><span>ARTICLE 18 · PREAMBLE</span></header>
        <div className="ssfv6-kicker">MAKE REPORTING EASY</div>
        <h2>IF SAFETY IS OF<br /><em>UTMOST IMPORTANCE,</em><br />MAKE THE FORM EASY TO FIND.</h2>
        <div className="ssfv6-rule" />
        <blockquote>“The Employer and the Union agree that the safety of the employees and the general public is of utmost importance.”</blockquote>
        <div className="ssfv6-issue"><div className="ssfv6-label">THE CONCERN</div><p>The safety concerns form is posted in a less convenient location than the practical option: near the front entrance, where employees can see and access it as they arrive or leave.</p></div>
        <div className="ssfv6-action"><span>PUT THE FORM WHERE PEOPLE WILL SEE IT.</span><p>Move the safety concerns form near the front entrance. Make it easier to report hazards promptly, so concerns can be addressed before someone is hurt.</p></div>
        <div className="ssfv6-bottom-quote">“The Employer and the Union have developed the following Sections and Subsections of this Agreement to respond to that <strong>mutual concern</strong> for safety.”</div>
        <footer className="ssfv6-footer"><span>ARTICLE 18</span></footer>
      </section>
    </main>
  );
}
