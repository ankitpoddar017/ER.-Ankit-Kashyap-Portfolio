import React, { useEffect, useState } from "react";
import "./style.css";
import profilePhoto from "../../assets/profile-photo.png";

const roles = ["Mathematics Teacher","Computer Science","Python Developer","Accountant"];

export default function App() {
  const [role, setRole] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0, deleting = false, timer;
    const run = () => {
      const word = roles[role];
      setText(word.slice(0, i));
      if (!deleting && i < word.length) { i++; timer = setTimeout(run, 80); }
      else if (!deleting) { deleting = true; timer = setTimeout(run, 1400); }
      else if (i > 0) { i--; timer = setTimeout(run, 40); }
      else { deleting = false; setRole((role + 1) % roles.length); timer = setTimeout(run, 250); }
    };
    run();
    return () => clearTimeout(timer);
  }, [role]);

  return (
    <div className="react-app">
      <header className="nav">
        <a className="brand" href="#home">AKP<span>.</span></a>
        <nav><a href="#about">About</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#education">Education</a><a href="#contact">Contact</a></nav>
        <a className="btn btn-small" href="mailto:ankitpoddar017@gmail.com">Hire Me</a>
      </header>
      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">PORTFOLIO • CV • 2026</p>
            <h1>Ankit Kumar<br/><span>Poddar</span></h1>
            <p className="hero-role">{text}<span className="cursor">|</span></p>
            <p className="hero-text">Motivated and versatile professional with teaching, computer science, Python, accounting, business operations and customer-service experience.</p>
            <div className="hero-actions"><a className="btn" href="#contact">Let's Connect →</a><a className="btn btn-ghost" href="#about">Explore CV</a></div>
          </div>
          <div className="hero-card"><div className="profile-orb"><img src={profilePhoto} alt="Ankit Kumar Poddar" /></div><div className="floating-chip chip-one">Python</div><div className="floating-chip chip-two">Computer Science</div><div className="floating-chip chip-three">Mathematics</div></div>
        </section>

        <section id="about" className="section">
          <div className="section-head"><p className="eyebrow">01 / ABOUT</p><h2>Professional Profile</h2></div>
          <div className="about-grid"><article className="glass"><p>Motivated and versatile Mathematics Teacher with 1–3 years of teaching experience, Bachelor’s-level education, and practical knowledge of Mathematics, Computer Science, Accounting, computer applications and business operations.</p><p>Confident communicator who explains concepts clearly, supports different learning abilities, and works professionally.</p></article><aside className="contact-card glass"><p><span>Location</span>Urlabari-7, Morang, Nepal</p><p><span>Phone</span><a href="tel:9702642065">9702642065</a></p><p><span>Email</span><a href="mailto:ankitpoddar017@gmail.com">ankitpoddar017@gmail.com</a></p></aside></div>
        </section>

        <section id="skills" className="section">
          <div className="section-head"><p className="eyebrow">02 / EXPERTISE</p><h2>Skills & Competencies</h2></div>
          <div className="skill-grid">
            {[
              ["01","Python Development","Basic / Intermediate Python and web-development fundamentals.",76],
              ["02","Computer Science","Computer fundamentals, applications, Internet, email and digital tools.",84],
              ["03","Mathematics","Optional & compulsory Mathematics, problem solving and exam preparation.",92],
              ["04","Accounting","Tally, Excel, transactions, cash/expense records and inventory documentation.",72],
              ["05","Business Operations","Sales, purchasing, inventory, customer service and record keeping.",79],
              ["06","Communication","Nepali native; English and Hindi professional working proficiency.",88]
            ].map(([n,t,d,w]) => <div className="skill glass" key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p><div className="meter"><i style={{width:`${w}%`}}/></div></div>)}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-head"><p className="eyebrow">03 / EXPERIENCE</p><h2>Professional Journey</h2></div>
          <div className="timeline">
            <article className="timeline-item"><span className="dot"></span><div className="glass"><small>1–3 YEARS • NEPAL</small><h3>Mathematics Teacher</h3><ul><li>Taught Mathematics using clear, practical and easy-to-understand explanations.</li><li>Strengthened students’ concepts and problem-solving abilities.</li><li>Prepared lessons, exercises, revision materials and examination practice.</li><li>Identified learning difficulties and provided individual guidance.</li></ul></div></article>
            <article className="timeline-item"><span className="dot"></span><div className="glass"><small>BUSINESS & PRACTICAL EXPERIENCE</small><h3>Business & Computer Support</h3><ul><li>Managed day-to-day business activities and customer interactions.</li><li>Worked with computer applications and digital business tools.</li><li>Provided computer-related training and practical guidance.</li></ul></div></article>
            <article className="timeline-item"><span className="dot"></span><div className="glass"><small>ACCOUNTING</small><h3>Accountant</h3><ul><li>Daily transaction, cash and expense records.</li><li>Sales & purchase entries; inventory records.</li><li>Excel-based calculations and basic accounting software.</li></ul></div></article>
          </div>
        </section>

        <section id="education" className="section"><div className="section-head"><p className="eyebrow">04 / EDUCATION</p><h2>Academic Background</h2></div><div className="edu-grid"><article className="edu glass"><span className="year">RUNNING</span><h3>Bachelor's in Business Studies</h3><p>Morang Model College — Urlabari, Morang, Nepal</p><strong>Fourth Year Running</strong></article><article className="edu glass"><span className="year">5TH SEMESTER</span><h3>Computer Engineering</h3><p>Manipal University — Karnataka, Bangalore, India</p><strong>3rd Year</strong></article></div></section>

        <section className="section"><div className="section-head"><p className="eyebrow">05 / VALUE</p><h2>Why Hire Me?</h2></div><div className="pill-wrap">{["Strong Mathematics Background","Teaching Experience","Bachelor’s Degree","Computer & Technology Skills","Accounting Knowledge","Business Experience","Confident Communication","Adaptable","Responsible","Quick Learner"].map(x=><span key={x}>{x}</span>)}</div></section>

        <section id="contact" className="section contact"><div className="contact-panel glass"><p className="eyebrow">06 / CONTACT</p><h2>Let's build something useful.</h2><p>Available for opportunities involving Mathematics, Computer Science, Python development, computer applications, accounting and business support.</p><a className="btn" href="mailto:ankitpoddar017@gmail.com">ankitpoddar017@gmail.com →</a><p className="phone">☎ 9702642065</p></div></section>
      </main>
      <footer><span>© 2026 Ankit Kumar Poddar</span><span>Animated CV Portfolio</span></footer>
    </div>
  );
}
