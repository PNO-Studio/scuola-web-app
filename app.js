// Dati dei corsi
const CORSI_DATA = [
  {
    "tipologia": "Unità di Apprendimento Modulo 8h",
    "titolo": "Le Donne nell'Arte",
    "periodo": "TRIMESTRE",
    "descrizione": "Percorso di presentazione di una donna che ha avuto un ruolo di rilievo nel panorama artistico culturale del Novecento.",
    "prodotti": "",
    "docenti": [{"nome": "Vincenza Benvenuto", "email": "benvenuto.vincenza@lasboccioni.it"}],
    "maxStudenti": 20,
    "priorita": "Triennio, Terze, Quarte, Quinte, Architettura, Design, Figurativo, Grafica, Multimediale",
    "prerequisiti": "prerequisiti lettura dell'opera d'arte ottenuti con la frequentazione del primio biennio",
    "strumentazioni": "Tablet/pc",
    "software": "Pacchetto Office e connessione internet",
    "aula": "aula con Lim funzionante",
    "discipline": ["STORIA DELL'ARTE"],
    "calendario": "MERCOLEDÌ"
  },
  {
    "tipologia": "Unità di Apprendimento Modulo 8h",
    "titolo": "Dallo scarto al design",
    "periodo": "PENTAMESTRE",
    "descrizione": "Il laboratorio si propone di avvicinare gli studenti del biennio e del triennio ai temi della sostenibilità e della creatività responsabile, trasformando materiali di recupero in oggetti di design unici e originali.",
    "prodotti": "Realizzazione di un prototipo con materiali di scarto",
    "docenti": [
      {"nome": "Francesca Floridia", "email": "floridia.francesca@doc.lasboccioni.it"},
      {"nome": "Anna Sanfilippo", "email": "sanfilippo.anna@lasboccioni.it"}
    ],
    "maxStudenti": 20,
    "priorita": "Tutti",
    "prerequisiti": "",
    "strumentazioni": "Computer, LIM, banchi grandi",
    "software": "Office, Power Point",
    "materiali": "Fogli A3, Cartoncini, Colla, Matite colorate, Pantoni",
    "aula": "1.20",
    "discipline": ["DESIGN"],
    "calendario": "MERCOLEDÌ"
  },
  {
    "tipologia": "Unità di Apprendimento Modulo 8h",
    "titolo": "CINEMA E PITTURA. MAESTRI AL CONFRONTO SUL GRANDE SCHERMO",
    "periodo": "TRIMESTRE",
    "descrizione": "legame tra il cinema e la pittura, mettendo in luce come i grandi registi abbiano ripreso e reinterpretato i linguaggi pittorici attraverso il mezzo cinematografico",
    "prodotti": "",
    "docenti": [
      {"nome": "Diamante Faraldo", "email": "faraldo.diamante@lasboccioni.it"},
      {"nome": "Francesca Alparone", "email": "alparone.franca@lasboccioni.it"}
    ],
    "maxStudenti": 20,
    "priorita": "Triennio, Architettura, Design, Figurativo, Grafica, Multimediale",
    "prerequisiti": "CURIOSITA' E PASSIONE VERSO GLI ARGOMENTI TRATTATI",
    "strumentazioni": "computer - proiettore",
    "software": "",
    "aula": "",
    "discipline": ["STORIA DELL'ARTE", "PITTORICHE", "PLASTICHE"],
    "calendario": "MARTEDÌ"
  },
  {
    "tipologia": "Unità di Apprendimento Modulo 8h",
    "titolo": "ARTE E SISTEMA DELL'ARTE",
    "periodo": "TRIMESTRE",
    "descrizione": "il ruolo dell'arte nel mondo contemporaneo-il sistema che la sostiene, la promuove e la distribuisce. Il sistema dell'arte - Il ruolo dell'artista e delle istituzioni- Arte e mercati globali-Le nuove frontiere dell'arte contemporanea",
    "prodotti": "",
    "docenti": [
      {"nome": "Diamante Faraldo", "email": "faraldo.diamante@lasboccioni.it"},
      {"nome": "Francesca Alparone", "email": "alparone.franca@lasboccioni.it"}
    ],
    "maxStudenti": 20,
    "priorita": "Triennio, Architettura, Design, Figurativo, Grafica, Multimediale",
    "prerequisiti": "Capacità critica - interesse per il rapporto tra arte, cultura e mercato",
    "strumentazioni": "computer - proiettore",
    "software": "",
    "aula": "",
    "discipline": ["STORIA DELL'ARTE", "PITTORICHE", "PLASTICHE", "EDUCAZIONE CIVICA"],
    "calendario": "MERCOLEDÌ"
  },
  {
    "tipologia": "Unità di Apprendimento Modulo 8h",
    "titolo": "Arte e bellezza e mysterium fascinosum nelle Religioni",
    "periodo": "TRIMESTRE",
    "descrizione": "Breve itinerario fatto di incontri e uscite sull'arte in relazione alla ricerca, alla narrazione e alla conoscenza di Dio nelle Religioni rivelate e naturali.",
    "prodotti": "",
    "docenti": [{"nome": "Fedele Zamboni", "email": "zamboni.fedele@lasboccioni.it"}],
    "maxStudenti": 25,
    "priorita": "Tutti, Architettura, Design, Figurativo, Grafica, Multimediale",
    "prerequisiti": "Frequenza costante, interesse e correttezza",
    "strumentazioni": "Lim",
    "software": "Pacchetto office",
    "materiali": "Cartoncini colorati",
    "aula": "Un'aula con lim e banchi capiente",
    "discipline": ["RELIGIONE"],
    "calendario": "MARTEDÌ, MERCOLEDÌ"
  },
  {
    "tipologia": "Unità di Apprendimento Modulo 8h",
    "titolo": "Teatro al Boccioni",
    "periodo": "TRIMESTRE",
    "descrizione": "Il corso è aperto a tutte le studentesse e gli studenti interessati ad ampliare la loro conoscenza artistica e sviluppare, tramite le tecniche attoriali, la propria personalità e capacità di rapportarsi tra pari.",
    "prodotti": "",
    "docenti": [{"nome": "Anna Torrillo", "email": "torrillo.anna@lasboccioni.it"}],
    "maxStudenti": 25,
    "priorita": "Tutti",
    "prerequisiti": "",
    "strumentazioni": "",
    "software": "",
    "aula": "palestra (palazzetto)",
    "discipline": ["EDUCAZIONE CIVICA", "ITALIANO", "SCIENZE MOTORIE"],
    "calendario": "MERCOLEDÌ, GIOVEDÌ"
  },
  {
    "tipologia": "Unità di Apprendimento Modulo 8h",
    "titolo": "CiviCare - La rivoluzione dell'Educazione Civica attraverso il GDR",
    "periodo": "PENTAMESTRE",
    "descrizione": "CiviCare rivoluziona l'educazione civica con un gioco di ruolo (GDR) che, in 8 ore, porta gli studenti a ricreare una società affrontando le tematiche del MIUR. Attraverso dibattiti e ruoli, sviluppano soft skills come pensiero critico e lavoro di squadra.",
    "prodotti": "",
    "docenti": [{"nome": "Gianandrea Piccinini", "email": "piccinini.gianandrea@doc.lasboccioni.it"}],
    "maxStudenti": 25,
    "priorita": "Tutti",
    "prerequisiti": "",
    "strumentazioni": "",
    "software": "",
    "aula": "",
    "discipline": ["EDUCAZIONE CIVICA"],
    "calendario": "LUNEDÌ, MERCOLEDÌ, GIOVEDÌ"
  },
  {
    "tipologia": "Unità di Apprendimento Modulo 8h",
    "titolo": "Voci fuori dal coro: L'Officina dei Cantautori",
    "periodo": "TRIMESTRE",
    "descrizione": "Poesia e musica, da sempre legate fin dalla lirica greca, trovano espressione nei cantautori italiani dagli anni '70 del '900. L'unità didattica esplorerà sensibilità e valore letterario di alcuni brani che ascolteremo, analizzeremo e canteremo.",
    "prodotti": "Registrazione audio di una delle canzoni analizzate. Eventuale realizzazione di un videoclip musicale",
    "docenti": [
      {"nome": "Annamaria Atzori", "email": "atzori.annamaria@lasboccioni.it"},
      {"nome": "Chiara Barone", "email": "barone.chiara@lasboccioni.it"}
    ],
    "maxStudenti": 20,
    "priorita": "Triennio, Grafica, Multimediale",
    "prerequisiti": "Interesse per la musica d'autore e per il suo processo creativo",
    "strumentazioni": "5 pc portatili, 2/3 microfoni cardioidi, 2/3 aste per microfoni, cuffie",
    "software": "Audacity, Canva o CapCut, Classroom",
    "aula": "Qualsiasi aula per prime due lezioni, Aula R17 per registrazione",
    "discipline": ["ITALIANO", "EDUCAZIONE CIVICA", "STORIA"],
    "calendario": "LUNEDÌ, MARTEDÌ, MERCOLEDÌ, GIOVEDÌ"
  },
  {
    "tipologia": "Unità di Apprendimento Modulo 8h",
    "titolo": "Modellazione 3D e rendering fotorealistico in architettura con Archicad",
    "periodo": "TRIMESTRE",
    "descrizione": "Il corso è finalizzato alla formazione sull'uso di Archicad per la modellazione 3D di progetti architettonici e la realizzazione di rendering fotorealistici.",
    "prodotti": "",
    "docenti": [{"nome": "Mario Santangelo", "email": "santangelo.mario@doc.lasboccioni.it"}],
    "maxStudenti": 20,
    "priorita": "Triennio, Terze, Quarte, Quinte, Architettura, Design",
    "prerequisiti": "",
    "strumentazioni": "Computer",
    "software": "Archicad",
    "aula": "1.07",
    "discipline": ["ARCHITETTURA"],
    "calendario": "MERCOLEDÌ"
  },
  {
    "tipologia": "Unità di Apprendimento Modulo 8h",
    "titolo": "L'ABC della scultura in marmo di Carrara",
    "periodo": "PENTAMESTRE",
    "descrizione": "Le basi della scultura per via di levare. Conoscenza del marmo di Carrara attraverso la sperimentazione. Studio e definizione di semplici volumetrie, piani inclinati, concavi e convessi.",
    "prodotti": "Ogni studente realizzerà una piccola scultura in marmo di Carrara",
    "docenti": [
      {"nome": "Elisabetta Erica Tagliabue", "email": "tagliabue.elisabetta@lasboccioni.it"},
      {"nome": "Elisabetta Vitelli", "email": "vitelli.elisabetta@lasboccioni.it"}
    ],
    "maxStudenti": 12,
    "priorita": "Tutti",
    "prerequisiti": "Curiosità, Interesse, Passione, Regolarità nella frequenza",
    "strumentazioni": "PC, proiettore, strumenti di protezione individuale (occhiali con protezioni laterali, guanti leggeri di tessuto con grip, gradina, scalpello, mazzuolo, carte abrasive)",
    "materiali": "Piccoli pezzi di marmo di Carrara",
    "aula": "S07 Laboratorio di Discipline Plastiche Scultoree Scenoplastiche",
    "discipline": ["PLASTICHE", "GEOMETRICHE"],
    "calendario": "MERCOLEDÌ"
  },
  {
    "tipologia": "Riallineamento Recupero carenze",
    "titolo": "corso di riallineamento-recupero carenze",
    "periodo": "TRIMESTRE",
    "descrizione": "Il corso si propone di recuperare le eventuali carenze emerse e di potenziare le competenze linguistiche.",
    "prodotti": "",
    "docenti": [{"nome": "Paola Daghetta", "email": "daghetta.paola@lasboccioni.it"}],
    "maxStudenti": 15,
    "priorita": "Biennio, Prime, Seconde, Architettura, Design, Figurativo, Grafica, Multimediale",
    "prerequisiti": "Si rimanda a quanto già esplicitato nei programmi svolti dell'anno precedente",
    "strumentazioni": "computer",
    "software": "contenuti digitali forniti dal libro di testo in adozione",
    "aula": "",
    "discipline": ["INGLESE"],
    "calendario": "MERCOLEDÌ"
  },
  {
    "tipologia": "Unità di Apprendimento Modulo 8h",
    "titolo": "Illustrazione digitale con adobe illustrator",
    "periodo": "TRIMESTRE",
    "descrizione": "Il corso di illustrazione digitale con Adobe Illustrator insegna a tradurre testi in immagini digitali. Dopo una breve introduzione al disegno, si affronteranno le basi del software: gestione di tracciati e livelli, composizione, colore.",
    "prodotti": "Tavole illustrate",
    "docenti": [{"nome": "Giuseppe Mendolia Calella", "email": "mendoliacalella.giuseppe@lasboccioni.it"}],
    "maxStudenti": 20,
    "priorita": "Prime, Seconde, Figurativo",
    "prerequisiti": "",
    "strumentazioni": "Computer, Stampante a colori A4",
    "software": "Adobe Illustrator",
    "materiali": "Fogli A4 300 grammi",
    "aula": "R14",
    "discipline": ["MULTIMEDIALE", "GRAFICA"],
    "calendario": "LUNEDÌ"
  },
  {
    "tipologia": "Unità di Apprendimento Modulo 8h",
    "titolo": "LA BOTTEGA DEI COLORI. Laboratorio di chimica e arte: creazione e utilizzo dei pastelli soffici",
    "periodo": "TRIMESTRE",
    "descrizione": "Dalla chimica all'arte: gli studenti vivranno un'esperienza unica tra scienza e creatività, creando, in un vero laboratorio di chimica, pastelli soffici con pigmenti come Bianco di Titanio, Blu di Prussia e Nero di Marte.",
    "prodotti": "OPERA ARTISTICA (disegno monocromatico a tema marina), PASTELLI SOFFICI confezionati in un packaging in carta",
    "docenti": [
      {"nome": "Anna Strada", "email": "strada.anna@lasboccioni.it"},
      {"nome": "Giuliana Scagliusi", "email": "scagliusi.giuliana@lasboccioni.it"}
    ],
    "maxStudenti": 20,
    "priorita": "Triennio",
    "prerequisiti": "Esperienza con tecniche pittoriche di base",
    "strumentazioni": "bilance, vetreria da laboratorio, mortai in vetro, spatole in gomma e da pittura, Telecamera per Documenti",
    "software": "Presentazioni multimediali (Google Presentazioni)",
    "materiali": "guanti di lattice, mascherine FFP2, camice monouso, pigmenti, legante CMC, acqua distillata, scotch di carta, carta Pastelmat, cartoncino per il packaging",
    "aula": "R17B LABORATORIO DI CHIMICA",
    "discipline": ["CHIMICA", "PITTORICHE"],
    "calendario": "GIOVEDÌ"
  },
  {
    "tipologia": "Unità di Apprendimento Modulo 8h",
    "titolo": "Cut&Care",
    "periodo": "TRIMESTRE",
    "descrizione": "Il corso Cut&Care si propone di insegnare a produrre videotutorial di nail art, dal concept alla pubblicazione! Durante il corso verranno spiegate e messe in pratica nozioni base di ripresa con videocamera/smartphone, montaggio con Adobe Premiere Pro, creazione di tutorial chiari e coinvolgenti.",
    "prodotti": "Video tutorial",
    "docenti": [{"nome": "Livia Mariani", "email": "mariani.livia@lasboccioni.it"}],
    "maxStudenti": 25,
    "priorita": "Biennio",
    "prerequisiti": "",
    "strumentazioni": "videocamera 6D, Microfono",
    "software": "",
    "aula": "R14",
    "discipline": ["MULTIMEDIALE"],
    "calendario": "MERCOLEDÌ"
  },
  {
    "tipologia": "Unità di Apprendimento Modulo 8h",
    "titolo": "Luce su Misura: Design e Prototipazione Digitale di Paralumi",
    "periodo": "TRIMESTRE",
    "descrizione": "Un percorso didattico immersivo per allenare creatività, competenze tecniche e capacità progettuale che intende trasformare le idee in soluzioni concrete attraverso il Design Thinking e la prototipazione digitale. Sviluppo e realizzazione di un paralume personalizzato.",
    "prodotti": "Prototipo di una lampada",
    "docenti": [{"nome": "Gianandrea Piccinini", "email": "piccinini.gianandrea@doc.lasboccioni.it"}],
    "maxStudenti": 16,
    "priorita": "Triennio",
    "prerequisiti": "Conoscenza elementare dell'uso del computer, Esperienza minima con software di grafica o modellazione 2D/3D",
    "strumentazioni": "Carrello PC 1 o 2, Stampante 3D FDM Snapmaker, Laser-cutter Flux Beamo",
    "software": "Autodesk Fusion 360, Adobe Creative Cloud",
    "materiali": "8 lampadine attacco filettato E27, 8 lampadine attacco filettato E14, Bobina di filamento in PLA opaco",
    "aula": "S.10 Fab.Lab, 1.20",
    "discipline": ["DESIGN"],
    "calendario": "LUNEDÌ, MARTEDÌ, MERCOLEDÌ, GIOVEDÌ, VENERDÌ"
  }
];

