// Updated course data with artistic disciplines
const courses = [
    {
        "id": 1,
        "titolo": "Disegno Digitale Avanzato",
        "docente": "Prof.ssa Rossi",
        "tipologia": "UDA - Moduli Curricolari Pomeridiani",
        "disciplina": "Grafica", 
        "periodo": "Trimestre",
        "giorno": "Lunedì",
        "orario": "14:30-16:00",
        "anno": "4",
        "indirizzo": "Grafica",
        "posti": 25,
        "prerequisiti": "Conoscenza base di software di grafica digitale e familiarità con tablet grafico.",
        "competenze": "Tecniche avanzate di disegno digitale, uso professionale di software grafici, creazione portfolio digitale.",
        "descrizione": "Approfondimento delle tecniche di disegno digitale con focus su illustrazione e concept art. Il corso prevede l'utilizzo di software professionali come Photoshop, Illustrator e Procreate per la creazione di opere digitali di qualità."
    },
    {
        "id": 2,
        "titolo": "Modellazione 3D Architettonica",
        "docente": "Arch. Bianchi",
        "tipologia": "POC - Percorsi di Orientamento", 
        "disciplina": "Architettura",
        "periodo": "Pentamestre",
        "giorno": "Martedì",
        "orario": "15:00-17:00",
        "anno": "5",
        "indirizzo": "Architettura",
        "posti": 20,
        "prerequisiti": "Conoscenze di disegno tecnico, geometria descrittiva e rappresentazione architettonica.",
        "competenze": "Modellazione 3D professionale, rendering architettonico, presentazione progetti digitali.",
        "descrizione": "Corso pratico di modellazione tridimensionale per architettura utilizzando software CAD avanzati. Gli studenti impareranno a creare modelli 3D realistici di edifici e spazi architettonici."
    },
    {
        "id": 3,
        "titolo": "Design del Prodotto Sostenibile",
        "docente": "Des. Verdi", 
        "tipologia": "UDA - Moduli Curricolari Pomeridiani",
        "disciplina": "Design",
        "periodo": "Trimestre",
        "giorno": "Mercoledì", 
        "orario": "14:30-16:00",
        "anno": "Triennio",
        "indirizzo": "Design",
        "posti": 30,
        "prerequisiti": "Interesse per il design sostenibile e conoscenze base di progettazione.",
        "competenze": "Progettazione eco-sostenibile, ricerca materiali, prototipazione digitale.",
        "descrizione": "Esplorazione del design sostenibile attraverso la progettazione di prodotti eco-friendly. Focus su materiali riciclati, economia circolare e impatto ambientale nella progettazione industriale."
    },
    {
        "id": 4,
        "titolo": "Storytelling Multimediale",
        "docente": "Prof. Neri",
        "tipologia": "POC - Percorsi di Orientamento",
        "disciplina": "Multimediale",
        "periodo": "Pentamestre", 
        "giorno": "Giovedì",
        "orario": "15:30-17:30",
        "anno": "3",
        "indirizzo": "Multimediale",
        "posti": 22,
        "prerequisiti": "Creatività narrativa e interesse per i media digitali.",
        "competenze": "Narrazione transmediale, produzione video, montaggio digitale, content creation.",
        "descrizione": "Laboratorio di storytelling attraverso i media digitali. Gli studenti creeranno storie coinvolgenti utilizzando video, audio, animazioni e contenuti interattivi per diverse piattaforme."
    },
    {
        "id": 5,
        "titolo": "Pittura Figurativa Contemporanea",
        "docente": "M° Blu",
        "tipologia": "UDA - Moduli Curricolari Pomeridiani",
        "disciplina": "Figurativo",
        "periodo": "Trimestre",
        "giorno": "Venerdì",
        "orario": "14:00-16:30", 
        "anno": "4",
        "indirizzo": "Figurativo",
        "posti": 18,
        "prerequisiti": "Competenze base di disegno dal vero e conoscenza delle tecniche pittoriche tradizionali.",
        "competenze": "Tecniche pittoriche avanzate, interpretazione contemporanea della figura, sviluppo stile personale.",
        "descrizione": "Corso avanzato di pittura figurativa con approccio contemporaneo. Esplorazione di tecniche miste, nuovi materiali e interpretazioni moderne della tradizione figurativa."
    },
    {
        "id": 6,
        "titolo": "Fotografia Artistica e Documentaria",
        "docente": "Foto. Gialli",
        "tipologia": "POC - Percorsi di Orientamento",
        "disciplina": "Interdisciplinare", 
        "periodo": "Pentamestre",
        "giorno": "Lunedì",
        "orario": "16:00-17:30",
        "anno": "Biennio",
        "indirizzo": "Trasversale",
        "posti": 28,
        "prerequisiti": "Passione per la fotografia e conoscenza base dell'uso della fotocamera.",
        "competenze": "Composizione fotografica, post-produzione digitale, sviluppo progetto fotografico.",
        "descrizione": "Esplorazione della fotografia come forma d'arte e strumento di documentazione sociale. Il corso copre tecniche di ripresa, composizione e post-produzione per sviluppare un linguaggio fotografico personale."
    },
    {
        "id": 7,
        "titolo": "Illustrazione Editoriale", 
        "docente": "Ill. Rosa",
        "tipologia": "UDA - Moduli Curricolari Pomeridiani",
        "disciplina": "Grafica",
        "periodo": "Trimestre",
        "giorno": "Martedì",
        "orario": "15:00-16:30",
        "anno": "5",
        "indirizzo": "Grafica", 
        "posti": 24,
        "prerequisiti": "Competenze di disegno e interesse per l'illustrazione applicata all'editoria.",
        "competenze": "Illustrazione per libri e riviste, collaborazione con editor, gestione commesse professionali.",
        "descrizione": "Specializzazione nell'illustrazione per l'editoria. Gli studenti lavoreranno su progetti reali di illustrazione per libri, riviste e pubblicazioni digitali, sviluppando competenze professionali nel settore."
    },
    {
        "id": 8,
        "titolo": "Scultura e Installazioni",
        "docente": "Scult. Viola",
        "tipologia": "POC - Percorsi di Orientamento",
        "disciplina": "Figurativo",
        "periodo": "Pentamestre",
        "giorno": "Mercoledì",
        "orario": "14:30-16:00",
        "anno": "Triennio",
        "indirizzo": "Figurativo",
        "posti": 26,
        "prerequisiti": "Interesse per la scultura e la sperimentazione con materiali diversi.",
        "competenze": "Tecniche scultoree contemporanee, progettazione installazioni, uso materiali alternativi.",
        "descrizione": "Laboratorio di scultura contemporanea con focus su installazioni e arte ambientale. Esplorazione di materiali tradizionali e innovativi per la creazione di opere tridimensionali e site-specific."
    },
    {
        "id": 9,
        "titolo": "Animazione Digitale 2D/3D",
        "docente": "Anim. Arancione", 
        "tipologia": "UDA - Moduli Curricolari Pomeridiani",
        "disciplina": "Multimediale",
        "periodo": "Trimestre",
        "giorno": "Giovedì",
        "orario": "15:30-17:00",
        "anno": "4",
        "indirizzo": "Multimediale",
        "posti": 32,
        "prerequisiti": "Conoscenze base di disegno e interesse per l'animazione digitale.",
        "competenze": "Tecniche di animazione 2D e 3D, storytelling visivo, produzione audiovisiva.",
        "descrizione": "Corso completo di animazione digitale che copre sia tecniche 2D tradizionali che moderne tecnologie 3D. Gli studenti creeranno cortometraggi animati utilizzando software professionali del settore."
    },
    {
        "id": 10,
        "titolo": "Web Design Responsivo",
        "docente": "Dev. Marrone",
        "tipologia": "POC - Percorsi di Orientamento",
        "disciplina": "Grafica",
        "periodo": "Pentamestre",
        "giorno": "Venerdì", 
        "orario": "15:00-17:00",
        "anno": "5",
        "indirizzo": "Grafica",
        "posti": 20,
        "prerequisiti": "Conoscenze base di grafica digitale e interesse per il web design.",
        "competenze": "Design responsive, UX/UI design, prototipazione digitale, coding base.",
        "descrizione": "Progettazione di interfacce web moderne e responsive. Il corso combina principi di design visivo con competenze tecniche per creare esperienze digitali ottimali su tutti i dispositivi."
    },
    {
        "id": 11,
        "titolo": "Restauro e Conservazione",
        "docente": "Rest. Grigio",
        "tipologia": "UDA - Moduli Curricolari Pomeridiani",
        "disciplina": "Interdisciplinare",
        "periodo": "Trimestre", 
        "giorno": "Lunedì",
        "orario": "15:00-17:30",
        "anno": "5",
        "indirizzo": "Trasversale",
        "posti": 16,
        "prerequisiti": "Interesse per la conservazione del patrimonio artistico e precisione manuale.",
        "competenze": "Tecniche di restauro, analisi materiali, documentazione scientifica, conservazione preventiva.",
        "descrizione": "Introduzione alle tecniche di restauro e conservazione delle opere d'arte. Laboratorio pratico con interventi su opere di diversa natura, dalla pittura alla scultura, con approccio scientifico."
    },
    {
        "id": 12,
        "titolo": "Grafica per Social Media",
        "docente": "SM. Verde",
        "tipologia": "POC - Percorsi di Orientamento",
        "disciplina": "Grafica",
        "periodo": "Pentamestre",
        "giorno": "Martedì",
        "orario": "16:00-17:30",
        "anno": "Biennio",
        "indirizzo": "Trasversale",
        "posti": 28,
        "prerequisiti": "Familiarità con i social media e interesse per la comunicazione visiva.",
        "competenze": "Visual branding, content creation, social media strategy, storytelling visivo.",
        "descrizione": "Specializzazione nella creazione di contenuti grafici per piattaforme social. Il corso copre strategie visual, brand identity e creazione di contenuti virali per diverse piattaforme digitali."
    },
    {
        "id": 13,
        "titolo": "Scenografia Teatrale", 
        "docente": "Scen. Azzurro",
        "tipologia": "UDA - Moduli Curricolari Pomeridiani",
        "disciplina": "Design",
        "periodo": "Trimestre",
        "giorno": "Mercoledì",
        "orario": "16:00-17:30",
        "anno": "4",
        "indirizzo": "Design",
        "posti": 24,
        "prerequisiti": "Interesse per il teatro e competenze base di progettazione spaziale.",
        "competenze": "Progettazione scenografica, uso dello spazio teatrale, tecniche di costruzione scene.",
        "descrizione": "Progettazione e realizzazione di scenografie per spettacoli teatrali. Il corso combina creatività artistica con competenze tecniche per la creazione di ambienti scenici suggestivi e funzionali."
    },
    {
        "id": 14,
        "titolo": "Fumetto e Graphic Novel",
        "docente": "Fumett. Docenti",
        "tipologia": "POC - Percorsi di Orientamento",
        "disciplina": "Grafica",
        "periodo": "Pentamestre",
        "giorno": "Giovedì",
        "orario": "14:30-17:00", 
        "anno": "3",
        "indirizzo": "Grafica",
        "posti": 30,
        "prerequisiti": "Passione per il fumetto e competenze base di disegno narrativo.",
        "competenze": "Storytelling grafico, character design, impaginazione fumetto, tecniche narrative.",
        "descrizione": "Corso completo sulla creazione di fumetti e graphic novel. Dalle basi del disegno sequenziale alla pubblicazione, gli studenti svilupperanno progetti narrativi completi in formato fumetto."
    },
    {
        "id": 15,
        "titolo": "Ceramica Artistica",
        "docente": "Ceram. Celeste",
        "tipologia": "UDA - Moduli Curricolari Pomeridiani",
        "disciplina": "Figurativo",
        "periodo": "Trimestre",
        "giorno": "Venerdì",
        "orario": "15:30-17:30",
        "anno": "2", 
        "indirizzo": "Figurativo",
        "posti": 22,
        "prerequisiti": "Interesse per la lavorazione dell'argilla e la creatività tridimensionale.",
        "competenze": "Tecniche ceramiche tradizionali e contemporanee, decorazione, cottura, glazing.",
        "descrizione": "Laboratorio di ceramica artistica che esplora tecniche tradizionali e innovative. Gli studenti sperimenteranno con argilla, smalti e tecniche di cottura per creare opere ceramiche originali."
    },
    {
        "id": 16,
        "titolo": "Architettura del Paesaggio",
        "docente": "Land. Oro",
        "tipologia": "POC - Percorsi di Orientamento",
        "disciplina": "Architettura",
        "periodo": "Pentamestre",
        "giorno": "Lunedì",
        "orario": "14:30-16:00",
        "anno": "Triennio",
        "indirizzo": "Architettura",
        "posti": 26,
        "prerequisiti": "Interesse per l'architettura e la sostenibilità ambientale.",
        "competenze": "Progettazione paesaggistica, sostenibilità ambientale, botanica applicata.",
        "descrizione": "Progettazione di spazi verdi urbani e architettura del paesaggio. Il corso integra competenze progettuali con conoscenze botaniche per la creazione di spazi esterni sostenibili e funzionali."
    },
    {
        "id": 17,
        "titolo": "Oreficeria e Gioiello",
        "docente": "Oref. Argento",
        "tipologia": "UDA - Moduli Curricolari Pomeridiani", 
        "disciplina": "Design",
        "periodo": "Trimestre",
        "giorno": "Martedì",
        "orario": "16:00-18:00",
        "anno": "5",
        "indirizzo": "Design",
        "posti": 20,
        "prerequisiti": "Precisione manuale e interesse per l'artigianato artistico del gioiello.",
        "competenze": "Tecniche orafe tradizionali, design del gioiello, lavorazione metalli preziosi.",
        "descrizione": "Laboratorio di oreficeria artistica per la creazione di gioielli unici. Gli studenti apprenderanno tecniche tradizionali e contemporanee per la lavorazione di metalli preziosi e pietre."
    },
    {
        "id": 18,
        "titolo": "Video Arte e Installazioni",
        "docente": "Video. Bronzo", 
        "tipologia": "POC - Percorsi di Orientamento",
        "disciplina": "Multimediale",
        "periodo": "Pentamestre",
        "giorno": "Mercoledì",
        "orario": "15:30-17:00",
        "anno": "4",
        "indirizzo": "Multimediale",
        "posti": 25,
        "prerequisiti": "Interesse per l'arte contemporanea e i nuovi media.",
        "competenze": "Videoarte, installazioni multimediali, arte digitale interattiva.",
        "descrizione": "Esplorazione della videoarte e delle installazioni multimediali. Il corso combina competenze tecniche con ricerca artistica per creare opere d'arte contemporanea che utilizzano i nuovi media."
    },
    {
        "id": 19,
        "titolo": "Incisione e Stampa d'Arte",
        "docente": "Inc. Rame",
        "tipologia": "UDA - Moduli Curricolari Pomeridiani",
        "disciplina": "Grafica",
        "periodo": "Trimestre",
        "giorno": "Giovedì",
        "orario": "14:00-16:00",
        "anno": "3",
        "indirizzo": "Grafica",
        "posti": 28,
        "prerequisiti": "Competenze base di disegno e interesse per le tecniche di stampa artistica.",
        "competenze": "Tecniche di incisione, stampa d'arte, editoria d'arte, tirature limitate.",
        "descrizione": "Laboratorio di incisione e stampa d'arte che esplora tecniche tradizionali come acquaforte, puntasecca, litografia. Gli studenti creeranno opere grafiche originali in tiratura limitata."
    },
    {
        "id": 20,
        "titolo": "Arte Urbana e Street Art",
        "docente": "Street. Platino",
        "tipologia": "POC - Percorsi di Orientamento",
        "disciplina": "Interdisciplinare", 
        "periodo": "Pentamestre",
        "giorno": "Venerdì",
        "orario": "14:30-17:30",
        "anno": "Trasversale",
        "indirizzo": "Trasversale",
        "posti": 35,
        "prerequisiti": "Passione per l'arte urbana e interesse per l'espressione creativa.",
        "competenze": "Tecniche di street art, muralismo, arte pubblica, intervento urbano.",
        "descrizione": "Esplorazione dell'arte urbana come forma di espressione contemporanea. Il corso copre tecniche di street art, muralismo e interventi artistici nello spazio pubblico, con focus su legalità e rispetto urbano."
    }
];

