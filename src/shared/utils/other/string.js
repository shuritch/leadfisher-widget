import isJSON from './isJSON';

export const toString = value => {
  if (typeof value === 'string') return value;
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
};

export const fromString = value => {
  const descriptors = { false: false, true: true, null: null, undefined };
  if (value in descriptors) return descriptors[value];
  if (!isNaN(+value)) return Number(value);
  if (isJSON(value)) return JSON.parse(value);
  return value;
};
