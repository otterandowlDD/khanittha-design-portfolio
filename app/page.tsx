"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDown, ArrowLeft, ArrowRight, Menu, X } from "lucide-react";

const chapters = [
  {id:"interiors",num:"01",title:"Interiors",headline:"Spaces That Speak.",sub:"Some spaces say more without saying a word.",lead:"Beauty gives me energy. A thoughtfully composed atmosphere brings me peace.",body:"I feel it when I enter a hotel lobby: the architecture, fresh flowers, light, furniture, and the sense that every detail belongs. Beyond the lobby, I notice the room — from crisp bed sheets and the weight of a duvet to warm lighting, quiet materials, and little comforts that make me want to stay.",tags:"Architecture / Furniture / Light",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",caption:"01 — A space worth lingering in"},
  {id:"fashion",num:"02",title:"Fashion",headline:"The Way We Wear.",sub:"Style is often found in the smallest choices.",lead:"A beautiful silhouette can tell a story without a single word.",body:"I am drawn to the way fabric moves, how tailoring changes a shape, and how someone makes a look entirely their own. Fashion, like interiors, lives in the details: texture, proportion, personality and a little unexpected charm.",tags:"Style / Silhouette / Textiles",image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=85",caption:"02 — Expression in the everyday"},
  {id:"vibes",num:"03",title:"Vibes",headline:"The Feeling of a Place.",sub:"Not everything beautiful needs an explanation.",lead:"The beauty of a place is not only what I see. It is how I feel there.",body:"A hotel lobby can lift my spirits; a beautifully prepared room can slow everything down. I notice the scent of fresh flowers, the sounds of a room, the way someone is welcomed, and the unspoken care behind the experience. Atmosphere is the art of making everything feel considered.",tags:"Atmosphere / Hospitality / Music",image:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85",caption:"03 — A feeling you want to keep"},
  {id:"objects",num:"04",title:"Objects & Craft",headline:"Made to Be Loved.",sub:"A little admiration for things made with care.",lead:"Even the smallest everyday ritual can hold a little beauty.",body:"The shape of a glass, the softness of a towel, the feel of a beautifully made hand wash bottle, the scent that stays on the skin. I am drawn to the care behind objects and rituals — from furniture craftsmanship to the artistic worlds of PAÑPURI, Diptyque, BYREDO and Aesop. It is not about collecting labels, but noticing how thoughtful design makes us feel.",tags:"Craftsmanship / Material / Heritage",image:"https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1800&q=85",caption:"04 — The details behind an object"},
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
   {menu&&<nav className="menu-panel" aria-label="Journal contents"><button onClick={()=>jump("editor-note")}><span>00</span>Editor's Note</button><button onClick={()=>jump("hospitality")}><span>+</span>Luxury Hospitality</button><button onClick={()=>jump("dining")}><span>+</span>The Art of Dining</button><button onClick={()=>jump("scent")}><span>+</span>The Art of Scent</button><button onClick={()=>jump("rituals")}><span>+</span>Everyday Rituals</button>{chapters.map(c=><button key={c.id} onClick={()=>jump(c.id)}><span>{c.num}</span>{c.title}<ArrowUpRight size={17}/></button>)}</nav>}
   <section className="mag-cover" aria-labelledby="main-title">
    <div className="topline"><span>THE PERSONAL JOURNAL OF KHANITTHA HEMNGERN</span><span>ISSUE 001 &nbsp; · &nbsp; BANGKOK</span></div>
    <div className="cover-photo" role="img" aria-label="Warm contemporary interior, softly illuminated">
     <div className="cover-photo-label">A COLLECTION OF THINGS<br/>WORTH NOTICING</div>
     <span className="cover-side">INTERIORS / FASHION / VIBES / OBJECTS / CULTURE</span>
    </div>
    <div className="cover-title-wrap"><span className="issue-tag">A PERSONAL EDITORIAL JOURNAL</span><h1 id="main-title">An Eye for<br/><em>Beautiful Things.</em></h1><p>Hotels. Interiors. Fine dining.<br/>Fragrance. Art. And everything that makes us feel.</p></div>
    <div className="cover-baseline"><span>CURATED BY KHANITTHA HEMNGERN</span><button onClick={()=>jump("editor-note")}>OPEN THE JOURNAL <ArrowDown size={17}/></button><span>01 — 06</span></div>
   </section>
   <section id="editor-note" className="editor-note paper-section">
    <div className="folio"><span>00 / FROM THE EDITOR</span><span>A NOTE BEFORE THE FIRST PAGE</span></div>
    <div className="editor-layout"><div className="editor-left"><div className="small-label">A LITTLE APPRECIATION</div><h2>For the things<br/>that <em>catch the eye.</em></h2><div className="editor-decoration" aria-hidden="true">✳</div></div><div className="editor-copy"><p className="large-lead">Beauty catches my eye. Atmosphere brings me peace.</p><p>The grandeur of a hotel lobby. Fresh flowers arranged with care. Crisp bed sheets. The glow of a fine-dining table. A fragrance that stays in my memory.</p><p>Some beautiful spaces give me energy. Others bring a deep sense of calm. I am drawn to architecture and atmosphere, art and everyday rituals, and the quiet intelligence behind thoughtful details.</p><p>From CHANEL and TOM FORD to Maison Francis Kurkdjian, PAÑPURI, Diptyque, BYREDO and Aesop, my curiosity is not about a single style or price. It is about beauty that can be seen, touched, remembered and felt.</p><p>This journal is a personal collection of those feelings and the things that bring them to life.</p><span className="signature">Khanittha</span><span className="editor-caption">VOL. 01 / 2026</span></div></div>
   </section>
   <section id="contents" className="contents-section paper-section"><div className="folio"><span>THE CONTENTS</span><span>FIVE CHAPTERS / ONE CURIOUS EYE</span></div><div className="contents-title"><h2>In this <em>issue.</em></h2><span>THE INDEX / 001</span></div><div className="contents-list">{chapters.map(c=><button key={c.id} onClick={()=>jump(c.id)}><span className="contents-n">{c.num}</span><span className="contents-name">{c.title}</span><span className="contents-description">{c.headline}</span><ArrowUpRight size={22}/></button>)}</div></section>
   <div className="image-interlude"><span>BEAUTY GIVES ME ENERGY. ATMOSPHERE BRINGS ME PEACE.</span></div>
   <section id="hospitality" className="hospitality-feature paper-section" aria-labelledby="hospitality-title">
     <div className="folio"><span>AN EDITORIAL STORY / THE HOTEL</span><span>FROM ARRIVAL TO STILLNESS</span></div>
     <p className="small-label feature-kicker">THE ART OF HOSPITALITY</p>
     <h2 id="hospitality-title">From the <em>lobby</em><br/>to the <em>linen.</em></h2>
     <p className="feature-intro">Some people find energy in nature. I find mine in a beautiful hotel lobby.</p>
     <div className="hospitality-grid">
       <article><span>01 / THE ARRIVAL</span><h3>The Lobby.</h3><p>The architecture. The fresh flowers. A sense of arrival. It is the beauty of the whole atmosphere, not just a single object, that makes me feel alive.</p></article>
       <article><span>02 / THE STILLNESS</span><h3>The Room.</h3><p>From the crispness of bed sheets and the softness of pillows to lighting, curtains, stone and quiet comfort — the smallest details change how a space feels.</p></article>
       <article><span>03 / THE FEELING</span><h3>The Memory.</h3><p>What stays with me is not simply how luxurious a place looked, but how thoughtfully it welcomed me, and how peaceful I felt there.</p></article>
     </div>
   </section>
   <section id="dining" className="dining-feature paper-section" aria-labelledby="dining-title">
     <div className="folio"><span>AN EDITORIAL STORY / FINE DINING</span><span>THE ART OF BEING CARED FOR</span></div>
     <div className="dining-layout"><div><span className="small-label">THE TABLE / A FULL-SENSE EXPERIENCE</span><h2 id="dining-title">The Art<br/>of <em>Dining.</em></h2></div><div className="dining-copy"><p className="feature-intro">A beautiful dining experience begins long before the first bite.</p><p>I notice the flowers, the table linen, the glassware, the weight of the cutlery and the beauty of a carefully chosen plate. Then come the textures, aromas, flavors and the artistry of each course.</p><p>And there is the service: the thoughtful timing, an introduction to a dish, a preference remembered. Fine dining is where culinary art, design and hospitality come together.</p><blockquote>Not just an exceptional meal — the feeling of being exceptionally cared for.</blockquote></div></div>
   </section>
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
          <p>A fragrance can change the atmosphere, bring back a memory, or become part of a person's identity without a single word. I am fascinated by scent as an art form, from Les Exclusifs de CHANEL and TOM FORD Private Blend to Maison Francis Kurkdjian.</p>
          <p>CHANEL 1957 is one of those scents that makes me appreciate subtlety: soft white musk, delicate floral facets, a powdery impression, and a gentle warmth that lingers close to the skin.</p>
          <p>It brings to mind the pleasure of crisp hotel linen, the quiet elegance of a beautifully prepared room, and all the thoughtful details that are felt more than seen.</p>
          <blockquote>“A beautiful interior captures the eye. A beautiful fragrance captures the memory.”</blockquote>
          <span className="scent-note">A PERSONAL IMPRESSION / NOT AN ADVERTISEMENT</span>
        </div>
      </div>
    </section>
   <section id="rituals" className="rituals-feature paper-section" aria-labelledby="rituals-title">
      <div className="folio"><span>AN EDITORIAL STORY / EVERYDAY RITUALS</span><span>THE BEAUTY OF THE ORDINARY</span></div>
      <div className="rituals-layout"><div><span className="small-label">ART IN THE EVERYDAY</span><h2 id="rituals-title">A moment<br/>of <em>calm.</em></h2><p className="feature-intro">Sometimes beauty is as simple as washing my hands.</p></div><div className="rituals-copy"><p>The feel of water on skin. A beautifully considered bottle. The scent of a hand wash. Natural stone, good lighting, the softness of a towel.</p><p>I am drawn to the artistry of ordinary rituals and the distinct worlds of PAÑPURI, Diptyque, BYREDO and Aesop. Their approaches differ, but they remind me to notice the experience as much as the object.</p><p>I do not need every moment to be grand. Sometimes the most beautiful thing is the quiet it creates.</p><span className="scent-note">PERSONAL EDITORIAL NOTES / NO BRAND AFFILIATION</span></div></div>
    </section>
   <section className="browse-spread paper-section" aria-label="A miniature editorial spread"><div className="folio"><span>FROM THE NOTEBOOK</span><span>FLIP THROUGH A FEW THOUGHTS</span></div><div className="spread-layout"><div className="spread-note"><span>NOTE {String(spread+1).padStart(2,"0")} / 03</span><p>{["A chair is never just a chair. Sometimes it changes how an entire room feels.","A beautiful place is often remembered for how it made you feel, not only how it looked.","The smallest details can stay in the mind the longest."][spread]}</p></div><div className="spread-controls"><button aria-label="Previous note" onClick={()=>setSpread((spread+2)%3)}><ArrowLeft size={20}/></button><span>{spread+1} — 3</span><button aria-label="Next note" onClick={()=>setSpread((spread+1)%3)}><ArrowRight size={20}/></button></div></div></section>
   <footer id="last-page" className="last-page"><div className="folio"><span>THE LAST PAGE</span><span>OR PERHAPS THE FIRST OF MANY</span></div><span className="footer-overline">A JOURNEY THROUGH THE BEAUTY OF FEELING</span><h2>The best things<br/>are worth <em>noticing.</em></h2><p>An open-ended collection of beautiful things, curious thoughts, and places that leave a feeling behind.</p><a href="https://digital-identity-card-two.vercel.app" target="_blank" rel="noopener noreferrer">SAY HELLO <ArrowUpRight size={18}/></a><div className="footer-bottom"><span>© 2026 KHANITTHA HEMNGERN</span><span>MADE WITH CURIOSITY</span><button onClick={()=>jump("top")}>BACK TO COVER ↑</button></div></footer>
 </main>
}
