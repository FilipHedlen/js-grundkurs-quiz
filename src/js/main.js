import { questions } from './arrays.js';

const gameDescText = 'Welcome! Please enter your name and proceed with the quiz!';
const gameDescription = document.querySelector('#gameDescription');
const questionTextDiv = document.querySelector('#questionText');
const answer1Btn = document.querySelector('#answer1');
const answer2Btn = document.querySelector('#answer2');
const answer3Btn = document.querySelector('#answer3');

gameDescription.innerHTML = gameDescText;

document.querySelector('#startGameBtn').addEventListener('click', startQuiz);
document.querySelector('#restartBtn').addEventListener('click', restartQuiz);

let playerName = '';
let currentQuestion = 0;
let points = 0;

answer1Btn.addEventListener('click', function () {
  checkAnswer(0);
});
answer2Btn.addEventListener('click', function () {
  checkAnswer(1);
});
answer3Btn.addEventListener('click', function () {
  checkAnswer(2);
});

function startQuiz() {
  playerName = document.querySelector('#playerInput').value;
  gameDescription.style.display = 'none';
  document.querySelector('#playerDetails').style.display = 'none';
  answer1Btn.style.display = 'inline-block';
  answer2Btn.style.display = 'inline-block';
  answer3Btn.style.display = 'inline-block';

  questions.sort(() => Math.random() - 0.5);
  nextQuestion();
}

function checkAnswer(userAnswer) {
  const currentQuestionObj = questions[currentQuestion];
  const correctAnswerIndex = currentQuestionObj.correctAnswer;

  console.log('User Answer:', userAnswer + 1); // Add 1 to userAnswer
  console.log('Correct Answer:', correctAnswerIndex + 1); // Add 1 to correctAnswerIndex

  if (userAnswer === correctAnswerIndex) {
    points++;
  }

  console.log('Points:', points);
  nextQuestion();
}

function nextQuestion() {
  if (currentQuestion >= questions.length - 1) {
    gameOver();
    return;
  }

  const currentQuestionObj = questions[currentQuestion];
  questionTextDiv.innerHTML = currentQuestionObj.questionText;
  answer1Btn.textContent = currentQuestionObj.answerOptions[0];
  answer2Btn.textContent = currentQuestionObj.answerOptions[1];
  answer3Btn.textContent = currentQuestionObj.answerOptions[2];

  currentQuestion++;
}

function restartQuiz() {
  document.querySelector('#questionContainer').style.display = 'block';
  document.querySelector('#pointsContainer').innerHTML = '';
  document.querySelector('#gameOver').style.display = 'none';

  questions.sort(() => Math.random() - 0.5);

  points = 0;
  currentQuestion = 0;
  nextQuestion();
}

function gameOver() {
  document.querySelector('#gameOver').style.visibility = 'visible';
  document.querySelector('#questionContainer').style.display = 'none';
  document.querySelector('#pointsContainer').innerHTML = `Congratulations, ${playerName}! You scored ${points} points!`;

  const playerScore = { playerName, points };
  const scores = JSON.parse(localStorage.getItem('scores')) || [];
  scores.push(playerScore);
  localStorage.setItem('scores', JSON.stringify(scores));
}


