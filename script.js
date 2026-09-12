const decks = {
  happiness: {
    title: "幸福",
    words: [
      { ru: "воскресенье",   zh: "礼拜天",   py: "lǐbàitiān" },
      { ru: "свободное время",  zh: "空儿",   py: "kòngr" },
      { ru: "мать (официальное)",     zh: "母亲",   py: "mǔqīn" },
      { ru: "однако / всего лишь",     zh: "不过/只不过",   py: "bùguò / zhǐbùguò" },
      { ru: "навсегда",     zh: "永远",   py: "yǒng yuǎn" },
      { ru: "направление",     zh: "方向",   py: "fāngxiàng" },
      { ru: "выдающийся (человек)",     zh: "优秀",   py: "yōuxiù" },
      { ru: "магистр",     zh: "硕士",   py: "shuòshì" },
      { ru: "переводить, переводчик",     zh: "翻译",   py: "fānyì" },
      { ru: "действительно, и вправду",     zh: "确实",   py: "quèshí" },
      { ru: "возбуждённый, взволнованный",     zh: "兴奋",   py: "xīngfèn" },
      { ru: "тянуть, тащить",     zh: "拉",   py: "lā" },
      { ru: "совет, предложение",     zh: "建议",   py: "jiànyì" },
      { ru: "профессия",     zh: "职业",   py: "zhíyè" },
      { ru: "ключевой",     zh: "关键",   py: "guānjiàn" },
      { ru: "будущее",     zh: "将来",   py: "jiānglái" },
      { ru: "развиваться",     zh: "发展",   py: "fāzhǎn" },
      { ru: "лежать",     zh: "躺",   py: "tǎng" },
      { ru: "сонный",     zh: "困",   py: "kùn" },
      { ru: "условие",     zh: "条件",   py: "tiáojiàn" },
      { ru: "богатый",     zh: "富",   py: "fù" },
      { ru: "бедный",     zh: "穷（贫穷/穷苦）",   py: "qióng （pínqióng / qióngkǔ）" },
      { ru: "из-за, вследствие",     zh: "由于",   py: "yóuyú" },
      { ru: "например",     zh: "比如",   py: "bǐrú" },
      { ru: "ластик",     zh: "橡皮",   py: "xiàngpí" },
      { ru: "сладость",     zh: "糖",   py: "táng" },
      { ru: "низкий",     zh: "低",   py: "dī" }
    ]
  },
  time: {
    title: "时间",
    words: [
      { ru: "обычно, постоянно",   zh: "平时",   py: "píngshí" },
      { ru: "свободное время",  zh: "空儿",   py: "kòngr" },
      { ru: "своевременно",     zh: "及时",   py: "jíshí" },
      { ru: "вовремя в установленное время",     zh: "准时",   py: "zhǔnshí" },
      { ru: "вовремя в срок",     zh: "按时",   py: "ànshí" },
      { ru: "одновременно",     zh: "同时",   py: "tóngshí" },
      { ru: "временно",     zh: "暂时",   py: "zànshí" },
      { ru: "тогда, в то время",     zh: "当时",   py: "dāngshí" }
    ]
  },
  feelings: {
    title: "感情",
    words: [
      { ru: "производить впечатление",   zh: "留下 印象",   py: "liúxià yìnxiàng" },
      { ru: "глубокий характер",  zh: "深 性格",   py: "shēn xìnggé" },
      { ru: "счастливый",     zh: "幸福",   py: "xìngfú" },
      { ru: "быть тронутым, расстрогаться",     zh: "感动",   py: "gǎndòng" },
      { ru: "нервнячающий",     zh: "紧张",   py: "jǐnzhāng" },
      { ru: "чувство, душевное состояние",     zh: "感情",   py: "gǎnqíng" },
      { ru: "выдающийся (человек)",     zh: "优秀",   py: "yōuxiù" },
      { ru: "ощущение, чувство",     zh: "感觉",   py: "gǎnjué" },
      { ru: "дух, психика",     zh: "精神",   py: "jīngshén" },
      { ru: "беспоконый",     zh: "烦恼",   py: "fánnǎo" },
      { ru: "возбуждённый, взволнованный",     zh: "兴奋",   py: "xīngfèn" },
      { ru: "радостный",     zh: "愉快",   py: "yúkuài" },
      { ru: "терпение",     zh: "耐心",   py: "nàixīn" },
      { ru: "смелый, отважный",     zh: "勇敢",   py: "yǒnggǎn" },
      { ru: "серьёзный, добросовестный",     zh: "认真",   py: "rènzhēn" },
      { ru: "сильный",     zh: "强",   py: "qiáng" },
      { ru: "уродливый",     zh: "丑",   py: "chǒu" },
      { ru: "горевать",     zh: "伤心",   py: "shāngxīn" },
      { ru: "сонный",     zh: "困",   py: "kùn" },
      { ru: "богатый",     zh: "富",   py: "fù" },
      { ru: "бедный",     zh: "穷（贫穷/穷苦）",   py: "qióng （pínqióng / qióngkǔ）" }
    ]
  },
  reading: {
    title: "读书",
    words: [
      { ru: "бегло",   zh: "流利",   py: "liúlì" },
      { ru: "крутой",  zh: "厉害",   py: "lìhai" },
      { ru: "грамматика",     zh: "语法",   py: "yǔfǎ" },
      { ru: "истинный",     zh: "准确",   py: "zhǔnquè" },
      { ru: "слово",     zh: "词语",   py: "cíyǔ" },
      { ru: "даже",     zh: "连",   py: "lián" },
      { ru: "читать про себя",     zh: "阅读",   py: "yuèdú" },
      { ru: "читать вслух",     zh: "朗读",   py: "lǎngdú" },
      { ru: "запутанный",     zh: "复杂",   py: "fùzá" },
      { ru: "придёться (нет другого выбора)",     zh: "只好",   py: "zhǐhǎo" },
      { ru: "заполнять пропуски",     zh: "填空",   py: "tiánkòng" },
      { ru: "угадывать",     zh: "猜",   py: "cāi" },
      { ru: "иначе",     zh: "否则",   py: "fǒuzé" },
      { ru: "гостинная",     zh: "客厅",   py: "kètīng" },
      { ru: "журнал",     zh: "杂志",   py: "zázhì" },
      { ru: "газета",     zh: "报纸",   py: "bàozhǐ" },
      { ru: "вне зависимости от",     zh: "无论",   py: "wúlùn" },
      { ru: "известный",     zh: "著名",   py: "zhùmíng" },
      { ru: "страница",     zh: "页",   py: "yè" },
      { ru: "увеличиваться (в колличестве)",     zh: "增加",   py: "zēngjiā" }
    ]
  },
    way: {
    title: "最好的方法",
    words: [
      { ru: "правило, предписание; устанавливать правила",   zh: "规定",   py: "guīdìng" },
      { ru: "умирать; мёртвый",  zh: "死",   py: "sǐ" },
      { ru: "жаль, жалко",     zh: "可惜",   py: "kěxī" },
      { ru: "весь, целиком, полностью",     zh: "全部",   py: "quánbù" },
      { ru: "может быть, возможно",     zh: "也许",   py: "yěxǔ" },
      { ru: "обсуждать, советоваться",     zh: "商量",   py: "shāngliàng" },
      { ru: "и к тому же, а также",     zh: "并且",   py: "bìngqiě" },
      { ru: "соль",     zh: "盐",   py: "yán" },
      { ru: "ложка",     zh: "勺（子）",   py: "sháo(zi)" },
      { ru: "защищать, охранять",     zh: "保护",   py: "bǎohù" },
      { ru: "роль, функция, действие",     zh: "作用",   py: "zuòyòng" },
      { ru: "невозможно, нет способа",     zh: "无法",   py: "wúfǎ" },
      { ru: "счётное слово для уроков, занятий",     zh: "节",   py: "jié" },
      { ru: "подробный, детальный",     zh: "详细",   py: "xiángxì" },
      { ru: "объяснять, толковать",     zh: "解释",   py: "jiěshì" },
      { ru: "что касается, в отношении",     zh: "对于",   py: "duìyú" },
      { ru: "лист (дерева, растения)",     zh: "叶子",   py: "yèzi" },
      { ru: "образование; воспитывать",     zh: "教育",   py: "jiàoyù" },
      { ru: "использовать, применять",     zh: "使用",   py: "shǐyòng" },
      { ru: "язык",     zh: "语言",   py: "yǔyán" },
      { ru: "прямой, непосредственный",     zh: "直接",   py: "zhíjiē" },
      { ru: "вызывать, порождать",     zh: "引起",   py: "yǐnqǐ" },
      { ru: "недоразумение, неправильно понять",     zh: "误会",   py: "wùhuì" },
      { ru: "дружелюбный, дружественный",     zh: "友好",   py: "yǒuhǎo" },
      { ru: "делать вдвое меньше, получать вдвое больше",     zh: "事半功倍",   py: "shì bàn gōng bèi" },
      { ru: "экономить, беречь",     zh: "节约",   py: "jiéyuē" },
      { ru: "сила, физические усилия",     zh: "力气",   py: "lìqi" },
      { ru: "противоположный, наоборот",     zh: "相反",   py: "xiāngfǎn" },
      { ru: "задание, задача",     zh: "任务",   py: "rènwù" },
      { ru: "мнение, предложение",     zh: "意见",   py: "yìjiàn" },
      { ru: "внимательный, тщательный",     zh: "仔细",   py: "zǐxì" },
      { ru: "достигать, добиваться",     zh: "达到",   py: "dádào" }
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
