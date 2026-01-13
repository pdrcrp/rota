// app.js

// ====== CONFIGURAÇÃO ======
const REQUIRED_TOTAL = 9;

// ✅ alternativos: 6 -> 10, 7 -> 11
const altChoice = {
  6: { id: "optA" },
  7: { id: "optB" },
};

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

  { id:"optA", kind:"optional", label:"10",
    title:{pt:"Museu Arqueológico do Carmo", en:"Carmo Archaeological Museum"},
    text:{
      pt:"Instalado nas ruínas do antigo Convento do Carmo, este museu oferece uma viagem pela história de Lisboa. O espaço combina património arqueológico com uma forte carga simbólica ligada ao terramoto de 1755.",
      en:"Located in the ruins of the former Carmo Convent, this museum offers a journey through Lisbon’s history. The site combines archaeological heritage with strong symbolic meaning linked to the 1755 earthquake."
    },
    audio:{pt:"audio/pt/optA.mp3", en:"audio/en/optA.mp3"} },

  { id:"optB", kind:"optional", label:"11",
    title:{pt:"Livraria Bertrand – Chiado", en:"Livraria Bertrand - Chiado"},
    text:{
      pt:"Fundada em 1732, a Livraria Bertrand é considerada a livraria mais antiga do mundo ainda em funcionamento. Representa um símbolo da história literária e cultural de Lisboa.",
      en:"Founded in 1732, Livraria Bertrand is considered the oldest operating bookstore in the world. It represents a key symbol of Lisbon’s literary and cultural history."
    },
    audio:{pt:"audio/pt/optB.mp3", en:"audio/en/optB.mp3"} },
];

// ====== ESTADO ======
let lang = "pt";
let currentRequired = 1;

let listenedComplete = new Set(JSON.parse(localStorage.getItem("listenedComplete") || "[]"));
let currentVariant = "main";

const saved = localStorage.getItem("currentRequired");
if (saved) {
  const n = Number(saved);
  if (Number.isFinite(n) && n >= 1 && n <= REQUIRED_TOTAL) currentRequired = n;
}

// ====== ELEMENTOS ======
const globalBar = document.getElementById("globalBar");

const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");

const playerKicker = document.getElementById("playerKicker");
const playerTitle = document.getElementById("playerTitle");
const playerText = document.getElementById("playerText");
const playerRouteBar = document.getElementById("playerRouteBar");
const playerAudioBar = document.getElementById("playerAudioBar");

const prevBtn = document.getElementById("prevBtn");
const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");

const playerAudio = document.getElementById("playerAudio");

const resetBtn = document.getElementById("resetBtn");
const langBtns = [...document.querySelectorAll(".lang-btn")];

const globalTitle = document.getElementById("globalTitle");
const globalKicker = document.getElementById("globalKicker");
const overlayTitle = document.getElementById("overlayTitle");
const overlayText = document.getElementById("overlayText");
const footerCopy = document.getElementById("footerCopy");

const intro = document.getElementById("intro");
const scrollHint = document.getElementById("scrollHint"); // null (ok)
const scrollOverlay = document.getElementById("scrollOverlay");
const introTitle = document.getElementById("introTitle");
const introSub = document.getElementById("introSub");

const routeWrap = document.getElementById("route");
const routeFooter = document.getElementById("routeFooter");

const playerChoice = document.getElementById("playerChoice");
const choiceAltToggle = document.getElementById("choiceAltToggle");

const introLayers = [
  document.querySelector(".intro-map .l1"),
  document.querySelector(".intro-map .l2"),
  document.querySelector(".intro-map .l3"),
  document.querySelector(".intro-map .l4"),
  document.querySelector(".intro-map .l5"),
  document.querySelector(".intro-map .l6")
];

// ====== UI TEXTS ======
const ui = {
  pt: {
    pageTitle: "Percurso",
    kicker: "Postais por Lisboa",
    overlayTitle: "Bem vindo!",
    overlayText: "Faz scroll para começares a descobrir o mapa",
    introTitle: "Segue a cidade\nparagem a paragem",
    introSub: "Ouve a história antes de entrar. Avança no percurso ao teu ritmo.",
    footer: "Postais por Lisboa",

    nowPlaying: "Paragem atual",
    progress: (n) => `Paragem ${Math.min(n, REQUIRED_TOTAL)} de ${REQUIRED_TOTAL}`,
    reset: "Recomeçar",
    resetConfirm: "Queres mesmo recomeçar? (Vai apagar o progresso.)",

    altToggleLabel: (_altLabel, altTitle) => `Alternativa: ${altTitle}`,
  },
  en: {
    pageTitle: "Route",
    kicker: "Postcards from Lisbon",
    overlayTitle: "Welcome!",
    overlayText: "Scroll to start discovering the map",
    introTitle: "Follow the city\nstop by stop",
    introSub: "Listen before you enter. Move through the route at your own pace.",
    footer: "Postcards from Lisbon",

    nowPlaying: "Current stop",
    progress: (n) => `Stop ${Math.min(n, REQUIRED_TOTAL)} of ${REQUIRED_TOTAL}`,
    reset: "Restart",
    resetConfirm: "Restart the route? (This will erase your progress.)",

    altToggleLabel: (_altLabel, altTitle) => `Alternative: ${altTitle}`,
  }
};

