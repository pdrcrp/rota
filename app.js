// ====== CONFIGURAÇÃO ======
const REQUIRED_TOTAL = 9;
const replacementRules = { 6: "optA", 7: "optB" };

const points = [
  { id:"p1", kind:"required", order:1, label:"1", x:18, y:22,
    title:{pt:"O Largo", en:"O Largo"},
    text:{
      pt:"O Largo é um restaurante situado no Largo Trindade Coelho, que cruza gastronomia contemporânea com o ambiente histórico do Chiado. O espaço valoriza a experiência à mesa como momento de encontro, integrando sabores atuais num contexto urbano tradicional.",
      en:"O Largo is a restaurant located in Largo Trindade Coelho, combining contemporary gastronomy with the historic atmosphere of Chiado. The space values dining as a moment of connection, bringing modern flavors into a traditional urban setting."
    },
    audio:{pt:"audio/pt/p1.mp3", en:"audio/en/p1.mp3"} },

  { id:"p2", kind:"required", order:2, label:"2", x:40, y:28,
    title:{pt:"Claus Porto", en:"Claus Porto"},
    text:{
      pt:"Fundada em 1887, a Claus Porto é uma marca histórica portuguesa reconhecida pelos seus sabonetes e fragrâncias artesanais. Combina tradição, design gráfico e perfumaria, preservando uma herança centenária.",
      en:"Founded in 1887, Claus Porto is a historic Portuguese brand known for its handcrafted soaps and fragrances. It combines tradition, graphic design, and perfumery, preserving a century-old heritage."
    },
    audio:{pt:"audio/pt/p2.mp3", en:"audio/en/p2.mp3"} },

  { id:"p3", kind:"required", order:3, label:"3", x:48, y:34,
    title:{pt:"Mel Studio", en:"Mel Studio"},
    text:{
      pt:"O Mel Studio destaca-se pela abordagem autoral ao design de joalharia contemporânea. Cada peça reflete um equilíbrio entre simplicidade, experimentação e identidade artística.",
      en:"Mel Studio stands out for its author-driven approach to contemporary jewelry design. Each piece reflects a balance between simplicity, experimentation, and artistic identity."
    },
    audio:{pt:"audio/pt/p3.mp3", en:"audio/en/p3.mp3"} },

  { id:"p4", kind:"required", order:4, label:"4", x:60, y:40,
    title:{pt:"FORA Sunglasses", en:"FORA Sunglasses"},
    text:{
      pt:"A FORA Sunglasses é uma marca portuguesa dedicada à produção artesanal e sustentável de óculos. O projeto alia design minimalista, materiais de qualidade e produção local.",
      en:"FORA Sunglasses is a Portuguese brand focused on handcrafted and sustainable eyewear. The project combines minimalist design, high-quality materials, and local production."
    },
    audio:{pt:"audio/pt/p4.mp3", en:"audio/en/p4.mp3"} },

  { id:"p5", kind:"required", order:5, label:"5", x:70, y:48,
    title:{pt:"Nossa", en:"Nossa"},
    text:{
      pt:"Nossa é uma loja de roupa situada na Rua da Misericórdia, focada em propostas contemporâneas e numa curadoria cuidada. O espaço reflete uma abordagem atual à moda, onde identidade, estética e detalhe assumem um papel central.",
      en:"Nossa is a clothing store located on Rua da Misericórdia, focused on contemporary fashion and careful curation. The space reflects a modern approach to style, where identity, aesthetics, and detail play a central role."
    },
    audio:{pt:"audio/pt/p5.mp3", en:"audio/en/p5.mp3"} },

  { id:"p6", kind:"required", order:6, label:"6", x:55, y:55,
    title:{pt:"The Feeting Room", en:"The Feeting Room"},
    text:{
      pt:"The Feeting Room é um conceito inovador que junta moda, gastronomia e cultura num único espaço. Promove marcas portuguesas e experiências que cruzam diferentes áreas criativas.",
      en:"The Feeting Room is an innovative concept combining fashion, gastronomy, and culture in one space. It promotes Portuguese brands and experiences that intersect different creative fields."
    },
    audio:{pt:"audio/pt/p6.mp3", en:"audio/en/p6.mp3"} },

  { id:"p7", kind:"required", order:7, label:"7", x:65, y:62,
    title:{pt:"A Brasileira", en:"A Brasileira"},
    text:{
      pt:"A Brasileira é um dos cafés históricos mais emblemáticos de Lisboa, associado à vida cultural e intelectual da cidade. Foi ponto de encontro de artistas, escritores e pensadores ao longo do século XX.",
      en:"A Brasileira is one of Lisbon’s most iconic historic cafés, closely linked to the city’s cultural and intellectual life. It served as a meeting place for artists, writers, and thinkers throughout the 20th century."
    },
    audio:{pt:"audio/pt/p7.mp3", en:"audio/en/p7.mp3"} },

  { id:"p8", kind:"required", order:8, label:"8", x:46, y:76,
    title:{pt:"Ementa Store", en:"Ementa Store"},
    text:{
      pt:"A Ementa Store é um espaço dedicado ao design, à edição independente e à curadoria criativa. Funciona como ponto de contacto entre criadores, objetos e narrativas contemporâneas.",
      en:"Ementa Store is a space dedicated to design, independent publishing, and creative curation. It acts as a meeting point between creators, objects, and contemporary narratives."
    },
    audio:{pt:"audio/pt/p8.mp3", en:"audio/en/p8.mp3"} },

  { id:"p9", kind:"required", order:9, label:"9", x:32, y:84,
    title:{pt:"Terreiro do Paço", en:"Terreiro do Paço"},
    text:{
      pt:"O Terreiro do Paço é uma das praças mais emblemáticas de Lisboa, ligada à história política e urbana da cidade. Aberta sobre o rio Tejo, simboliza a relação entre Lisboa e o mundo.",
      en:"Terreiro do Paço is one of Lisbon’s most emblematic squares, deeply connected to the city’s political and urban history. Open to the Tagus River, it symbolizes Lisbon’s relationship with the world."
    },
    audio:{pt:"audio/pt/p9.mp3", en:"audio/en/p9.mp3"} },

  { id:"optA", kind:"optional", label:"A", x:78, y:18,
    title:{pt:"Museu Arqueológico do Carmo", en:"Carmo Archaeological Museum"},
    text:{
      pt:"Instalado nas ruínas do antigo Convento do Carmo, este museu oferece uma viagem pela história de Lisboa. O espaço combina património arqueológico com uma forte carga simbólica ligada ao terramoto de 1755.",
      en:"Located in the ruins of the former Carmo Convent, this museum offers a journey through Lisbon’s history. The site combines archaeological heritage with strong symbolic meaning linked to the 1755 earthquake."
    },
    audio:{pt:"audio/pt/optA.mp3", en:"audio/en/optA.mp3"} },

  { id:"optB", kind:"optional", label:"B", x:72, y:64,
    title:{pt:"Livraria Bertrand – Chiado", en:"Livraria Bertrand – Chiado"},
    text:{
      pt:"Fundada em 1732, a Livraria Bertrand é considerada a livraria mais antiga do mundo ainda em funcionamento. Representa um símbolo da história literária e cultural de Lisboa.",
      en:"Founded in 1732, Livraria Bertrand is considered the oldest operating bookstore in the world. It represents a key symbol of Lisbon’s literary and cultural history."
    },
    audio:{pt:"audio/pt/optB.mp3", en:"audio/en/optB.mp3"} },
];

