"use client";

import {useMemo, useRef, useState} from "react";

const MAX_FILES = 10;
const MAX_FILE_SIZE = 10 * 1024 * 1024;

const COPY = {
  de: {
    intro:"In wenigen Schritten zum Preisangebot", introText:"Je genauer Ihre Angaben und Fotos sind, desto schneller können wir den Preis berechnen.",
    service:"Gewünschte Leistung", date:"Wunschtermin", pickup:"Abholung", destination:"Zieladresse", pickupAddress:"Abholadresse", destinationAddress:"Zieladresse",
    addressHint:"Straße, PLZ, Ort", floor:"Stockwerk", floorHint:"z. B. 3. Stock", groundHint:"z. B. Erdgeschoss", lift:"Aufzug vorhanden?", choose:"Bitte wählen", yes:"Ja", no:"Nein", unknown:"Unbekannt",
    helpers:"Benötigte Tragehelfer", one:"1 Person", two:"2 Personen", three:"3+ Personen", none:"Keine", name:"Name", phone:"Telefonnummer", email:"E-Mail (optional)",
    items:"Gegenstände", itemsHint:"z. B. Sofa, Schrank, Bett, 15 Kartons …", details:"Weitere Angaben", detailsHint:"Maße, Gewicht, Demontage/Montage, Parkmöglichkeit, langer Trageweg …",
    photos:"Fotos hinzufügen", photoLimit:"Bis zu 10 Fotos, maximal 10 MB pro Bild", selectPhotos:"Fotos auswählen", consentA:"Ich stimme der Verarbeitung meiner Angaben zur Angebotserstellung gemäß der", privacy:"Datenschutzerklärung", consentB:"zu.",
    send:"Anfrage mit Fotos senden", sending:"Wird geöffnet …", footnote:"Auf unterstützten Smartphones öffnet sich die Teilen-Auswahl inklusive Fotos. Wählen Sie dort WhatsApp und senden Sie die Anfrage an Wien Transport.",
    invalid:"Bitte nur Bilder bis maximal 10 MB pro Datei auswählen.", max:"Maximal 10 Fotos sind möglich.", fallback:"WhatsApp wurde geöffnet. Bitte die ausgewählten Fotos dort zusätzlich anhängen.", failed:"Die Anfrage konnte nicht geöffnet werden. Bitte versuchen Sie es erneut oder rufen Sie uns an.", remove:"entfernen",
    request:"NEUE PREISANFRAGE – WIEN TRANSPORT", shareTitle:"Preisanfrage Wien Transport", imageAlt:"Ausgewähltes Transportgut", serviceMsg:"Leistung", dateMsg:"Wunschtermin", pickupMsg:"ABHOLUNG", targetMsg:"ZIEL", address:"Adresse", floorMsg:"Stockwerk", liftMsg:"Aufzug", scope:"UMFANG", helpersMsg:"Personen/Tragehilfe", itemsMsg:"Gegenstände", detailsMsg:"Weitere Angaben", contact:"KONTAKT", selected:"Foto(s) ausgewählt.", noPhotos:"Keine Fotos ausgewählt."
  },
  en: {
    intro:"Get your quote in just a few steps", introText:"The more precise your details and photos, the faster we can calculate your price.",
    service:"Required service", date:"Preferred date", pickup:"Pickup", destination:"Destination", pickupAddress:"Pickup address", destinationAddress:"Destination address",
    addressHint:"Street, postcode, city", floor:"Floor", floorHint:"e.g. 3rd floor", groundHint:"e.g. ground floor", lift:"Lift available?", choose:"Please select", yes:"Yes", no:"No", unknown:"Unknown",
    helpers:"Required movers", one:"1 person", two:"2 people", three:"3+ people", none:"None", name:"Name", phone:"Phone number", email:"Email (optional)",
    items:"Items", itemsHint:"e.g. sofa, wardrobe, bed, 15 boxes …", details:"Additional details", detailsHint:"Dimensions, weight, assembly, parking, long carrying distance …",
    photos:"Add photos", photoLimit:"Up to 10 photos, maximum 10 MB per image", selectPhotos:"Select photos", consentA:"I agree to the processing of my information for preparing a quote in accordance with the", privacy:"Privacy Policy", consentB:".",
    send:"Send request with photos", sending:"Opening …", footnote:"On supported smartphones, the share menu opens with your photos. Select WhatsApp and send the request to Wien Transport.",
    invalid:"Please select images only, up to 10 MB per file.", max:"A maximum of 10 photos is allowed.", fallback:"WhatsApp has opened. Please attach the selected photos there as well.", failed:"The request could not be opened. Please try again or call us.", remove:"remove",
    request:"NEW QUOTE REQUEST – WIEN TRANSPORT", shareTitle:"Wien Transport quote request", imageAlt:"Selected transport item", serviceMsg:"Service", dateMsg:"Preferred date", pickupMsg:"PICKUP", targetMsg:"DESTINATION", address:"Address", floorMsg:"Floor", liftMsg:"Lift", scope:"SCOPE", helpersMsg:"Movers", itemsMsg:"Items", detailsMsg:"Additional details", contact:"CONTACT", selected:"photo(s) selected.", noPhotos:"No photos selected."
  },
  tr: {
    intro:"Birkaç adımda fiyat teklifi alın", introText:"Bilgileriniz ve fotoğraflarınız ne kadar ayrıntılı olursa fiyatı o kadar hızlı hesaplayabiliriz.",
    service:"İstenen hizmet", date:"İstenen tarih", pickup:"Alış adresi", destination:"Teslimat adresi", pickupAddress:"Alış adresi", destinationAddress:"Teslimat adresi",
    addressHint:"Sokak, posta kodu, şehir", floor:"Kat", floorHint:"örn. 3. kat", groundHint:"örn. giriş katı", lift:"Asansör var mı?", choose:"Lütfen seçin", yes:"Evet", no:"Hayır", unknown:"Bilinmiyor",
    helpers:"Gerekli taşıma personeli", one:"1 kişi", two:"2 kişi", three:"3+ kişi", none:"Gerek yok", name:"Ad soyad", phone:"Telefon numarası", email:"E-posta (isteğe bağlı)",
    items:"Eşyalar", itemsHint:"örn. koltuk, dolap, yatak, 15 koli …", details:"Diğer bilgiler", detailsHint:"Ölçüler, ağırlık, montaj, park imkânı, taşıma mesafesi …",
    photos:"Fotoğraf ekleyin", photoLimit:"En fazla 10 fotoğraf, fotoğraf başına en fazla 10 MB", selectPhotos:"Fotoğraf seçin", consentA:"Fiyat teklifi hazırlanması için bilgilerimin", privacy:"Gizlilik Politikası", consentB:"uyarınca işlenmesini kabul ediyorum.",
    send:"Fotoğraflarla teklif isteyin", sending:"Açılıyor …", footnote:"Desteklenen telefonlarda fotoğraflarla birlikte paylaşım menüsü açılır. WhatsApp'ı seçip talebi Wien Transport'a gönderin.",
    invalid:"Lütfen yalnızca dosya başına en fazla 10 MB olan fotoğrafları seçin.", max:"En fazla 10 fotoğraf seçilebilir.", fallback:"WhatsApp açıldı. Lütfen seçtiğiniz fotoğrafları orada ayrıca ekleyin.", failed:"Talep açılamadı. Lütfen tekrar deneyin veya bizi arayın.", remove:"kaldır",
    request:"YENİ FİYAT TALEBİ – WIEN TRANSPORT", shareTitle:"Wien Transport fiyat talebi", imageAlt:"Seçilen taşıma eşyası", serviceMsg:"Hizmet", dateMsg:"İstenen tarih", pickupMsg:"ALIŞ", targetMsg:"TESLİMAT", address:"Adres", floorMsg:"Kat", liftMsg:"Asansör", scope:"KAPSAM", helpersMsg:"Taşıma personeli", itemsMsg:"Eşyalar", detailsMsg:"Diğer bilgiler", contact:"İLETİŞİM", selected:"fotoğraf seçildi.", noPhotos:"Fotoğraf seçilmedi."
  },
  ru: {
    intro:"Получите расчёт цены за несколько шагов", introText:"Чем точнее данные и фотографии, тем быстрее мы рассчитаем стоимость.",
    service:"Нужная услуга", date:"Желаемая дата", pickup:"Место погрузки", destination:"Адрес доставки", pickupAddress:"Адрес погрузки", destinationAddress:"Адрес доставки",
    addressHint:"Улица, индекс, город", floor:"Этаж", floorHint:"например, 3-й этаж", groundHint:"например, первый этаж", lift:"Есть лифт?", choose:"Выберите", yes:"Да", no:"Нет", unknown:"Неизвестно",
    helpers:"Количество грузчиков", one:"1 человек", two:"2 человека", three:"3+ человека", none:"Не нужны", name:"Имя", phone:"Номер телефона", email:"E-mail (необязательно)",
    items:"Предметы", itemsHint:"например, диван, шкаф, кровать, 15 коробок …", details:"Дополнительная информация", detailsHint:"Размеры, вес, сборка, парковка, расстояние переноски …",
    photos:"Добавить фотографии", photoLimit:"До 10 фотографий, не более 10 МБ каждая", selectPhotos:"Выбрать фотографии", consentA:"Я согласен на обработку данных для подготовки предложения согласно", privacy:"Политике конфиденциальности", consentB:".",
    send:"Отправить запрос с фото", sending:"Открывается …", footnote:"На поддерживаемых смартфонах откроется меню отправки с фотографиями. Выберите WhatsApp и отправьте запрос Wien Transport.",
    invalid:"Выберите только изображения размером до 10 МБ каждое.", max:"Можно выбрать не более 10 фотографий.", fallback:"WhatsApp открыт. Добавьте выбранные фотографии вручную.", failed:"Не удалось открыть запрос. Попробуйте ещё раз или позвоните нам.", remove:"удалить",
    request:"НОВЫЙ ЗАПРОС ЦЕНЫ – WIEN TRANSPORT", shareTitle:"Запрос цены Wien Transport", imageAlt:"Выбранный предмет перевозки", serviceMsg:"Услуга", dateMsg:"Желаемая дата", pickupMsg:"ПОГРУЗКА", targetMsg:"ДОСТАВКА", address:"Адрес", floorMsg:"Этаж", liftMsg:"Лифт", scope:"ОБЪЁМ", helpersMsg:"Грузчики", itemsMsg:"Предметы", detailsMsg:"Дополнительные данные", contact:"КОНТАКТ", selected:"фото выбрано.", noPhotos:"Фотографии не выбраны."
  },
  ar: {
    intro:"احصل على عرض سعر في خطوات قليلة", introText:"كلما كانت المعلومات والصور أدق، تمكّنا من حساب السعر بشكل أسرع.",
    service:"الخدمة المطلوبة", date:"التاريخ المطلوب", pickup:"الاستلام", destination:"الوجهة", pickupAddress:"عنوان الاستلام", destinationAddress:"عنوان الوجهة",
    addressHint:"الشارع، الرمز البريدي، المدينة", floor:"الطابق", floorHint:"مثال: الطابق الثالث", groundHint:"مثال: الطابق الأرضي", lift:"هل يوجد مصعد؟", choose:"يرجى الاختيار", yes:"نعم", no:"لا", unknown:"غير معروف",
    helpers:"عدد عمال النقل", one:"شخص واحد", two:"شخصان", three:"3 أشخاص أو أكثر", none:"لا أحد", name:"الاسم", phone:"رقم الهاتف", email:"البريد الإلكتروني (اختياري)",
    items:"الأغراض", itemsHint:"مثال: أريكة، خزانة، سرير، 15 صندوقاً …", details:"معلومات إضافية", detailsHint:"الأبعاد، الوزن، الفك والتركيب، موقف السيارة، مسافة الحمل …",
    photos:"إضافة صور", photoLimit:"حتى 10 صور، بحد أقصى 10 ميغابايت للصورة", selectPhotos:"اختيار الصور", consentA:"أوافق على معالجة بياناتي لإعداد عرض السعر وفقاً لـ", privacy:"سياسة الخصوصية", consentB:".",
    send:"إرسال الطلب مع الصور", sending:"جارٍ الفتح …", footnote:"على الهواتف المدعومة ستفتح قائمة المشاركة مع الصور. اختر WhatsApp وأرسل الطلب إلى Wien Transport.",
    invalid:"يرجى اختيار صور فقط بحجم أقصى 10 ميغابايت لكل ملف.", max:"يمكن اختيار 10 صور كحد أقصى.", fallback:"تم فتح WhatsApp. يرجى إرفاق الصور المختارة هناك أيضاً.", failed:"تعذر فتح الطلب. حاول مرة أخرى أو اتصل بنا.", remove:"حذف",
    request:"طلب سعر جديد – WIEN TRANSPORT", shareTitle:"طلب سعر Wien Transport", imageAlt:"غرض النقل المحدد", serviceMsg:"الخدمة", dateMsg:"التاريخ", pickupMsg:"الاستلام", targetMsg:"الوجهة", address:"العنوان", floorMsg:"الطابق", liftMsg:"المصعد", scope:"التفاصيل", helpersMsg:"عمال النقل", itemsMsg:"الأغراض", detailsMsg:"معلومات إضافية", contact:"التواصل", selected:"صورة محددة.", noPhotos:"لم يتم اختيار صور."
  }
};

