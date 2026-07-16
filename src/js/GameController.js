export default class GameController {
  constructor(container) {
    // Проверка на существование DOM-элемента
    if (!container) {
      throw new Error('Container element is required');
    }
    this.container = container;
    
    // Избавление от magic numbers через именованные константы
    this.BOARD_SIZE = 4;
    this.MOVE_INTERVAL = 1000;
    
    this.cells = [];
    this.activeCellIndex = null;
    this.charElement = null;
    this.timerId = null; // Переменная для сохранения инстанса setInterval
  }

  init(goblinImg) {
    this.createField();
    this.createCharacter(goblinImg);
    this.moveCharacter();
    
    // Сохраняем таймер в переменную для предотвращения memory leak
    this.timerId = setInterval(() => this.moveCharacter(), this.MOVE_INTERVAL);
  }

  // Метод для корректной остановки игры и очистки памяти
  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  createField() {
    const field = document.createElement('div');
    field.classList.add('game-field');

    const totalCells = this.BOARD_SIZE * this.BOARD_SIZE;
    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement('div');
      cell.classList.add('game-cell');
      // Заменено appendChild на append
      field.append(cell);
      this.cells.push(cell);
    }

    // Заменено appendChild на append
    this.container.append(field);
  }

  createCharacter(goblinImg) {
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
    // Заменено appendChild на append
    this.cells[nextIndex].append(this.charElement);
    this.activeCellIndex = nextIndex;
  }
}

