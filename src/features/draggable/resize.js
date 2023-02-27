import errorHandler from '$shared/errors';
import EStore from '$store/Event.store';
import LStore from '$store/Local.store';
import { $ } from '$shared/utils';
const error = errorHandler('Resize');

export default (options = {}) => {
  let { proxy, save } = options;
  if (typeof proxy === 'string') proxy = document.querySelector(proxy);

  return target => {
    if (!target) error(404);
    const { clear, push } = new EStore();
    const { setItem, getItem } = new LStore();
    const { selector, getCoordinates, getRect } = $(target);
    const STORE_TAG = selector('[RESIZE]');

    const getStats = () => {
      const { height, width } = getRect();
      const { x, y } = getCoordinates();
      return { x, y, height, width };
    };

    const events = [];
    events.forEach(push);

    return { destroy: clear };
  };
};