// ====== ESTADO ======
let lang = "pt";
let currentRequired = 1;
let audioStarted = false;

let replacingRequiredOrder = null;
let pendingSubstituteOrder = null;

let substitutedRequired = new Set(JSON.parse(localStorage.getItem("substitutedRequired") || "[]"));
let usedOptionals = new Set(JSON.parse(localStorage.getItem("usedOptionals") || "[]"));

const saved = localStorage.getItem("currentRequired");
if (saved) {
  const n = Number(saved);
  if (Number.isFinite(n) && n >= 1 && n <= REQUIRED_TOTAL) currentRequired = n;
}

// ====== ELEMENTOS ======
const stopList = document.getElementById("stopList");

const modalBackdrop = document.getElementById("modalBackdrop");
const closeModalBtn = document.getElementById("closeModal");
const continueBtn = document.getElementById("continueBtn");
const replayBtn = document.getElementById("replayBtn");

const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

const routeWrap = document.getElementById("route");
const routePins = document.getElementById("routePins");

const modalTitle = document.getElementById("modalTitle");
const modalType = document.getElementById("modalType");
const modalText = document.getElementById("modalText");
const modalAudio = document.getElementById("modalAudio");
const audioLabel = document.getElementById("audioLabel");

const resetBtn = document.getElementById("resetBtn");
const langBtns = [...document.querySelectorAll(".lang-btn")];

