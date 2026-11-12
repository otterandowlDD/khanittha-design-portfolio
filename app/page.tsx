"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Menu, X } from "lucide-react";

const chapters = [
  ["01", "The Beginning", "perspective"],
  ["02", "Learning to See", "foundation"],
  ["03", "The Fascination", "work"],
  ["04", "Field Notes", "notes"],
  ["05", "The Next Page", "connect"],
] as const;

const moments = [
  { no: "01", category: "THE FIRST GLANCE", name: "An unexpected pause", text: "Sometimes a space makes me slow down. I notice the light, the silence between objects, and how naturally everything seems to belong.", tag: "AN OBSERVATION", image: "event" },
  { no: "02", category: "LOOKING CLOSER", name: "The beauty of details", text: "A curve, a finish, the grain of wood, the way a chair meets the floor. Small decisions carry so much of the feeling of a place.", tag: "A GROWING CURIOSITY", image: "property" },
  { no: "03", category: "STILL DISCOVERING", name: "The stories behind objects", text: "The more I look, the more I want to know: who imagined it, why it was made that way, and what makes a piece worth keeping.", tag: "AN OPEN QUESTION", image: "digital" },
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
        <div className="cover-topline"><span>A PERSONAL DESIGN JOURNAL / 2026</span><span>BANGKOK, THAILAND</span></div>
        <div className="cover-graphic" role="img" aria-label="Atmospheric architectural study in warm stone and charcoal tones">
          <div className="cover-graphic-overlay"><span>THE ART OF<br/>NOTICING</span><span className="vertical-caption">A JOURNEY OF CURIOSITY</span></div>
        </div>
        <div className="cover-bottom">
          <div><p className="eyebrow">ISSUE NO. 01 &nbsp; / &nbsp; A PERSONAL JOURNAL</p><h1>Khanittha<br/><em>Hemngern.</em></h1></div>
          <div className="cover-lede"><p>A personal journey through<br/>spaces, objects, details<br/>and the joy of discovering design.</p><a href="#perspective" className="round-arrow" aria-label="Explore the journal"><ArrowDownRight size={26}/></a></div>
        </div>
        <div className="cover-footer"><span>SPACES</span><span>DETAILS</span><span>MATERIALS</span><span>CURIOSITY</span><span>✳</span></div>
      </section>
      <div className="index-strip"><span>IN THIS ISSUE</span><div>{chapters.map(([n,label,id])=><a href={`#${id}`} key={id}><b>{n}</b> {label}</a>)}</div></div>

      <section id="perspective" className="section perspective">
        <div className="section-label"><span>01 / THE BEGINNING</span><span>A PERSONAL STORY</span></div>
        <div className="perspective-grid">
          <div><p className="eyebrow">HOW IT BEGAN</p><h2>It started<br/>with <em>noticing.</em></h2></div>
          <div className="essay">
            <p className="dropcap">There are places that make you want to stay a little longer — not because you need anything, but because something about them feels right.</p>
            <p>For me, it often begins with an ordinary detail: the curve of a chair, the warmth of wood, or the way sunlight moves across a room.</p>
            <p>I find myself looking closer. Wondering why a particular material was chosen, how an object was made, or what gives a space its quiet sense of harmony.</p>
            <p>That curiosity has slowly become a genuine love for interiors, furniture and the stories held in thoughtfully designed things.</p>
            <p className="hand-note">Some journeys begin<br/>with a second look.</p>
          </div>
        </div>
      </section>

      <section className="quote-break"><span className="quote-mark">“</span><blockquote>Good design isn't just something to look at. It's something to <em>notice, understand, and experience.</em></blockquote><span className="quote-credit">A PERSONAL OBSERVATION &nbsp;—&nbsp; KH</span></section>

      <section id="foundation" className="section foundation">
        <div className="section-label"><span>02 / LEARNING TO SEE</span><span>A CHANGE IN PERSPECTIVE</span></div>
        <div className="two-column">
          <div><p className="eyebrow">A DIFFERENT WAY OF LOOKING</p><h2>Always<br/><em>curious.</em></h2><div className="foundation-stats"><strong>∞</strong><span>THERE IS ALWAYS<br/>MORE TO DISCOVER</span></div></div>
          <div className="foundation-copy">
            <p>I used to think the most interesting question was how something works. Over time, I became just as interested in how something feels.</p>
            <div className="skill-line"><span>01</span><div><h3>Form</h3><p>Why a silhouette feels balanced, gentle or unexpectedly bold.</p></div></div>
            <div className="skill-line"><span>02</span><div><h3>Material</h3><p>How texture, warmth and the smallest imperfections give objects character.</p></div></div>
            <div className="skill-line"><span>03</span><div><h3>Feeling</h3><p>How a room can feel welcoming long before anyone says a word.</p></div></div>
            <div className="experience-note">A JOURNEY SHAPED BY OBSERVATION, NOT A CHECKLIST.</div>
          </div>
        </div>
      </section>

      <section id="work" className="section work">
        <div className="section-label"><span>03 / THE FASCINATION</span><span>THE THINGS THAT STAY WITH ME</span></div>
        <div className="work-heading"><div><p className="eyebrow">MOMENTS OF DISCOVERY</p><h2>Falling<br/>for <em>details.</em></h2></div><p>Not a collection of achievements. Just small moments that explain why I keep coming back to design.</p></div>
        <div className="project-list">{moments.map(p=><article className="project" key={p.name}>
          <div className={`project-image ${p.image}`} aria-hidden="true"><span>{p.no} / A MOMENT</span></div>
          <div className="project-info">
            <div className="project-meta"><span>{p.category}</span><span>JOURNAL</span></div>
            <h3>{p.name}</h3><p>{p.text}</p>
            <div className="project-foot"><span>{p.tag}</span><span aria-hidden="true">✳</span></div>
          </div>
        </article>)}</div>
      </section>

      <section id="notes" className="section notes">
        <div className="section-label"><span>04 / DESIGN JOURNAL</span><span>A PERSONAL COLLECTION OF OBSERVATIONS</span></div>
        <div className="notes-head"><p className="eyebrow">FIELD NOTES / OBSERVATIONS</p><h2>What I notice<br/><em>in a space.</em></h2><p>Little things that make me pause, look again, and fall a little more in love with design.</p></div>
        <div className="notes-grid"><article className="note-card"><div className="note-art material"><span>STUDY 01</span></div><span className="note-num">01 / MATERIALITY</span><h3>The warmth of a material</h3><p>How timber, stone and textiles quietly change the mood of a room.</p></article><article className="note-card"><div className="note-art form"><span>STUDY 02</span></div><span className="note-num">02 / PROPORTION</span><h3>Balance in every line</h3><p>The relationship between scale, silhouette, function and comfort.</p></article><article className="note-card"><div className="note-art light"><span>STUDY 03</span></div><span className="note-num">03 / ATMOSPHERE</span><h3>Light changes everything</h3><p>The same object can feel entirely different with a change in light.</p></article></div><p className="notes-disclaimer">Images are visual placeholders for this journal. They will be replaced with personally selected, permission-cleared photographs.</p>
      </section>

      <section className="closing-quote"><p>A JOURNEY, STILL UNFOLDING</p><h2>Somewhere between <em>curiosity and wonder,</em><br/>a passion for design became part of my journey.</h2></section>
      <footer id="connect" className="footer"><div className="section-label"><span>05 / THE NEXT PAGE</span><span>LET'S CONNECT</span></div><p className="eyebrow">THE STORY CONTINUES</p><h2>There is always<br/><em>more to discover.</em></h2><p>A personal journal of spaces, objects, craftsmanship, and the endless pleasure of looking closer.</p><a href="https://digital-identity-card-two.vercel.app" target="_blank" rel="noopener noreferrer" className="contact-link">SAY HELLO <ArrowUpRight size={20}/></a><div className="footer-bottom"><span>© 2026 KHANITTHA HEMNGERN</span><span>MADE WITH CURIOSITY, NOT A TEMPLATE.</span><a href="#top">BACK TO COVER ↑</a></div></footer>
    </main>
  );
}
