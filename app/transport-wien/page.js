import ServicePage from "../components/ServicePage";

export const metadata = {
  title: "Transport Wien | Umzug, Möbeltransport & Kurier",
  description: "Transport Wien für Umzug, Möbeltransport, Kleintransport und Kurierdienst. Schnell, zuverlässig und flexibel in Wien, Österreich und Europa.",
  alternates: {
    canonical: "https://wientransport.at/transport-wien"
  }
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="TRANSPORT WIEN"
      title="Transport Wien – schnell, zuverlässig und flexibel"
      intro="Professionelle Transporte für Privatpersonen und Unternehmen in Wien, Österreich und Europa."
      points={[
        ["Umzug & Möbeltransport", "Sichere Transporte für Wohnungen, Häuser, Büros und einzelne Möbelstücke."],
        ["Kleintransport & Kurier", "Flexible Lösungen für kleinere Transporte, Pakete und kurzfristige Zustellungen."],
        ["Wien & Europa", "Transporte innerhalb Wiens sowie österreich- und europaweit individuell planbar."]
      ]}
      sections={[
        ["Professioneller Transport in Wien", "Wien Transport bietet zuverlässige Transportlösungen für private und gewerbliche Kunden. Von einzelnen Möbelstücken bis zum kompletten Umzug planen wir jeden Auftrag individuell."],
        ["Schnell und unkompliziert anfragen", "Senden Sie uns Abholort, Zieladresse und Informationen zum Transport bequem über WhatsApp. Wir erstellen Ihnen ein individuelles Angebot."]
      ]}
    />
  );
}