// State management
let selectedCourses = [];
let filteredCourses = [...courses];
let currentFilters = {
    tipologia: '',
    periodo: '',
    giorno: '',
    disciplina: '',
    anno: '',
    indirizzo: '',
    search: ''
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    
    // Initialize the app
    updateCounter();
    updateRegistrationSection();
    renderCourses();
    setupEventListeners();
});

// Event listeners setup
function setupEventListeners() {
    // Filters - ensure these elements exist before adding listeners
    const tipologia = document.getElementById('tipologia');
    const periodo = document.getElementById('periodo');
    const giorno = document.getElementById('giorno');
    const disciplina = document.getElementById('disciplina');
    const anno = document.getElementById('anno');
    const indirizzo = document.getElementById('indirizzo');
    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const resetFilters = document.getElementById('resetFilters');
    const registrationForm = document.getElementById('registrationForm');
    
    if (tipologia) tipologia.addEventListener('change', handleFilterChange);
    if (periodo) periodo.addEventListener('change', handleFilterChange);
    if (giorno) giorno.addEventListener('change', handleFilterChange);
    if (disciplina) disciplina.addEventListener('change', handleFilterChange);
    if (anno) anno.addEventListener('change', handleFilterChange);
    if (indirizzo) indirizzo.addEventListener('change', handleFilterChange);
    
    // Search and sort
    if (searchInput) searchInput.addEventListener('input', handleSearch);
    if (sortSelect) sortSelect.addEventListener('change', handleSort);
    
    // Reset filters
    if (resetFilters) resetFilters.addEventListener('click', resetFiltersHandler);
    
    // Registration form
    if (registrationForm) registrationForm.addEventListener('submit', handleRegistrationSubmit);
    
    // Modal event listeners
    const closeDetailsBtn = document.getElementById('closeDetailsModal');
    const closeSuccessBtn = document.getElementById('closeSuccessModal');
    const confirmCloseBtn = document.getElementById('confirmCloseModal');
    
    if (closeDetailsBtn) closeDetailsBtn.addEventListener('click', closeDetailsModal);
    if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', closeSuccessModal);
    if (confirmCloseBtn) confirmCloseBtn.addEventListener('click', closeSuccessModal);
    
    // Modal backdrop clicks
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-backdrop')) {
            closeAllModals();
        }
    });
}