// Intro
const intro = document.getElementById("intro");
const scrollHint = document.getElementById("scrollHint");
const scrollOverlay = document.getElementById("scrollOverlay");

// Intro copy
const introTitle = document.getElementById("introTitle");
const introSub = document.getElementById("introSub");

// ✅ layers agora vêm do sticky map (um único mapa)
const introLayers = [
  document.querySelector(".sticky-map .l1"),
  document.querySelector(".sticky-map .l2"),
  document.querySelector(".sticky-map .l3"),
  document.querySelector(".sticky-map .l4"),
  document.querySelector(".sticky-map .l5"),
  document.querySelector(".sticky-map .l6")
];

const globalTitle = document.getElementById("globalTitle");
const globalKicker = document.getElementById("globalKicker");
const overlayTitle = document.getElementById("overlayTitle");
const overlayText = document.getElementById("overlayText");
const tracksTitle = document.getElementById("tracksTitle");
const tracksSub = document.getElementById("tracksSub");
const footerCopy = document.getElementById("footerCopy");

let openedPoint = null;

// ====== UI TEXTS ======
const ui = {
  pt: {
    pageTitle: "Percurso",
    kicker: "Postais por Lisboa",
    introTitle: "Segue a cidade\nponto a ponto",
    introSub: "Ouve a história antes de entrar. Avança no percurso ao teu ritmo.",
    overlayTitle: "Bem-vindo ✨",
    overlayText: "Faz scroll para começares a descobrir o mapa",
    tracksTitle: "Pontos",
    tracksSub: "Toca num ponto para abrir ou ouvir o áudio.",
    footer: "Postais por Lisboa — percurso interativo",

    progress: (n) => `Ponto ${Math.min(n, REQUIRED_TOTAL)} de ${REQUIRED_TOTAL}`,
    required: "Visita obrigatória",
    optional: "Alternativa",
    optionalReplacement: "Alternativa (substitui ponto obrigatório)",
    audio: "Áudio",
    continue: "Continuar percurso",
    replay: "Repetir áudio",
    lockedHint: "Este ponto ainda está bloqueado.",
    replaceBtn: (name) => `Substituir por: ${name}`,
    replaceHint: "Se não quiseres visitar este ponto, podes substituí-lo por uma alternativa.",
    open: "Abrir",
    listen: "Ouvir",
    locked: "Bloqueado",
    active: "Ativo",
    done: "Concluído",
    replaced: "Substituído",
    reset: "Recomeçar",
    resetConfirm: "Queres mesmo recomeçar? (Vai apagar o progresso.)"
  },
  en: {
    pageTitle: "Route",
    kicker: "Postcards from Lisbon",
    introTitle: "Follow the city\npoint by point",
    introSub: "Listen before you enter. Move through the route at your own pace.",
    overlayTitle: "Welcome ✨",
    overlayText: "Scroll to start discovering the map",
    tracksTitle: "Stops",
    tracksSub: "Tap a stop to open it or play the audio.",
    footer: "Postcards from Lisbon — interactive route",

    progress: (n) => `Stop ${Math.min(n, REQUIRED_TOTAL)} of ${REQUIRED_TOTAL}`,
    required: "Required stop",
    optional: "Alternative",
    optionalReplacement: "Alternative (replaces a required stop)",
    audio: "Audio",
    continue: "Continue route",
    replay: "Replay audio",
    lockedHint: "This stop is still locked.",
    replaceBtn: (name) => `Replace with: ${name}`,
    replaceHint: "If you don't want to visit this stop, you can replace it with an alternative.",
    open: "Open",
    listen: "Listen",
    locked: "Locked",
    active: "Active",
    done: "Done",
    replaced: "Replaced",
    reset: "Restart",
    resetConfirm: "Restart the route? (This will erase your progress.)"
  }
};

