import {Navbar} from "@/components/Navbar";
import {BurgerScrollHero} from "@/components/BurgerScrollHero";
import {ArrowButton} from "@/components/ArrowButton";
import {site} from "@/data/site";
import {ArrowUpRight} from "lucide-react";

const qualities=[["CRISPY CHICKEN","Marinated fresh. Fried to order."],["REAL CHEESE","Melted over the crunch."],["FRESH BUNS","Baked daily. Toasted to order."],["HOUSE SAUCE","Mixed here. Guarded closely."]];

export default function Home(){return <main>
  <Navbar/>
  <BurgerScrollHero/>

  <section id="stacks" className="stacks section-pad"><div className="eyebrow">01 — SIGNATURE ZINGERS</div><h2>MEET THE<br/><em>STACKS.</em></h2><div className="burger-grid">{site.burgers.map((b,i)=><article className={`burger-card ${b.tone}`} key={b.name}><div className="product-art"><div role="img" aria-label={`${b.name} crispy chicken burger`} className="mini-burger" style={{backgroundImage:"url('/assets/zinger-assembled.png')"}}/><span>0{i+1}</span></div><div className="card-copy"><div><h3>{b.name}</h3><p>{b.desc}</p></div><div className="price">${b.price}<ArrowUpRight aria-hidden="true"/></div></div></article>)}</div></section>

  <section id="combos" className="combo"><div className="combo-copy"><div className="eyebrow">02 — THE FULL MOVE</div><h2>MAKE IT<br/><i>A MEAL.</i></h2><p>THE ZINGER + SEA SALT FRIES + AN ICE-COLD POUR.</p><ArrowButton href="#menu">BUILD YOUR COMBO</ArrowButton></div><div className="combo-visual" aria-label="Zinger meal with fries and a drink"><div className="fries">FRIES<span>HOT / CRISP / SALTED</span></div><div className="cup">BRUT<small>ICE COLD</small></div><div className="combo-burger"/></div></section>

  <section id="quality" className="quality section-pad"><div className="eyebrow">03 — THE NON-NEGOTIABLES</div><h2>NO<br/><em>SHORTCUTS.</em></h2><div className="quality-list">{qualities.map((x,i)=><div key={x[0]}><span>0{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p></div>)}</div></section>

  <section className="manifesto" aria-label="Our promise"><span>FRIED FRESH.</span><span>STACKED HIGH.</span><span className="hot">SERVED HOT.</span></section>

  <section id="menu" className="menu-section section-pad"><div className="menu-head"><div><div className="eyebrow">04 — THE MENU</div><h2>PICK YOUR<br/><em>CRAVING.</em></h2></div><p>Everything made to order.<br/>Nothing waiting under a lamp.</p></div><div className="menu-columns">{Object.entries(site.menu).map(([cat,items])=><div className="menu-cat" key={cat}><h3>{cat}</h3>{items.map(item=><div className="menu-item" key={item[0]}><div><b>{item[0]}</b><span>{item[1]}</span></div><strong>${item[2]}</strong></div>)}</div>)}</div></section>

  <section className="fries-feature"><div><span>SIDES AREN’T<br/>A SIDE NOTE.</span><h2>DON’T FORGET<br/><i>THE FRIES.</i></h2></div><div className="fries-pile">FRIES<br/>BEFORE<br/>GUYS.</div></section>

  <section id="locations" className="locations section-pad"><div className="eyebrow">05 — COME THROUGH</div><h2>FIND YOUR<br/><em>BRUT.</em></h2><div className="location-list">{site.locations.map((l,i)=>{const directions=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${l.address} ${l.city}`)}`;return <a href={directions} target="_blank" rel="noreferrer" key={l.city} aria-label={`Directions to ${l.city}`}><span>0{i+1}</span><h3>{l.city}</h3><p>{l.address}<br/>{l.hours}</p><ArrowUpRight aria-hidden="true"/></a>})}</div></section>

  <section id="order" className="order-cta"><div className="eyebrow">NO MORE SCROLLING. START EATING.</div><h2>HUNGRY<br/><i>YET?</i></h2><ArrowButton light href="#locations">FIND A STORE</ArrowButton></section>

  <footer><div className="footer-brand">BRUT<span>®</span></div><div className="footer-links"><div><b>EXPLORE</b><a href="#menu">Menu</a><a href="#locations">Locations</a><a href="#quality">Our story</a></div><div><b>FOLLOW</b><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a><a href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a><a href="mailto:hello@brutbuns.com">Contact</a></div><div><b>THE FINE PRINT</b><a href="#quality">Ingredients</a><a href="mailto:hello@brutbuns.com?subject=Allergen%20question">Allergens</a><a href="mailto:hello@brutbuns.com">Support</a></div></div><div className="footer-bottom">© 2026 BRUT BUNS <span>MADE WITH HEAT.</span></div></footer>
</main>}
