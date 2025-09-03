<?php
require_once __DIR__ . '/functions.php';

$corsi = get_all_corsi();

// Costruisco le opzioni filtro (valori unici, non vuoti)
function unique_sorted(array $vals): array {
    $set = [];
    foreach ($vals as $v) {
        $v = trim((string)$v);
        if ($v !== '') $set[$v] = true;
    }
    $arr = array_keys($set);
    sort($arr, SORT_NATURAL | SORT_FLAG_CASE);
    return $arr;
}
$opt_docenti = unique_sorted(array_column($corsi, 'Docente'));
$opt_disc    = unique_sorted(array_column($corsi, 'Disciplina'));
$opt_giorno  = unique_sorted(array_column($corsi, 'Giorno della settimana'));
$opt_dest    = unique_sorted(array_column($corsi, 'Anno Scolastico destinatario'));
$opt_ind     = unique_sorted(array_column($corsi, 'Indirizzo'));

$msg = null; $err = null; $res = null;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        require_csrf($_POST['csrf'] ?? '');
        $nome   = trim($_POST['nome'] ?? '');
        $cogn   = trim($_POST['cognome'] ?? '');
        $classe = trim($_POST['classe'] ?? '');
        $email  = trim($_POST['email'] ?? '');
        $ids    = $_POST['corsi'] ?? [];
        if (!is_array($ids)) $ids = [];

        $res = registra_iscrizioni_multiple($nome, $cogn, $classe, $email, $ids);
        if ($res['ok'] > 0 && $res['fail'] === 0) {
            $msg = "Iscrizione completata per {$res['ok']} corsi.";
        } elseif ($res['ok'] > 0 && $res['fail'] > 0) {
            $msg = "Iscritti {$res['ok']} corsi; alcuni non inseriti.";
        } else {
            $err = "Nessuna iscrizione effettuata.";
        }
    } catch (Throwable $e) {
        $err = $e->getMessage();
    }
}
$csrf = csrf_token();

