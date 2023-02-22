import EStore from '$store/Event.store';
import LStore from '$store/Local.store';
import errHandler from '$errors';
import { $ } from '$shared/utils';
import Draggable from './target';
const error = errHandler('Move');

/** @param {import("./type").TMoveOptions} options */
export default (options = {}) => {
  let { proxy, save } = options;
  if (typeof proxy === 'string') proxy = document.querySelector(proxy);

  /** @param {HTMLElement} target */
  return target => {
    if (!target) return error(404);

    const { clear, push } = new EStore();
    const { move, isMoving } = new Draggable(options);
    const { getRect, render, selector, getCoordinates } = $(target);
    const STORE_TAG = selector('[MOVE]');

    const getStats = () => {
      const { height, width } = getRect();
      const { x, y } = getCoordinates();
      return { x, y, height, width };
    };

    const mouseMove = event => {
      if (!isMoving()) return;
      const stats = getStats();
      stats.x -= event.movementX;
      stats.y -= event.movementY;
      const style = move(stats).dump();
      render(style);
      if (save) LStore.setItem(STORE_TAG, style);
    };

    const resize = () => {
      const style = move(getStats()).dump();
      render(style);
      if (save) LStore.setItem(STORE_TAG, style);
    };

    const events = [
      { target: proxy ?? target, event: 'mousemove', callback: mouseMove },
      { target: proxy ?? target, event: 'mousedown', callback: () => isMoving(true) },
      { target: window, event: 'mouseup', callback: () => isMoving(false) },
      { target: window, event: 'resize', callback: resize },
    ];

    const { height, width } = getRect();
    let constructor = move({ height, width }).dump();
    if (save) constructor = { ...constructor, ...LStore.getItem(STORE_TAG) };
    render(constructor);
    events.forEach(push);

    return { destroy: clear };
  };
};
