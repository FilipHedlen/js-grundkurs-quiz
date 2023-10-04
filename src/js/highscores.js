const scores = JSON.parse(localStorage.getItem('scores')) || [];
const scoreboardDiv = document.getElementById('scoreboard');
const scoreboardHeading = document.createElement('h3');
scoreboardHeading.innerHTML = "Welcome to the scoreboard!"

const scoreList = document.createElement('ul');
scoreList.style.listStyleType = 'none';

scores.sort((a, b) => b.points - a.points); // Sort scores in descending order

scores.forEach((score, index) => {
  const listItem = document.createElement('li');
  listItem.textContent = `Player: ${score.playerName}, Points: ${score.points}`;
  scoreList.appendChild(listItem);
});

scoreboardDiv.appendChild(scoreboardHeading);
scoreboardDiv.appendChild(scoreList);