// ====== HELPERS ======
function byId(id) { return points.find(p => p.id === id); }
function saveSets() {
  localStorage.setItem("substitutedRequired", JSON.stringify([...substitutedRequired]));
  localStorage.setItem("usedOptionals", JSON.stringify([...usedOptionals]));
}
function clamp01(v){ return Math.max(0, Math.min(1, v)); }

// ====== VISIBILIDADE DA ROTA ======
function setRouteVisible(visible) {
  if (!routeWrap) return;
  if (visible) {
    routeWrap.classList.remove("is-hidden");
    routeWrap.classList.add("is-shown");
  } else {
    routeWrap.classList.add("is-hidden");
    routeWrap.classList.remove("is-shown");
  }
}

// ====== PROGRESSO ======
function getPointState(p) {
  if (p.kind === "optional") return "active";
  if (p.order < currentRequired) return "done";
  if (p.order === currentRequired) return "active";
  return "locked";
}

function updateHeader() {
  progressText.textContent = ui[lang].progress(currentRequired);
  const done = Math.max(0, Math.min(REQUIRED_TOTAL, currentRequired - 1));
  const pct = (done / REQUIRED_TOTAL) * 100;
  progressBar.style.width = `${pct.toFixed(1)}%`;
}

// ====== Alternativas só aparecem no momento certo (6/7) ======
function optionalIsAvailableNow(optionalPoint) {
  const replacesOrder = Object.entries(replacementRules).find(([, optId]) => optId === optionalPoint.id);
  const replacesThis = replacesOrder ? Number(replacesOrder[0]) : null;
  if (!replacesThis) return false;
  if (currentRequired === replacesThis) return true;
  if (usedOptionals.has(optionalPoint.id)) return true;
  return false;
}

// ====== MAP PINS (no MESMO mapa) ======
function renderPins() {
  if (!routePins) return;
  routePins.innerHTML = "";

  points.forEach(p => {
    if (p.kind === "optional" && !optionalIsAvailableNow(p)) return;

    const state = (p.kind === "required") ? getPointState(p) : "active";
    const isLocked = (p.kind === "required" && state === "locked");

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "pin";
    btn.style.left = `${p.x}%`;
    btn.style.top = `${p.y}%`;
    btn.textContent = p.label;

    if (p.kind === "optional") btn.classList.add("is-optional");
    if (state === "active") btn.classList.add("is-active");
    if (state === "done") btn.classList.add("is-done");
    if (isLocked) btn.classList.add("is-locked");

    btn.title = p.title[lang];

    btn.addEventListener("click", () => {
      if (isLocked) return alert(ui[lang].lockedHint);
      openModal(p);
    });

    routePins.appendChild(btn);
  });
}

