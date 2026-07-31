const decks = {
  happiness: {
    title: "幸福",
    words: [
      { ru: "воскресенье",   zh: "礼拜天",   py: "lǐ bài tiān" },
      { ru: "свободное время",  zh: "空儿",   py: "kòngr" },
      { ru: "мать (официальное)",     zh: "母亲",   py: "mǔ qīn" },
      { ru: "однако / всего лишь",     zh: "不过/只不过",   py: "bù guò / zhǐ bù guò" },
      { ru: "навсегда",     zh: "永远",   py: "yǒng yuǎn" },
      { ru: "направление",     zh: "方向",   py: "fāng xiàng" },
      { ru: "выдающийся (человек)",     zh: "优秀",   py: "yōu xiù" },
      { ru: "магистр",     zh: "硕士",   py: "shuò shì" },
      { ru: "переводить, переводчик",     zh: "翻译",   py: "fān yì" },
      { ru: "действительно, и вправду",     zh: "确实",   py: "què shí" },
      { ru: "возбуждённый, взволнованный",     zh: "兴奋",   py: "xīng fèn" },
      { ru: "тянуть, тащить",     zh: "拉",   py: "lā" },
      { ru: "совет, предложение",     zh: "建议",   py: "jiàn yì" },
      { ru: "профессия",     zh: "职业",   py: "zhí yè" },
      { ru: "ключевой",     zh: "关键",   py: "guān jiàn" },
      { ru: "будущее",     zh: "将来",   py: "jiāng lái" },
      { ru: "развиваться",     zh: "发展",   py: "fā zhǎn" },
      { ru: "лежать",     zh: "躺",   py: "tǎng" },
      { ru: "сонный",     zh: "困",   py: "kùn" },
      { ru: "условие",     zh: "条件",   py: "tiáo jiàn" },
      { ru: "богатый",     zh: "富",   py: "fù" },
      { ru: "бедный",     zh: "穷（贫穷/穷苦）",   py: "qióng （pín qióng / qióng kǔ）" },
      { ru: "из-за, вследствие",     zh: "由于",   py: "yóu yú" },
      { ru: "например",     zh: "比如",   py: "bǐ rú" },
      { ru: "ластик",     zh: "橡皮",   py: "xiàng pí" },
      { ru: "сладость",     zh: "糖",   py: "táng" },
      { ru: "низкий",     zh: "低",   py: "dī" }
    ]
  },
  time: {
    title: "时间",
    words: [
      { ru: "обычно, постоянно",   zh: "平时",   py: "píng shí" },
      { ru: "свободное время",  zh: "空儿",   py: "kòngr" },
      { ru: "своевременно",     zh: "及时",   py: "jí shí" },
      { ru: "вовремя в установленное время",     zh: "准时",   py: "zhǔn shí" },
      { ru: "вовремя в срок",     zh: "按时",   py: "àn shí" },
      { ru: "одновременно",     zh: "同时",   py: "tóng shí" },
      { ru: "временно",     zh: "暂时",   py: "zàn shí" },
      { ru: "тогда, в то время",     zh: "当时",   py: "dāng shí" }
    ]
  },
  feelings: {
    title: "感情",
    words: [
      { ru: "производить впечатление",   zh: "留下 印象",   py: "liú xià yìn xiàng" },
      { ru: "глубокий характер",  zh: "深 性格",   py: "shēn xìng gé" },
      { ru: "счастливый",     zh: "幸福",   py: "xìng fú" },
      { ru: "быть тронутым, расстрогаться",     zh: "感动",   py: "gǎn dòng" },
      { ru: "нервнячающий",     zh: "紧张",   py: "jǐn zhāng" },
      { ru: "чувство, душевное состояние",     zh: "感情",   py: "gǎn qíng" },
      { ru: "выдающийся (человек)",     zh: "优秀",   py: "yōu xiù" },
      { ru: "ощущение, чувство",     zh: "感觉",   py: "gǎn jué" },
      { ru: "дух, психика",     zh: "精神",   py: "jīng shén" },
      { ru: "беспоконый",     zh: "烦恼",   py: "fán nǎo" },
      { ru: "возбуждённый, взволнованный",     zh: "兴奋",   py: "xīng fèn" },
      { ru: "радостный",     zh: "愉快",   py: "yú kuài" },
      { ru: "терпение",     zh: "耐心",   py: "nài xīn" },
      { ru: "смелый, отважный",     zh: "勇敢",   py: "yǒng gǎn" },
      { ru: "серьёзный, добросовестный",     zh: "认真",   py: "rèn zhēn" },
      { ru: "сильный",     zh: "强",   py: "qiáng" },
      { ru: "уродливый",     zh: "丑",   py: "chǒu" },
      { ru: "горевать",     zh: "伤心",   py: "shāng xīn" },
      { ru: "сонный",     zh: "困",   py: "kùn" },
      { ru: "богатый",     zh: "富",   py: "fù" },
      { ru: "бедный",     zh: "穷（贫穷/穷苦）",   py: "qióng （pín qióng / qióng kǔ）" }
    ]
  }
};

