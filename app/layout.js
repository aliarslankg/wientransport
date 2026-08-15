import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://wientransport.at"),
  title: "Umzug Wien & MÃ¶beltransport | Wien Transport",
  description: "Wien Transport: Umzug Wien, MÃ¶beltransport, Kleintransport, MÃ¶belmontage, EntrÃ¼mpelung, Paket- und Kurierdienst in Ã–sterreich und ganz Europa. 24/7 erreichbar.",
  keywords: ["Umzug Wien","MÃ¶beltransport Wien","Kleintransport Wien","MÃ¶beltaxi Wien","Kurierdienst Wien","Pakettransport Wien","Firmenumzug Wien","MÃ¶belmontage Wien"],
  alternates: { canonical: "https://wientransport.at/", languages: { de:"https://wientransport.at/", en:"https://wientransport.at/en", tr:"https://wientransport.at/tr", ru:"https://wientransport.at/ru", ar:"https://wientransport.at/ar" } },
  openGraph: {
    title: "Wien Transport â€“ Umzug, MÃ¶beltransport & Kurier",
    description: "Umzug, MÃ¶beltransport, Kleintransport, Paket & Kurier in Wien, Ã–sterreich und Europa.",
    url: "https://wientransport.at/",
    siteName: "Wien Transport",
    images: [{ url: "/wientransport-van.jpg", width: 900, height: 560, alt: "Wien Transport Umzug und MÃ¶beltransport" }],
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
  address:{"@type":"PostalAddress","streetAddress":"TokiostraÃŸe 3/1/14","postalCode":"1220","addressLocality":"Wien","addressCountry":"AT"},
  areaServed:["Wien","Ã–sterreich","Europa"],
  openingHours:"Mo-Su 00:00-23:59",
  serviceType:["Transport Wien","Umzug Wien","MÃ¶beltransport Wien","Kleintransport Wien","MÃ¶belmontage","EntrÃ¼mpelung","Pakettransport","Kurierdienst"]
};

export default function RootLayout({children}) {
  return <html lang="de"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    {children}
  </body></html>;
}

