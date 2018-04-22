// @flow

import {Map} from "immutable";

test('can use immutable map', () => {
  const map1: Map<string, number> = Map({ a: 1, b: 2, c: 3 });
  const map2 = map1.set('b', 50);

  expect(map1.get('b')).toBe(2);
  expect(map2.get('b')).toBe(50);
});