// Stato dell'applicazione
let appState = {
  corsi: [],
  corsiFiltrati: [],
  filtriAttivi: {
    tipologia: [],
    periodo: [],
    anno: [],
    indirizzo: [],
    discipline: [],
    giorno: []
  },
  searchTerm: '',
  currentView: 'grid',
  sortBy: 'alfabetico',
  corsoCorrente: null
};

// Funzione di debounce
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Inizializzazione app
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  console.log('Inizializzazione app...');
  
  // Carica dati
  appState.corsi = processCorsiData(CORSI_DATA);
  appState.corsiFiltrati = [...appState.corsi];
  
  console.log('Corsi caricati:', appState.corsi.length);
  
  // Carica filtri salvati
  loadSavedFilters();
  
  // Setup event listeners
  setupEventListeners();
  
  // Genera filtri
  generateFilters();
  
  // Simula caricamento
  setTimeout(() => {
    hideLoading();
    renderCorsi();
    updateCourseCounter();
    console.log('App inizializzata correttamente');
  }, 500);
}

function processCorsiData(data) {
  return data.map((corso, index) => ({
    id: index,
    ...corso,
    anni: extractAnni(corso.priorita),
    indirizzi: extractIndirizzi(corso.priorita),
    giorni: corso.calendario ? corso.calendario.split(', ').map(g => g.trim()) : []
  }));
}

