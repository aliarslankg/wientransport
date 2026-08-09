import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://wientransport.at"),
  title: "Umzug Wien & Möbeltransport | Wien Transport",
  description: "Wien Transport: Umzug Wien, Möbeltransport, Kleintransport, Möbelmontage, Entrümpelung, Paket- und Kurierdienst in Österreich und ganz Europa. 24/7 erreichbar.",
  keywords: ["Umzug Wien","Möbeltransport Wien","Kleintransport Wien","Möbeltaxi Wien","Kurierdienst Wien","Pakettransport Wien","Firmenumzug Wien","Möbelmontage Wien"],
  alternates: { canonical: "https://wientransport.at/", languages: { de:"https://wientransport.at/", en:"https://wientransport.at/en", tr:"https://wientransport.at/tr", ru:"https://wientransport.at/ru", ar:"https://wientransport.at/ar" } },
  openGraph: {
    title: "Wien Transport – Umzug, Möbeltransport & Kurier",
    description: "Umzug, Möbeltransport, Kleintransport, Paket & Kurier in Wien, Österreich und Europa.",
    url: "https://wientransport.at/",
    siteName: "Wien Transport",
    images: [{ url: "/wientransport-van.jpg", width: 900, height: 560, alt: "Wien Transport Umzug und Möbeltransport" }],
    type: "website"
  },
  robots: { index: true, follow: true }
};

const schema = {
  "@context":"https://schema.org",
  "@type":["MovingCompany","LocalBusiness"],
  name:"Wien Transport",
  url:"https://wientransport.at/",
  telephone:"+436608624444",
  email:"aa66tx@gmail.com",
  address:{"@type":"PostalAddress","streetAddress":"Tokiostraße 3/1/14","postalCode":"1220","addressLocality":"Wien","addressCountry":"AT"},
  areaServed:["Wien","Österreich","Europa"],
  openingHours:"Mo-Su 00:00-23:59",
  serviceType:["Umzug Wien","Möbeltransport Wien","Kleintransport Wien","Möbelmontage","Entrümpelung","Pakettransport","Kurierdienst"]
};

export default function RootLayout({children}) {
  return <html lang="de"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    {children}
  </body></html>;
}
