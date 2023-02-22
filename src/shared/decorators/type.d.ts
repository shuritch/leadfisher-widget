type FN = (...args: any[]) => any;
export type chain = <J>(ctx: J) => <F extends FN>(f: F) => (...args: Parameters<F>) => ctx;
