const endPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const id = 'sl0iun1u2nr2yZCjDBd3';
const listscore = document.querySelector('.list-scores');

const addGame = async () => {
  const response = await fetch(endPoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Juan Rosario Game' }),
  });
  const game = await response.json();
  return game;
};

const newScore = async (user, score) => {
  const response = await fetch(`${endPoint}/${id}/scores/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user,
      score: Number(score),
    }),
  });
  const res = await response.json();
  return res;
};

const retrieveGameScores = async () => {
  const response = await fetch(`${endPoint}/${id}/scores/`);
  const scores = await response.json();
  return scores;
};

const scores = (item) => `
    <div class="score-container">
    <p class="score">${item.user}: <span class="score-number">${item.score}</span></p>
    </div>
    `;

const displayScores = async () => {
  const listOfScore = await retrieveGameScores();
  const listOfScoreSorted = listOfScore.result.sort((a, b) => b.score - a.score);
  listscore.innerHTML = `${listOfScoreSorted.map(scores).join('')}`;
};

export { displayScores, addGame, newScore };