// ====== HELPERS ======
function clamp01(v){ return Math.max(0, Math.min(1, v)); }
function getRequiredByOrder(order){ return points.find(p => p.kind === "required" && p.order === order); }
function getById(id){ return points.find(p => p.id === id); }
function listenedKeyForRequired(order){ return `req-${order}`; }
function saveListened(){ localStorage.setItem("listenedComplete", JSON.stringify([...listenedComplete])); }

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

// ====== VARIANT ======
function resetVariantForPoint(){ currentVariant = "main"; }

function getPointForCurrent(){
  const base = getRequiredByOrder(currentRequired);
  if (!base) return null;
  const alt = altChoice[currentRequired];
  if (alt && currentVariant === "alt") return getById(alt.id) || base;
  return base;
}

// ====== HEADER show on first interaction + height ======
let headerShown = false;

function getHeaderH(){
  const v = getComputedStyle(document.documentElement).getPropertyValue("--headerH").trim();
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : 0;
}

function syncHeaderHeight(){
  if (!globalBar) return;
  if (document.body.classList.contains("header-hidden")) {
    document.documentElement.style.setProperty("--headerH", `0px`);
    return;
  }
  const h = Math.ceil(globalBar.getBoundingClientRect().height);
  document.documentElement.style.setProperty("--headerH", `${h}px`);
}

function showHeaderNow(){
  if (headerShown) return;
  headerShown = true;

  document.body.classList.remove("header-hidden");
  globalBar?.setAttribute("aria-hidden", "false");

  syncHeaderHeight();
  updateIntroAnimation();
  computeFooterClamp();
  clampToFooter();
}

// ✅ FIX MOBILE: fecha overlay no primeiro gesto (mesmo antes de haver scrollY>2)
let overlayDismissedByGesture = false;
function handleFirstGesture(){
  if (overlayDismissedByGesture) return;
  overlayDismissedByGesture = true;

  showHeaderNow();
  dismissOverlay();

  // ajuda em iOS que às vezes não mexe o scroll no 1º gesto
  if (window.scrollY < 2) window.scrollTo({ top: 2, behavior: "auto" });
}

window.addEventListener("wheel", handleFirstGesture, { passive: true });
document.addEventListener("touchstart", handleFirstGesture, { passive: true });
document.addEventListener("touchmove", handleFirstGesture, { passive: true });

if (globalBar && "ResizeObserver" in window) {
  const ro = new ResizeObserver(() => {
    syncHeaderHeight();
    computeFooterClamp();
    clampToFooter();
  });
  ro.observe(globalBar);
}

window.addEventListener("resize", () => {
  syncHeaderHeight();
  computeFooterClamp();
  clampToFooter();
});
window.addEventListener("orientationchange", () => {
  syncHeaderHeight();
  computeFooterClamp();
  clampToFooter();
});

// ====== PROGRESSO ======
function updateProgressUI(){
  progressText.textContent = ui[lang].progress(currentRequired);

  const done = Math.max(0, Math.min(REQUIRED_TOTAL, currentRequired - 1));
  const pct = (done / REQUIRED_TOTAL) * 100;

  progressBar.style.width = `${pct.toFixed(1)}%`;
  playerRouteBar.style.width = `${pct.toFixed(1)}%`;
}

// ====== AUDIO BAR ======
function setAudioBarPct(pct01){
  const pct = Math.max(0, Math.min(1, pct01)) * 100;
  playerAudioBar.style.width = `${pct.toFixed(2)}%`;
}
function resetAudioBar(){ setAudioBarPct(0); }

playerAudio.addEventListener("timeupdate", () => {
  const d = playerAudio.duration;
  if (!Number.isFinite(d) || d <= 0) return;
  setAudioBarPct(playerAudio.currentTime / d);
});
playerAudio.addEventListener("loadedmetadata", () => {
  const d = playerAudio.duration;
  if (!Number.isFinite(d) || d <= 0) resetAudioBar();
});
playerAudio.addEventListener("ended", () => {
  setAudioBarPct(1);
  listenedComplete.add(listenedKeyForRequired(currentRequired));
  saveListened();
  nextBtn.disabled = false;
});