function extractAnni(priorita) {
  const anni = [];
  const prioritaLower = priorita.toLowerCase();
  
  if (prioritaLower.includes('tutti') || prioritaLower.includes('biennio') || prioritaLower.includes('prime')) anni.push('Prime');
  if (prioritaLower.includes('tutti') || prioritaLower.includes('biennio') || prioritaLower.includes('seconde')) anni.push('Seconde');
  if (prioritaLower.includes('tutti') || prioritaLower.includes('triennio') || prioritaLower.includes('terze')) anni.push('Terze');
  if (prioritaLower.includes('tutti') || prioritaLower.includes('triennio') || prioritaLower.includes('quarte')) anni.push('Quarte');
  if (prioritaLower.includes('tutti') || prioritaLower.includes('triennio') || prioritaLower.includes('quinte')) anni.push('Quinte');
  
  return anni.length ? anni : ['Tutti'];
}

function extractIndirizzi(priorita) {
  const indirizzi = [];
  const prioritaLower = priorita.toLowerCase();
  
  if (prioritaLower.includes('architettura')) indirizzi.push('Architettura');
  if (prioritaLower.includes('design')) indirizzi.push('Design');
  if (prioritaLower.includes('figurativo')) indirizzi.push('Figurativo');
  if (prioritaLower.includes('grafica')) indirizzi.push('Grafica');
  if (prioritaLower.includes('multimediale')) indirizzi.push('Multimediale');
  
  return indirizzi.length ? indirizzi : ['Tutti'];
}

