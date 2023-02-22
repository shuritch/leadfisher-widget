import { chain } from '$shared/decorators';

class Draggable {
  #chain = chain(this);
  #isMoving = false;
  #x = 0;
  #y = 0;
  #directions = ['x', 'y'];
  #borders = { s: 0, n: 0, w: 0, e: 0 };

  constructor(options) {
    if (options.directions) this.#directions = options.directions;
    if (options.borders) this.#borders = options.borders;
    if (options.init?.x) this.#x = options.init.x;
    if (options.init?.x) this.#y = options.init.y;
  }

  isMoving = state => {
    if (state === undefined) return this.#isMoving;
    this.#isMoving = state;
    return state;
  };

  dump = () => ({ right: `${this.#x}px`, bottom: `${this.#y}px`, position: 'absolute' });

  move = this.#chain(({ x = this.#x, y = this.#y, height, width }) => {
    const { clientHeight, clientWidth } = document.documentElement;
    const maxX = clientWidth - width - this.#borders.w;
    const maxY = clientHeight - height - this.#borders.n;

    if (this.#directions.includes('x')) this.#x = Math.min(Math.max(x, this.#borders.e), maxX);
    if (this.#directions.includes('y')) this.#y = Math.min(Math.max(y, this.#borders.s), maxY);
  });
}

export default Draggable;
