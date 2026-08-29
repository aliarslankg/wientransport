import Link from "next/link";

export const metadata = {
  title: "Datenschutz | Wien Transport",
  description:
    "Datenschutzhinweise von Wien Transport zur Kontaktaufnahme per Telefon, E-Mail, WhatsApp und über die Website.",
  alternates: {
    canonical: "https://www.wientransport.at/datenschutz",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <main>
      <header>
        <Link className="brand" href="/">
          <span>WT</span>
          <div>
            <b>WIEN TRANSPORT</b>
            <small>UMZUG · TRANSPORT · KURIER</small>
          </div>
        </Link>

        <nav>
          <Link href="/">Startseite</Link>
          <Link href="/#contact">Kontakt</Link>
        </nav>
      </header>

      <section className="serviceHero">
        <div>
          <p className="eyebrow">WIEN TRANSPORT</p>
          <h1>Datenschutz</h1>
          <p>
            Informationen zum Umgang mit personenbezogenen Daten bei der
            Nutzung unserer Website und bei der Kontaktaufnahme mit Wien
            Transport.
          </p>
        </div>
      </section>

      <section className="section seoText">
        <h2>Datenschutzhinweise</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns wichtig. Auf dieser Seite
          informieren wir darüber, welche Angaben im Zusammenhang mit einer
          Kontaktaufnahme über unsere Website, per Telefon, E-Mail oder
          WhatsApp verwendet werden.
        </p>
      </section>

      <section className="section seoText">
        <h2>Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns per Telefon, E-Mail, WhatsApp oder über die Website
          kontaktieren, verwenden wir die von Ihnen übermittelten Angaben zur
          Bearbeitung Ihrer Anfrage und zur Kommunikation mit Ihnen.
        </p>
        <p>
          Übermitteln Sie bitte nur jene Informationen, die für Ihre
          Transport-, Umzugs- oder Kurieranfrage tatsächlich erforderlich sind.
        </p>
      </section>

      <section className="section seoText">
        <h2>WhatsApp</h2>
        <p>
          Wenn Sie eine Kontaktaufnahme über WhatsApp auswählen, verlassen Sie
          unsere Website und nutzen den Dienst des jeweiligen Anbieters.
        </p>
        <p>
          Eine Nachricht wird nicht automatisch durch den bloßen Besuch unserer
          Website versendet. Die Weiterleitung beziehungsweise das Öffnen von
          WhatsApp erfolgt erst nach Ihrer eigenen Aktion.
        </p>
      </section>

      <section className="section seoText">
        <h2>Website-Anfrage</h2>
        <p>
          Das derzeit auf der Website verwendete Anfrageformular versendet die
          eingegebenen Daten nicht an einen eigenen Server von Wien Transport.
        </p>
        <p>
          Aus den von Ihnen eingegebenen Angaben wird eine Nachricht für die
          Kontaktaufnahme vorbereitet. WhatsApp wird erst nach Ihrer
          Bestätigung beziehungsweise Aktion geöffnet.
        </p>
      </section>

      <section className="section seoText">
        <h2>Welche Angaben können übermittelt werden?</h2>
        <p>
          Je nach Art Ihrer Anfrage können Sie beispielsweise Informationen zu
          Abholort, Zielort, gewünschtem Termin, Fahrzeugbedarf,
          Telefonnummer oder weitere Angaben zu Ihrer Fahrt beziehungsweise
          Ihrem Transport übermitteln.
        </p>
        <p>
          Welche Informationen Sie tatsächlich übermitteln, bestimmen Sie
          selbst im Rahmen Ihrer Anfrage.
        </p>
      </section>

      <section className="section seoText">
        <h2>Zweck der Kontaktaufnahme</h2>
        <p>
          Die übermittelten Informationen werden verwendet, um Ihre Anfrage zu
          verstehen, Rückfragen zu beantworten und Ihnen Informationen zu einer
          möglichen Fahrt, einem Transport oder einer sonstigen angefragten
          Leistung geben zu können.
        </p>
      </section>

      <section className="section seoText">
        <h2>Externe Dienste</h2>
        <p>
          Sobald Sie einem Link zu einem externen Anbieter wie WhatsApp folgen,
          gelten zusätzlich die Datenschutzbestimmungen und Bedingungen des
          jeweiligen Anbieters. Auf deren Verarbeitung außerhalb unserer
          Website haben wir keinen unmittelbaren Einfluss.
        </p>
      </section>

      <section className="section seoText">
        <h2>Kontakt zum Datenschutz</h2>
        <p>
          Bei Fragen zum Datenschutz oder zur Verwendung der von Ihnen
          übermittelten Angaben können Sie uns kontaktieren:
        </p>
        <p>
          E-Mail:{" "}
          <a href="mailto:aa66tx@gmail.com">
            aa66tx@gmail.com
          </a>
        </p>
        <p>
          Weitere Kontakt- und Unternehmensangaben finden Sie in unserem{" "}
          <Link href="/impressum">Impressum</Link>.
        </p>
      </section>
    </main>
  );
}