function setupEventListeners() {
  console.log('Setup event listeners...');
  
  // Ricerca
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    const debouncedSearch = debounce(handleSearch, 300);
    searchInput.addEventListener('input', debouncedSearch);
    console.log('Search listener configurato');
  }
  
  // Toggle vista
  const gridViewBtn = document.getElementById('gridViewBtn');
  const listViewBtn = document.getElementById('listViewBtn');
  if (gridViewBtn) gridViewBtn.addEventListener('click', () => setView('grid'));
  if (listViewBtn) listViewBtn.addEventListener('click', () => setView('list'));
  
  // Ordinamento
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.addEventListener('change', handleSort);
  
  // Reset filtri
  const resetFilters = document.getElementById('resetFilters');
  if (resetFilters) resetFilters.addEventListener('click', resetAllFilters);
  
  // Sidebar toggle per mobile
  const sidebarToggle = document.getElementById('sidebarToggle');
  if (sidebarToggle) sidebarToggle.addEventListener('click', toggleSidebar);
  
  // Modals
  setupModalListeners();
  
  // Chiudi modals con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
  
  console.log('Event listeners configurati');
}

function setupModalListeners() {
  // Course Modal
  const closeModal = document.getElementById('closeModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalRegisterBtn = document.getElementById('modalRegisterBtn');
  
  if (closeModal) closeModal.addEventListener('click', () => hideModal('courseModal'));
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', () => hideModal('courseModal'));
  if (modalRegisterBtn) modalRegisterBtn.addEventListener('click', openRegistrationModal);
  
  // Registration Modal
  const closeRegistrationModal = document.getElementById('closeRegistrationModal');
  const cancelRegistration = document.getElementById('cancelRegistration');
  const registrationForm = document.getElementById('registrationForm');
  
  if (closeRegistrationModal) closeRegistrationModal.addEventListener('click', () => hideModal('registrationModal'));
  if (cancelRegistration) cancelRegistration.addEventListener('click', () => hideModal('registrationModal'));
  if (registrationForm) registrationForm.addEventListener('submit', handleRegistration);
  
  // Success Modal
  const closeSuccessModal = document.getElementById('closeSuccessModal');
  if (closeSuccessModal) closeSuccessModal.addEventListener('click', () => hideModal('successModal'));
  
  // Chiudi con click su backdrop
  document.querySelectorAll('.modal__backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal');
      if (modal) hideModal(modal.id);
    });
  });
  
  console.log('Modal listeners configurati');
}

