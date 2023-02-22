export interface $ {
  set: (str: HTMLElement | string) => this;
  create?: (str: string) => this;
  render?: (styles: Styles) => this;
  setProp?: (name: string, value: string) => this;
  removeProp?: (name: string) => this;
  appendTo?: (parent: HTMLElement | Element) => this;

  get?: () => HTMLElement;
  getProp?: (name: string) => string;
  getRect?: () => DOMRect;
  getCoordinates?: (rect?: DOMRect) => { x: number; y: number };
  selector?: (prefix?: string) => string;
}