// Filter handling
function handleFilterChange(e) {
    const filterType = e.target.id;
    currentFilters[filterType] = e.target.value;
    applyFilters();
}

function handleSearch(e) {
    currentFilters.search = e.target.value.toLowerCase();
    applyFilters();
}

function applyFilters() {
    filteredCourses = courses.filter(course => {
        const matchesSearch = !currentFilters.search || 
            course.titolo.toLowerCase().includes(currentFilters.search) ||
            course.docente.toLowerCase().includes(currentFilters.search) ||
            course.disciplina.toLowerCase().includes(currentFilters.search);
            
        const matchesFilters = 
            (!currentFilters.tipologia || course.tipologia === currentFilters.tipologia) &&
            (!currentFilters.periodo || course.periodo === currentFilters.periodo) &&
            (!currentFilters.giorno || course.giorno === currentFilters.giorno) &&
            (!currentFilters.disciplina || course.disciplina === currentFilters.disciplina) &&
            (!currentFilters.anno || course.anno === currentFilters.anno) &&
            (!currentFilters.indirizzo || course.indirizzo === currentFilters.indirizzo);
            
        return matchesSearch && matchesFilters;
    });
    
    console.log('Filtered courses:', filteredCourses.length);
    renderCourses();
}

function resetFiltersHandler() {
    // Reset the currentFilters object
    currentFilters = {
        tipologia: '',
        periodo: '',
        giorno: '',
        disciplina: '',
        anno: '',
        indirizzo: '',
        search: ''
    };
    
    // Reset all form elements safely
    const elements = [
        'tipologia', 'periodo', 'giorno', 'disciplina', 
        'anno', 'indirizzo', 'searchInput', 'sortSelect'
    ];
    
    elements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.value = id === 'sortSelect' ? 'titolo' : '';
        }
    });
    
    // Reset filtered courses to show all courses
    filteredCourses = [...courses];
    renderCourses();
}