function handleSearch(e) {
  console.log('Search triggered:', e.target.value);
  appState.searchTerm = e.target.value.toLowerCase().trim();
  applyFilters();
}

function generateFilters() {
  generateTipologiaFilters();
  generatePeriodoFilters();
  generateAnnoFilters();
  generateIndirizzoFilters();
  generateDisciplineFilters();
  generateGiornoFilters();
}

function generateTipologiaFilters() {
  const tipologie = [...new Set(appState.corsi.map(c => c.tipologia))];
  const container = document.getElementById('tipologiaFilters');
  
  if (!container) return;
  
  container.innerHTML = tipologie.map(tip => {
    const count = appState.corsi.filter(c => c.tipologia === tip).length;
    const isChecked = appState.filtriAttivi.tipologia.includes(tip);
    const label = tip.includes('8h') ? 'Unità Apprendimento' : 'Riallineamento';
    
    return `
      <label class="filter-option">
        <input type="checkbox" value="${tip}" ${isChecked ? 'checked' : ''}>
        <span class="filter-option__label">${label}</span>
        <span class="filter-option__count">${count}</span>
      </label>
    `;
  }).join('');
  
  container.addEventListener('change', (e) => handleFilterChange('tipologia', e));
}

function generatePeriodoFilters() {
  const periodi = [...new Set(appState.corsi.map(c => c.periodo))];
  const container = document.getElementById('periodoFilters');
  
  if (!container) return;
  
  container.innerHTML = periodi.map(per => {
    const count = appState.corsi.filter(c => c.periodo === per).length;
    const isChecked = appState.filtriAttivi.periodo.includes(per);
    
    return `
      <label class="filter-option">
        <input type="checkbox" value="${per}" ${isChecked ? 'checked' : ''}>
        <span class="filter-option__label">${per}</span>
        <span class="filter-option__count">${count}</span>
      </label>
    `;
  }).join('');
  
  container.addEventListener('change', (e) => handleFilterChange('periodo', e));
}

function generateAnnoFilters() {
  const anni = ['Prime', 'Seconde', 'Terze', 'Quarte', 'Quinte', 'Tutti'];
  const container = document.getElementById('annoFilters');
  
  if (!container) return;
  
  container.innerHTML = anni.map(anno => {
    const count = appState.corsi.filter(c => c.anni.includes(anno)).length;
    const isChecked = appState.filtriAttivi.anno.includes(anno);
    
    return `
      <label class="filter-option">
        <input type="checkbox" value="${anno}" ${isChecked ? 'checked' : ''}>
        <span class="filter-option__label">${anno}</span>
        <span class="filter-option__count">${count}</span>
      </label>
    `;
  }).join('');
  
  container.addEventListener('change', (e) => handleFilterChange('anno', e));
}

function generateIndirizzoFilters() {
  const indirizzi = ['Architettura', 'Design', 'Figurativo', 'Grafica', 'Multimediale', 'Tutti'];
  const container = document.getElementById('indirizzoFilters');
  
  if (!container) return;
  
  container.innerHTML = indirizzi.map(ind => {
    const count = appState.corsi.filter(c => c.indirizzi.includes(ind)).length;
    const isChecked = appState.filtriAttivi.indirizzo.includes(ind);
    
    return `
      <label class="filter-option">
        <input type="checkbox" value="${ind}" ${isChecked ? 'checked' : ''}>
        <span class="filter-option__label">${ind}</span>
        <span class="filter-option__count">${count}</span>
      </label>
    `;
  }).join('');
  
  container.addEventListener('change', (e) => handleFilterChange('indirizzo', e));
}

