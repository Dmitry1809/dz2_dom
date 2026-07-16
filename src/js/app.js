import '../css/style.css';
import goblinImg from '../img/goblin.png';
import GameController from './GameController';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#game-container');
  
  if (container) {
    const game = new GameController(container);
    game.init(goblinImg);
  }
});


