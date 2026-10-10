(() => {
  const $ = (id) => document.getElementById(id);
  const BEST_KEY = "ct-qcm-best";

  let deck = [];      // questions de la session (avec choix mélangés)
  let index = 0;
  let score = 0;
  let wrong = [];     // questions ratées

  // --- Stockage local (protégé : peut être indisponible en navigation privée) ---
  const load = (k) => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

  const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const show = (screen) => {
    ["home", "quiz", "result"].forEach((s) => $(s).classList.toggle("hidden", s !== screen));
    window.scrollTo(0, 0);
  };

  // Mélange les réponses et recalcule l'index de la bonne réponse
  const prepare = (q) => {
    const order = shuffle(q.choices.map((_, i) => i));
    return { ...q, choices: order.map((i) => q.choices[i]), answer: order.indexOf(q.answer) };
  };

  // --- Accueil ---
  function initHome() {
    const themes = [...new Set(QUESTIONS.map((q) => q.theme))];
    $("theme").innerHTML =
      `<option value="">Tous les thèmes (${QUESTIONS.length})</option>` +
      themes.map((t) => {
        const n = QUESTIONS.filter((q) => q.theme === t).length;
        return `<option value="${t}">${t} (${n})</option>`;
      }).join("");
    const best = load(BEST_KEY);
    $("best").textContent = best ? `Meilleur score : ${best.pct} % (${best.date})` : "";
  }

  function start(questions) {
    deck = shuffle(questions).map(prepare);
    index = 0; score = 0; wrong = [];
    show("quiz");
    render();
  }

  // --- Quiz ---
  function render() {
    const q = deck[index];
    $("progress").textContent = `Question ${index + 1} / ${deck.length}`;
    $("score").textContent = `Score : ${score}`;
    $("bar-fill").style.width = `${(index / deck.length) * 100}%`;
    $("q-theme").textContent = q.theme;
    $("q-text").textContent = q.question;
    $("feedback").className = "hidden";
    $("next").classList.add("hidden");

    const box = $("choices");
    box.innerHTML = "";
    q.choices.forEach((c, i) => {
      const b = document.createElement("button");
      b.className = "choice";
      b.textContent = `${"ABCD"[i]}. ${c}`;
      b.onclick = () => answer(i);
      box.appendChild(b);
    });
  }

  function answer(i) {
    const q = deck[index];
    const ok = i === q.answer;
    if (ok) score++; else wrong.push(q);

    [...$("choices").children].forEach((b, j) => {
      b.disabled = true;
      if (j === q.answer) b.classList.add("correct");
      else if (j === i) b.classList.add("wrong");
    });

    const fb = $("feedback");
    fb.className = ok ? "ok" : "ko";
    fb.innerHTML = `<strong>${ok ? "✓ Bonne réponse" : "✗ Mauvaise réponse"}</strong><br>`;
    fb.append(q.explanation);
    $("score").textContent = `Score : ${score}`;
    $("next").textContent = index + 1 < deck.length ? "Suivant" : "Voir le résultat";
    $("next").classList.remove("hidden");
  }

  function next() {
    index++;
    if (index < deck.length) render(); else finish();
  }

  // --- Résultats ---
  function finish() {
    const pct = Math.round((score / deck.length) * 100);
    $("final").textContent = `${score} / ${deck.length} (${pct} %)`;

    const best = load(BEST_KEY);
    if (deck.length >= 10 && (!best || pct > best.pct)) {
      save(BEST_KEY, { pct, date: new Date().toLocaleDateString("fr-FR") });
    }

    const review = $("review");
    review.innerHTML = wrong.length ? "<h3>À revoir</h3>" : "<p>Aucune erreur, bravo !</p>";
    wrong.forEach((q) => {
      const d = document.createElement("div");
      d.className = "review-item";
      const p1 = document.createElement("p"); p1.textContent = q.question;
      const p2 = document.createElement("p"); p2.className = "ans"; p2.textContent = "→ " + q.choices[q.answer];
      const p3 = document.createElement("p"); p3.className = "muted"; p3.textContent = q.explanation;
      d.append(p1, p2, p3);
      review.appendChild(d);
    });
    $("retry-wrong").classList.toggle("hidden", wrong.length === 0);
    show("result");
  }

  // --- Événements ---
  $("start").onclick = () => {
    const theme = $("theme").value;
    const count = Number($("count").value);
    let pool = theme ? QUESTIONS.filter((q) => q.theme === theme) : QUESTIONS;
    pool = shuffle(pool);
    start(count ? pool.slice(0, count) : pool);
  };
  $("next").onclick = next;
  $("quit").onclick = () => { initHome(); show("home"); };
  $("home-btn").onclick = () => { initHome(); show("home"); };
  $("retry-wrong").onclick = () => {
    const ids = new Set(wrong.map((q) => q.id));
    start(QUESTIONS.filter((q) => ids.has(q.id)));
  };

  initHome();
})();
