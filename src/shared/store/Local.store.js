import { chain } from '$shared/decorators';
import { toString, uid, fromString } from '$shared/utils';

class LocalStorage {
  #STORAGE = localStorage;
  #chain = chain(this);

  getItem = key => fromString(this.#STORAGE.getItem(key));
  clear = this.#chain(() => this.#STORAGE.clear());
  setItem = this.#chain((key, value) => this.#STORAGE.setItem(key, toString(value)));
  push = this.#chain(value => this.#STORAGE.setItem(uid(), toString(value)));
  removeItem = this.#chain(key => this.#STORAGE.removeItem(key));
}

export default Object.freeze(new LocalStorage());
