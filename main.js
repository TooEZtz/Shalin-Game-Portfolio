/* ═══════════════════════════════════════════════════════════
   SHALIN'S GAME PORTFOLIO
   One page. Hash-routed "pages". No dependencies.

   ── HOW TO EDIT ──
   All the words live in STORIES below.
     dek     one sentence under the headline
     facts   the sidebar box  [label, value]
     pull    the pull quote   (delete the line to drop it)
     body    short paragraphs; "<h3>Heading</h3>" starts a section;
             an array of strings becomes a bullet list
     media   the gallery. Every item gets the same stage, in order.
             { type:"video"|"img", src, cap, poster }
   ═══════════════════════════════════════════════════════════ */

const STORIES = {

  /* ───────────────────────── UNREAL ───────────────────────── */
  "environments": {
    page:   "Page 1",
    kicker: "Unreal Engine 5",
    hed:    "Environment Design",
    dek:    "A shrine under a hill, where monks train and meditate. Mostly, I wanted to get the fog right.",
    byline: [["Engine","Unreal Engine 5"],["Made for","Fog and mood"]],
    facts: [
      ["Engine", "Unreal Engine 5"],
      ["Fog",    "Volumetric + 2D fog cards"],
      ["Idea",   "A shrine under a hill"],
      ["Mood",   "Peaceful, calm"]
    ],
    pull: "I was imagining a shrine under a hill, where monks train and meditate.",
    body: [
      "I wanted to make a scene where the fog covering the forest actually looked right. That was the whole starting point. I used volumetric fog for the depth through the trees, and layered 2D fog cards on top of it to get the rest of the way there.",
      "The place I had in my head was a shrine under a hill, where monks train and meditate. So I built for that. Peaceful and calm, nothing dramatic happening in the frame."
    ],
    media: [
      { type:"video", src:"Unreal/EnvironmentDEsign.mp4", poster:"Unreal/Forest.0001.png", cap:"<b>Environment design</b>" },
      { type:"video", src:"Unreal/Scenery1.mp4",          poster:"Unreal/Forest.0001.png", cap:"<b>Scenery I</b>" },
      { type:"video", src:"Unreal/Scenery2.mp4",          poster:"Unreal/Forest.0001.png", cap:"<b>Scenery II</b>" },
      { type:"img",   src:"Unreal/Forest.0001.png", cap:"<b>Forest</b>" }
    ]
  },

  /* ───────────────────── STORM (UNITY) ───────────────────── */
  "storm": {
    page:   "Page 2",
    kicker: "Unity · C# · 2026",
    hed:    "STORM",
    stand:  "Simulated Tornado Module",
    dek:    "An interactive tornado simulation, built to make people aware of what to do, and what not to do, when a tornado hits.",
    byline: [["Role","Developer"],["Engine","Unity · C#"],["Research lead","Dr. Gayathri Sadanala"],["Year","2026"]],
    facts: [
      ["Project",  "STORM"],
      ["Engine",   "Unity"],
      ["Language", "C#"],
      ["Type",     "Faculty-led research"],
      ["Lead",     "Dr. Gayathri Sadanala"],
      ["Next",     "Full VR simulation"]
    ],
    pull: "Right now it runs on a screen. Next it goes in a headset.",
    body: [
      "STORM is an interactive, educational tornado simulation built in Unity, as part of faculty-led research under Dr. Gayathri Sadanala. The point of it is awareness: what you should do when a tornado hits, and what you shouldn't.",
      "The teaching happens inside the simulation rather than around it. The data visualisations and the quizzes on tornado formation and safety all run in engine.",
      "<h3>Built for it</h3>",
      ["Real-time storm environment: physics systems, particle effects, dynamic weather, environmental interaction.",
       "Character animation, level design, and custom visual effects authored in Shader Graph.",
       "In-engine data visualisation of tornado formation.",
       "Interactive quizzes on formation and safety."],
      "<h3>Next edition</h3>",
      "The module is being carried over to VR, so the whole simulation gets experienced from inside a headset."
    ],
    media: [
      { type:"img", src:"Unity/d.png" },
      { type:"img", src:"Unity/Screenshot 2025-12-11 141814.png" },
      { type:"img", src:"Unity/c.png" },
      { type:"img", src:"Unity/Screenshot 2025-04-27 223744.png" },
      { type:"img", src:"Unity/Screenshot 2025-04-27 223806.png" },
      { type:"img", src:"Unity/Screenshot 2025-04-27 223329.png" },
      { type:"img", src:"Unity/Screenshot 2025-04-27 223531.png" }
    ]
  },

  /* ─────────────────────── JAVASCRIPT ─────────────────────── */
  "vortex-combat": {
    page:   "Page 3",
    kicker: "Arcade Desk · JavaScript, HTML &amp; CSS",
    hed:    "Vortex Combat",
    stand:  "2D Fighting Game",
    dek:    "Pick a fighter, pick an arena, settle it head-to-head. An arcade fighter running on nothing but vanilla web technologies.",
    byline: [["Team","Shalin &amp; Ashim"],["Stack","HTML · CSS · JavaScript"],["Built in","2 weeks"],["Mode","Local versus"]],
    facts: [
      ["Stack",     "HTML · CSS · JavaScript"],
      ["Frameworks","None"],
      ["Fighters",  "2"],
      ["Stages",    "4"],
      ["Sprites",   "30+ per fighter"],
      ["Team",      "Shalin &amp; Ashim"],
      ["Build time","2 weeks"]
    ],
    pull: "No frameworks, no libraries. Just how far vanilla JavaScript goes.",
    body: [
      "Best-of-one rounds. Every fighter carries a health bar and a stamina meter: attacks drain your opponent while you manage your own, and a missed swing leaves you wide open. Fighters move, jump, guard, and throw quick or strong attacks.",
      "<h3>The roster</h3>",
      ["<b>Curse-Or</b>: nimble martial artist. Fast strikes, aerial attacks, and <i>Shadow Shift</i>, a teleport in behind the opponent.",
       "<b>Reign</b>: heavy bruiser. Powerful punches and kicks.",
       "Over 30 sprites each (idle, move, jump, attack, block, hit) with smooth transitions between states."],
      "<h3>The stages</h3>",
      ["<b>Temple</b>: a mountain temple, cherry blossom on the wind, stone lanterns lighting the floor.",
       "<b>Palace</b>: a haunted courtyard under a full moon, spirits in the windows.",
       "<b>The Pit</b>: a Chinatown back-alley in flickering neon.",
       "<b>Dead Pool</b>: a stone bridge over a misty chasm, skeletal hands reaching up."],
      "<h3>In game</h3>",
      ["Dynamic camera that zooms and pans to keep the fight in frame.",
       "Particle effects and screen shake on impact.",
       "Interactive stages with hazards and dynamic lighting.",
       "Audio synced to gameplay events."],
      "<h3>The hard parts</h3>",
      "Getting the fights to feel right without implementing physics. Keeping audio in sync with what was happening on screen. And making the UI dramatic enough to hold attention. Object-oriented structure, async scripting and hardware-accelerated CSS covered the rest.",
      "<h3>Controls</h3>",
      ["<b>Player 1</b>: WASD to move, F punch, G kick.",
       "<b>Player 2</b>: Arrow keys to move, J punch, K kick.",
       "Gamepad supported."],
      "<h3>Credits</h3>",
      "Art, music and sound effects come from creators who made their work freely available. We claim ownership of none of it, and we credit and link the original sources wherever possible. Thank you.",
      "<p class=\"note\">Still in active development: more fighters, stages and modes planned.</p>"
    ],
    media: [
      { type:"video", src:"Javascript/VortexCombat/Screen Recording 2025-10-14 153511.mp4",
        poster:"Javascript/VortexCombat/Screenshot 2025-03-15 204122.png", cap:"<b>Gameplay</b>" },
      { type:"img", src:"Javascript/VortexCombat/Screenshot 2025-03-15 204122.png", cap:"<b>Title screen</b>" }
    ]
  },

  /* ───────────────────────── METAHUMAN ───────────────────────── */
  "metahuman": {
    page:   "Page 4",
    kicker: "Portrait Desk · Unreal · MetaHuman",
    hed:    "Recreating Myself in MetaHuman",
    dek:    "A fun project. I tried imitating myself from a photo, aligned onto a MetaHuman face rig and animated with Live Link.",
    byline: [["Why","For fun"],["Engine","Unreal Engine 5"],["Toolset","MetaHuman · Live Link"]],
    facts: [
      ["Engine",    "Unreal Engine 5"],
      ["Toolset",   "MetaHuman"],
      ["Animation", "Live Link"],
      ["Source",    "One photo"],
      ["Subject",   "Me"]
    ],
    body: [
      "A fun project: I tried to imitate myself. I started from a photo, matched it onto a MetaHuman face rig, and kept nudging the alignment until it looked like me.",
      "Facial animation runs through <b>Live Link</b>, so my face drives his in real time."
    ],
    media: [
      { type:"video", src:"Unreal/RecreatingMEusingMetahuman.mp4", cap:"<b>MetaHuman</b>" },
      { type:"img",   src:"AboutME/Me2.JPEG", cap:"<b>Reference</b>: the original." }
    ]
  },

  /* ────────── ABOUT + TOOLBOX + LETTERS (one section) ────────── */
  "about": {
    page:   "Page 5",
    kicker: "About · Toolbox · Contact",
    hed:    "Shalin Bhattarai",
    stand:  "From Nepal · Based in Kirksville, Missouri",
    dek:    "Jack of all trades. Hire me for one job and I can probably do ten.",
    byline: [["From","Nepal"],["Study","Truman State University"],["Major","Computer Science"],["Status","Seeking opportunities"]],
    facts: [
      ["From",      "Nepal"],
      ["Based",     "Kirksville, Missouri"],
      ["Engines",   "Unreal Engine 5, Unity"],
      ["Code",      "C#, C++, JavaScript"],
      ["Web",       "React, Tailwind, PHP"],
      ["Also",      "Music, art, video editing"],
      ["Favourite food", "Momo"]
    ],
    pull: "Jack of all trades, and that is the point.",
    body: [
      "I'm from Nepal, and I like doing all sorts of things. That's the short version of me: I don't stay in one lane, and I pick new things up fast. Hire me for one role and there's a good chance I can cover ten different things around your company.",

      "<h3>Things I do</h3>",
      ["Drawing.",
       "Making games.",
       "Making music, and listening to a lot of it.",
       "Playing guitar.",
       "Video editing.",
       "Playing video games."],

      "<p>Favourite food: <b>momo</b>. Not negotiable.</p>",

      "<h3>The toolbox</h3>",
      ["<b>Unreal Engine 5</b>: Lumen, volumetric fog, foliage, MetaHuman, Niagara, Blueprints, sequence rendering.",
       "<b>Unity</b>: C# gameplay systems, physics, particles, Shader Graph, level design, animation.",
       "<b>Code</b>: C#, C++, JavaScript.",
       "<b>Front end</b>: HTML, CSS, Tailwind, React, PHP.",
       "<b>Data</b>: Python, Java, R.",
       "<b>Next</b>: VR, carrying STORM into a headset."],

      "<h3>Outside the engines</h3>",
      "Front-end work is the other half of what I do. Side projects include a JARVIS-style AI assistant interface in React and a guitar-teaching app, which is really just two hobbies colliding.",

      "<h3>Get in touch</h3>",
      "I'm open to gameplay, environment, tools and front-end work. Tell me what you're making and what's missing, and I'll tell you honestly whether I'm the right person for it.",
      "<p><a class=\"mail\" href=\"Resume/ShalinGameDev.pdf\" download>↓ Download my résumé (PDF)</a></p>",
      "<ul class=\"links\">" +
        "<li><a href=\"mailto:shalinneedsjob@gmail.com\">shalinneedsjob@gmail.com<span>Email</span></a></li>" +
        "<li><a href=\"https://github.com/tooEZtz\" target=\"_blank\" rel=\"noopener\">github.com/tooEZtz<span>GitHub</span></a></li>" +
        "<li><a href=\"https://www.linkedin.com/in/TooEZtzy\" target=\"_blank\" rel=\"noopener\">linkedin.com/in/TooEZtzy<span>LinkedIn</span></a></li>" +
      "</ul>"
    ],
    media: [
      { type:"video", src:"Unreal/RecreatingMEusingMetahuman.mp4", cap:"<b>The digital one</b>" },
      { type:"img",   src:"AboutME/Me1.jpg",  cap:"<b>Shalin Bhattarai</b>" },
      { type:"img",   src:"AboutME/Me2.JPEG", cap:"<b>Off the clock</b>" }
    ]
  }
};

