import '../css/style.css';
import GameController from './GameController';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#game-container');
  const game = new GameController(container);
  game.init();
});