// Sorting
function handleSort(e) {
    const sortBy = e.target.value;
    
    filteredCourses.sort((a, b) => {
        let aValue = a[sortBy];
        let bValue = b[sortBy];
        
        if (typeof aValue === 'string') {
            return aValue.localeCompare(bValue, 'it');
        }
        
        return aValue - bValue;
    });
    
    renderCourses();
}

// Course rendering
function renderCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    console.log('Rendering courses...', filteredCourses.length);
    
    if (!coursesGrid) {
        console.error('coursesGrid element not found!');
        return;
    }
    
    if (filteredCourses.length === 0) {
        coursesGrid.innerHTML = `
            <div class="empty-state">
                <h3>Nessun corso trovato</h3>
                <p>Prova a modificare i filtri di ricerca</p>
            </div>
        `;
        return;
    }
    
    const cardsHTML = filteredCourses.map(course => createCourseCard(course)).join('');
    coursesGrid.innerHTML = cardsHTML;
    
    // Add event listeners to course cards after rendering
    addCourseEventListeners();
    updateCourseStates();
    console.log('Course rendering complete');
}

function addCourseEventListeners() {
    // Add event listeners to all select buttons
    document.querySelectorAll('.select-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const courseId = parseInt(this.getAttribute('data-course-id'));
            handleCourseSelection(courseId);
        });
    });
    
    // Add event listeners to all details buttons
    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const courseId = parseInt(this.getAttribute('data-course-id'));
            showCourseDetails(courseId);
        });
    });
}

