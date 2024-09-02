import { questions } from './arrays.js';

const welcome = 'Test your knowledge on boxing, muay thai and MMA!'
const gameDescText = 'Welcome! Please enter your name and proceed with the quiz!';
const welcomeText = document.querySelector('#welcome');
const gameDescription = document.querySelector('#gameDescription');
const questionTextDiv = document.querySelector('#questionText');
const answer1Btn = document.querySelector('#answer1');
const answer2Btn = document.querySelector('#answer2');
const answer3Btn = document.querySelector('#answer3');

welcomeText.innerHTML = welcome;
gameDescription.innerHTML = gameDescText;

document.querySelector('#startGameBtn').addEventListener('click', startQuiz);
document.querySelector('#restartBtn').addEventListener('click', restartQuiz);
document.querySelector('#homepageBtn').addEventListener('click', goToHomepage);
document.querySelector('#scoreboardBtn').addEventListener('click', goToScoreboard);

let playerName = '';
let currentQuestion = 0;
let points = 0;

answer1Btn.addEventListener('click', function () {
  checkAnswer('a');
});
answer2Btn.addEventListener('click', function () {
  checkAnswer('b');
});
answer3Btn.addEventListener('click', function () {
  checkAnswer('c');
});


// START THE QUIZ


function startQuiz() {
  playerName = document.querySelector('#playerInput').value;
  if (playerName.trim() === '') {
    alert('Please enter your name!');
    return;
  }
  gameDescription.style.display = 'none';
  document.querySelector('#playerDetails').style.display = 'none';
  document.querySelector('#questionContainer').style.display = 'block';
  document.querySelector('#scoreboardBtn').style.display = 'none';
  document.querySelector('#welcome').style.display = 'none';
  answer1Btn.style.display = 'inline-block';
  answer2Btn.style.display = 'inline-block';
  answer3Btn.style.display = 'inline-block';

  questions.sort(() => Math.random() - 0.5);
  nextQuestion();
}


// CHECK ANSWER


function checkAnswer(userAnswer) {
  const currentQuestionObj = questions[currentQuestion - 1];
  const correctAnswerIndex = currentQuestionObj.correctAnswer;

  console.log('User Answer:', userAnswer);
  console.log('Correct Answer:', correctAnswerIndex);
  console.log('Question Index:', currentQuestion);

  if (userAnswer === correctAnswerIndex) {
    points++;
  }

  console.log('Points:', points);
  nextQuestion();
}


// NEXT QUESTION


function nextQuestion() {
  if (currentQuestion >= questions.length) {
    gameOver();
    return;
  }

  const currentQuestionObj = questions[currentQuestion];
  questionTextDiv.innerHTML = currentQuestionObj.questionText;
  answer1Btn.textContent = currentQuestionObj.answerOptions['a'];
  answer2Btn.textContent = currentQuestionObj.answerOptions['b'];
  answer3Btn.textContent = currentQuestionObj.answerOptions['c'];

  currentQuestion++;
}


// RESTART QUIZ


function restartQuiz() {
  document.querySelector('#questionContainer').style.display = 'block';
  document.querySelector('#pointsContainer').innerHTML = '';
  document.querySelector('#gameOver').style.display = 'none';

  questions.sort(() => Math.random() - 0.5);

  points = 0;
  currentQuestion = 0;
  nextQuestion();
}


// GAME OVER


function gameOver() {
  document.querySelector('#gameOver').style.display = 'block';
  document.querySelector('#questionContainer').style.display = 'none';
  document.querySelector('#welcome').style.display = 'none';
  document.querySelector('#pointsContainer').innerHTML = `Congratulations, ${playerName}, you scored ${points} points!`;

  const playerScore = { playerName, points };
  const scores = JSON.parse(localStorage.getItem('scores')) || [];
  scores.push(playerScore);
  localStorage.setItem('scores', JSON.stringify(scores));
}


// HOMEPAGE


function goToHomepage() {
  window.location.href = 'index.html';
}


// SCOREBOARD


function goToScoreboard() {
  window.location.href = 'scoreboard.html';
}
