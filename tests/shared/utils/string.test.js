import { describe, expect, it } from 'vitest';
import { toString, fromString } from 'src/shared/utils';

describe('Testing parser', () => {
  it('Returns String from any value', () => {
    expect(toString(123)).toBe('123');
    expect(toString({ a: 1 })).toBe(JSON.stringify({ a: 1 }));
  });

  it('Returns Primitive from string', () => {
    expect(fromString('123')).toBe(123);
    expect(fromString(JSON.stringify({ a: 1 }))).toEqual({ a: 1 });
    expect(fromString('false')).toEqual(false);
    expect(fromString('null')).toEqual(null);
    expect(fromString('undefined')).toEqual(undefined);
    expect(fromString('asd')).toEqual('asd');
  });
});