function generateDisciplineFilters() {
  const discipline = [...new Set(appState.corsi.flatMap(c => c.discipline))].sort();
  const container = document.getElementById('disciplineFilters');
  
  if (!container) return;
  
  container.innerHTML = discipline.map(disc => {
    const count = appState.corsi.filter(c => c.discipline.includes(disc)).length;
    const isChecked = appState.filtriAttivi.discipline.includes(disc);
    
    return `
      <label class="filter-option">
        <input type="checkbox" value="${disc}" ${isChecked ? 'checked' : ''}>
        <span class="filter-option__label">${disc}</span>
        <span class="filter-option__count">${count}</span>
      </label>
    `;
  }).join('');
  
  container.addEventListener('change', (e) => handleFilterChange('discipline', e));
}

function generateGiornoFilters() {
  const giorni = ['LUNEDÌ', 'MARTEDÌ', 'MERCOLEDÌ', 'GIOVEDÌ', 'VENERDÌ'];
  const container = document.getElementById('giornoFilters');
  
  if (!container) return;
  
  container.innerHTML = giorni.map(giorno => {
    const count = appState.corsi.filter(c => 
      c.giorni.some(g => g.toUpperCase().includes(giorno))
    ).length;
    const isChecked = appState.filtriAttivi.giorno.includes(giorno);
    
    return `
      <label class="filter-option">
        <input type="checkbox" value="${giorno}" ${isChecked ? 'checked' : ''}>
        <span class="filter-option__label">${giorno.charAt(0) + giorno.slice(1).toLowerCase()}</span>
        <span class="filter-option__count">${count}</span>
      </label>
    `;
  }).join('');
  
  container.addEventListener('change', (e) => handleFilterChange('giorno', e));
}

function handleFilterChange(filterType, e) {
  const value = e.target.value;
  const isChecked = e.target.checked;
  
  console.log(`Filter change: ${filterType} - ${value} - ${isChecked}`);
  
  if (isChecked) {
    if (!appState.filtriAttivi[filterType].includes(value)) {
      appState.filtriAttivi[filterType].push(value);
    }
  } else {
    appState.filtriAttivi[filterType] = appState.filtriAttivi[filterType].filter(v => v !== value);
  }
  
  applyFilters();
  saveFilters();
}

function applyFilters() {
  console.log('Applying filters...', appState.filtriAttivi, 'Search:', appState.searchTerm);
  
  let corsiFiltrati = [...appState.corsi];
  
  // Applica ricerca
  if (appState.searchTerm) {
    corsiFiltrati = corsiFiltrati.filter(corso => 
      corso.titolo.toLowerCase().includes(appState.searchTerm) ||
      corso.descrizione.toLowerCase().includes(appState.searchTerm) ||
      corso.docenti.some(doc => doc.nome.toLowerCase().includes(appState.searchTerm)) ||
      corso.discipline.some(disc => disc.toLowerCase().includes(appState.searchTerm))
    );
    console.log('After search filter:', corsiFiltrati.length);
  }
  
  // Applica filtri
  Object.keys(appState.filtriAttivi).forEach(filterType => {
    const activeFilters = appState.filtriAttivi[filterType];
    if (activeFilters.length > 0) {
      corsiFiltrati = corsiFiltrati.filter(corso => {
        switch(filterType) {
          case 'tipologia':
            return activeFilters.includes(corso.tipologia);
          case 'periodo':
            return activeFilters.includes(corso.periodo);
          case 'anno':
            return activeFilters.some(anno => corso.anni.includes(anno));
          case 'indirizzo':
            return activeFilters.some(ind => corso.indirizzi.includes(ind));
          case 'discipline':
            return activeFilters.some(disc => corso.discipline.includes(disc));
          case 'giorno':
            return activeFilters.some(giorno => 
              corso.giorni.some(g => g.toUpperCase().includes(giorno))
            );
          default:
            return true;
        }
      });
    }
  });
  
  // Applica ordinamento
  corsiFiltrati = sortCorsi(corsiFiltrati, appState.sortBy);
  
  appState.corsiFiltrati = corsiFiltrati;
  console.log('Final filtered courses:', corsiFiltrati.length);
  
  renderCorsi();
  updateCourseCounter();
}

function sortCorsi(corsi, sortBy) {
  switch(sortBy) {
    case 'alfabetico':
      return corsi.sort((a, b) => a.titolo.localeCompare(b.titolo));
    case 'docente':
      return corsi.sort((a, b) => a.docenti[0].nome.localeCompare(b.docenti[0].nome));
    case 'posti':
      return corsi.sort((a, b) => b.maxStudenti - a.maxStudenti);
    default:
      return corsi;
  }
}

