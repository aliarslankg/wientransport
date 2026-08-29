import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.wientransport.at"),
  title: { default:"Umzug Wien & Möbeltransport | Wien Transport", template:"%s | Wien Transport" },
  description: "Wien Transport: Umzug Wien, Möbeltransport, Kleintransport, Möbelmontage und Entrümpelung in Wien, Österreich und Europa. Unverbindlich anfragen.",
  keywords: ["Umzug Wien","Möbeltransport Wien","Kleintransport Wien","Möbeltaxi Wien","Kurierdienst Wien","Pakettransport Wien","Firmenumzug Wien","Möbelmontage Wien"],
  alternates: { canonical: "https://www.wientransport.at/", languages: { "de-AT":"https://www.wientransport.at/", en:"https://www.wientransport.at/en", tr:"https://www.wientransport.at/tr", ru:"https://www.wientransport.at/ru", ar:"https://www.wientransport.at/ar", "x-default":"https://www.wientransport.at/" } },
  openGraph: {
    title: "Wien Transport – Umzug, Möbeltransport & Kleintransport",
    description: "Umzug, Möbeltransport, Kleintransport und ergänzende Leistungen in Wien, Österreich und Europa.",
    url: "https://www.wientransport.at/",
    siteName: "Wien Transport",
    locale:"de_AT",
    images: [{ url: "/wientransport-van.jpg", width: 900, height: 560, alt: "Wien Transport Fahrzeug für Umzug und Möbeltransport" }],
    type: "website"
  },
  twitter:{card:"summary_large_image",title:"Wien Transport – Umzug & Möbeltransport",description:"Transportlösungen in Wien, Österreich und Europa.",images:["/wientransport-van.jpg"]},
  robots: { index: true, follow: true, googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1} }
};

const schema = {
  "@context":"https://schema.org",
  "@type":["MovingCompany","LocalBusiness"],
  name:"Wien Transport",
  legalName:"Ali Arslan KG",
  url:"https://www.wientransport.at/",
  telephone:"+43 660 862 44 44",
  email:"aa66tx@gmail.com",
  image:"https://www.wientransport.at/wientransport-van.jpg",
  address:{"@type":"PostalAddress","streetAddress":"Tokiostraße 3/1/14","postalCode":"1220","addressLocality":"Wien","addressCountry":"AT"},
  areaServed:[{"@type":"City","name":"Wien"},{"@type":"Country","name":"Österreich"},{"@type":"Place","name":"Europa"}],
  priceRange:"€€",
  openingHours:"Mo-Su 00:00-23:59",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Transportleistungen",
    itemListElement: [
      "Umzug Wien",
      "Möbeltransport Wien",
      "Kleintransport Wien",
      "Möbelmontage Wien",
      "Firmenumzug Wien",
      "Entrümpelung Wien"
    ].map(serviceName => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: serviceName
      }
    }))
  }
};

export default function RootLayout({children}) {
  return <html lang="de"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    {children}
  </body></html>;
}
