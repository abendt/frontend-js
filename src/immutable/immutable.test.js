// @flow strict-local

import { Map } from 'immutable';

describe('Immutable Map', () => {
  test('can use immutable map', () => {
    const map1: Map<string, number> = Map({ a: 1, b: 2, c: 3 });
    const map2 = map1.set('b', 50);

    expect(map1.get('b')).toBe(2);
    expect(map2.get('b')).toBe(50);
  });

  test('static methods', () => {
    expect(Map.isMap({})).toBe(false);
    expect(Map.isMap(Map())).toBe(true);
  });

  test('can set values', () => {
    const map: Map<string, string> = Map();
    map.set(1, 2);
    map.set('a', 'b');
    map.set('b', 2);

    const string = map.get('a');
  });
});
