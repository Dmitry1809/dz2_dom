import goblinImg from '../img/goblin.png';

export default class GameController {
  constructor(container) {
    this.container = container;
    this.boardSize = 4;
    this.cells = [];
    this.activeCellIndex = null;
    this.charElement = null;
  }

  init() {
    this.createField();
    this.createCharacter();
    this.moveCharacter();
    setInterval(() => this.moveCharacter(), 1000);
  }

  createField() {
    const field = document.createElement('div');
    field.classList.add('game-field');

    const totalCells = this.boardSize * this.boardSize;
    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement('div');
      cell.classList.add('game-cell');
      field.appendChild(cell);
      this.cells.push(cell);
    }

    this.container.appendChild(field);
  }

  createCharacter() {
    const img = document.createElement('img');
    img.src = goblinImg;
    img.classList.add('game-char');
    img.alt = 'Goblin';
    this.charElement = img;
  }

  getRandomIndex() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.cells.length);
    } while (newIndex === this.activeCellIndex);
    
    return newIndex;
  }

  moveCharacter() {
    const nextIndex = this.getRandomIndex();
    this.cells[nextIndex].appendChild(this.charElement);
    this.activeCellIndex = nextIndex;
  }
}
