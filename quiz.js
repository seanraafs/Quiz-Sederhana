const data = [
  {
    id: 1,
    question:
      "siapakah presiden pertama di indonesia?",
    answers: [
      { answer: "Soekarno", correct: true },
      { answer: "Soeharto", correct: false },
      { answer: "Jokowi", correct: false },
      { answer: "Megawati", correct: false },
    ],
  },
  {
    id: 2,
    question:
      "bagaimana nama negara indonesia sebelum menjadi republik indonesia?",
    answers: [
      { answer: "Indonesia", correct: false },
      { answer: "Netherlands East Indies", correct: true },
      { answer: "Dutch East Indies", correct: false },
      { answer: "Dutch East Indies Government", correct: false },
    ],
  },
  {
    id: 3,
    question:
      "Bendahara Umum Daerah (BUD) adalah gubernur provinsi?",
    answers: [
      { answer: "benar", correct: true },
      { answer: "salah", correct: false },
    ],
  },
  {
    id: 4,
    question: "Ketua Umum Partai Gerindra adalah?",
    answers: [
      { answer: "Jokowi", correct: true },
      { answer: "Megawati", correct: false },
      { answer: "Soeharto", correct: false },
      { answer: "Soekarno", correct: false },
    ],
  },
  {
    id: 5,
    question: "Kawah Putih adalah tempat berada?",
    answers: [
      { answer: "Jakarta", correct: true },
      { answer: "Bandung", correct: false },
      { answer: "Surabaya", correct: false },
      { answer: "Medan", correct: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  ShowQuestion(qIndex);
};

play.addEventListener("click",()=>{
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain();
})

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Jawaban Betul: ${correctCount}`;
  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Jawaban Salah: ${wrongCount}`;
  resultScreen.querySelector(".score").textContent = `Score anda: ${
    (correctCount - wrongCount) * 10
  }`;
};

const ShowQuestion = (qNumber) => {
  if (qIndex == data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `<div class="answer">
        <input type="radio" name="answer" id="${index}" value="${item.correct}">
        <label for="${index}">${item.answer}</label>
    </div>`
    )
    .join("");

  selectAnswer();
};
const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer == "true" ? correctCount++ : wrongCount++;
      qIndex++;
      ShowQuestion(qIndex);
    } else alert("silahkan pilih jawaban terlebih dahulu");
  });
};

ShowQuestion(qIndex);
submitAnswer();
