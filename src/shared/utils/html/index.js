import { chain } from '$shared/decorators';
import selector from './selector';

/** @returns {import("./type").$} */
const $ = function (el) {
  if (typeof el === 'string') el = document.querySelector(el);
  if (!el) return { set: $, create: el => $(document.createElement(el)) };

  return new (class {
    #chain = chain(this);

    set = $;
    render = this.#chain(styles => Object.assign(el.style, styles));
    setProp = this.#chain((name, value) => el.setAttribute(name, value));
    removeProp = this.#chain(name => el.removeAttribute(name));
    appendTo = this.#chain(parent => parent.appendChild(el));

    selector = selector(el);
    get = () => el;
    getRect = () => el.getBoundingClientRect();
    getProp = name => el.getAttribute(name);
    getCoordinates = (rect = el.getBoundingClientRect()) => ({
      x: window.visualViewport.width - rect.right,
      y: window.visualViewport.height - rect.bottom,
    });
  })();
};

export default $;
