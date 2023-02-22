export type TMoveBorders = { s: number; e: number; w: number; n: number };
export type TMoveOptions = {
  proxy?: HTMLElement | string | Element; // another grab target
  save?: boolean;
  directions?: string[];
  borders?: TMoveBorders;
  init?: { x: number; y: number };
};