// ====== ALTERNATIVO: 1 BOTÃO (SÓ QUANDO EXISTE) ======
function updateChoiceUI(){
  const alt = altChoice[currentRequired];
  if (!playerChoice || !choiceAltToggle) return;

  if (!alt) {
    playerChoice.hidden = true;
    currentVariant = "main";
    choiceAltToggle.setAttribute("aria-pressed", "false");
    return;
  }

  const altP = getById(alt.id);
  playerChoice.hidden = false;

  choiceAltToggle.textContent = ui[lang].altToggleLabel(
    altP?.label || "",
    altP?.title?.[lang] || ""
  );

  choiceAltToggle.setAttribute("aria-pressed", currentVariant === "alt" ? "true" : "false");
}

choiceAltToggle?.addEventListener("click", () => {
  if (!altChoice[currentRequired]) return;
  currentVariant = (currentVariant === "alt") ? "main" : "alt";
  updateChoiceUI();
  loadCurrentPoint();
});

// ====== PLAYER ======
function loadCurrentPoint(){
  const p = getPointForCurrent();
  if (!p) return;

  playerKicker.textContent = ui[lang].nowPlaying;
  playerTitle.textContent = p.title[lang];
  playerText.textContent = p.text[lang];

  updateChoiceUI();

  playerAudio.pause();
  playerAudio.currentTime = 0;
  resetAudioBar();

  playerAudio.src = p.audio[lang];
  playerAudio.load();

  prevBtn.disabled = currentRequired <= 1;
  playBtn.textContent = "▶";
  nextBtn.disabled = !listenedComplete.has(listenedKeyForRequired(currentRequired));
}

function togglePlay(){
  if (!playerAudio.src) return;
  if (playerAudio.paused) playerAudio.play().catch(() => {});
  else playerAudio.pause();
}

playerAudio.addEventListener("play", () => { playBtn.textContent = "❚❚"; });
playerAudio.addEventListener("pause", () => { playBtn.textContent = "▶"; });

function goToRequired(n){
  currentRequired = n;
  localStorage.setItem("currentRequired", String(currentRequired));

  resetVariantForPoint();

  updateProgressUI();
  loadCurrentPoint();
  computeFooterClamp();
  clampToFooter();
}

prevBtn.addEventListener("click", () => {
  if (currentRequired <= 1) return;
  goToRequired(currentRequired - 1);
});

playBtn.addEventListener("click", togglePlay);

nextBtn.addEventListener("click", () => {
  if (nextBtn.disabled) return;
  if (currentRequired < REQUIRED_TOTAL) goToRequired(currentRequired + 1);
});

// ====== IDIOMA ======
function applyStaticTexts() {
  document.documentElement.lang = lang;
  document.title = ui[lang].pageTitle;

  globalTitle.textContent = ui[lang].pageTitle;
  globalKicker.textContent = ui[lang].kicker;

  overlayTitle.textContent = ui[lang].overlayTitle;
  overlayText.textContent = ui[lang].overlayText;

  introTitle.innerHTML = ui[lang].introTitle.replace(/\n/g, "<br/>");
  introSub.textContent = ui[lang].introSub;

  footerCopy.textContent = ui[lang].footer;
  resetBtn.textContent = ui[lang].reset;

  updateProgressUI();
  loadCurrentPoint();
  computeFooterClamp();
  clampToFooter();
}

function setLang(newLang) {
  lang = newLang;
  langBtns.forEach(b =>
    b.setAttribute("aria-pressed", b.dataset.lang === newLang ? "true" : "false")
  );
  applyStaticTexts();
}
langBtns.forEach(btn => btn.addEventListener("click", () => setLang(btn.dataset.lang)));

// ====== OVERLAY ======
function initOverlay() {
  if (!scrollOverlay) return;
  scrollOverlay.style.display = "flex";
  scrollOverlay.classList.remove("is-hidden");
  scrollOverlay.setAttribute("aria-hidden", "false");
}

function dismissOverlay() {
  if (!scrollOverlay) return;
  if (scrollOverlay.classList.contains("is-hidden")) return;
  scrollOverlay.classList.add("is-hidden");
  scrollOverlay.setAttribute("aria-hidden", "true");
  setTimeout(() => { scrollOverlay.style.display = "none"; }, 260);
}

