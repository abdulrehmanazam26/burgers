"use client";
import {useLayoutEffect,useRef} from "react";
import Image from "next/image";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {site} from "@/data/site";

gsap.registerPlugin(ScrollTrigger);
// Finished Zinger geometry: the lower group is intentionally compressed so
// transparent padding inside source crops cannot create visible food gaps.
const assembled=[-112,-65,-32,-36,-4,26,66];
const exploded=[-135,-78,0,-24,27,70,110];
const rebuildOrder=[6,5,4,3,1,0];
const layerHeights=[275,220,200,200,235,145,236];

export function BurgerScrollHero(){
  const root=useRef<HTMLElement>(null);
  useLayoutEffect(()=>{
    const mm=gsap.matchMedia();
    mm.add({desktop:"(min-width:700px) and (prefers-reduced-motion:no-preference)",mobile:"(max-width:699px) and (prefers-reduced-motion:no-preference)"},ctx=>{
      const mobile=ctx.conditions?.mobile;
      const scale=mobile?.76:1;
      const tl=gsap.timeline({scrollTrigger:{trigger:root.current,start:"top top",end:mobile?"+=4800":"+=6200",scrub:.75,pin:true,anticipatePin:1,invalidateOnRefresh:true}});
      tl.set(".layer",{y:(i)=>assembled[i]*scale})
        .addLabel("lift").to(".hero-kicker",{opacity:0,y:-20,duration:.45}).to(".burger-stage",{y:mobile?-18:-32,scale:1.025,duration:.6},"<")
        .addLabel("explode").to(".layer",{y:(i)=>exploded[i]*(mobile?.78:1),duration:1.55,ease:"power3.inOut"}).to(".label-intro",{opacity:1,duration:.2},"-=.3")
        .addLabel("rebuild").to(".layer",{opacity:0,duration:.32,stagger:.025,ease:"power2.inOut"});
      rebuildOrder.forEach((i,storyIndex)=>{
        tl.to(`.layer-${i}`,{opacity:1,y:assembled[i]*scale,duration:.58,ease:"power3.inOut"})
          .to(`.step-${i}`,{opacity:1,y:0,duration:.16},"<+.08")
          .to(".progress-fill",{scaleX:(storyIndex+1)/rebuildOrder.length,duration:.4},"<")
          .to(`.step-${i}`,{opacity:0,y:-10,duration:.13},">+.2");
      });
      tl.addLabel("complete").to(".label-intro, .story-progress",{opacity:0,duration:.2},"<").to(".complete-copy",{opacity:1,y:0,duration:.45}).to(".complete-copy",{opacity:0,y:-24,duration:.3},">+.45")
        .addLabel("package").to(".package",{opacity:1,y:0,scale:1,rotateX:48,duration:.75,ease:"power3.inOut"}).to(".burger-stage",{y:mobile?112:142,scale:mobile?.45:.5,duration:1.1,ease:"power3.inOut"}).to(".burger-stage",{scale:mobile?.43:.48,duration:.32,ease:"power2.out"}).to(".box-lid",{rotateX:0,duration:.9,ease:"power3.inOut"},">+.38").to(".burger-stage",{opacity:0,duration:.18},"<+.48").to(".box-interior",{opacity:0,duration:.18},"<").to(".package",{rotateX:0,y:-12,scale:.9,duration:.9,ease:"power4.inOut"}).to(".hero-outro",{opacity:1,duration:.35},">+.15");
    });
    return()=>mm.revert();
  },[]);
  const stepNumber=(i:number)=>String(rebuildOrder.indexOf(i)+1).padStart(2,"0");
  return <section ref={root} id="top" className="hero">
    <div className="hero-topline"><span>IT&apos;S FINGER LICKIN&apos; GOOD</span><span>11 HERBS &amp; SPICES</span></div>
    <div className="hero-kicker"><span>THE ZINGER,<br/><i>KFC STYLE.</i></span><p>SCROLL TO DISCOVER ↓</p></div>
    <div className="label-intro">ANATOMY OF A CRAVING</div>
    <div className="burger-stage">{site.layers.map((l,i)=><div key={l.id} className={`layer layer-${i}${i===2?" layer-removed":""}`} aria-hidden="true">{i!==2&&<Image src={`/assets/layers/${l.id}.png`} alt="" width={1024} height={layerHeights[i]} priority sizes="(max-width: 699px) 285px, 410px" draggable={false}/>}</div>)}</div>
    <div className="step-labels">{site.layers.map((l,i)=>i!==2&&<div className={`step step-${i}`} key={l.id}><b>{stepNumber(i)} / {l.name}</b><span>{l.note}</span></div>)}</div>
    <div className="story-progress"><span>BUILDING THE ZINGER</span><div><i className="progress-fill"/></div></div>
    <div className="complete-copy">STACKED<br/><i>TO PERFECTION.</i></div>
    <div className="package-wrap"><div className="package"><div className="box-interior"><span>FRESHLY PACKED</span></div><div className="box-lid">KFC <span>ZINGER</span></div><div className="box-front"><small>FINGER LICKIN&apos; GOOD</small><strong>KFC</strong></div></div></div>
    <div className="hero-outro">KFC<br/>DELIVERED.</div>
  </section>;
}