// Helper per normalizzare attributi data-*
function data_attr($v){ return htmlspecialchars(mb_strtolower(trim((string)$v)), ENT_QUOTES, 'UTF-8'); }
function esc($v){ return htmlspecialchars((string)$v, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); }
?>
<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Iscrizione studente – Iscrizioni corsi</title>
<style>
body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Arial,sans-serif;margin:0;background:#fafafa;color:#111}
header{display:flex;flex-wrap:wrap;align-items:center;gap:12px;justify-content:space-between;padding:16px}
.card{border:1px solid #e5e7eb;border-radius:12px;padding:16px;margin:12px;background:#fff;box-shadow:0 2px 4px rgba(0,0,0,.04)}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px}
.badge{display:inline-block;padding:2px 8px;border-radius:999px;background:#eef2ff}
.btn{padding:10px 14px;border:1px solid #111;border-radius:8px;background:#111;color:#fff;cursor:pointer}
.btn:disabled{opacity:.6;cursor:not-allowed}
.btn-link{display:inline-block;padding:8px 12px;border:1px solid #111;border-radius:8px;color:#111;text-decoration:none;background:#fff}
input,select{width:100%;padding:10px;border:1px solid #d1d5db;border-radius:8px}
label.small{font-size:.9rem;color:#374151}
.toolbar{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px}
.alert{padding:12px;border-radius:10px;margin:8px 0}
.alert.ok{background:#ecfdf5;border:1px solid #10b98133}
.alert.err{background:#fef2f2;border:1px solid #ef444433}
.counter{font-weight:600}
.muted{color:#6b7280}
.card.disabled{opacity:.55}
.card .row{display:flex;align-items:center;gap:10px;justify-content:space-between}
</style>
</head>
<body>
<header>
  <h1>Iscrizione studente</h1>
  <nav><a class="btn-link" href="index.php">← Torna alla scelta</a></nav>
</header>

<div class="card">
  <?php if($msg): ?><div class="alert ok"><?=esc($msg)?></div><?php endif; ?>
  <?php if($err): ?><div class="alert err"><?=esc($err)?></div><?php endif; ?>

  <form method="post" id="formIscrizione">
    <input type="hidden" name="csrf" value="<?=esc($csrf)?>">

    <h2>Dati studente</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px">
      <div><label class="small">Nome<br><input name="nome" required></label></div>
      <div><label class="small">Cognome<br><input name="cognome" required></label></div>
      <div><label class="small">Classe<br><input name="classe" required placeholder="es. 2DLS"></label></div>
      <div><label class="small">Email scolastica<br><input type="email" name="email" required></label></div>
    </div>

    <hr style="margin:16px 0;border:none;border-top:1px solid #eee">

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

    <p class="muted">Seleziona fino a <span class="counter" id="counter">0</span> / 4 corsi.</p>

    <section class="grid" id="cards">
      <?php foreach($corsi as $c):
        $id   = (int)$c['ID Corso'];
        $lib  = get_posti_liberi($id);
        $full = ($lib !== null && $lib === 0);
      ?>
      <div class="card course"
           data-docente="<?=data_attr($c['Docente']??'')?>"
           data-disciplina="<?=data_attr($c['Disciplina']??'')?>"
           data-giorno="<?=data_attr($c['Giorno della settimana']??'')?>"
           data-dest="<?=data_attr($c['Anno Scolastico destinatario']??'')?>"
           data-indirizzo="<?=data_attr($c['Indirizzo']??'')?>">

        <div class="row">
          <h3 style="margin:0;flex:1"><?=esc($c['Titolo Corso'])?></h3>
          <label class="small" title="<?=$full?'Corso pieno':''?>">
            <input type="checkbox" name="corsi[]" value="<?=$id?>" <?=$full?'disabled':''?>>
            seleziona
          </label>
        </div>

        <p><span class="badge"><?=esc($c['Tipologia']??'')?></span></p>
        <p>
          <strong>Docente:</strong> <?=esc($c['Docente']??'')?> <br>
          <strong>Disciplina:</strong> <?=esc($c['Disciplina']??'')?> <br>
          <strong>Giorno:</strong> <?=esc($c['Giorno della settimana']??'')?> |
          <strong>Orario:</strong> <?=esc($c['Orario']??'')?> <br>
          <strong>Destinatari:</strong> <?=esc($c['Anno Scolastico destinatario']??'')?> |
          <strong>Indirizzo:</strong> <?=esc($c['Indirizzo']??'')?>
        </p>
        <p>
          <strong>Posti disponibili:</strong> <?=esc((string)$c['Posti disponibili'])?> |
          <strong>Posti liberi:</strong> <?= $lib===null ? 'n/d' : esc((string)$lib) ?>
        </p>
        <?php if(!empty($c['Descrizione'])): ?>
          <p><?=nl2br(esc($c['Descrizione']))?></p>
        <?php endif; ?>
      </div>
      <?php endforeach; ?>
    </section>

    <p>
      <button class="btn" type="submit" id="btnSubmit" disabled>Iscriviti ai corsi selezionati</button>
      <span class="muted">Puoi scegliere al massimo 4 corsi in totale.</span>
    </p>
  </form>

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
// --- FILTRI ---
const selDoc  = document.getElementById('fDocente');
const selDisc = document.getElementById('fDisc');
const selGio  = document.getElementById('fGiorno');
const selDes  = document.getElementById('fDest');
const selInd  = document.getElementById('fIndir');
const btnReset= document.getElementById('btnReset');
const cards   = Array.from(document.querySelectorAll('.course'));

function norm(v){ return (v||'').trim().toLowerCase(); }
function applyFilters(){
  const f = {
    docente:  norm(selDoc.value),
    disciplina:norm(selDisc.value),
    giorno:   norm(selGio.value),
    dest:     norm(selDes.value),
    indir:    norm(selInd.value)
  };
  cards.forEach(card=>{
    const ok =
      (!f.docente   || card.dataset.docente   === f.docente) &&
      (!f.disciplina|| card.dataset.disciplina=== f.disciplina) &&
      (!f.giorno    || card.dataset.giorno    === f.giorno) &&
      (!f.dest      || card.dataset.dest      === f.dest) &&
      (!f.indir     || card.dataset.indirizzo === f.indir);
    card.style.display = ok ? '' : 'none';
  });
}
[selDoc, selDisc, selGio, selDes, selInd].forEach(el=>el.addEventListener('change', applyFilters));
btnReset.addEventListener('click', ()=>{
  [selDoc, selDisc, selGio, selDes, selInd].forEach(el=>el.value='');
  applyFilters();
});

// --- SELEZIONE & COUNTER (max 4) ---
const MAX = 4;
const counterEl = document.getElementById('counter');
const btnSubmit = document.getElementById('btnSubmit');
const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"][name="corsi[]"]'));

function updateCounter(){
  const sel = checkboxes.filter(cb=>cb.checked);
  counterEl.textContent = String(sel.length);
  btnSubmit.disabled = sel.length === 0;
}
checkboxes.forEach(cb=>{
  cb.addEventListener('change', (e)=>{
    const selectedNow = checkboxes.filter(x=>x.checked).length;
    if (selectedNow > MAX) {
      // supera il limite: annulla l'ultima selezione
      e.target.checked = false;
      alert('Puoi selezionare al massimo ' + MAX + ' corsi.');
    }
    updateCounter();
  });
});
updateCounter();
applyFilters();
</script>
</body>
</html>