// ====== LISTA ======
function renderStopList() {
  stopList.innerHTML = "";

  points.forEach(p => {
    if (p.kind === "optional" && !optionalIsAvailableNow(p)) return;

    const isRequired = p.kind === "required";
    const state = isRequired ? getPointState(p) : "active";

    const replacesOrder = Object.entries(replacementRules).find(([, optId]) => optId === p.id);
    const replacesThis = replacesOrder ? Number(replacesOrder[0]) : null;

    const row = document.createElement("div");
    row.className = "track";
    if (isRequired && state === "locked") row.classList.add("is-locked");

    const left = document.createElement("div");
    left.className = "track-left";

    const num = document.createElement("div");
    num.className = "track-num";
    num.textContent = p.label;

    const meta = document.createElement("div");
    meta.className = "track-meta";

    const title = document.createElement("p");
    title.className = "track-title";
    title.textContent = p.title[lang];

    const sub = document.createElement("p");
    sub.className = "track-sub";

    if (isRequired) {
      sub.textContent =
        state === "locked" ? ui[lang].locked
        : state === "active" ? ui[lang].active
        : (substitutedRequired.has(p.order) ? ui[lang].replaced : ui[lang].done);
    } else {
      const base = replacesThis
        ? (lang === "pt" ? `Alternativa ao ponto ${replacesThis}` : `Alternative to stop ${replacesThis}`)
        : (lang === "pt" ? "Alternativa" : "Alternative");

      sub.textContent = usedOptionals.has(p.id)
        ? `${base} • ${ui[lang].done}`
        : base;
    }

    meta.appendChild(title);
    meta.appendChild(sub);

    left.appendChild(num);
    left.appendChild(meta);

    const right = document.createElement("div");
    right.className = "track-right";

    const openBtn = document.createElement("button");
    openBtn.className = "track-btn primary";
    openBtn.type = "button";
    openBtn.textContent = ui[lang].open;

    openBtn.addEventListener("click", () => {
      if (isRequired && state === "locked") return alert(ui[lang].lockedHint);
      openModal(p);
    });

    const listenBtn = document.createElement("button");
    listenBtn.className = "track-btn";
    listenBtn.type = "button";
    listenBtn.textContent = ui[lang].listen;

    listenBtn.addEventListener("click", () => {
      if (isRequired && state === "locked") return alert(ui[lang].lockedHint);
      openModal(p);
      setTimeout(() => { modalAudio.play().catch(() => {}); }, 80);
    });

    right.appendChild(openBtn);
    right.appendChild(listenBtn);

    row.appendChild(left);
    row.appendChild(right);

    stopList.appendChild(row);
  });

  renderPins();
}

// ====== MODAL ======
function ensureReplaceUI(container, requiredPoint) {
  let block = document.getElementById("replaceBlock");
  if (!block) {
    block = document.createElement("div");
    block.id = "replaceBlock";
    block.style.marginTop = "10px";
    block.style.padding = "10px";
    block.style.border = "1px solid rgba(11,13,18,.14)";
    block.style.borderRadius = "14px";
    block.style.background = "rgba(255,255,255,.30)";
    container.appendChild(block);
  } else block.innerHTML = "";

  const optionalId = replacementRules[requiredPoint.order];
  const optionalPoint = byId(optionalId);
  if (!optionalPoint) return;

  const hint = document.createElement("p");
  hint.style.margin = "0 0 10px";
  hint.style.color = "rgba(11,13,18,.75)";
  hint.style.fontSize = "13px";
  hint.textContent = ui[lang].replaceHint;

  const btn = document.createElement("button");
  btn.className = "btn secondary";
  btn.style.width = "100%";
  btn.textContent = ui[lang].replaceBtn(optionalPoint.title[lang]);

  btn.addEventListener("click", () => {
    replacingRequiredOrder = requiredPoint.order;
    pendingSubstituteOrder = requiredPoint.order;
    openModal(optionalPoint);
  });

  block.appendChild(hint);
  block.appendChild(btn);
}

