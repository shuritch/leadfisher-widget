import { chain } from '$shared/decorators';

// ? Moveable & Resizable & Move / Resizable

class Draggable {
  /**@protected*/ x = 0;
  /**@protected*/ y = 0;
  /**@protected*/ borders = { s: 0, n: 0, w: 0, e: 0 };
  /**@protected*/ chain = chain(this);

  constructor(options) {
    if (options.borders) this.borders = options.borders;
    if (options.init?.x) this.x = options.init.x;
    if (options.init?.x) this.y = options.init.y;
  }

  dump = () => ({ right: `${this.x}px`, bottom: `${this.y}px`, position: 'absolute' });
}

class Moveable extends Draggable {
  #isMoving = false;
  #directions = ['x', 'y'];

  constructor(options) {
    super(options);
    if (options.directions) this.#directions = options.directions;
  }

  isMoving = state => {
    if (state === undefined) return this.#isMoving;
    this.#isMoving = state;
    return state;
  };

  move = this.chain(({ x = this.x, y = this.y, height, width }) => {
    const { clientHeight, clientWidth } = document.documentElement;
    const maxX = clientWidth - width - this.borders.w;
    const maxY = clientHeight - height - this.borders.n;

    if (this.#directions.includes('x')) this.x = Math.min(Math.max(x, this.borders.e), maxX);
    if (this.#directions.includes('y')) this.y = Math.min(Math.max(y, this.borders.s), maxY);
  });
}

class Resizable extends Draggable {
  #init = null;

  constructor(options) {
    super(options);
  }

  grabStart = init => {
    this.#init = init;
  };
}

export default Moveable;
