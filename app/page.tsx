"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDown, ArrowLeft, ArrowRight, Menu, X } from "lucide-react";

const chapters = [
  {id:"interiors",num:"01",title:"Interiors",headline:"Spaces That Speak.",sub:"Some spaces say more without saying a word.",lead:"A beautifully considered room has a way of making time slow down.",body:"Perhaps it is the curve of a chair, the warmth of a natural surface, or the way daylight finds its way into a quiet corner. I love the subtle conversations between space, light and everything placed within it.",tags:"Architecture / Furniture / Light",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",caption:"01 — A space worth lingering in"},
  {id:"fashion",num:"02",title:"Fashion",headline:"The Way We Wear.",sub:"Style is often found in the smallest choices.",lead:"A beautiful silhouette can tell a story without a single word.",body:"I am drawn to the way fabric moves, how tailoring changes a shape, and how someone makes a look entirely their own. Fashion, like interiors, lives in the details: texture, proportion, personality and a little unexpected charm.",tags:"Style / Silhouette / Textiles",image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=85",caption:"02 — Expression in the everyday"},
  {id:"vibes",num:"03",title:"Vibes",headline:"The Feeling of a Place.",sub:"Not everything beautiful needs an explanation.",lead:"Sometimes you just know that a place feels right.",body:"The music. The glow of a lamp. The glass on the table. The sounds around you. A café, a hotel, a restaurant, even a fleeting moment — some atmospheres stay with you long after you leave.",tags:"Atmosphere / Hospitality / Music",image:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85",caption:"03 — A feeling you want to keep"},
  {id:"objects",num:"04",title:"Objects & Craft",headline:"Made to Be Loved.",sub:"A little admiration for things made with care.",lead:"Some objects invite a second look. Others invite a hundred questions.",body:"Who imagined this? Why this material? How many hands touched it before it arrived here? I love the stories inside everyday objects — the craft, the patience and the remarkable attention behind something beautifully made.",tags:"Craftsmanship / Material / Heritage",image:"https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1800&q=85",caption:"04 — The details behind an object"},
  {id:"culture",num:"05",title:"Places & Culture",headline:"Somewhere, Something.",sub:"A curious eye never really takes a day off.",lead:"There is always something waiting to be discovered.",body:"A gallery that changes how I see color. A street with unexpected architecture. A place I never planned to visit. The best discoveries often begin with wandering — and being willing to notice what is right in front of me.",tags:"Travel / Art / Discovery",image:"https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1800&q=85",caption:"05 — Curiosity has no itinerary"},
] as const;

export default function Home(){
 const [menu,setMenu]=useState(false);
 const [progress,setProgress]=useState(0);
 const [spread,setSpread]=useState(0);
 useEffect(()=>{const update=()=>{const doc=document.documentElement;const height=doc.scrollHeight-window.innerHeight;setProgress(height>0?window.scrollY/height*100:0)};window.addEventListener("scroll",update,{passive:true});update();return()=>window.removeEventListener("scroll",update)},[]);
 const jump=(id:string)=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setMenu(false)};
 return <main id="top" className="journal">
   <div className="reading-bar" style={{width:progress+"%"}}/>
   <header className="journal-header"><button className="monogram" onClick={()=>jump("top")}>KH<span>·</span></button><span className="header-edition">AN EYE FOR BEAUTIFUL THINGS <span className="header-sep">—</span> VOL. 01 / 2026</span><button className="index-button" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-label="Toggle table of contents">{menu?<X size={19}/>:<Menu size={19}/>}<span>{menu?"CLOSE":"INDEX"}</span></button></header>
   {menu&&<nav className="menu-panel" aria-label="Journal contents"><button onClick={()=>jump("editor-note")}><span>00</span>Editor's Note</button>{chapters.map(c=><button key={c.id} onClick={()=>jump(c.id)}><span>{c.num}</span>{c.title}<ArrowUpRight size={17}/></button>)}</nav>}
   <section className="mag-cover" aria-labelledby="main-title">
    <div className="topline"><span>THE PERSONAL JOURNAL OF KHANITTHA HEMNGERN</span><span>ISSUE 001 &nbsp; · &nbsp; BANGKOK</span></div>
    <div className="cover-photo" role="img" aria-label="Warm contemporary interior, softly illuminated">
     <div className="cover-photo-label">A COLLECTION OF THINGS<br/>WORTH NOTICING</div>
     <span className="cover-side">INTERIORS / FASHION / VIBES / OBJECTS / CULTURE</span>
    </div>
    <div className="cover-title-wrap"><span className="issue-tag">A PERSONAL EDITORIAL JOURNAL</span><h1 id="main-title">An Eye for<br/><em>Beautiful Things.</em></h1><p>Interiors. Fashion. Atmosphere.<br/>Objects. Culture. And everything in between.</p></div>
    <div className="cover-baseline"><span>CURATED BY KHANITTHA HEMNGERN</span><button onClick={()=>jump("editor-note")}>OPEN THE JOURNAL <ArrowDown size={17}/></button><span>01 — 06</span></div>
   </section>
   <section id="editor-note" className="editor-note paper-section">
    <div className="folio"><span>00 / FROM THE EDITOR</span><span>A NOTE BEFORE THE FIRST PAGE</span></div>
    <div className="editor-layout"><div className="editor-left"><div className="small-label">A LITTLE APPRECIATION</div><h2>For the things<br/>that <em>catch the eye.</em></h2><div className="editor-decoration" aria-hidden="true">✳</div></div><div className="editor-copy"><p className="large-lead">Some things simply catch the eye.</p><p>A beautifully curved chair. The texture of an old wooden door. A perfectly tailored jacket. A quiet corner of a café.</p><p>Not every discovery needs to be extraordinary. Sometimes, beauty is found in the details we almost overlook.</p><p>This journal is a collection of those little moments — things worth noticing, remembering, and falling in love with.</p><span className="signature">Khanittha</span><span className="editor-caption">VOL. 01 / 2026</span></div></div>
   </section>
   <section id="contents" className="contents-section paper-section"><div className="folio"><span>THE CONTENTS</span><span>FIVE CHAPTERS / ONE CURIOUS EYE</span></div><div className="contents-title"><h2>In this <em>issue.</em></h2><span>THE INDEX / 001</span></div><div className="contents-list">{chapters.map(c=><button key={c.id} onClick={()=>jump(c.id)}><span className="contents-n">{c.num}</span><span className="contents-name">{c.title}</span><span className="contents-description">{c.headline}</span><ArrowUpRight size={22}/></button>)}</div></section>
   <div className="image-interlude"><span>THE BEAUTY IS IN NOTICING.</span></div>
   {chapters.map((c,i)=><section id={c.id} key={c.id} className={"chapter chapter-"+(i%2===0?"light":"stone")}>
     <div className="folio"><span>{c.num} / {c.title.toUpperCase()}</span><span>AN EYE FOR BEAUTIFUL THINGS</span></div>
     <div className="chapter-top"><div><span className="small-label">CHAPTER {c.num} — {c.title.toUpperCase()}</span><h2>{c.headline.split(" ").slice(0,-1).join(" ")}<br/><em>{c.headline.split(" ").slice(-1)}</em></h2></div><p>{c.sub}</p></div>
     <figure className="chapter-image"><img src={c.image} alt={"Editorial inspiration for "+c.title} loading="lazy"/><figcaption>{c.caption}<span>IMAGE FOR VISUAL DIRECTION · TO BE REPLACED</span></figcaption></figure>
     <div className="chapter-bottom"><div className="left-margin"><span>OBSERVATION / {c.num}</span><strong>✳</strong><span>{c.tags}</span></div><div className="chapter-prose"><p className="chapter-lead">{c.lead}</p><p>{c.body}</p><span className="chapter-mark">A LITTLE NOTE TO REMEMBER — KH</span></div></div>
     <div className="next-page"><button onClick={()=>jump(i===chapters.length-1?"last-page":chapters[i+1].id)}>TURN THE PAGE <ArrowRight size={18}/></button><span>{String(i+2).padStart(2,"0")} / 07</span></div>
   </section>)}
   <section id="scent" className="scent-feature" aria-labelledby="scent-title">
      <div className="folio"><span>AN EXTRA PAGE / THE ART OF SCENT</span><span>AN INVISIBLE SIGNATURE</span></div>
      <div className="scent-layout">
        <div className="scent-visual" aria-label="An abstract visual interpretation of soft musk, light and warm materials">
          <span className="scent-visual-top">AN OLFACTORY NOTE</span>
          <div className="scent-visual-graphic" aria-hidden="true"><span>19</span><span>57</span></div>
          <span className="scent-visual-bottom">SOFT / MUSKY / FLORAL</span>
        </div>
        <div className="scent-story">
          <p className="small-label">LES EXCLUSIFS DE CHANEL / 1957</p>
          <h2 id="scent-title">The<br/><em>Invisible</em><br/>Signature.</h2>
          <p className="scent-opening">Some beautiful things cannot be seen.</p>
          <p>A fragrance can change the atmosphere, bring back a memory, or become part of a person's identity without a single word.</p>
          <p>CHANEL 1957 is one of those scents that makes me appreciate subtlety: soft white musk, delicate floral facets, a powdery impression, and a gentle warmth that lingers close to the skin.</p>
          <p>It brings to mind the pleasure of crisp hotel linen, the quiet elegance of a beautifully prepared room, and all the thoughtful details that are felt more than seen.</p>
          <blockquote>“A beautiful interior captures the eye. A beautiful fragrance captures the memory.”</blockquote>
          <span className="scent-note">A PERSONAL IMPRESSION / NOT AN ADVERTISEMENT</span>
        </div>
      </div>
    </section>
   <section className="browse-spread paper-section" aria-label="A miniature editorial spread"><div className="folio"><span>FROM THE NOTEBOOK</span><span>FLIP THROUGH A FEW THOUGHTS</span></div><div className="spread-layout"><div className="spread-note"><span>NOTE {String(spread+1).padStart(2,"0")} / 03</span><p>{["A chair is never just a chair. Sometimes it changes how an entire room feels.","A beautiful place is often remembered for how it made you feel, not only how it looked.","The smallest details can stay in the mind the longest."][spread]}</p></div><div className="spread-controls"><button aria-label="Previous note" onClick={()=>setSpread((spread+2)%3)}><ArrowLeft size={20}/></button><span>{spread+1} — 3</span><button aria-label="Next note" onClick={()=>setSpread((spread+1)%3)}><ArrowRight size={20}/></button></div></div></section>
   <footer id="last-page" className="last-page"><div className="folio"><span>THE LAST PAGE</span><span>OR PERHAPS THE FIRST OF MANY</span></div><span className="footer-overline">A JOURNEY, STILL UNFOLDING</span><h2>The best things<br/>are worth <em>noticing.</em></h2><p>An open-ended collection of beautiful things, curious thoughts, and places that leave a feeling behind.</p><a href="https://digital-identity-card-two.vercel.app" target="_blank" rel="noopener noreferrer">SAY HELLO <ArrowUpRight size={18}/></a><div className="footer-bottom"><span>© 2026 KHANITTHA HEMNGERN</span><span>MADE WITH CURIOSITY</span><button onClick={()=>jump("top")}>BACK TO COVER ↑</button></div></footer>
 </main>
}
