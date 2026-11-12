"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, X, MoveUpRight } from "lucide-react";

const chapters = [
  ["01", "Perspective", "perspective"],
  ["02", "Foundation", "foundation"],
  ["03", "Selected Work", "work"],
  ["04", "Design Notes", "notes"],
  ["05", "Connect", "connect"],
] as const;

const projects = [
  { no: "01", category: "EVENT DESIGN & CUSTOMER EXPERIENCE", name: "Gather Cute", text: "Turning meaningful moments into considered experiences — from creative concepts and customer conversations to practical event planning.", tag: "Concept · Positioning · Client Experience", url: "https://gather-cute.vercel.app", image: "event" },
  { no: "02", category: "PROPERTY & INTERIOR BUSINESS", name: "Property Edit", text: "Exploring how a space can become more valuable through presentation, renovation thinking, marketing and the customer journey.", tag: "Property · Business · Communication", url: "https://property-edit.vercel.app", image: "property" },
  { no: "03", category: "DIGITAL PRODUCT & DEVELOPMENT", name: "Digital Experiments", text: "Learning by building: websites, digital concepts and AI-assisted workflows that connect technology with real-world needs.", tag: "Web · Technology · Experimentation", url: "https://github.com/otterandowlDD", image: "digital" },
] as const;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <main>
      <div className="reading-progress" style={{ width: `${progress}%` }} />
      <header className="site-header">
        <a className="wordmark" href="#top">KH<span>.</span></a>
        <span className="header-center">AN INDEPENDENT PERSONAL JOURNAL <span>—</span> VOL. 01 / 2026</span>
        <button className="menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={18}/> : <Menu size={18}/>} <span>{menuOpen ? "CLOSE" : "INDEX"}</span>
        </button>
      </header>
      {menuOpen && <nav className="mobile-index" aria-label="Journal index">{chapters.map(([n,label,id]) => <a key={id} href={`#${id}`} onClick={()=>setMenuOpen(false)}><small>{n}</small>{label}<ArrowUpRight size={17}/></a>)}</nav>}
      <section id="top" className="cover">
        <div className="cover-topline"><span>PERSONAL PORTFOLIO / EDITION 2026</span><span>BANGKOK, THAILAND</span></div>
        <div className="cover-graphic" role="img" aria-label="Atmospheric architectural study in warm stone and charcoal tones">
          <div className="cover-graphic-overlay"><span>THE ART OF<br/>NOTICING</span><span className="vertical-caption">AN ENGINEER'S EYE FOR DESIGN</span></div>
        </div>
        <div className="cover-bottom">
          <div><p className="eyebrow">ISSUE NO. 01 &nbsp; / &nbsp; A PERSONAL JOURNAL</p><h1>Khanittha<br/><em>Hemngern.</em></h1></div>
          <div className="cover-lede"><p>Engineering by profession.<br/>Design by passion.<br/>Curiosity across disciplines.</p><a href="#perspective" className="round-arrow" aria-label="Explore the journal"><ArrowDownRight size={26}/></a></div>
        </div>
        <div className="cover-footer"><span>ENGINEERING</span><span>DESIGN</span><span>BUSINESS</span><span>TECHNOLOGY</span><span>✳</span></div>
      </section>
      <div className="index-strip"><span>IN THIS ISSUE</span><div>{chapters.map(([n,label,id])=><a href={`#${id}`} key={id}><b>{n}</b> {label}</a>)}</div></div>

      <section id="perspective" className="section perspective">
        <div className="section-label"><span>01 / THE PERSPECTIVE</span><span>ABOUT THE AUTHOR</span></div>
        <div className="perspective-grid">
          <div><p className="eyebrow">A NOTE ON CURIOSITY</p><h2>Beyond<br/>a single<br/><em>discipline.</em></h2></div>
          <div className="essay"><p className="dropcap">An engineer by profession. A multidisciplinary thinker by curiosity. A design enthusiast at heart.</p><p>For more than nine years, my professional world has been shaped by civil engineering — understanding constraints, interpreting drawings, evaluating costs and helping complex projects move forward.</p><p>But curiosity rarely stays within one discipline. Alongside engineering, I explore business, marketing, branding, digital products and technology through practical, independent projects.</p><p>Interior design holds a particular fascination. The subtle relationship between materials and light. The confidence of a carefully considered proportion. The craftsmanship that makes an object worth keeping.</p><p className="hand-note">Different disciplines.<br/>One curious mind.</p></div>
        </div>
      </section>

      <section className="quote-break"><span className="quote-mark">“</span><blockquote>Good design isn't just something to look at. It's something to <em>notice, understand, and experience.</em></blockquote><span className="quote-credit">A PERSONAL OBSERVATION &nbsp;—&nbsp; KH</span></section>

      <section id="foundation" className="section foundation">
        <div className="section-label"><span>02 / THE FOUNDATION</span><span>ENGINEERING / COMMERCIAL THINKING</span></div>
        <div className="two-column">
          <div><p className="eyebrow">THE PROFESSIONAL FOUNDATION</p><h2>Built on<br/><em>precision.</em></h2><div className="foundation-stats"><strong>9+</strong><span>YEARS OF CIVIL<br/>ENGINEERING EXPERIENCE</span></div></div>
          <div className="foundation-copy"><p>Engineering has taught me to see more than the finished object: the decisions, systems, people and resources required to make it possible.</p><div className="skill-line"><span>01</span><div><h3>Technical understanding</h3><p>Drawings, specifications, feasibility and execution constraints.</p></div></div><div className="skill-line"><span>02</span><div><h3>Commercial thinking</h3><p>Cost estimation, BOQ/QTO, quotations and tender proposals.</p></div></div><div className="skill-line"><span>03</span><div><h3>Connecting people</h3><p>Working across clients, consultants, suppliers, contractors and internal teams.</p></div></div><div className="experience-note">SOUTHERN CONCRETE PILE PCL &nbsp; / &nbsp; SENIOR CIVIL ENGINEER &nbsp; / &nbsp; 2018–2026</div></div>
        </div>
      </section>

      <section id="work" className="section work">
        <div className="section-label"><span>03 / THE PRACTICE</span><span>INDEPENDENT PROJECTS & EXPLORATIONS</span></div>
        <div className="work-heading"><div><p className="eyebrow">SELECTED EXPLORATIONS</p><h2>Learning<br/>by <em>doing.</em></h2></div><p>Ideas become meaningful when they meet people, budgets, messages and practical decisions. These independent ventures are part of an ongoing education in business, marketing and digital making.</p></div>
        <div className="project-list">{projects.map(p=><article className="project" key={p.name}><div className={`project-image ${p.image}`} aria-hidden="true"><span>{p.no} / PROJECT STUDY</span></div><div className="project-info"><div className="project-meta"><span>{p.category}</span><span>2026</span></div><h3>{p.name}</h3><p>{p.text}</p><div className="project-foot"><span>{p.tag}</span><a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.name}`}><MoveUpRight size={22}/></a></div></div></article>)}</div>
      </section>

      <section id="notes" className="section notes">
        <div className="section-label"><span>04 / DESIGN JOURNAL</span><span>AN ENGINEER'S EYE</span></div>
        <div className="notes-head"><p className="eyebrow">FIELD NOTES / OBSERVATIONS</p><h2>What I notice<br/><em>in a space.</em></h2><p>Not professional interior-design commissions — simply the details that make me stop, look closer and ask why.</p></div>
        <div className="notes-grid"><article className="note-card"><div className="note-art material"><span>STUDY 01</span></div><span className="note-num">01 / MATERIALITY</span><h3>The warmth of a material</h3><p>How timber, stone and textiles quietly change the mood of a room.</p></article><article className="note-card"><div className="note-art form"><span>STUDY 02</span></div><span className="note-num">02 / PROPORTION</span><h3>Balance in every line</h3><p>The relationship between scale, silhouette, function and comfort.</p></article><article className="note-card"><div className="note-art light"><span>STUDY 03</span></div><span className="note-num">03 / ATMOSPHERE</span><h3>Light changes everything</h3><p>The same object can feel entirely different with a change in light.</p></article></div><p className="notes-disclaimer">Visual studies are conceptual placeholders. Personal photographs and verified observations can be added before sharing this journal externally.</p>
      </section>

      <section className="closing-quote"><p>AN OPEN CHAPTER</p><h2>Where thoughtful design meets <em>practical possibility.</em></h2></section>
      <footer id="connect" className="footer"><div className="section-label"><span>05 / THE NEXT CHAPTER</span><span>LET'S CONNECT</span></div><p className="eyebrow">A CONVERSATION WORTH HAVING</p><h2>Something<br/><em>beautiful begins</em><br/>with curiosity.</h2><p>Open to conversations about project business development, commercial solutions and opportunities that connect technical experience with design-led thinking.</p><a href="https://digital-identity-card-two.vercel.app" target="_blank" rel="noopener noreferrer" className="contact-link">VIEW DIGITAL BUSINESS CARD <ArrowUpRight size={20}/></a><div className="footer-bottom"><span>© 2026 KHANITTHA HEMNGERN</span><span>MADE WITH CURIOSITY, NOT A TEMPLATE.</span><a href="#top">BACK TO COVER ↑</a></div></footer>
    </main>
  );
}