function createCourseCard(course) {
    const isSelected = selectedCourses.some(sc => sc.id === course.id);
    const badgeClass = course.tipologia.includes('UDA') ? 'uda' : 'poc';
    const periodClass = course.periodo.toLowerCase();
    
    return `
        <div class="course-card ${isSelected ? 'selected' : ''}" data-course-id="${course.id}">
            <div class="course-header">
                <h3 class="course-title">${course.titolo}</h3>
                <p class="course-docente">${course.docente}</p>
                <div class="course-badge badge--${badgeClass}">${course.tipologia}</div>
            </div>
            <div class="course-body">
                <div class="course-info">
                    <div class="info-item">
                        <span class="info-icon">📚</span>
                        <div class="info-content">
                            <span class="info-label">Disciplina</span>
                            <span class="info-value">${course.disciplina}</span>
                        </div>
                    </div>
                    <div class="info-item">
                        <span class="info-icon">📅</span>
                        <div class="info-content">
                            <span class="info-label">Periodo</span>
                            <span class="info-value badge--${periodClass}">${course.periodo}</span>
                        </div>
                    </div>
                    <div class="info-item">
                        <span class="info-icon">📆</span>
                        <div class="info-content">
                            <span class="info-label">Giorno</span>
                            <span class="info-value">${course.giorno}</span>
                        </div>
                    </div>
                    <div class="info-item">
                        <span class="info-icon">🎯</span>
                        <div class="info-content">
                            <span class="info-label">Anno</span>
                            <span class="info-value">${course.anno}</span>
                        </div>
                    </div>
                    <div class="info-item">
                        <span class="info-icon">🏫</span>
                        <div class="info-content">
                            <span class="info-label">Indirizzo</span>
                            <span class="info-value">${course.indirizzo}</span>
                        </div>
                    </div>
                    <div class="info-item">
                        <span class="info-icon">👥</span>
                        <div class="info-content">
                            <span class="info-label">Posti</span>
                            <span class="info-value">${course.posti}</span>
                        </div>
                    </div>
                </div>
                <div class="course-actions">
                    <button class="details-btn" data-course-id="${course.id}" type="button">
                        Dettagli
                    </button>
                    <button class="btn ${isSelected ? 'btn--outline selected' : 'btn--primary'} select-btn" data-course-id="${course.id}" type="button">
                        ${isSelected ? 'Selezionato ✓' : 'Seleziona'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Course selection logic
function handleCourseSelection(courseId) {
    console.log('Handling course selection:', courseId);
    const course = courses.find(c => c.id === courseId);
    if (!course) {
        console.error('Course not found:', courseId);
        return;
    }
    
    const isCurrentlySelected = selectedCourses.some(sc => sc.id === courseId);
    
    if (isCurrentlySelected) {
        // Remove course
        selectedCourses = selectedCourses.filter(sc => sc.id !== courseId);
        clearMessages();
        console.log('Course removed:', course.titolo);
    } else {
        // Check selection constraints
        const validationResult = validateCourseSelection(course);
        
        if (validationResult.valid) {
            selectedCourses.push(course);
            clearMessages();
            console.log('Course added:', course.titolo);
        } else {
            showMessage(validationResult.message, 'error');
            return;
        }
    }
    
    updateCounter();
    updateCourseStates();
    updateRegistrationSection();
}

function validateCourseSelection(course) {
    // Check total limit
    if (selectedCourses.length >= 4) {
        return {
            valid: false,
            message: 'Hai già selezionato il numero massimo di corsi (4).'
        };
    }
    
    // Check period limit
    const coursesInSamePeriod = selectedCourses.filter(sc => sc.periodo === course.periodo);
    if (coursesInSamePeriod.length >= 2) {
        return {
            valid: false,
            message: `Hai già selezionato 2 corsi per il ${course.periodo.toLowerCase()}. Limite massimo raggiunto.`
        };
    }
    
    // Check day conflicts (not time-based, just same day)
    const conflictingCourse = selectedCourses.find(sc => sc.giorno === course.giorno);
    
    if (conflictingCourse) {
        return {
            valid: false,
            message: `Hai già un corso il ${course.giorno}: "${conflictingCourse.titolo}". Non puoi selezionare più corsi nello stesso giorno.`
        };
    }
    
    return { valid: true };
}

// Enhanced counter with period breakdown
function updateCounter() {
    const total = selectedCourses.length;
    const trimesterCourses = selectedCourses.filter(c => c.periodo === 'Trimestre').length;
    const pentamesterCourses = selectedCourses.filter(c => c.periodo === 'Pentamestre').length;
    
    const counterTotal = document.getElementById('counterTotal');
    const trimesterCount = document.getElementById('trimesterCount');
    const pentamesterCount = document.getElementById('pentamesterCount');
    
    if (counterTotal) counterTotal.textContent = `${total}/4`;
    if (trimesterCount) trimesterCount.textContent = `${trimesterCourses}/2`;
    if (pentamesterCount) pentamesterCount.textContent = `${pentamesterCourses}/2`;
    
    console.log('Counter updated:', { total, trimesterCourses, pentamesterCourses });
}

// UI state management
function updateCourseStates() {
    courses.forEach(course => {
        const card = document.querySelector(`[data-course-id="${course.id}"]`);
        if (!card) return;
        
        const isSelected = selectedCourses.some(sc => sc.id === course.id);
        const validationResult = validateCourseSelection(course);
        const selectBtn = card.querySelector('.select-btn');
        
        if (isSelected) {
            card.classList.add('selected');
            card.classList.remove('disabled');
            if (selectBtn) {
                selectBtn.textContent = 'Selezionato ✓';
                selectBtn.className = 'btn btn--outline selected select-btn';
                selectBtn.disabled = false;
            }
        } else if (!validationResult.valid) {
            card.classList.add('disabled');
            card.classList.remove('selected');
            if (selectBtn) {
                selectBtn.disabled = true;
                selectBtn.textContent = 'Seleziona';
                selectBtn.className = 'btn btn--primary select-btn';
            }
        } else {
            card.classList.remove('selected', 'disabled');
            if (selectBtn) {
                selectBtn.disabled = false;
                selectBtn.textContent = 'Seleziona';
                selectBtn.className = 'btn btn--primary select-btn';
            }
        }
    });
}

// Course details modal
function showCourseDetails(courseId) {
    console.log('Showing course details for:', courseId);
    const course = courses.find(c => c.id === courseId);
    if (!course) return;
    
    const courseDetailsModal = document.getElementById('courseDetailsModal');
    if (!courseDetailsModal) {
        console.error('Course details modal not found');
        return;
    }
    
    // Update modal content
    const modalCourseTitle = document.getElementById('modalCourseTitle');
    const modalCourseDocente = document.getElementById('modalCourseDocente');
    const modalCourseDescription = document.getElementById('modalCourseDescription');
    const modalCoursePrerequisites = document.getElementById('modalCoursePrerequisites');
    const modalCourseSkills = document.getElementById('modalCourseSkills');
    const modalCourseDetails = document.getElementById('modalCourseDetails');
    
    if (modalCourseTitle) modalCourseTitle.textContent = course.titolo;
    if (modalCourseDocente) modalCourseDocente.textContent = course.docente;
    if (modalCourseDescription) modalCourseDescription.textContent = course.descrizione;
    if (modalCoursePrerequisites) modalCoursePrerequisites.textContent = course.prerequisiti;
    if (modalCourseSkills) modalCourseSkills.textContent = course.competenze;
    
    // Course details
    if (modalCourseDetails) {
        const detailsHtml = `
            <div class="modal-detail-item">
                <span class="info-icon">📚</span>
                <span>${course.disciplina}</span>
            </div>
            <div class="modal-detail-item">
                <span class="info-icon">📅</span>
                <span>${course.periodo}</span>
            </div>
            <div class="modal-detail-item">
                <span class="info-icon">📆</span>
                <span>${course.giorno}</span>
            </div>
            <div class="modal-detail-item">
                <span class="info-icon">⏰</span>
                <span>${course.orario}</span>
            </div>
            <div class="modal-detail-item">
                <span class="info-icon">🎯</span>
                <span>${course.anno}</span>
            </div>
            <div class="modal-detail-item">
                <span class="info-icon">🏫</span>
                <span>${course.indirizzo}</span>
            </div>
            <div class="modal-detail-item">
                <span class="info-icon">👥</span>
                <span>${course.posti} posti</span>
            </div>
        `;
        modalCourseDetails.innerHTML = detailsHtml;
    }
    
    courseDetailsModal.classList.remove('hidden');
    console.log('Modal opened for course:', course.titolo);
}

function closeDetailsModal() {
    const courseDetailsModal = document.getElementById('courseDetailsModal');
    if (courseDetailsModal) {
        courseDetailsModal.classList.add('hidden');
    }
}

// Messages
function showMessage(message, type) {
    const messagesContainer = document.getElementById('messagesContainer');
    if (!messagesContainer) return;
    
    const messageElement = document.createElement('div');
    messageElement.className = `message message--${type}`;
    messageElement.textContent = message;
    
    messagesContainer.appendChild(messageElement);
    
    setTimeout(() => {
        if (messageElement.parentNode) {
            messageElement.remove();
        }
    }, 5000);
}

function clearMessages() {
    const messagesContainer = document.getElementById('messagesContainer');
    if (messagesContainer) {
        messagesContainer.innerHTML = '';
    }
}

// Registration section - Always visible
function updateRegistrationSection() {
    renderSelectedCourses();
}

function renderSelectedCourses() {
    const selectedCoursesList = document.getElementById('selectedCoursesList');
    if (!selectedCoursesList) return;
    
    if (selectedCourses.length === 0) {
        selectedCoursesList.innerHTML = `
            <div class="empty-selection empty-selection-compact">
                <p>Seleziona dei corsi per iniziare</p>
            </div>
        `;
        return;
    }

    selectedCoursesList.innerHTML = selectedCourses.map(course => `
        <div class="selected-course-item">
            <div class="selected-course-info">
                <h4 class="selected-course-title">${course.titolo}</h4>
                <p class="selected-course-details">
                    ${course.docente} • ${course.periodo} • ${course.giorno}
                </p>
            </div>
            <button class="remove-course-btn" type="button" data-remove-id="${course.id}" aria-label="Rimuovi corso">
                ✕
            </button>
        </div>
    `).join('');
    
    // Add event listeners to remove buttons
    selectedCourses.forEach(course => {
        const removeBtn = document.querySelector(`[data-remove-id="${course.id}"]`);
        if (removeBtn) {
            removeBtn.addEventListener('click', () => handleCourseSelection(course.id));
        }
    });
}

// Form submission
function handleRegistrationSubmit(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome');
    const cognome = document.getElementById('cognome');
    const classe = document.getElementById('classe');
    const email = document.getElementById('email');
    
    if (!nome || !cognome || !classe || !email) {
        showMessage('Errore nel form: campi mancanti.', 'error');
        return;
    }
    
    const nomeValue = nome.value.trim();
    const cognomeValue = cognome.value.trim();
    const classeValue = classe.value.trim();
    const emailValue = email.value.trim();
    
    if (!nomeValue || !cognomeValue || !classeValue || !emailValue) {
        showMessage('Tutti i campi sono obbligatori.', 'error');
        return;
    }
    
    if (selectedCourses.length === 0) {
        showMessage('Devi selezionare almeno un corso per procedere.', 'error');
        return;
    }
    
    // Simulate form submission
    setTimeout(() => {
        showSuccessModal();
        resetApplication();
    }, 1000);
}

function showSuccessModal() {
    const successModal = document.getElementById('successModal');
    if (successModal) {
        successModal.classList.remove('hidden');
    }
}

function closeSuccessModal() {
    const successModal = document.getElementById('successModal');
    if (successModal) {
        successModal.classList.add('hidden');
    }
}

function closeAllModals() {
    closeSuccessModal();
    closeDetailsModal();
}

function resetApplication() {
    selectedCourses = [];
    
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.reset();
    }
    
    updateCounter();
    updateRegistrationSection();
    updateCourseStates();
    clearMessages();
}