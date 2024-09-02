const scores = JSON.parse(localStorage.getItem('scores')) || [];
const scoreboardDiv = document.getElementById('scoreboard');

const scoreboardHeading = document.createElement('h3');
scoreboardHeading.innerHTML = "Welcome to the scoreboard!";

const homepageBtn = document.createElement('button');
homepageBtn.textContent = 'Go to Homepage';
homepageBtn.classList = 'navbtn';
homepageBtn.addEventListener('click', () => {
  window.location.href = 'index.html'; 
});

const scoreList = document.createElement('ul');
scoreList.style.listStyleType = 'none';

scores.sort((a, b) => b.points - a.points); 

scores.forEach((score) => {
  const listItem = document.createElement('li');
  listItem.textContent = `Player: ${score.playerName}, Points: ${score.points}`;
  scoreList.appendChild(listItem);
});

scoreboardDiv.appendChild(homepageBtn);
scoreboardDiv.appendChild(scoreboardHeading);
scoreboardDiv.appendChild(scoreList);