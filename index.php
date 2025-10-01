<?php
require_once __DIR__ . '/functions.php';

$corsi = get_all_corsi();

// opzioni filtri
function unique_sorted(array $vals): array {
    $set=[]; foreach ($vals as $v){ $v=trim((string)$v); if($v!=='') $set[$v]=true; }
    $arr=array_keys($set); sort($arr,SORT_NATURAL|SORT_FLAG_CASE); return $arr;
}
$opt_docenti = unique_sorted(array_column($corsi, 'Docente'));
$opt_disc    = unique_sorted(array_column($corsi, 'Disciplina'));
$opt_periodo = unique_sorted(array_column($corsi, 'Periodo'));
$opt_giorno  = unique_sorted(array_column($corsi, 'Giorno della settimana'));
$opt_dest    = unique_sorted(array_column($corsi, 'Anno Scolastico destinatario'));
$opt_ind     = unique_sorted(array_column($corsi, 'Indirizzo'));



$msg=null; $err=null; $res=null;
if ($_SERVER['REQUEST_METHOD']==='POST') {
  try {
    require_csrf($_POST['csrf'] ?? '');
    $nome=trim($_POST['nome']??'');
    $cogn=trim($_POST['cognome']??'');
    $classe=trim($_POST['classe']??'');
    $email=trim($_POST['email']??'');
    $ids=$_POST['corsi']??[]; if(!is_array($ids)) $ids=[];
    $res = registra_iscrizioni_multiple($nome,$cogn,$classe,$email,$ids);
    if ($res['ok']>0 && $res['fail']===0)      $msg="Iscrizione completata per {$res['ok']} corsi.";
    elseif ($res['ok']>0 && $res['fail']>0)   $msg="Iscritti {$res['ok']} corsi; alcuni non inseriti.";
    else                                      $err="Nessuna iscrizione effettuata.";
  } catch (Throwable $e) { $err=$e->getMessage(); }
}
$csrf = csrf_token();
function data_attr($v){ return htmlspecialchars(mb_strtolower(trim((string)$v)),ENT_QUOTES,'UTF-8'); }
function esc($v){ return htmlspecialchars((string)$v, ENT_QUOTES|ENT_SUBSTITUTE,'UTF-8'); }
?>
<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Iscrizioni corsi – Liceo Artistico Boccioni</title>

<style>
body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Arial,sans-serif;margin:0;background:#fafafa;color:#111}
header{display:flex;flex-wrap:wrap;align-items:center;gap:12px;justify-content:space-between;padding:16px}

.two-col{
  display:grid;
  grid-template-columns: 1fr;   /* mobile: 1 colonna */
  gap:16px;
  align-items:start;
}
@media (min-width: 900px){
  .two-col{ grid-template-columns: 1fr 1fr; } /* desktop: 2 colonne */
}


