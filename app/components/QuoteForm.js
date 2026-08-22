"use client";

import {useMemo, useRef, useState} from "react";

const MAX_FILES = 10;
const MAX_FILE_SIZE = 10 * 1024 * 1024;

export default function QuoteForm({t, phone}) {
  const inputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [sharing, setSharing] = useState(false);

  const previews = useMemo(
    () => files.map(file => ({file, url: URL.createObjectURL(file)})),
    [files]
  );

  function chooseFiles(event) {
    const selected = Array.from(event.target.files || []);
    setError("");

    const invalid = selected.find(file => !file.type.startsWith("image/") || file.size > MAX_FILE_SIZE);
    if (invalid) {
      setError("Bitte nur Bilder bis maximal 10 MB pro Datei auswählen.");
      event.target.value = "";
      return;
    }

    const next = [...files, ...selected].slice(0, MAX_FILES);
    if (files.length + selected.length > MAX_FILES) setError("Maximal 10 Fotos sind möglich.");
    setFiles(next);
    event.target.value = "";
  }

  function removeFile(index) {
    setFiles(current => current.filter((_, i) => i !== index));
  }

  function buildMessage(form) {
    const value = name => String(form.get(name) || "-").trim() || "-";
    return [
      "*NEUE PREISANFRAGE – WIEN TRANSPORT*",
      "",
      `Leistung: ${value("service")}`,
      `Wunschtermin: ${value("date")}`,
      "",
      "*ABHOLUNG*",
      `Adresse: ${value("pickup")}`,
      `Stockwerk: ${value("pickupFloor")} | Aufzug: ${value("pickupLift")}`,
      "",
      "*ZIEL*",
      `Adresse: ${value("destination")}`,
      `Stockwerk: ${value("destinationFloor")} | Aufzug: ${value("destinationLift")}`,
      "",
      "*UMFANG*",
      `Personen/Tragehilfe: ${value("helpers")}`,
      `Gegenstände: ${value("inventory")}`,
      `Weitere Angaben: ${value("details")}`,
      "",
      "*KONTAKT*",
      `Name: ${value("name")}`,
      `Telefon: ${value("phone")}`,
      `E-Mail: ${value("email")}`,
      "",
      files.length ? `${files.length} Foto(s) ausgewählt.` : "Keine Fotos ausgewählt."
    ].join("\n");
  }

  async function submit(event) {
    event.preventDefault();
    setError("");
    setSharing(true);
    const message = buildMessage(new FormData(event.currentTarget));

    try {
      const shareData = {title: "Preisanfrage Wien Transport", text: message};
      const canShareFiles = files.length > 0 && navigator.canShare?.({...shareData, files});

      if (canShareFiles) {
        await navigator.share({...shareData, files});
        return;
      }

      if (files.length) {
        setError("WhatsApp wurde geöffnet. Bitte die ausgewählten Fotos dort zusätzlich anhängen.");
      }
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    } catch (shareError) {
      if (shareError?.name !== "AbortError") {
        setError("Die Anfrage konnte nicht geöffnet werden. Bitte versuchen Sie es erneut oder rufen Sie uns an.");
      }
    } finally {
      setSharing(false);
    }
  }

  return <form className="quoteForm" onSubmit={submit}>
    <div className="formIntro">
      <strong>In wenigen Schritten zum Preisangebot</strong>
      <span>Je genauer Ihre Angaben und Fotos sind, desto schneller können wir den Preis berechnen.</span>
    </div>

    <label><span>Gewünschte Leistung *</span>
      <select name="service" required defaultValue="">
        <option value="" disabled>{t.formLabels.service}</option>
        {t.serviceOptions.map(option => <option key={option}>{option}</option>)}
      </select>
    </label>
    <label><span>Wunschtermin</span><input name="date" type="date"/></label>

    <fieldset>
      <legend>Abholung</legend>
      <label className="wide"><span>Abholadresse *</span><input name="pickup" placeholder="Straße, PLZ, Ort" autoComplete="street-address" required/></label>
      <label><span>Stockwerk</span><input name="pickupFloor" placeholder="z. B. 3. Stock"/></label>
      <label><span>Aufzug vorhanden?</span><select name="pickupLift" defaultValue=""><option value="">Bitte wählen</option><option>Ja</option><option>Nein</option><option>Unbekannt</option></select></label>
    </fieldset>

    <fieldset>
      <legend>Zieladresse</legend>
      <label className="wide"><span>Zieladresse *</span><input name="destination" placeholder="Straße, PLZ, Ort" required/></label>
      <label><span>Stockwerk</span><input name="destinationFloor" placeholder="z. B. Erdgeschoss"/></label>
      <label><span>Aufzug vorhanden?</span><select name="destinationLift" defaultValue=""><option value="">Bitte wählen</option><option>Ja</option><option>Nein</option><option>Unbekannt</option></select></label>
    </fieldset>

    <label><span>Benötigte Tragehelfer</span><select name="helpers" defaultValue="Unbekannt"><option>Unbekannt</option><option>1 Person</option><option>2 Personen</option><option>3+ Personen</option><option>Keine</option></select></label>
    <label><span>Name *</span><input name="name" autoComplete="name" required/></label>
    <label><span>Telefonnummer *</span><input name="phone" type="tel" autoComplete="tel" placeholder="+43 ..." required/></label>
    <label><span>E-Mail (optional)</span><input name="email" type="email" autoComplete="email"/></label>

    <label className="wide"><span>Gegenstände *</span><textarea name="inventory" rows="4" placeholder="z. B. Sofa, Schrank, Bett, 15 Kartons …" required/></label>
    <label className="wide"><span>Weitere Angaben</span><textarea name="details" rows="3" placeholder="Maße, Gewicht, Demontage/Montage, Parkmöglichkeit, langer Trageweg …"/></label>

    <div className="photoUpload wide">
      <div><strong>Fotos hinzufügen</strong><span>Bis zu 10 Fotos, maximal 10 MB pro Bild</span></div>
      <button type="button" className="uploadButton" onClick={() => inputRef.current?.click()}>Fotos auswählen</button>
      <input ref={inputRef} type="file" accept="image/*" multiple onChange={chooseFiles} hidden/>
      {previews.length > 0 && <div className="photoGrid">
        {previews.map(({file, url}, index) => <figure key={`${file.name}-${file.lastModified}`}>
          <img src={url} alt="Ausgewähltes Transportgut"/>
          <button type="button" onClick={() => removeFile(index)} aria-label={`${file.name} entfernen`}>×</button>
        </figure>)}
      </div>}
    </div>

    <label className="consent wide"><input name="consent" type="checkbox" required/><span>Ich stimme der Verarbeitung meiner Angaben zur Angebotserstellung gemäß der <a href="/datenschutz" target="_blank">Datenschutzerklärung</a> zu. *</span></label>
    {error && <p className="formNotice wide" role="status">{error}</p>}
    <button className="submitQuote wide" disabled={sharing}>{sharing ? "Wird geöffnet …" : "Anfrage mit Fotos senden"}</button>
    <p className="formFootnote wide">Auf unterstützten Smartphones öffnet sich die Teilen-Auswahl inklusive Fotos. Wählen Sie dort WhatsApp und senden Sie die Anfrage an Wien Transport.</p>
  </form>;
}
