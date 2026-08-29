import Link from "next/link";
export const metadata={
  title:"Über Wien Transport | Umzug & Transport Wien",
  description:"Wien Transport ist Ihr direkter Ansprechpartner für Umzug, Möbeltransport, Kleintransport, Kurier und Pakettransport in Wien, Österreich und Europa.",
  alternates:{canonical:"https://www.wientransport.at/ueber-uns"}
};
export default function Page(){
 return <main>
  <header><Link className="brand" href="/"><span>WT</span><div><b>WIEN TRANSPORT</b><small>UMZUG · TRANSPORT · KURIER</small></div></Link><nav><Link href="/">Startseite</Link><Link href="/#services">Leistungen</Link><Link href="/#quote">Anfrage</Link><Link href="/#contact">Kontakt</Link></nav></header>
  <section className="serviceHero"><div><p className="eyebrow">WIEN TRANSPORT</p><h1>Direkter Transportservice aus Wien</h1><p>Wir organisieren Umzüge, Möbeltransporte, Kleintransporte, Kurier- und Paketfahrten von Wien innerhalb Österreichs und zu Zielen in Europa.</p><div className="actions"><Link className="primary" href="/#quote">Kostenlos anfragen</Link><a className="secondary" href="https://wa.me/436608624444">WhatsApp</a></div></div></section>
  <section className="section seoText"><h2>Persönlicher Kontakt statt anonymer Plattform</h2><p>Anfragen können direkt per Telefon, WhatsApp oder über das Formular gesendet werden. Für eine genaue Einschätzung helfen Abholort, Zielort, Termin, Umfang sowie Fotos oder Maße.</p></section>
  <section className="section seoText"><h2>Wien · Österreich · Europa</h2><p>Unser Servicebereich umfasst lokale Transporte in Wien, Fahrten innerhalb Österreichs sowie individuell geplante Transporte zu europäischen Zielen.</p></section>
  <section className="serviceBottom"><h2>Transport anfragen</h2><p>+436608624444 · aa66tx@gmail.com · Tokiostraße 3/1/14, 1220 Wien</p><Link className="primary" href="/#quote">Anfrage starten</Link></section>
 </main>
}