.card{border:1px solid #e5e7eb;border-radius:12px;padding:16px;margin:12px;background:#fff;box-shadow:0 2px 4px rgba(0,0,0,.04)}

/* .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px} */
/* DOPO (max 3 colonne) */
.grid{
  display:grid;
  gap:12px;
  grid-template-columns: 1fr;                 /* mobile: 1 colonna */
}
@media (min-width: 700px){
  .grid{ grid-template-columns: repeat(2, minmax(280px, 1fr)); }  /* tablet: 2 */
}
@media (min-width: 1040px){
  .grid{ grid-template-columns: repeat(3, minmax(280px, 1fr)); }  /* desktop: 3 */
}

.badge{display:inline-block;padding:2px 8px;border-radius:999px;background:#eef2ff}
.btn{padding:10px 14px;border:1px solid #111;border-radius:8px;background:#111;color:#fff;cursor:pointer}
.btn:disabled{opacity:.6;cursor:not-allowed}
.btn-link{display:inline-block;padding:8px 12px;border:1px solid #111;border-radius:8px;color:#111;text-decoration:none;background:#fff}
input,select{width:100%;padding:10px;border:1px solid #d1d5db;border-radius:8px}
label.small{font-size:.9rem;color:#374151}
.btn-green{
  background:#16a34a;     /* verde */
  border-color:#16a34a;
  color:#fff;
}
.btn-green:hover{ filter:brightness(0.95); }
.btn-green:disabled{ opacity:.6; }

/* bottone leggero per il toggle */
.btn-ghost{
  background:#fff;border:1px solid #d1d5db;border-radius:8px;padding:6px 10px;cursor:pointer;
}
.btn-ghost:hover{ background:#f9fafb; }

/* pannello dettagli nascosto di default */
.details[hidden]{ display:none; }
.details p{ margin-top:8px; margin-bottom:8px; }

.toolbar{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px}
.alert{padding:12px;border-radius:10px;margin:8px 0}
.alert.ok{background:#ecfdf5;border:1px solid #10b98133}
.alert.err{background:#fef2f2;border:1px solid #ef444433}

.form-col{
  display:grid;
  grid-template-columns: 1fr;  /* sempre 1 colonna */
  gap:12px;
  max-width: 520px;            /* colonna più leggibile */
}
.form-col label{ display:block; }


.counter{font-weight:600}
.muted{color:#6b7280}
.card.disabled{opacity:.55}
.card .row{display:flex;align-items:center;gap:10px;justify-content:space-between}

.top-actions{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  margin:0 0 10px 0;
  position: sticky;       /* rende il blocco appiccicoso */
  top: 0;                 /* si incolla in cima alla viewport */
  background: #ffffffcc;  /* leggermente trasparente per effetto frosted */
  backdrop-filter: blur(4px);
  padding:8px 10px;
  z-index: 30;            /* sta sopra alle card */
  border-bottom:1px solid #e5e7eb;
}

:root{
  --bg:#f7faf9;
  --card:#ffffff;
  --muted:#6b7280;
  --border:#e5e7eb;
  --acc:#16a34a;      /* verde principale */
  --acc-weak:#d1fae5; /* verde chiaro */
  --blue:#3b82f6;
  --rose:#f43f5e;
}

body{background:var(--bg);}
.container{max-width:1180px;margin:0 auto;padding:0 16px;}
.card{background:var(--card);border:1px solid var(--border);border-radius:14px}
.card:hover{box-shadow:0 6px 18px rgba(0,0,0,.06);transform:translateY(-1px);transition:.2s ease;}
.muted{color:var(--muted)}
.badge{background:#eef2ff} /* resta soft */

.top-actions{
  display:flex;align-items:center;justify-content:space-between;gap:12px;margin:0 0 10px 0;
  position:sticky;top:0;background:#ffffffcc;backdrop-filter:blur(4px);
  padding:10px 12px;z-index:30;border-bottom:1px solid var(--border);
}
.top-actions.scrolled{box-shadow:0 6px 12px rgba(0,0,0,.08);} /* ombra quando scrolli */

.btn{padding:10px 14px;border:1px solid #111;border-radius:10px;background:#111;color:#fff;cursor:pointer}
.btn-green{background:var(--acc);border-color:var(--acc);color:#fff}
.btn-green:hover{filter:brightness(.95)}
.btn-ghost{background:#fff;border:1px solid var(--border);border-radius:8px;padding:6px 10px;cursor:pointer}
.btn-ghost:hover{background:#f9fafb}

input,select{width:100%;padding:10px;border:1px solid var(--border);border-radius:8px}

/* Card selezionata */
.course.selected{
  outline: 3px solid #bbf7d0;           /* verde chiaro */
  box-shadow: 0 0 0 2px #16a34a inset;  /* accento verde */
  border-color: #16a34a;
}

/* Card corso completo */
.course.full{ opacity:.6; position:relative; }
.course.full::after{
  content:"COMPLETO";
  position:absolute; top:10px; right:10px;
  background:#f43f5e; color:#fff;
  font-size:.75rem; padding:2px 8px; border-radius:999px;
  letter-spacing:.02em;
}


/* barra capienza */
.cap-bar{
  height:8px; background:#f1f5f9; border-radius:999px; overflow:hidden; margin-top:6px; margin-bottom:4px;
}
.cap-bar > span{
  display:block; height:100%; background:#16a34a;  /* verde default */
}
.cap-bar.over > span{
  background:#f43f5e; /* rosso se overbooking */
}
.over-note{
  color:#b91c1c; margin:4px 0 0 0; font-size:.95rem;
}

/* layout 1→2→3 colonne (già impostato), lasciamo com’è */

.selections{
  display:grid; gap:8px; margin-top:8px;
}
.slot{
  background:#fff; border:1px solid var(--border); border-radius:10px; padding:10px;
}
.slot-title{ font-weight:600; margin-bottom:6px; }
.slot-body{ color:var(--muted); }


</style>




</head>

<script>
document.addEventListener('scroll', () => {
  const ta = document.querySelector('.top-actions');
  if(!ta) return;
  if (window.scrollY > 8) ta.classList.add('scrolled'); else ta.classList.remove('scrolled');
});
</script>


<body>
<header>
  <h1>Iscrizioni corsi – Liceo Artistico Boccioni</h1>
</header>

<div class="card">
  <?php if($msg): ?><div class="alert ok"><?=esc($msg)?></div><?php endif; ?>
  <?php if($err): ?><div class="alert err"><?=esc($err)?></div><?php endif; ?>

  <form method="post" id="formIscrizione">
    <input type="hidden" name="csrf" value="<?=esc($csrf)?>">

<!-- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    <h2>Dati studente</h2>
    <div class="form-col">
  <div><label class="small">Nome<br><input name="nome" required></label></div>
  <div><label class="small">Cognome<br><input name="cognome" required></label></div>
  <div><label class="small">Classe<br><input name="classe" required placeholder="es. 2L"></label></div>
  
  <div><label class="small">Email scolastica<br>
  <input
    type="email"
    name="email"
    required
    placeholder="cognome.nome@stu.lasboccioni.it"
    autocomplete="email"
    inputmode="email"
    pattern="^[a-z]+(?:\.[a-z]+)@stu\.lasboccioni\.it$"
    title="Usa la mail istituzionale nel formato cognome.nome@stu.lasboccioni.it">
</label></div>

  
</div>


    <hr style="margin:16px 0;border:none;border-top:1px solid #eee">

    <h2>Filtra i corsi</h2>
    <div class="toolbar">
    
      <div><label class="small">Docente
        <select id="fDocente"><option value="">Tutti</option>
          <?php foreach($opt_docenti as $v): ?><option value="<?=esc($v)?>"><?=esc($v)?></option><?php endforeach; ?>
        </select></label></div>
        
      <div><label class="small">Disciplina
        <select id="fDisc"><option value="">Tutte</option>
          <?php foreach($opt_disc as $v): ?><option value="<?=esc($v)?>"><?=esc($v)?></option><?php endforeach; ?>
        </select></label></div>
        
        <div>
  		<label class="small">Periodo
    	<select id="fPeriodo"><option value="">Tutti</option>
      	<?php foreach($opt_periodo as $v): ?><option value="<?=esc($v)?>"><?=esc($v)?></option><?php endforeach; ?>
    	</select>
  		</label>
		</div>
        
      <div><label class="small">Giorno
        <select id="fGiorno"><option value="">Tutti</option>
          <?php foreach($opt_giorno as $v): ?><option value="<?=esc($v)?>"><?=esc($v)?></option><?php endforeach; ?>
        </select></label></div>
        
      <div><label class="small">Destinatari
        <select id="fDest"><option value="">Tutti</option>
          <?php foreach($opt_dest as $v): ?><option value="<?=esc($v)?>"><?=esc($v)?></option><?php endforeach; ?>
        </select></label></div>
        
      <div><label class="small">Indirizzo
        <select id="fIndir"><option value="">Tutti</option>
          <?php foreach($opt_ind as $v): ?><option value="<?=esc($v)?>"><?=esc($v)?></option><?php endforeach; ?>
        </select></label></div>
        
      <div><button type="button" class="btn" id="btnReset">Reset filtri</button></div>
    </div>

<!-- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  -->

<div class="two-col">
  <!-- SINISTRA: DATI STUDENTE -->
  <section>
    <h2>Dati studente</h2>
    <div class="form-col">
      <div><label class="small">Nome<br><input name="nome" required></label></div>
      <div><label class="small">Cognome<br><input name="cognome" required></label></div>
      <div><label class="small">Classe<br><input name="classe" required placeholder="es. 2B"></label></div>
      <div><label class="small">Email scolastica<br>
        <input
  type="email"
  name="email"
  required
  placeholder="cognome.nome@stu.lasboccioni.it oppure cognome.nome@lasboccioni.it"
  autocomplete="email"
  inputmode="email"
  pattern="^[a-z]+(?:\.[a-z]+)@(?:stu\.)?lasboccioni\.it$"
  title="Usa l'email istituzionale: cognome.nome@stu.lasboccioni.it oppure cognome.nome@lasboccioni.it">

      </label></div>
    </div>
  </section>

  <!-- DESTRA: FILTRI -->
  <section>
    <h2>Filtra i corsi</h2>
    <div class="toolbar">
      <div>
        <label class="small">Docente
          <select id="fDocente"><option value="">Tutti</option>
            <?php foreach($opt_docenti as $v): ?><option value="<?=esc($v)?>"><?=esc($v)?></option><?php endforeach; ?>
          </select>
        </label>
      </div>
      <div>
        <label class="small">Disciplina
          <select id="fDisc"><option value="">Tutte</option>
            <?php foreach($opt_disc as $v): ?><option value="<?=esc($v)?>"><?=esc($v)?></option><?php endforeach; ?>
          </select>
        </label>
      </div>
      <div>
        <label class="small">Periodo
          <select id="fPeriodo"><option value="">Tutti</option>
            <?php foreach($opt_periodo as $v): ?><option value="<?=esc($v)?>"><?=esc($v)?></option><?php endforeach; ?>
          </select>
        </label>
      </div>
      <div>
        <label class="small">Giorno
          <select id="fGiorno"><option value="">Tutti</option>
            <?php foreach($opt_giorno as $v): ?><option value="<?=esc($v)?>"><?=esc($v)?></option><?php endforeach; ?>
          </select>
        </label>
      </div>
      <div>
        <label class="small">Destinatari
          <select id="fDest"><option value="">Tutti</option>
            <?php foreach($opt_dest as $v): ?><option value="<?=esc($v)?>"><?=esc($v)?></option><?php endforeach; ?>
          </select>
        </label>
      </div>
      <div>
        <label class="small">Indirizzo
          <select id="fIndir"><option value="">Tutti</option>
            <?php foreach($opt_ind as $v): ?><option value="<?=esc($v)?>"><?=esc($v)?></option><?php endforeach; ?>
          </select>
        </label>
      </div>
      <div><button type="button" class="btn" id="btnReset">Reset filtri</button></div>
    </div>
  </section>
</div>

<div class="selections" aria-live="polite">
  <div class="slot">
    <div class="slot-title">Selezione Trimestre</div>
    <div class="slot-body" id="slotTri">Nessun corso selezionato</div>
  </div>
  <div class="slot">
    <div class="slot-title">Selezione Pentamestre</div>
    <div class="slot-body" id="slotPenta">Nessun corso selezionato</div>
  </div>
</div>


    <!-- <p class="muted">Seleziona fino a <span class="counter" id="counter">0</span> / 4 corsi.</p> -->
    <div class="top-actions">
    
 <p class="muted" style="margin:0">
  Seleziona fino a <span class="counter" id="counter">0</span> / 2 corsi
  (1 nel Trimestre e 1 nel Pentamestre).
</p>

  <button class="btn btn-green" type="submit" id="btnSubmit" disabled>
    Iscriviti ai corsi selezionati
  </button>
	</div>


    <section class="grid" id="cards">
      <?php foreach($corsi as $c):
        $id=(int)$c['ID Corso']; $lib=get_posti_liberi($id); $full=($lib!==null && $lib===0);
      ?>
      
     <div class="card course <?= $full ? 'full' : '' ?>"
     data-docente="<?=data_attr($c['Docente']??'')?>"
     data-disciplina="<?=data_attr($c['Disciplina']??'')?>"
     data-giorno="<?=data_attr($c['Giorno della settimana']??'')?>"
     data-dest="<?=data_attr($c['Anno Scolastico destinatario']??'')?>"
     data-indirizzo="<?=data_attr($c['Indirizzo']??'')?>"
     data-periodo="<?=data_attr($c['Periodo']??'')?>">
     data-title="<?=esc($c['Titolo Corso'])?>">
   



  <div class="row">
    <h3 style="margin:0;flex:1"><?=esc($c['Titolo Corso'])?></h3>
    <label class="small" title="<?=$full?'Corso pieno':''?>">
       <input type="checkbox" name="corsi[]" value="<?=$id?>"  seleziona
    </label>
  </div>

  <?php if(!empty($c['Tipologia'])): ?>
    <p><span class="badge"><?=esc($c['Tipologia'])?></span></p>
  <?php endif; ?>

  <!-- Riepilogo compatto sempre visibile -->
  <p>
  <strong>Docente:</strong> <?=esc($c['Docente']??'')?> <br>
  <strong>Disciplina:</strong> <?=esc($c['Disciplina']??'')?> <br>
  <?php if(!empty($c['Periodo'])): ?>
    <strong>Periodo:</strong> <?=esc($c['Periodo'])?><br>
  <?php endif; ?>
  <strong>Giorno:</strong> <?=esc($c['Giorno della settimana']??'')?> |
  <strong>Orario:</strong> <?=esc($c['Orario']??'')?> <br>
  <strong>Destinatari:</strong> <?=esc($c['Anno Scolastico destinatario']??'')?> |
  <strong>Indirizzo:</strong> <?=esc($c['Indirizzo']??'')?>
</p>


<?php
  $cap  = max(0, (int)($c['Posti disponibili'] ?? 0));   // posti disponibili dichiarati
  $occ  = get_posti_occupati($id);                       // iscritti effettivi
  $over = ($occ > $cap && $cap > 0) || ($cap === 0 && $occ > 0);
  // percentuale per la barra (la larghezza visiva resta max 100%)
  $perc = ($cap > 0) ? min(100, round(($occ / $cap) * 100)) : 100;
?>
<p>
  <strong>Posti disponibili:</strong> <?= esc((string)$cap) ?> |
  <strong>Iscritti:</strong> <?= esc((string)$occ) ?>
</p>
<div class="cap-bar <?= $over ? 'over' : '' ?>" aria-label="Occupazione posti">
  <span style="width: <?= $perc ?>%"></span>
</div>
<?php if ($over): ?>
  <p class="over-note">Attenzione: stai iscrivendoti in <strong>overbooking</strong>.</p>
<?php endif; ?>


  <!-- Bottone toggle -->
  <p style="margin-top:8px">
    <button type="button" class="btn-ghost toggle-details"
            aria-expanded="false" aria-controls="det-<?=$id?>">
      Mostra dettagli
    </button>
  </p>

  <!-- Dettagli estesi (nascosti di default) -->
  <div id="det-<?=$id?>" class="details" hidden>

    <?php if(!empty($c['Prerequisiti'])): ?>
      <p><strong>Prerequisiti:</strong><br><?=nl2br(esc($c['Prerequisiti']))?></p>
    <?php endif; ?>

    <?php if(!empty($c['Competenze in uscita'])): ?>
      <p><strong>Competenze in uscita:</strong><br><?=nl2br(esc($c['Competenze in uscita']))?></p>
    <?php endif; ?>

    <?php if(!empty($c['Descrizione'])): ?>
      <p><strong>Descrizione:</strong><br><?=nl2br(esc($c['Descrizione']))?></p>
    <?php endif; ?>
  </div>
</div>


      
      <?php endforeach; ?>
    </section>

    <!-- <p>
      <button class="btn" type="submit" id="btnSubmit" disabled>Iscriviti ai corsi selezionati</button>
      <span class="muted">Puoi scegliere al massimo 4 corsi in totale.</span>
    </p>
  </form> -->

  <?php if ($res && !empty($res['errors'])): ?>
    <div class="alert err">
      <strong>Alcune iscrizioni non sono state inserite:</strong>
      <ul>
        <?php foreach($res['errors'] as $cid=>$msgE): ?>
          <li>Corso ID <?= (int)$cid ?>: <?= esc($msgE) ?></li>
        <?php endforeach; ?>
      </ul>
    </div>
  <?php endif; ?>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  // ---------- Helpers ----------
  const norm = v => (v || '').trim().toLowerCase();
  const get = id => document.getElementById(id);
  

  // Filtri (tolleranti: se un select manca, non andiamo in errore)
  const selDoc = get('fDocente');
  const selDisc = get('fDisc');
  const selPer = get('fPeriodo');
  const selGio = get('fGiorno');
  const selDes = get('fDest');
  const selInd = get('fIndir');

  const filters = [selDoc, selDisc, selPer, selGio, selDes, selInd].filter(Boolean);
  const cards = Array.from(document.querySelectorAll('.course'));
  
    // ---------------Check email ----
const emailEl = document.querySelector('input[name="email"]');
if (emailEl){
  emailEl.addEventListener('blur', ()=> { emailEl.value = emailEl.value.trim().toLowerCase(); });
  emailEl.addEventListener('invalid', ()=>{
    if (emailEl.validity.typeMismatch || emailEl.validity.patternMismatch) {
      emailEl.setCustomValidity("Inserisci l'email istituzionale: cognome.nome@stu.lasboccioni.it OR cognome.nome@lasboccioni.it");
    } else {
      emailEl.setCustomValidity('');
    }
  });
  emailEl.addEventListener('input', ()=> emailEl.setCustomValidity(''));
}


  function applyFilters(){
    const f = {
      docente:   selDoc ? norm(selDoc.value) : '',
      disciplina:selDisc? norm(selDisc.value): '',
      periodo:   selPer ? norm(selPer.value) : '',
      giorno:    selGio ? norm(selGio.value) : '',
      dest:      selDes ? norm(selDes.value) : '',
      indir:     selInd ? norm(selInd.value) : ''
    };
    cards.forEach(card=>{
      const ok =
        (!f.docente   || card.dataset.docente    === f.docente) &&
        (!f.disciplina|| card.dataset.disciplina === f.disciplina) &&
        (!f.periodo   || card.dataset.periodo    === f.periodo) &&
        (!f.giorno    || card.dataset.giorno     === f.giorno) &&
        (!f.dest      || card.dataset.dest       === f.dest) &&
        (!f.indir     || card.dataset.indirizzo  === f.indir);
      card.style.display = ok ? '' : 'none';
    });
  }
  filters.forEach(el => el.addEventListener('change', applyFilters));
  const btnReset = get('btnReset');
  if (btnReset){
    btnReset.addEventListener('click', ()=>{
      filters.forEach(el => { el.value = ''; });
      applyFilters();
    });
  }

  // ---------- Selezione & limiti ----------
  const MAX = 2;
  const PER_MAX = { trimestre: 1, pentamestre: 1 };

  const counterEl = get('counter');
  const btnSubmit = get('btnSubmit');
  const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"][name="corsi[]"]'));

  function periodOf(cb){
    const card = cb.closest('.course');
    const p = (card?.dataset.periodo || '').toLowerCase();
    if (p.includes('trim')) return 'trimestre';
    if (p.includes('penta')) return 'pentamestre';
    return 'other';
  }
  function countsByPeriod(){
    const c = { trimestre:0, pentamestre:0, other:0 };
    checkboxes.forEach(cb => { if (cb.checked) c[periodOf(cb)]++; });
    return c;
  }
  function updateCounter(){
    const selected = checkboxes.filter(cb=>cb.checked).length;
    if (counterEl) counterEl.textContent = String(selected);
    if (btnSubmit) btnSubmit.disabled = (selected === 0);  // <— abilita il bottone
  }

	function markSelectedUI(){
  checkboxes.forEach(cb=>{
    const card = cb.closest('.course');
    if(!card) return;
    card.classList.toggle('selected', cb.checked);
  });
}

function updateSlots(){
  const slotTri   = document.getElementById('slotTri');
  const slotPenta = document.getElementById('slotPenta');
  let triTitle = null, pentaTitle = null;

  checkboxes.forEach(cb=>{
    if(!cb.checked) return;
    const card = cb.closest('.course');
    if(!card) return;
    const title = card.dataset.title || (card.querySelector('h3')?.textContent || '').trim();
    const p = periodOf(cb); // usa la funzione già presente
    if (p === 'trimestre')   triTitle   = title;
    if (p === 'pentamestre') pentaTitle = title;
  });

  if (slotTri)   slotTri.textContent   = triTitle   ? triTitle   : 'Nessun corso selezionato';
  if (slotPenta) slotPenta.textContent = pentaTitle ? pentaTitle : 'Nessun corso selezionato';
}


  checkboxes.forEach(cb=>{
    cb.addEventListener('change', (e)=>{
      // totale 4
      let selected = checkboxes.filter(x=>x.checked).length;
      if (selected > MAX) {
        e.target.checked = false;
        alert('Puoi selezionare al massimo ' + MAX + ' corsi in totale.');
        selected--;
      }
      // per-periodo 2/2
      const cnt = countsByPeriod();
      if (cnt.trimestre > PER_MAX.trimestre) {
        e.target.checked = false;
        alert('Puoi selezionare al massimo ' + PER_MAX.trimestre + ' corsi nel Trimestre.');
      } else if (cnt.pentamestre > PER_MAX.pentamestre) {
        e.target.checked = false;
        alert('Puoi selezionare al massimo ' + PER_MAX.pentamestre + ' corsi nel Pentamestre.');
      }
      updateCounter();
      markSelectedUI();
      updateSlots(); 
    });
  });

  // Inizializzazioni
  updateCounter();
  applyFilters();
  markSelectedUI();
  updateSlots(); 

  // ---------- Toggle dettagli (tollerante) ----------
  document.querySelectorAll('.toggle-details').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = btn.getAttribute('aria-controls');
      const panel = document.getElementById(id);
      const open = btn.getAttribute('aria-expanded') === 'true';
      if (panel){
        panel.hidden = open;
        btn.setAttribute('aria-expanded', String(!open));
        btn.textContent = open ? 'Mostra dettagli' : 'Nascondi dettagli';
      }
    });
  });
});
</script>


</body>
</html>
