import { it, expect, describe } from 'vitest';
import { isJSON } from 'src/shared/utils';

describe('isJSON', () => {
  it('returns true when string is valid JSON', () => {
    const json = { name: 'John Doe' };
    expect(isJSON(JSON.stringify(json))).toBeTruthy();
  });

  it('returns false when string is invalid JSON', () => {
    const invalidJSON = 'name: John Doe';
    expect(isJSON(invalidJSON)).toBeFalsy();
  });
});
