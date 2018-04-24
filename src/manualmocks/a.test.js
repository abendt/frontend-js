// @flow

import { function1, function2 } from './a';

jest.mock('./a');

it('mock is used', () => {
  expect(function1(1)).toBe(1);
  expect(function1(2)).toBe(1);
});
