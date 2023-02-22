// @ts-check
import { chain } from '$shared/decorators';
import { uid } from '$shared/utils';
/** @type { import('./type').EventStorage } EventStorage */

/** @interface {import("./type").EventStorage }  */
class EventStorage {
  #STORAGE = new Map();
  #chain = chain(this);

  setItem = this.#chain((key, value) => {
    const { target, event, callback } = value;
    this.#STORAGE.set(key, value);
    target.addEventListener(event, callback);
  });

  removeItem = this.#chain(key => {
    const { target, event, callback } = this.#STORAGE.get(key);
    target.removeEventListener(event, callback);
    this.#STORAGE.delete(key);
  });

  push = this.#chain(value => this.setItem(uid(), value));
  clear = this.#chain(() => this.#STORAGE.forEach((_, index) => this.removeItem(index)));
}

new EventStorage().clear;
export default EventStorage;
