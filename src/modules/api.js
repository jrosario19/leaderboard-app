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

const displayScores = async () => {
  const listOfScore = await retrieveGameScores();
  const listOfScoreSorted = listOfScore.result.sort((a, b) => b.score - a.score);
  listscore.innerHTML = '';
  for (let i = 0; i < listOfScoreSorted.length; i += 1) {
    const item = listOfScoreSorted[i];
    if (i == 0) {
      listscore.innerHTML += `
        <div class="score-container">
        <p class="score">${item.user}: <span class="score-number">${item.score}</span><span class="scorePlaceFirst">1st</span></p>
        </div>
        `;
    } else if (i == 1) {
      listscore.innerHTML += `
        <div class="score-container">
        <p class="score">${item.user}: <span class="score-number">${item.score}</span><span class="scorePlaceSecond">2sd</span></p>
        </div>
        `;
    } else if (i == 2) {
      listscore.innerHTML += `
            <div class="score-container">
            <p class="score">${item.user}: <span class="score-number">${item.score}</span><span class="scorePlaceThird">3rd</span></p>
            </div>
            `;
    } else {
      listscore.innerHTML += `
        <div class="score-container">
        <p class="score">${item.user}: <span class="score-number">${item.score}</span></p>
        </div>
        `;
    }
  }
};

export { displayScores, addGame, newScore };