function renderCorsi() {
  const container = document.getElementById('coursesGrid');
  const noResults = document.getElementById('noResults');
  
  if (!container || !noResults) return;
  
  console.log('Rendering courses:', appState.corsiFiltrati.length);
  
  if (appState.corsiFiltrati.length === 0) {
    container.classList.add('hidden');
    noResults.classList.remove('hidden');
    return;
  }
  
  container.classList.remove('hidden');
  noResults.classList.add('hidden');
  
  container.innerHTML = appState.corsiFiltrati.map(corso => createCourseCard(corso)).join('');
  
  // Setup event listeners per le card
  setupCourseCardListeners();
}

function setupCourseCardListeners() {
  const container = document.getElementById('coursesGrid');
  if (!container) return;
  
  container.querySelectorAll('.course-card').forEach(card => {
    const courseId = parseInt(card.dataset.courseId);
    
    const detailsBtn = card.querySelector('.btn--details');
    const registerBtn = card.querySelector('.btn--register');
    
    if (detailsBtn) {
      detailsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Opening course modal for:', courseId);
        openCourseModal(courseId);
      });
    }
    
    if (registerBtn) {
      registerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('Opening registration for:', courseId);
        appState.corsoCorrente = appState.corsi.find(c => c.id === courseId);
        openRegistrationModal();
      });
    }
  });
  
  console.log('Course card listeners configurati');
}

function createCourseCard(corso) {
  const shortDescription = corso.descrizione.length > 100 
    ? corso.descrizione.substring(0, 100) + '...' 
    : corso.descrizione;
    
  const primaryTeacher = corso.docenti[0].nome;
  const teacherCount = corso.docenti.length > 1 ? ` (+${corso.docenti.length - 1})` : '';
  
  return `
    <div class="course-card fade-in" data-course-id="${corso.id}">
      <div class="course-card__header">
        <h3 class="course-card__title">${corso.titolo}</h3>
        <div class="course-card__badges">
          <span class="course-badge course-badge--tipologia">
            ${corso.tipologia.includes('8h') ? 'UA 8h' : 'Recupero'}
          </span>
          <span class="course-badge course-badge--periodo">${corso.periodo}</span>
        </div>
      </div>
      
      <div class="course-card__body">
        <div class="course-card__info">
          <div class="course-info-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span class="course-info-row__value">${primaryTeacher}${teacherCount}</span>
          </div>
          
          <div class="course-info-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span class="course-info-row__value">${corso.maxStudenti} posti</span>
          </div>
          
          <div class="course-info-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span class="course-info-row__value">${corso.giorni.join(', ')}</span>
          </div>
          
          <div class="course-info-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span class="course-info-row__value">${corso.anni.join(', ')} - ${corso.indirizzi.join(', ')}</span>
          </div>
        </div>
        
        <p class="course-card__description">${shortDescription}</p>
        
        <div class="course-card__actions">
          <button class="btn btn--primary btn--sm btn--details">Dettagli</button>
          <button class="btn btn--secondary btn--sm btn--register">Iscriviti</button>
        </div>
      </div>
    </div>
  `;
}

function openCourseModal(courseId) {
  const corso = appState.corsi.find(c => c.id === courseId);
  if (!corso) {
    console.error('Corso non trovato:', courseId);
    return;
  }
  
  console.log('Opening course modal for:', corso.titolo);
  appState.corsoCorrente = corso;
  
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  
  if (modalTitle) modalTitle.textContent = corso.titolo;
  if (modalContent) modalContent.innerHTML = createCourseDetails(corso);
  
  showModal('courseModal');
}

function createCourseDetails(corso) {
  const docentiHtml = corso.docenti.map(doc => `
    <div class="docente-item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
      <div class="docente-info">
        <div class="docente-name">${doc.nome}</div>
        <div class="docente-email">${doc.email}</div>
      </div>
    </div>
  `).join('');
  
  return `
    <div class="course-details">
      <div class="course-card__badges" style="margin-bottom: 16px;">
        <span class="course-badge course-badge--tipologia">
          ${corso.tipologia.includes('8h') ? 'Unità di Apprendimento 8h' : 'Riallineamento Recupero'}
        </span>
        <span class="course-badge course-badge--periodo">${corso.periodo}</span>
      </div>
      
      <h3>Descrizione</h3>
      <p>${corso.descrizione}</p>
      
      ${corso.prodotti ? `
        <h3>Prodotti/Elaborati</h3>
        <p>${corso.prodotti}</p>
      ` : ''}
      
      <h3>Docenti</h3>
      <div class="docenti-list">
        ${docentiHtml}
      </div>
      
      <h3>Informazioni Corso</h3>
      <p><strong>Numero massimo studenti:</strong> ${corso.maxStudenti}</p>
      <p><strong>Target:</strong> ${corso.anni.join(', ')} - ${corso.indirizzi.join(', ')}</p>
      <p><strong>Discipline coinvolte:</strong> ${corso.discipline.join(', ')}</p>
      <p><strong>Calendario:</strong> ${corso.giorni.join(', ')}</p>
      
      ${corso.prerequisiti ? `
        <h3>Prerequisiti</h3>
        <p>${corso.prerequisiti}</p>
      ` : ''}
      
      ${corso.strumentazioni ? `
        <h3>Strumentazioni</h3>
        <p>${corso.strumentazioni}</p>
      ` : ''}
      
      ${corso.software ? `
        <h3>Software</h3>
        <p>${corso.software}</p>
      ` : ''}
      
      ${corso.materiali ? `
        <h3>Materiali</h3>
        <p>${corso.materiali}</p>
      ` : ''}
      
      ${corso.aula ? `
        <h3>Aula</h3>
        <p>${corso.aula}</p>
      ` : ''}
    </div>
  `;
}

