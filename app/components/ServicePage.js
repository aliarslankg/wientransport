import Link from "next/link";
export default function ServicePage({eyebrow,title,intro,points=[],sections=[]}){
 return <main>
  <header><Link className="brand" href="/"><span>WT</span><div><b>WIEN TRANSPORT</b><small>UMZUG · TRANSPORT · KURIER</small></div></Link><nav><Link href="/">Startseite</Link><Link href="/#services">Leistungen</Link><Link href="/#quote">Anfrage</Link><Link href="/#contact">Kontakt</Link></nav></header>
  <section className="serviceHero"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p><div className="actions"><Link className="primary" href="/#quote">Kostenlos anfragen</Link><a className="secondary" href="https://wa.me/436608624444">WhatsApp</a></div></div></section>
  <section className="section"><div className="detailPoints">{points.map(([a,b])=><article key={a}><h3>{a}</h3><p>{b}</p></article>)}</div></section>
  {sections.map(([h,p])=><section className="seoText section" key={h}><h2>{h}</h2><p>{p}</p></section>)}
  <section className="serviceBottom"><h2>Angebot für Ihren Transport anfragen</h2><p>Abholort, Zielort, Termin und Umfang senden – wir erstellen ein individuelles Angebot.</p><Link className="primary" href="/#quote">Anfrage starten</Link></section>
 </main>
}
