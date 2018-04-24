// @flow

import MyClass from './myclass';

const sut = new MyClass('Hello');

it('nonArrow', () => {
  expect(sut.nonArrow()).toBe('Hello');

  const reference = sut.nonArrow;

  expect(reference()).toBe('Hello');
});

it('arrow', () => {
  expect(sut.arrow()).toBe('Hello');

  const reference = sut.arrow;

  expect(reference()).toBe('Hello');
});

it('plainFunction', () => {
  expect(sut.plainFunction()).toBe('Hello');

  const reference = sut.plainFunction;

  expect(reference()).toBe('Hello');
});