function openModal(p) {
  openedPoint = p;
  audioStarted = false;
  pendingSubstituteOrder = null;

  modalTitle.textContent = p.title[lang];
  modalText.textContent = p.text[lang];

  if (p.kind === "optional") {
    const replacesOrder = Object.entries(replacementRules).find(([, optId]) => optId === p.id);
    const replacesThis = replacesOrder ? Number(replacesOrder[0]) : null;

    if (replacesThis && replacesThis === currentRequired) {
      pendingSubstituteOrder = replacesThis;
      replacingRequiredOrder = replacesThis;
    }
  }

  modalType.textContent = (p.kind === "required")
    ? ui[lang].required
    : ((replacingRequiredOrder === currentRequired) ? ui[lang].optionalReplacement : ui[lang].optional);

  audioLabel.textContent = ui[lang].audio;
  replayBtn.textContent = ui[lang].replay;
  continueBtn.textContent = ui[lang].continue;

  modalAudio.pause();
  modalAudio.currentTime = 0;
  modalAudio.innerHTML = "";
  const src = document.createElement("source");
  src.src = p.audio[lang];
  src.type = "audio/mpeg";
  modalAudio.appendChild(src);
  modalAudio.load();

  modalAudio.onplay = () => { audioStarted = true; };

  continueBtn.disabled = (p.kind === "optional") && !(replacingRequiredOrder === currentRequired);

  const modalBody = document.querySelector(".modal-body");
  const existing = document.getElementById("replaceBlock");
  if (existing) existing.remove();

  if (p.kind === "required" && p.order === currentRequired && replacementRules[p.order]) {
    ensureReplaceUI(modalBody, p);
  }

  modalBackdrop.hidden = false;
}

function closeModal() {
  modalAudio.pause();
  modalBackdrop.hidden = true;
  openedPoint = null;
  replacingRequiredOrder = null;
  pendingSubstituteOrder = null;
}

closeModalBtn.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) closeModal();
});

replayBtn.addEventListener("click", () => {
  modalAudio.currentTime = 0;
  modalAudio.play().catch(() => {});
});

continueBtn.addEventListener("click", () => {
  if (!openedPoint) return;

  if (!audioStarted) {
    alert(lang === "pt"
      ? "Dica: inicia o áudio antes de avançar 🙂"
      : "Tip: start the audio before continuing 🙂"
    );
  }

  if (openedPoint.kind === "required") {
    if (openedPoint.order === currentRequired && currentRequired < REQUIRED_TOTAL) {
      currentRequired += 1;
      localStorage.setItem("currentRequired", String(currentRequired));
    }
    replacingRequiredOrder = null;
    pendingSubstituteOrder = null;
    updateHeader();
    renderStopList();
    closeModal();
    return;
  }

  if (
    openedPoint.kind === "optional" &&
    (replacingRequiredOrder === currentRequired || pendingSubstituteOrder === currentRequired)
  ) {
    substitutedRequired.add(currentRequired);
    usedOptionals.add(openedPoint.id);
    localStorage.setItem("substitutedRequired", JSON.stringify([...substitutedRequired]));
    localStorage.setItem("usedOptionals", JSON.stringify([...usedOptionals]));

    if (currentRequired < REQUIRED_TOTAL) {
      currentRequired += 1;
      localStorage.setItem("currentRequired", String(currentRequired));
    }

    replacingRequiredOrder = null;
    pendingSubstituteOrder = null;
    updateHeader();
    renderStopList();
    closeModal();
  }
});

// ====== IDIOMA ======
function applyStaticTexts() {
  document.documentElement.lang = lang;
  document.title = ui[lang].pageTitle;

  globalTitle.textContent = ui[lang].pageTitle;
  globalKicker.textContent = ui[lang].kicker;

  overlayTitle.textContent = ui[lang].overlayTitle;
  overlayText.textContent = ui[lang].overlayText;

  introTitle.textContent = ui[lang].introTitle;
  introSub.textContent = ui[lang].introSub;

  tracksTitle.textContent = ui[lang].tracksTitle;
  tracksSub.textContent = ui[lang].tracksSub;
  footerCopy.textContent = ui[lang].footer;

  resetBtn.textContent = ui[lang].reset;
}

function setLang(newLang) {
  lang = newLang;
  langBtns.forEach(b =>
    b.setAttribute("aria-pressed", b.dataset.lang === newLang ? "true" : "false")
  );

  applyStaticTexts();
  updateHeader();
  renderStopList();
  if (openedPoint) openModal(openedPoint);
}
langBtns.forEach(btn => btn.addEventListener("click", () => setLang(btn.dataset.lang)));

