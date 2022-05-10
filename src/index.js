import './style.css';
import { displayScores } from './modules/score.js';

displayScores();

window.onload = () => {
  displayScores();
};