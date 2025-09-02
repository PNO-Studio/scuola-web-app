/**
* Web app Catalogo + Iscrizioni
* Riccardo — guida per principianti
*/


// ⬇️ CONFIG — aggiorna qui se rinomini schede o cambi fogli
const CFG = {
CATALOG: { ssid: '1FsHJAtCItvApKgk4mLFAp4RgKLf2VQZjZwy8J9GBcxQ', sheet: 'Catalogo_UDA-POC' },
REG: { ssid: '16Yuyk3R3Ixq2Zcf_B7kN2hQE0xwTQoLKBqC84p9YhdU', sheet: 'Iscrizioni' },
REG_HEADERS: ['Timestamp','Nome','Cognome','Classe','Email','ID Corso'],
};


function doGet() {
return HtmlService.createTemplateFromFile('Index')
.evaluate()
.setTitle('Catalogo corsi – Iscrizioni')
.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


// (Facoltativa) include('FileName') per importare frammenti HTML se servisse
function include(filename) {
return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


// ————— Helpers interni —————
function _open(ssid, sheetName) {
const ss = SpreadsheetApp.openById(ssid);
const sh = ss.getSheetByName(sheetName) || ss.getSheets()[0];
return sh;
}


function _rowsToObjects(values) { // assume headers in first row
if (!values || !values.length) return [];
const headers = values[0].map(h => String(h).trim());
return values.slice(1)
.filter(r => r.some(c => c !== '' && c !== null))
.map(r => {
const o = {};
headers.forEach((h, i) => o[h] = r[i]);
return o;
});
}


// ————— API lato server —————
function getCatalog() {
const sh = _open(CFG.CATALOG.ssid, CFG.CATALOG.sheet);
const vals = sh.getDataRange().getValues();
const rows = _rowsToObjects(vals);


const reg = _open(CFG.REG.ssid, CFG.REG.sheet);
const rvals = reg.getDataRange().getValues();
const regObjs = _rowsToObjects(rvals);


// conteggio iscrizioni per ID corso
const counts = regObjs.reduce((acc, r) => {
const id = String(r['ID Corso'] || r['Corsi selezionati (ID)'] || '').trim();
if (!id) return acc;
acc[id] = (acc[id] || 0) + 1;
return acc;
}, {});


// mappa oggetti corso
const out = rows.map(row => {
const id = String(row['ID Corso'] || row['ID'] || '').trim();
const seats = Number(row['Posti disponibili'] || 0);
const booked = counts[id] || 0;
const free = seats > 0 ? Math.max(0, seats - booked) : null; // null = illimitato/indefinito
return {
id,
title: row['Titolo Corso'] || '',
teacher: row['Docente'] || '',
type: row['Tipologia'] || '',
subject: row['Disciplina'] || '',
period: row['Periodo'] || '',
weekday: row['Giorno della settimana'] || '',
time: row['Orario'] || '',
target_year: row['Anno Scolastico destinatario'] || '',
track: row['Indirizzo'] || '',
seats,
free,
prerequisites: row['Prerequisiti'] || '',
outcomes: row['Competenze in uscita'] || '',
description: row['Descrizione'] || ''
};
}).filter(c => c.id && c.title);


return out;
}


function submitRegistration(payload) {
const required = ['nome','cognome','classe','email','corsoId'];
required.forEach(k => { if (!payload || !String(payload[k]||'').trim()) throw new Error('Campo mancante: ' + k); });


const corsoId = String(payload.corsoId).trim();
const catalog = getCatalog();
const course = catalog.find(c => c.id === corsoId);
if (!course) throw new Error('Corso non trovato: ' + corsoId);
if (course.free !== null && course.free <= 0) throw new Error('Posti esauriti per questo corso.');


// blocca doppia iscrizione (stessa email + stesso corso)
const reg = _open(CFG.REG.ssid, CFG.REG.sheet);
const rvals = reg.getDataRange().getValues();
const headers = rvals[0] ? rvals[0].map(h => String(h).trim()) : [];
const idxEmail = headers.indexOf('Email');
const idxId = headers.indexOf('ID Corso') >= 0 ? headers.indexOf('ID Corso') : headers.indexOf('Corsi selezionati (ID)');
if (idxEmail >= 0 && idxId >= 0) {
const duplicate = rvals.slice(1).some(r => String(r[idxEmail]).trim().toLowerCase() === String(payload.email).trim().toLowerCase()
&& String(r[idxId]).trim() === corsoId);
if (duplicate) throw new Error('Risulti già iscritto a questo corso con questa email.');
}


// se il foglio è vuoto, scrivi intestazioni
if (!rvals.length) reg.appendRow(CFG.REG_HEADERS);


// aggiungi riga di iscrizione
const now = new Date();
const row = [
now,
payload.nome.trim(),
payload.cognome.trim(),
payload.classe.trim(),
payload.email.trim(),
corsoId
];
reg.appendRow(row);


// aggiorna posti liberi lato client
let free = course.free;
if (free !== null) free = Math.max(0, free - 1);


return { ok:true, message: 'Iscrizione registrata', corsoId, posti_liberi: free };
}