/* Order for the number shortcuts and the "next story" link */
const ORDER = ["environments","storm","vortex-combat","metahuman","about"];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ═══════════════════════════ RENDER ═══════════════════════════ */

const reader     = document.getElementById("reader");
const readerBody = document.getElementById("readerBody");
const readerPage = document.getElementById("readerPage");

function slideHTML(m, i){
  const media = m.type === "video"
    ? `<video src="${m.src}" ${m.poster ? `poster="${m.poster}"` : ""} controls muted playsinline preload="none"></video>`
    : `<img src="${m.src}" alt="" loading="lazy" decoding="async">`;
  return `<figure class="gslide${i === 0 ? " is-on" : ""}" data-i="${i}">${media}</figure>`;
}

function thumbHTML(m, i){
  const inner = m.type === "video"
    ? (m.poster
        ? `<img src="${m.poster}" alt="" loading="lazy">`
        : `<video src="${m.src}" preload="metadata" muted></video>`) + `<span class="thumb__tag">▶</span>`
    : `<img src="${m.src}" alt="" loading="lazy">`;
  return `<button class="thumb${i === 0 ? " is-on" : ""}" type="button" data-go="${i}"
            aria-label="Show item ${i + 1}">${inner}</button>`;
}

function galleryHTML(media){
  const hasVideo = media.some(m => m.type === "video");
  return `
    <section class="gallery" data-gallery>
      <div class="gallery__stage">
        ${media.map(slideHTML).join("")}
        <button class="gbtn gnav gnav--prev" type="button" data-prev aria-label="Previous">◀</button>
        <button class="gbtn gnav gnav--next" type="button" data-next aria-label="Next">▶</button>
        <button class="gbtn gfull" type="button" data-full aria-label="Full screen" title="Full screen">⛶</button>
        <div class="gallery__progress" data-progress></div>
      </div>
      <div class="gallery__bar">
        <span class="gallery__count" data-count>01 / ${String(media.length).padStart(2,"0")}</span>
        <p class="gallery__cap" data-cap>${media[0].cap || ""}</p>
      </div>
      <div class="gallery__thumbs">${media.map(thumbHTML).join("")}</div>
      ${hasVideo ? `<p class="sound-note">🔇 Video plays muted. Use the controls to turn the sound on.</p>` : ""}
    </section>`;
}

