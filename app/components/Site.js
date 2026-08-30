"use client";
import Link from "next/link";
import {translations} from "../data";
import QuoteForm from "./QuoteForm";

const LANGS = [
  ["de","DE","🇩🇪","/"],
  ["en","EN","🇬🇧","/en"],
  ["tr","TR","🇹🇷","/tr"],
  ["ru","RU","🇷🇺","/ru"],
  ["ar","AR","🇸🇦","/ar"]
];

const SERVICE_LINKS = [
  "/umzug-wien",
  "/moebeltransport-wien",
  "/kleintransport-wien",
  "/moebelmontage-wien",
  "/firmenumzug-wien",
  "/entruempelung-wien"
];

const QUOTE_LEAD = {
  de:["Fotos und Transportdaten senden – wir prüfen alles und melden uns mit einem individuellen Preis.","Direkter Kontakt"],
  en:["Send photos and transport details – we review everything and reply with an individual price.","Direct contact"],
  tr:["Fotoğrafları ve taşıma bilgilerini gönderin – her şeyi inceleyip size özel fiyatla dönüş yapalım.","Doğrudan iletişim"],
  ru:["Отправьте фотографии и данные о перевозке — мы всё проверим и сообщим индивидуальную цену.","Прямая связь"],
  ar:["أرسل الصور وتفاصيل النقل — سنراجعها ونرسل لك سعراً مخصصاً.","تواصل مباشر"]
};

export default function Site({lang="de"}) {
  const t = translations[lang] || translations.de;
  const rtl = lang === "ar";
  const phone = "436608624444";
  const quoteLead = QUOTE_LEAD[lang] || QUOTE_LEAD.de;

  return <main dir={rtl?"rtl":"ltr"}>
    <header>
      <Link className="brand" href={lang==="de"?"/":`/${lang}`}>
        <span>WT</span><div><b>WIEN TRANSPORT</b><small>UMZUG · TRANSPORT · KURIER</small></div>
      </Link>
      <nav>
        <a href="#services">{t.nav[0]}</a><a href="#parcel">{t.nav[1]}</a>
        <a href="#europe">{t.nav[2]}</a><a href="#quote">{t.nav[3]}</a><a href="#contact">{t.nav[4]}</a>
      </nav>
      <div className="langs">
        {LANGS.map(([l,code,flag,href])=>
          <Link key={l} href={href} className={l===lang?"active":""}><span>{code}</span><span>{flag}</span></Link>
        )}
      </div>
    </header>

    <section className="hero">
      <div className="heroText">
        <p className="eyebrow">UMZUG · MÖBEL · KURIER</p>
        <h1>{t.hero}</h1>
        <p>{t.sub}</p>
        <div className="actions">
          <a className="primary" href="#quote">{t.cta}</a>
          <a className="secondary" href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <div className="trust"><b>24/7</b><span>Wien · Österreich · Europa</span></div>
      </div>
      <div className="van"><img src="/wientransport-van.jpg" alt="Wien Transport Fahrzeug"/></div>
    </section>


    <section className="coverageBar">
      {t.coverage.map(([a,b])=><div key={a}><strong>{a}</strong><span>{b}</span></div>)}
    </section>

    <section id="services" className="section">
      <div className="head"><div><p className="eyebrow">WIEN TRANSPORT</p><h2>{t.services}</h2></div><p>{t.sub}</p></div>
      <div className="grid">
        {t.items.map(([a,b],i)=>
          <article key={a}>
            <span>0{i+1}</span><h3>{a}</h3><p>{b}</p>
            {lang==="de" && <Link className="cardLink" href={SERVICE_LINKS[i]}>Mehr erfahren →</Link>}
          </article>
        )}
      </div>
    </section>

    <section id="parcel" className="section dark">
      <div className="head"><div><p className="eyebrow">PAKET · KURIER</p><h2>{t.parcel}</h2></div><p>Brief · Dokument · Paket · Österreich · Europa</p></div>
      <div className="parcel">
        {t.pitems.map(([a,b])=><article key={a}><h3>{a}</h3><p>{b}</p></article>)}
      </div>

      <div className="parcelHint">
        <strong>{t.parcelHintTitle}</strong>
        <span>{t.parcelHintText}</span>
      </div>

      {lang==="de" && <div className="sectionCta"><Link href="/kurierdienst-wien">Kurierdienst Wien →</Link><Link href="/pakettransport-europa">Pakettransport Europa →</Link></div>}
    </section>

    <section id="europe" className="section europe">
      <p className="eyebrow">EUROPAWEIT</p><h2>{t.europe}</h2>
      <p>Wien · Graz · Salzburg · München · Prag · Bratislava · Budapest · Europa</p>
    </section>


    <section className="section pricingSection" id="preise">
      <div className="head">
        <div><p className="eyebrow">{t.priceEyebrow}</p><h2>{t.priceTitle}</h2></div>
        <p>{t.priceIntro}</p>
      </div>
      <div className="priceGrid">
        {t.priceCards.map(([a,b,c])=><article key={a}><span>{a}</span><h3>{b}</h3><p>{c}</p><a href="#quote">{t.priceAsk}</a></article>)}
      </div>
      <p className="priceNote">{t.priceNote}</p>
    </section>

    <section className="section processSection">
      <div className="head"><div><p className="eyebrow">ABLAUF</p><h2>{t.processTitle}</h2></div></div>
      <div className="processGrid">
        {t.process.map(([n,a,b])=><article key={n}><span>{n}</span><h3>{a}</h3><p>{b}</p></article>)}
      </div>
    </section>

    <section id="quote" className="quote">
      <div className="quoteLead"><p className="eyebrow">ANGEBOT</p><h2>{t.quote}</h2><p>{quoteLead[0]}</p><div className="quoteContact"><b>{quoteLead[1]}</b><a href="tel:+436608624444">+43 660 862 44 44</a><a href="mailto:info@wientransport.at">info@wientransport.at</a></div></div>
      <QuoteForm t={t} phone={phone} lang={lang}/>
    </section>

    <section className="section faqSection">
      <div className="head"><div><p className="eyebrow">FAQ</p><h2>{t.faqTitle}</h2></div></div>
      <div className="faqList">
        {t.faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </div>
    </section>


    <section className="finalCta">
      <div>
        <p className="eyebrow">WIEN TRANSPORT</p>
        <h2>{t.finalTitle}</h2>
        <p>{t.finalText}</p>
      </div>
      <div className="finalCtaActions">
        <a className="primary" href="#quote">{t.cta}</a>
        <a className="secondary" href={`tel:+${phone}`}>+436608624444</a>
      </div>
    </section>

    <footer id="contact">
      <div><b>WIEN TRANSPORT</b><p>Tokiostraße 3/1/14<br/>1220 Wien<br/>Österreich</p></div>
      <div><b>Kontakt</b><a href="tel:+436608624444">+436608624444</a><a href="mailto:info@wientransport.at">info@wientransport.at</a><a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer">WhatsApp</a></div>
      <div><b>Service</b><p>Anfragen 24/7<br/>Transporte nach Verfügbarkeit<br/>Wien · Österreich · Europa</p><Link href="/ueber-uns">Über uns</Link><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link><Link href="/agb">AGB</Link></div>
    </footer>
    <a className="float" href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer">WhatsApp</a>
  </main>
}
