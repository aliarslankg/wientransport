import Link from "next/link";

const phone = "436608624444";
const email = "aa66tx@gmail.com";

export default function ServicePage({eyebrow,title,intro,points=[],sections=[],faqs=[]}){
 const whatsapp=`https://wa.me/${phone}?text=${encodeURIComponent(`Hallo Wien Transport, ich interessiere mich für: ${title}`)}`;
 const faqSchema=faqs.length?{"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))}:null;
 const serviceSchema={"@context":"https://schema.org","@type":"Service",name:title,description:intro,provider:{"@type":"MovingCompany",name:"Wien Transport",telephone:"+43 660 862 44 44",email,address:{"@type":"PostalAddress",streetAddress:"Tokiostraße 3/1/14",postalCode:"1220",addressLocality:"Wien",addressCountry:"AT"}},areaServed:["Wien","Österreich","Europa"]};

 return <main>
  <header><Link className="brand" href="/"><span>WT</span><div><b>WIEN TRANSPORT</b><small>UMZUG · TRANSPORT · KURIER</small></div></Link><nav><Link href="/">Startseite</Link><Link href="/#services">Leistungen</Link><Link href="/#preise">Preise</Link><Link href="/#quote">Anfrage</Link><Link href="/#contact">Kontakt</Link></nav></header>
  <section className="serviceHero"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p><div className="actions"><Link className="primary" href="/#quote">Kostenlos anfragen</Link><a className="secondary" href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></div></div></section>
  <section className="section"><div className="detailPoints">{points.map(([a,b])=><article key={a}><h3>{a}</h3><p>{b}</p></article>)}</div></section>
  {sections.map(([h,p])=><section className="seoText section" key={h}><h2>{h}</h2><p>{p}</p></section>)}
  {faqs.length>0&&<section className="section faqSection"><div className="head"><div><p className="eyebrow">HÄUFIGE FRAGEN</p><h2>Fragen zu {title}</h2></div></div><div className="faqList">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>}
  <section className="section seoText"><h2>Weitere Leistungen</h2><p><Link href="/umzug-wien">Umzug Wien</Link> · <Link href="/moebeltransport-wien">Möbeltransport Wien</Link> · <Link href="/kleintransport-wien">Kleintransport Wien</Link> · <Link href="/firmenumzug-wien">Firmenumzug Wien</Link> · <Link href="/entruempelung-wien">Entrümpelung Wien</Link></p></section>
  <section className="serviceBottom"><h2>Unverbindliches Angebot anfragen</h2><p>Senden Sie Abholort, Zielort, Termin, Stockwerk/Aufzug und eine möglichst genaue Beschreibung. Fotos oder Maße helfen bei einer schnelleren Einschätzung.</p><div className="actions"><Link className="primary" href="/#quote">Anfrage starten</Link><a className="secondary" href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a><a className="secondary" href={`mailto:${email}?subject=${encodeURIComponent(title)}`}>E-Mail</a></div></section>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}}/>
  {faqSchema&&<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>}
 </main>
}