function bodyHTML(blocks){
  return blocks.map(b => {
    if (Array.isArray(b)) return `<ul>${b.map(li => `<li>${li}</li>`).join("")}</ul>`;
    return b.trim().startsWith("<") ? b : `<p>${b}</p>`;
  }).join("");
}

function articleHTML(id){
  const s = STORIES[id];
  const nextId = ORDER[(ORDER.indexOf(id) + 1) % ORDER.length];

  return `
    <p class="art-kicker">${s.kicker}</p>
    <h1 class="art-hed">${s.hed}</h1>
    ${s.stand ? `<p class="art-stand">${s.stand}</p>` : ""}
    <p class="art-dek">${s.dek}</p>

    <div class="art-byline">
      ${s.byline.map(([k, v]) => `<span>${k}: <b>${v}</b></span>`).join("")}
    </div>

    ${s.media && s.media.length ? galleryHTML(s.media) : ""}

    <div class="art-lede">
      <div class="art-main">${bodyHTML(s.body)}</div>
      <aside class="art-side">
        ${s.facts && s.facts.length ? `
          <div class="facts">
            <h4>The Facts</h4>
            <dl>${s.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
          </div>` : ""}
        ${s.pull ? `<blockquote class="pull">“${s.pull}”</blockquote>` : ""}
      </aside>
    </div>

    <div class="art-end">
      <span>End</span>
      <span>Next: <a href="#/${nextId}">${STORIES[nextId].hed}</a> →</span>
      <span><a href="#">Front page</a></span>
    </div>
  `;
}

/* ═══════════════════════ GALLERY ENGINE ═══════════════════════
   Every item gets the same stage, shown for the same beat.
   Images hold for 5s. Videos play (muted) and hand over when they
   end, or after 15s, unless the viewer takes the controls, in
   which case rotation stops until they move on themselves.
   ═════════════════════════════════════════════════════════════ */

const IMAGE_DWELL = 5000;
const VIDEO_CAP   = 15000;

let gallery = null;

function buildGallery(root, media){
  const el = root.querySelector("[data-gallery]");
  if (!el) return null;

  const slides   = [...el.querySelectorAll(".gslide")];
  const thumbs   = [...el.querySelectorAll(".thumb")];
  const progress = el.querySelector("[data-progress]");
  const count    = el.querySelector("[data-count]");
  const cap      = el.querySelector("[data-cap]");

  let index = 0, timer = null, held = false;

  const clear = () => { clearTimeout(timer); timer = null; };

  function resetProgress(ms){
    progress.classList.remove("is-running");
    progress.style.transition = "none";
    progress.style.width = "0";
    void progress.offsetWidth;                       // reflow, so the next line animates
    if (!ms || held || reduceMotion) return;
    progress.style.transition = `width ${ms}ms linear`;
    progress.classList.add("is-running");
  }

  function schedule(ms){
    clear();
    resetProgress(ms);
    if (held || reduceMotion) return;
    timer = setTimeout(() => go(index + 1), ms);
  }

  function go(next){
    clear();
    index = (next + slides.length) % slides.length;

    slides.forEach((s, i) => {
      s.classList.toggle("is-on", i === index);
      const v = s.querySelector("video");
      if (v && i !== index){ v.pause(); }
    });
    thumbs.forEach((t, i) => t.classList.toggle("is-on", i === index));

    count.textContent = `${String(index + 1).padStart(2,"0")} / ${String(slides.length).padStart(2,"0")}`;
    cap.innerHTML = media[index].cap || "";

    const v = slides[index].querySelector("video");
    if (v){
      if (v.preload === "none") v.preload = "auto";
      v.currentTime = 0;
      if (!reduceMotion) v.play().catch(() => {});
      schedule(VIDEO_CAP);
    } else {
      schedule(IMAGE_DWELL);
    }
  }

  /* the viewer taking control stops the rotation */
  const hold = () => { held = true; clear(); resetProgress(0); };
  el.querySelectorAll("video").forEach(v => {
    ["volumechange","seeking","pause","play"].forEach(evt =>
      v.addEventListener(evt, e => { if (e.isTrusted) hold(); })
    );
    v.addEventListener("ended", () => { if (!held) go(index + 1); });
  });

  el.querySelector("[data-prev]").addEventListener("click", () => { hold(); go(index - 1); });
  el.querySelector("[data-next]").addEventListener("click", () => { hold(); go(index + 1); });
  thumbs.forEach(t => t.addEventListener("click", () => { hold(); go(+t.dataset.go); }));

  /* full screen, works for stills as well as video */
  el.querySelector("[data-full]").addEventListener("click", () => {
    const slide = slides[index];
    if (document.fullscreenElement){ document.exitFullscreen(); return; }
    const target = slide.querySelector("video") || slide;
    (target.requestFullscreen || target.webkitRequestFullscreen ||
     target.webkitEnterFullscreen || (() => {})).call(target);
  });

  /* hovering pauses the beat, leaving resumes it */
  el.addEventListener("mouseenter", () => { if (!held) { clear(); resetProgress(0); } });
  el.addEventListener("mouseleave", () => {
    if (held) return;
    const v = slides[index].querySelector("video");
    schedule(v ? VIDEO_CAP : IMAGE_DWELL);
  });

  go(0);

  return {
    destroy(){
      clear();
      el.querySelectorAll("video").forEach(v => v.pause());
    },
    prev(){ hold(); go(index - 1); },
    next(){ hold(); go(index + 1); }
  };
}

/* ═════════════════ FRONT-PAGE TILE VIDEOS ═════════════════
   Muted, looping, and only downloaded once they scroll into view.
   ═════════════════════════════════════════════════════════ */

const tileWatcher = new IntersectionObserver(entries => {
  entries.forEach(({ target: v, isIntersecting }) => {
    if (isIntersecting){
      if (v.preload === "none") v.preload = "auto";
      if (!reduceMotion) v.play().catch(() => {});
    } else {
      v.pause();
    }
  });
}, { threshold: 0.2 });

function watchTiles(){
  document.querySelectorAll(".bento video[data-autoplay]").forEach(v => tileWatcher.observe(v));
}
function unwatchTiles(){
  document.querySelectorAll(".bento video[data-autoplay]").forEach(v => {
    tileWatcher.unobserve(v);
    v.pause();
  });
}

/* ═══════════════════════════ ROUTER ═══════════════════════════ */

let scrollMemory = 0;

function openStory(id){
  if (reader.hidden) scrollMemory = window.scrollY;

  if (gallery){ gallery.destroy(); gallery = null; }
  unwatchTiles();

  readerBody.innerHTML = articleHTML(id);
  readerPage.textContent = STORIES[id].page;
  reader.hidden = false;
  reader.scrollTop = 0;
  document.body.style.overflow = "hidden";
  document.title = `${STORIES[id].hed} · Shalin Bhattarai`;

  if (STORIES[id].media && STORIES[id].media.length){
    gallery = buildGallery(readerBody, STORIES[id].media);
  }
  document.getElementById("backLink").focus({ preventScroll: true });
}

function closeStory(){
  if (reader.hidden) return;
  if (gallery){ gallery.destroy(); gallery = null; }
  reader.hidden = true;
  readerBody.innerHTML = "";
  document.body.style.overflow = "";
  document.title = "Shalin’s Game Portfolio";
  window.scrollTo(0, scrollMemory);
  watchTiles();
}

function route(){
  const id = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
  if (STORIES[id]) openStory(id);
  else closeStory();
}

window.addEventListener("hashchange", route);

/* ═══════════════════════ SMALL COMFORTS ═══════════════════════ */

document.addEventListener("keydown", e => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const typing = /^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName);
  if (typing) return;

  if (!reader.hidden){
    if (e.key === "Escape"){ location.hash = ""; return; }
    if (gallery && e.key === "ArrowLeft"){  gallery.prev(); return; }
    if (gallery && e.key === "ArrowRight"){ gallery.next(); return; }
    return;
  }

  const n = parseInt(e.key, 10);
  if (n >= 1 && n <= ORDER.length) location.hash = "#/" + ORDER[n - 1];
});

/* Real date, set like a newspaper would */
document.getElementById("dateline").textContent =
  new Date().toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });

watchTiles();
route();