// Сколько раз ещё покажется карточка после соответствующего ответа.
// Можно спокойно менять эти два числа под себя.
const HINT_REPS = 3;    // "иероглиф подсказал"
const FORGOT_REPS = 6;  // "не помню"

const STORAGE_KEY = "hsk4_progress_v1";

let progress = loadProgress();

let currentDeck = null; // ключ текущей колоды, например "greetings"
let queue = [];         // очередь id карточек на показ в этой сессии
let stage = 0;

const cardEl = document.getElementById("card");
const wordRuEl = document.getElementById("word-ru");
const wordZhEl = document.getElementById("word-zh");
const wordPyEl = document.getElementById("word-py");
const deckCompleteEl = document.getElementById("deck-complete");
const answerButtonsEl = document.getElementById("answer-buttons");
const progressTextEl = document.getElementById("progress-text");
const progressBarFillEl = document.getElementById("progress-bar-fill");

// ---------- Хранение прогресса ----------

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function wordId(deckKey, idx) {
  return deckKey + ":" + idx;
}

function deckStats(deckKey) {
  const total = decks[deckKey].words.length;
  let mastered = 0;
  for (let i = 0; i < total; i++) {
    const rec = progress[wordId(deckKey, i)];
    if (rec && rec.mastered) mastered++;
  }
  return { mastered, total };
}

// ---------- Работа с очередью карточек ----------

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function buildQueue(deckKey) {
  const ids = [];
  for (let i = 0; i < decks[deckKey].words.length; i++) {
    const id = wordId(deckKey, i);
    const rec = progress[id];
    if (rec && rec.mastered) continue; // уже выучено — не показываем
    ids.push(id);
  }
  shuffleArray(ids);
  return ids;
}

function getWordById(id) {
  const sep = id.indexOf(":");
  const deckKey = id.slice(0, sep);
  const idx = parseInt(id.slice(sep + 1), 10);
  return decks[deckKey].words[idx];
}

// ---------- Рендер карточки ----------

function render() {
  const id = queue[0];
  const word = getWordById(id);

  wordRuEl.textContent = word.ru;
  wordZhEl.textContent = word.zh;
  wordPyEl.textContent = word.py;

  document.querySelectorAll(".face").forEach(f => f.classList.remove("active"));

  if (stage === 0) {
    document.querySelector(".face-ru").classList.add("active");
  } else if (stage === 1) {
    document.querySelector(".face-zh").classList.add("active");
  } else {
    document.querySelector(".face-py").classList.add("active");
  }
}

function renderInstant() {
  // Убираем анимацию на время смены карточки
  document.querySelectorAll(".face").forEach(f => f.style.transition = "none");
  render();
  requestAnimationFrame(() => {
    document.querySelectorAll(".face").forEach(f => f.style.transition = "");
  });
}

cardEl.addEventListener("click", function() {
  if (queue.length === 0) return;
  stage = (stage + 1) % 3;
  render();
});

// ---------- Отображение прогресса ----------

function updateProgressDisplay() {
  const { mastered, total } = deckStats(currentDeck);
  progressTextEl.textContent = "Выучено " + mastered + " / " + total;
  const pct = total === 0 ? 0 : Math.round((mastered / total) * 100);
  progressBarFillEl.style.width = pct + "%";
}

// ---------- Обработка ответа на карточку ----------
//
// Логика повторов:
// - "Знаю"              -> карточка сразу помечается выученной, больше не появится.
// - "Иероглиф подсказал" -> при первом таком ответе задаётся счётчик HINT_REPS;
//                           при каждом следующем показе (любой ответ, кроме "не помню")
//                           счётчик уменьшается на 1, пока не дойдёт до 0 (тогда — выучено).
// - "Не помню"           -> счётчик всегда сбрасывается на FORGOT_REPS (это больше, чем
//                           HINT_REPS), то есть карточка гарантированно вернётся ещё
//                           много раз, если только не нажать "Знаю" раньше.

