import './style.css';
import { displayScores, newScore } from './modules/api.js';

const form = document.querySelector('.form');
const btnRefresh = document.querySelector('.btn-refresh');
displayScores();

window.onload = () => {
  displayScores();
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = document.getElementById('name').value;
  const Score = document.getElementById('score').value;

  await newScore(user, Score);
  await displayScores();
  form.reset();
});

btnRefresh.addEventListener('click', (e) => {
  e.preventDefault();
  displayScores();
});