// ====== RECOMEÇAR ======
function resetProgress() {
  localStorage.removeItem("currentRequired");
  localStorage.removeItem("listenedComplete");

  currentRequired = 1;
  listenedComplete = new Set();
  currentVariant = "main";

  playerAudio.pause();
  playerAudio.currentTime = 0;
  resetAudioBar();

  updateProgressUI();
  loadCurrentPoint();

  window.scrollTo({ top: 0, behavior: "smooth" });

  headerShown = false;
  overlayDismissedByGesture = false;
  document.body.classList.add("header-hidden");
  globalBar?.setAttribute("aria-hidden", "true");
  syncHeaderHeight();

  initOverlay();
  setRouteVisible(false);

  maxScrollY = null;
  clampActive = false;
}

resetBtn.addEventListener("click", () => {
  const ok = confirm(ui[lang].resetConfirm);
  if (ok) resetProgress();
});

// ====== MAPA: estado final ======
function forceMapComplete(){
  for (const layer of introLayers) {
    if (!layer) continue;
    layer.style.opacity = "1";
    layer.style.transform = "translate3d(0, 0px, 0)";
  }
}

// ====== INTRO: animação scroll (com reverse) ======
function layerUpdate(layer, t, depthPx) {
  if (!layer) return;
  layer.style.opacity = String(t);
  const y = depthPx * (1 - t);
  layer.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
}

function updateIntroAnimation() {
  if (!intro) return;

  const headerH = getHeaderH();
  const rect = intro.getBoundingClientRect();
  const pastIntro = rect.bottom <= (headerH + 1);

  if (pastIntro) {
    forceMapComplete();
    setRouteVisible(true);
    return;
  }

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

  const showRoute = scrolled >= 0.93;
  setRouteVisible(showRoute);
}

// ====== BLOQUEIO ATÉ AO FOOTER ======
let maxScrollY = null;
let clampActive = false;
let isClamping = false;

function computeFooterClamp(){
  if (!routeFooter || !routeWrap) {
    maxScrollY = null;
    return;
  }

  const routeShown = routeWrap.classList.contains("is-shown");
  if (!routeShown) {
    maxScrollY = null;
    clampActive = false;
    return;
  }

  const footerRect = routeFooter.getBoundingClientRect();
  const footerBottomAbs = footerRect.bottom + window.scrollY;
  const viewportH = window.innerHeight;

  maxScrollY = Math.max(0, Math.floor(footerBottomAbs - viewportH));
  clampActive = window.scrollY >= (maxScrollY - 1);
}

function clampToFooter(){
  if (maxScrollY == null) return;

  if (window.scrollY > maxScrollY + 1) {
    if (isClamping) return;
    isClamping = true;
    window.scrollTo({ top: maxScrollY, behavior: "auto" });
    requestAnimationFrame(() => { isClamping = false; });
  }

  clampActive = window.scrollY >= (maxScrollY - 1);
}

window.addEventListener("wheel", (e) => {
  if (maxScrollY == null) return;
  if (!clampActive) return;
  if (e.deltaY > 0) e.preventDefault();
}, { passive: false });

let touchStartY = 0;
document.addEventListener("touchstart", (e) => {
  if (!e.touches || !e.touches[0]) return;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener("touchmove", (e) => {
  if (maxScrollY == null) return;

  if (window.scrollY >= maxScrollY - 1) {
    if (!e.touches || !e.touches[0]) return;
    const currentY = e.touches[0].clientY;
    const fingerGoingUp = currentY < touchStartY;
    if (fingerGoingUp) {
      clampActive = true;
      e.preventDefault();
      clampToFooter();
    }
  }
}, { passive: false });

// ====== SCROLL LOOP ======
let ticking = false;
let lastFrameTime = 0;
const FRAME_MS = 33;

function onScroll(){
  if (window.scrollY > 2) {
    showHeaderNow();
    dismissOverlay();
  }

  if (!ticking) {
    ticking = true;
    requestAnimationFrame((now) => {
      if (now - lastFrameTime >= FRAME_MS) {
        updateIntroAnimation();
        computeFooterClamp();
        clampToFooter();
        lastFrameTime = now;
      }
      ticking = false;
    });
  }
}
window.addEventListener("scroll", onScroll, { passive: true });

// ====== INIT ======
syncHeaderHeight();

applyStaticTexts();
updateProgressUI();
resetVariantForPoint();
loadCurrentPoint();

setRouteVisible(false);
initOverlay();
updateIntroAnimation();
computeFooterClamp();
clampToFooter();

requestAnimationFrame(() => {
  syncHeaderHeight();
  updateIntroAnimation();
  computeFooterClamp();
  clampToFooter();

  if (window.scrollY > 2) {
    showHeaderNow();
    dismissOverlay();
  }
});