function openRegistrationModal() {
  if (!appState.corsoCorrente) {
    console.error('Nessun corso selezionato per la registrazione');
    return;
  }
  
  console.log('Opening registration modal for:', appState.corsoCorrente.titolo);
  
  const form = document.getElementById('registrationForm');
  const errorDiv = document.getElementById('registrationError');
  
  if (form) form.reset();
  if (errorDiv) errorDiv.classList.add('hidden');
  
  showModal('registrationModal');
}

function handleRegistration(e) {
  e.preventDefault();
  console.log('Handling registration...');
  
  const formData = new FormData(e.target);
  const data = {
    nome: formData.get('nome'),
    cognome: formData.get('cognome'),
    classe: formData.get('classe'),
    email: formData.get('email'),
    motivazione: formData.get('motivazione'),
    corso: appState.corsoCorrente?.titolo || '',
    timestamp: new Date().toISOString()
  };
  
  console.log('Registration data:', data);
  
  // Validazione
  if (!data.nome || !data.cognome || !data.classe || !data.email || !data.motivazione) {
    showRegistrationError('Tutti i campi sono obbligatori.');
    return;
  }
  
  if (!isValidEmail(data.email)) {
    showRegistrationError('Inserisci un indirizzo email valido.');
    return;
  }
  
  // Simula invio
  setTimeout(() => {
    saveRegistration(data);
    hideModal('registrationModal');
    showModal('successModal');
    console.log('Registration completed successfully');
  }, 500);
}

function showRegistrationError(message) {
  const errorDiv = document.getElementById('registrationError');
  if (errorDiv) {
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function saveRegistration(data) {
  try {
    const registrations = JSON.parse(localStorage.getItem('registrazioni') || '[]');
    registrations.push(data);
    localStorage.setItem('registrazioni', JSON.stringify(registrations));
    console.log('Registration saved to localStorage');
  } catch (e) {
    console.warn('Error saving registration:', e);
  }
}

function setView(view) {
  console.log('Setting view to:', view);
  appState.currentView = view;
  
  const gridBtn = document.getElementById('gridViewBtn');
  const listBtn = document.getElementById('listViewBtn');
  const coursesGrid = document.getElementById('coursesGrid');
  
  if (view === 'grid') {
    if (gridBtn) gridBtn.classList.add('view-btn--active');
    if (listBtn) listBtn.classList.remove('view-btn--active');
    if (coursesGrid) coursesGrid.classList.remove('courses-grid--list');
  } else {
    if (listBtn) listBtn.classList.add('view-btn--active');
    if (gridBtn) gridBtn.classList.remove('view-btn--active');
    if (coursesGrid) coursesGrid.classList.add('courses-grid--list');
  }
  
  try {
    localStorage.setItem('preferredView', view);
  } catch (e) {
    console.warn('Error saving preferred view:', e);
  }
}

function handleSort(e) {
  console.log('Sorting by:', e.target.value);
  appState.sortBy = e.target.value;
  applyFilters();
}

function resetAllFilters() {
  console.log('Resetting all filters');
  
  appState.filtriAttivi = {
    tipologia: [],
    periodo: [],
    anno: [],
    indirizzo: [],
    discipline: [],
    giorno: []
  };
  
  appState.searchTerm = '';
  
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  
  // Reset checkboxes
  document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = false;
  });
  
  applyFilters();
  saveFilters();
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('sidebar--expanded');
    console.log('Sidebar toggled');
  }
}

function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    console.log('Modal opened:', modalId);
  }
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    console.log('Modal closed:', modalId);
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.add('hidden');
  });
  document.body.style.overflow = '';
  console.log('All modals closed');
}

function updateCourseCounter() {
  const counter = document.getElementById('courseCounter');
  if (!counter) return;
  
  const total = appState.corsi.length;
  const filtered = appState.corsiFiltrati.length;
  
  if (filtered === total) {
    counter.textContent = `${total} corsi disponibili`;
  } else {
    counter.textContent = `${filtered} di ${total} corsi trovati`;
  }
}

function hideLoading() {
  const loadingState = document.getElementById('loadingState');
  if (loadingState) {
    loadingState.classList.add('hidden');
  }
}

function loadSavedFilters() {
  try {
    const saved = localStorage.getItem('filtriCorsi');
    if (saved) {
      appState.filtriAttivi = JSON.parse(saved);
      console.log('Filters loaded from localStorage');
    }
    
    const savedView = localStorage.getItem('preferredView');
    if (savedView) {
      setView(savedView);
      console.log('View loaded from localStorage:', savedView);
    }
  } catch (e) {
    console.warn('Error loading saved filters:', e);
  }
}

function saveFilters() {
  try {
    localStorage.setItem('filtriCorsi', JSON.stringify(appState.filtriAttivi));
    console.log('Filters saved to localStorage');
  } catch (e) {
    console.warn('Error saving filters:', e);
  }
}