function answerCard(type) {
  if (queue.length === 0) return;

  const id = queue.shift();
  const rec = progress[id] || {};

  if (type === "know") {
    progress[id] = { mastered: true };
  } else if (type === "hint") {
    if (rec.remaining && rec.remaining > 0) {
      const left = rec.remaining - 1;
      progress[id] = left <= 0 ? { mastered: true } : { remaining: left };
    } else {
      progress[id] = { remaining: HINT_REPS };
    }
  } else if (type === "dontknow") {
    progress[id] = { remaining: FORGOT_REPS };
  }

  saveProgress();

  if (!progress[id].mastered) {
    // Возвращаем карточку в очередь не сразу следующей, а через несколько других
    const insertPos = Math.min(queue.length, 3 + Math.floor(Math.random() * 4));
    queue.splice(insertPos, 0, id);
  }

  stage = 0;
  updateProgressDisplay();

  if (queue.length === 0) {
    showDeckComplete();
  } else {
    renderInstant();
  }
}

document.getElementById("knowBtn").addEventListener("click", () => answerCard("know"));
document.getElementById("hintBtn").addEventListener("click", () => answerCard("hint"));
document.getElementById("dontKnowBtn").addEventListener("click", () => answerCard("dontknow"));

// ---------- Завершение колоды ----------

function showDeckComplete() {
  document.querySelectorAll(".face").forEach(f => f.classList.remove("active"));
  deckCompleteEl.style.display = "flex";
  answerButtonsEl.style.display = "none";
}

function hideDeckComplete() {
  deckCompleteEl.style.display = "none";
  answerButtonsEl.style.display = "flex";
}

document.getElementById("restartDeckBtn").addEventListener("click", function() {
  // Сбрасываем прогресс только по текущей колоде
  for (let i = 0; i < decks[currentDeck].words.length; i++) {
    delete progress[wordId(currentDeck, i)];
  }
  saveProgress();
  hideDeckComplete();
  startDeck(currentDeck);
});

// ---------- Переключение экранов ----------

const deckScreen = document.getElementById("deck-screen");
const cardsScreen = document.getElementById("cards-screen");
const backBtn = document.getElementById("backBtn");

function startDeck(deckKey) {
  currentDeck = deckKey;
  document.getElementById("deck-title").textContent = decks[deckKey].title;
  document.querySelector("h1").style.display = "none";
  stage = 0;
  queue = buildQueue(deckKey);

  deckScreen.style.display = "none";
  cardsScreen.style.display = "flex";

  updateProgressDisplay();

  if (queue.length === 0) {
    showDeckComplete();
  } else {
    hideDeckComplete();
    render();
  }
}

function populateDeckGrid() {
  const grid = document.getElementById("deck-grid");
  grid.innerHTML = "";

  for (const key in decks) {
    const deck = decks[key];
    const { mastered, total } = deckStats(key);
    const card = document.createElement("div");
    card.className = "deck-card";
    card.innerHTML = `
      <div class="deck-card-title">${deck.title}</div>
      <div class="deck-card-count">${total} слов</div>
      <div class="deck-card-progress">Выучено ${mastered} / ${total}</div>
    `;
    card.addEventListener("click", function() {
      startDeck(key);
    });
    grid.appendChild(card);
  }
}

backBtn.addEventListener("click", function() {
  cardsScreen.style.display = "none";
  deckScreen.style.display = "flex";
  document.querySelector("h1").style.display = "";
  populateDeckGrid(); // обновляем прогресс на плитках колод
});

// ---------- Клавиатура ----------
// 1 = не помню, 2 = иероглиф подсказал, 3 = знаю, пробел = перевернуть карточку

document.addEventListener("keydown", function(e) {
  if (cardsScreen.style.display === "none") return;

  switch (e.key) {
    case "1":
      answerCard("dontknow");
      break;

    case "2":
      answerCard("hint");
      break;

    case "3":
      answerCard("know");
      break;

    case " ":
      e.preventDefault(); // чтобы страница не скроллилась
      if (queue.length > 0) {
        stage = (stage + 1) % 3;
        render();
      }
      break;

    case "Escape":
      cardsScreen.style.display = "none";
      deckScreen.style.display = "flex";
      document.querySelector("h1").style.display = "";
      populateDeckGrid();
      break;
  }
});

document.addEventListener("mouseup", function(e) {
  // Mouse 4 — дополнительная кнопка назад (кнопка 3 в браузере)
  if (e.button === 3) {
    if (cardsScreen.style.display === "none") return;
    cardsScreen.style.display = "none";
    deckScreen.style.display = "flex";
    document.querySelector("h1").style.display = "";
    populateDeckGrid();
  }
});

populateDeckGrid();
