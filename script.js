const decks = {
  greetings: {
    title: "Приветствия",
    words: [
      { ru: "привет",   zh: "你好",   py: "nǐ hǎo" },
      { ru: "спасибо",  zh: "谢谢",   py: "xiè xie" },
      { ru: "пока",     zh: "再见",   py: "zài jiàn" }
    ]
  },
  food: {
    title: "Еда и напитки",
    words: [
      { ru: "вода",     zh: "水",     py: "shuǐ" },
      { ru: "чай",      zh: "茶",     py: "chá" },
      { ru: "рис",      zh: "米饭",   py: "mǐ fàn" }
    ]
  }
};

let currentDeck = null;  // ключ текущей колоды, например "greetings"
let currentIndex = 0;
let stage = 0;

const cardEl = document.getElementById("card");
const wordRuEl = document.getElementById("word-ru");
const wordZhEl = document.getElementById("word-zh");
const wordPyEl = document.getElementById("word-py");

function render() {
  const word = decks[currentDeck].words[currentIndex];
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

cardEl.addEventListener("click", function() {
  stage = (stage + 1) % 3;
  render();
});

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const counterEl = document.getElementById("counter");

function updateCounter() {
  counterEl.textContent = (currentIndex + 1) + " / " + decks[currentDeck].words.length;
}

function updateButtons() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === decks[currentDeck].words.length - 1;
}

nextBtn.addEventListener("click", function() {
  if (currentIndex < decks[currentDeck].words.length - 1) {
    currentIndex++;
    stage = 0;
    renderInstant();
    updateCounter();
    updateButtons();
  }
});

prevBtn.addEventListener("click", function() {
  if (currentIndex > 0) {
    currentIndex--;
    stage = 0;
    renderInstant();
    updateCounter();
    updateButtons();
  }
});

function renderInstant() {
  // Убираем анимацию на время смены карточки
  document.querySelectorAll(".face").forEach(f => f.style.transition = "none");
  render();
  // Возвращаем анимацию обратно через мгновение
  requestAnimationFrame(() => {
    document.querySelectorAll(".face").forEach(f => f.style.transition = "");
  });
} 


const deckScreen = document.getElementById("deck-screen");
const cardsScreen = document.getElementById("cards-screen");
const backBtn = document.getElementById("backBtn");

function populateDeckGrid() {
  const grid = document.getElementById("deck-grid");
  grid.innerHTML = "";

  for (const key in decks) {
    const deck = decks[key];
    const card = document.createElement("div");
    card.className = "deck-card";
    card.innerHTML = `
      <div class="deck-card-title">${deck.title}</div>
      <div class="deck-card-count">${deck.words.length} слов</div>
    `;
    card.addEventListener("click", function() {
      currentDeck = key;
      document.getElementById("deck-title").textContent = decks[key].title;
      document.querySelector("h1").style.display = "none";
      currentIndex = 0;
      stage = 0;
      shuffleDeck(currentDeck);
      deckScreen.style.display = "none";
      cardsScreen.style.display = "flex";
      render();
      updateCounter();
      updateButtons();
    });
    grid.appendChild(card);
  }
}

function shuffleDeck(deckKey) {
  const words = decks[deckKey].words;
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }
}

backBtn.addEventListener("click", function() {
  cardsScreen.style.display = "none";
  deckScreen.style.display = "flex";
  document.querySelector("h1").style.display = "";
});

document.addEventListener("keydown", function(e) {
  // Работает только когда открыт экран карточек
  if (cardsScreen.style.display === "none") return;

  switch(e.key) {
    case "ArrowRight":
    case "d":
    case "D":
      if (currentIndex < decks[currentDeck].words.length - 1) {
        currentIndex++;
        stage = 0;
        renderInstant();
        updateCounter();
        updateButtons();
      }
      break;

    case "ArrowLeft":
    case "a":
    case "A":
      if (currentIndex > 0) {
        currentIndex--;
        stage = 0;
        renderInstant();
        updateCounter();
        updateButtons();
      }
      break;

    case " ":
      e.preventDefault(); // чтобы страница не скроллилась
      stage = (stage + 1) % 3;
      render();
      break;

    case "Escape":
      cardsScreen.style.display = "none";
      deckScreen.style.display = "flex";
      document.querySelector("h1").style.display = "";
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
  }
});

populateDeckGrid();