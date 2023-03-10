import errorHandler from '$shared/errors';
import EStore from '$store/Event.store';
import LStore from '$store/Local.store';
import { $ } from '$shared/utils';
const error = errorHandler('Resize');

export default (options = {}) => {
  let { proxy, save } = options;
  if (typeof proxy === 'string') proxy = document.querySelector(proxy);

  const drag = direction => event => {};

  return target => {
    if (!target) error(404);
    const { clear, push } = new EStore();
    const { selector, getCoordinates, getRect } = $(target);
    const STORE_TAG = selector('[RESIZE]');

    const getStats = () => {
      const { height, width } = getRect();
      const { x, y } = getCoordinates();
      return { x, y, height, width };
    };

    const onGrab = event => {
      const objectInit = getStats();
      const initCoords = { x: event.pageX, y: event.pageY };
      const target = $(event.target);
      const direction = target.getProp('leadfisher-direction');
      if (direction.includes('self')) target.setProp('leadfisher-move-lock', 'lock');
      const init = { ...objectInit, ...initCoords, target, direction };
    };

    const onGrabStop = () => {
      const { x, y, height, width } = getStats();
      const { x: initX, y: initY } = init;
      const { x: targetX, y: targetY } = getCoordinates();
      const direction = target.getProp('leadfisher-direction');
      target.removeProp('leadfisher-move-lock');
    };

    const events = [];
    events.forEach(push);

    return { destroy: clear };
  };
};