// ====== OVERLAY ======
function initOverlay() {
  if (!scrollOverlay) return;
  scrollOverlay.style.display = "flex";
  scrollOverlay.classList.remove("is-hidden");
}
function dismissOverlay() {
  if (!scrollOverlay) return;
  if (scrollOverlay.classList.contains("is-hidden")) return;
  scrollOverlay.classList.add("is-hidden");
  setTimeout(() => { scrollOverlay.style.display = "none"; }, 260);
}

// ====== RECOMEÇAR ======
function resetProgress() {
  localStorage.removeItem("currentRequired");
  localStorage.removeItem("substitutedRequired");
  localStorage.removeItem("usedOptionals");

  currentRequired = 1;
  substitutedRequired = new Set();
  usedOptionals = new Set();
  replacingRequiredOrder = null;
  pendingSubstituteOrder = null;

  closeModal();
  updateHeader();
  renderStopList();

  window.scrollTo({ top: 0, behavior: "smooth" });

  initOverlay();
  setRouteVisible(false);
}

resetBtn.addEventListener("click", () => {
  const ok = confirm(ui[lang].resetConfirm);
  if (ok) resetProgress();
});

// ====== INTRO: animação com scroll (no MESMO mapa sticky) ======
function layerUpdate(layer, t, depthPx) {
  if (!layer) return;
  layer.style.opacity = String(t);
  const y = depthPx * (1 - t);
  layer.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
}

function updateIntroAnimation() {
  const rect = intro.getBoundingClientRect();
  const total = intro.offsetHeight - window.innerHeight;
  const scrolled = clamp01((-rect.top) / (total || 1));

  const c2 = clamp01((scrolled - 0.05) / 0.14);
  const c3 = clamp01((scrolled - 0.10) / 0.16);

  introTitle.style.opacity = String(c2);
  introTitle.style.transform = `translate3d(0, ${(10 - (c2 * 10)).toFixed(2)}px, 0)`;

  introSub.style.opacity = String(c3);
  introSub.style.transform = `translate3d(0, ${(10 - (c3 * 10)).toFixed(2)}px, 0)`;

  const t1 = clamp01((scrolled - 0.08) / 0.14);
  const t2 = clamp01((scrolled - 0.20) / 0.14);
  const t3 = clamp01((scrolled - 0.32) / 0.14);
  const t4 = clamp01((scrolled - 0.44) / 0.14);
  const t5 = clamp01((scrolled - 0.56) / 0.16);
  const t6 = clamp01((scrolled - 0.70) / 0.16);

  layerUpdate(introLayers[0], t1, 2);
  layerUpdate(introLayers[1], t2, 4);
  layerUpdate(introLayers[2], t3, 6);
  layerUpdate(introLayers[3], t4, 8);
  layerUpdate(introLayers[4], t5, 10);
  layerUpdate(introLayers[5], t6, 12);

  if (scrollHint) {
    const tHint = clamp01(scrolled / 0.18);
    scrollHint.style.opacity = String(1 - tHint);
  }

  // mostra a rota no fim (o mapa é o mesmo, apenas aparecem pins/lista)
  const showRoute = scrolled >= 0.93;
  setRouteVisible(showRoute);
  if (showRoute) renderPins();
}

// throttle 30fps
let ticking = false;
let lastFrameTime = 0;
const FRAME_MS = 33;

function onScroll(){
  if (window.scrollY > 6) dismissOverlay();

  if (!ticking) {
    ticking = true;
    requestAnimationFrame((now) => {
      if (now - lastFrameTime >= FRAME_MS) {
        updateIntroAnimation();
        lastFrameTime = now;
      }
      ticking = false;
    });
  }
}
window.addEventListener("scroll", onScroll, { passive: true });

// ====== INIT ======
modalBackdrop.hidden = true;

applyStaticTexts();
updateHeader();
renderStopList();

setRouteVisible(false);
initOverlay();
updateIntroAnimation();

requestAnimationFrame(() => {
  updateIntroAnimation();
  if (window.scrollY > 6) dismissOverlay();
});