export default function QuoteForm({t, phone, lang="de"}) {
  const c = COPY[lang] || COPY.de;
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
      setError(c.invalid);
      event.target.value = "";
      return;
    }

    const next = [...files, ...selected].slice(0, MAX_FILES);
    if (files.length + selected.length > MAX_FILES) setError(c.max);
    setFiles(next);
    event.target.value = "";
  }

  function removeFile(index) {
    setFiles(current => current.filter((_, i) => i !== index));
  }

  function buildMessage(form) {
    const value = name => String(form.get(name) || "-").trim() || "-";
    return [
      `*${c.request}*`,
      "",
      `${c.serviceMsg}: ${value("service")}`,
      `${c.dateMsg}: ${value("date")}`,
      "",
      `*${c.pickupMsg}*`,
      `${c.address}: ${value("pickup")}`,
      `${c.floorMsg}: ${value("pickupFloor")} | ${c.liftMsg}: ${value("pickupLift")}`,
      "",
      `*${c.targetMsg}*`,
      `${c.address}: ${value("destination")}`,
      `${c.floorMsg}: ${value("destinationFloor")} | ${c.liftMsg}: ${value("destinationLift")}`,
      "",
      `*${c.scope}*`,
      `${c.helpersMsg}: ${value("helpers")}`,
      `${c.itemsMsg}: ${value("inventory")}`,
      `${c.detailsMsg}: ${value("details")}`,
      "",
      `*${c.contact}*`,
      `${c.name}: ${value("name")}`,
      `${c.phone}: ${value("phone")}`,
      `${c.email}: ${value("email")}`,
      "",
      files.length ? `${files.length} ${c.selected}` : c.noPhotos
    ].join("\n");
  }

  async function submit(event) {
    event.preventDefault();
    setError("");
    setSharing(true);
    const message = buildMessage(new FormData(event.currentTarget));

    try {
      const shareData = {title: c.shareTitle, text: message};
      const canShareFiles = files.length > 0 && navigator.canShare?.({...shareData, files});

      if (canShareFiles) {
        await navigator.share({...shareData, files});
        return;
      }

      if (files.length) {
        setError(c.fallback);
      }
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    } catch (shareError) {
      if (shareError?.name !== "AbortError") {
        setError(c.failed);
      }
    } finally {
      setSharing(false);
    }
  }

  return <form className="quoteForm" onSubmit={submit}>
    <div className="formIntro">
      <strong>{c.intro}</strong>
      <span>{c.introText}</span>
    </div>

    <label><span>{c.service} *</span>
      <select name="service" required defaultValue="">
        <option value="" disabled>{t.formLabels.service}</option>
        {t.serviceOptions.map(option => <option key={option}>{option}</option>)}
      </select>
    </label>
    <label><span>{c.date}</span><input name="date" type="date"/></label>

    <fieldset>
      <legend>{c.pickup}</legend>
      <label className="wide"><span>{c.pickupAddress} *</span><input name="pickup" placeholder={c.addressHint} autoComplete="street-address" required/></label>
      <label><span>{c.floor}</span><input name="pickupFloor" placeholder={c.floorHint}/></label>
      <label><span>{c.lift}</span><select name="pickupLift" defaultValue=""><option value="">{c.choose}</option><option>{c.yes}</option><option>{c.no}</option><option>{c.unknown}</option></select></label>
    </fieldset>

    <fieldset>
      <legend>{c.destination}</legend>
      <label className="wide"><span>{c.destinationAddress} *</span><input name="destination" placeholder={c.addressHint} required/></label>
      <label><span>{c.floor}</span><input name="destinationFloor" placeholder={c.groundHint}/></label>
      <label><span>{c.lift}</span><select name="destinationLift" defaultValue=""><option value="">{c.choose}</option><option>{c.yes}</option><option>{c.no}</option><option>{c.unknown}</option></select></label>
    </fieldset>

    <label><span>{c.helpers}</span><select name="helpers" defaultValue={c.unknown}><option>{c.unknown}</option><option>{c.one}</option><option>{c.two}</option><option>{c.three}</option><option>{c.none}</option></select></label>
    <label><span>{c.name} *</span><input name="name" autoComplete="name" required/></label>
    <label><span>{c.phone} *</span><input name="phone" type="tel" autoComplete="tel" placeholder="+43 ..." required/></label>
    <label><span>{c.email}</span><input name="email" type="email" autoComplete="email"/></label>

    <label className="wide"><span>{c.items} *</span><textarea name="inventory" rows="4" placeholder={c.itemsHint} required/></label>
    <label className="wide"><span>{c.details}</span><textarea name="details" rows="3" placeholder={c.detailsHint}/></label>

    <div className="photoUpload wide">
      <div><strong>{c.photos}</strong><span>{c.photoLimit}</span></div>
      <button type="button" className="uploadButton" onClick={() => inputRef.current?.click()}>{c.selectPhotos}</button>
      <input ref={inputRef} type="file" accept="image/*" multiple onChange={chooseFiles} hidden/>
      {previews.length > 0 && <div className="photoGrid">
        {previews.map(({file, url}, index) => <figure key={`${file.name}-${file.lastModified}`}>
          <img src={url} alt={c.imageAlt}/>
          <button type="button" onClick={() => removeFile(index)} aria-label={`${file.name} ${c.remove}`}>×</button>
        </figure>)}
      </div>}
    </div>

    <label className="consent wide"><input name="consent" type="checkbox" required/><span>{c.consentA} <a href="/datenschutz" target="_blank">{c.privacy}</a> {c.consentB} *</span></label>
    {error && <p className="formNotice wide" role="status">{error}</p>}
    <button className="submitQuote wide" disabled={sharing}>{sharing ? c.sending : c.send}</button>
    <p className="formFootnote wide">{c.footnote}</p>
  </form>;
}
