// @flow

describe('can use Jest extended matchers', () => {
  test('toBeEmpty', () => {
    expect('').toBeEmpty();
  });

  test('passes when value is in given array', () => {
    expect(1).toBeOneOf([1, 2, 3]);
    expect(4).not.toBeOneOf([1, 2, 3]);
  });

  test('passes when value is null or undefined', () => {
  expect(null).toBeNil();
  expect(undefined).toBeNil();
  expect(true).not.toBeNil();
});

test('passes when value passes given predicate', () => {
  const greaterThanOneButNotThree = n => n > 1 && n !== 3;
  expect(100).toSatisfy(greaterThanOneButNotThree);
  expect(0).not.toSatisfy(greaterThanOneButNotThree);
  expect(3).not.toSatisfy(greaterThanOneButNotThree);
});

test('passes when value is an array', () => {
  expect([]).toBeArray();
  expect([1]).toBeArray();
  expect(true).not.toBeArray();
});

test('passes when value is an array of size', () => {
  expect([]).toBeArrayOfSize(0);
  expect([1]).toBeArrayOfSize(1);
  expect(true).not.toBeArrayOfSize(1);
});

test('passes when given array values match the members of the set', () => {
  expect([1, 2, 3]).toIncludeAllMembers([2, 1, 3]);
  expect([1, 2, 2]).toIncludeAllMembers([2, 1]);
});

test('passes when given array values match any of the members in the set', () => {
  expect([1, 2, 3]).toIncludeAnyMembers([2, 1, 3]);
  expect([1, 2, 2]).toIncludeAnyMembers([2]);
  expect([1, 2, 2]).not.toIncludeAnyMembers([3]);
});

test('passes when all values in array pass given predicate', () => {
  const isOdd = el => el % 2 === 1;
  expect([1,3,5,7]).toSatisfyAll(isOdd);
  expect([1,3,4,5,7]).not.toSatisfyAll(isOdd);
});

test('passes when value is a boolean', () => {
  expect(false).toBeBoolean();
  expect(true).toBeBoolean();
  expect(1 === 1).toBeBoolean();
  expect(1).not.toBeBoolean();
});

test('is jest cool', () => {
  const isJestCool = () => true;

  expect(isJestCool()).toBeTrue();
  expect(false).not.toBeTrue();
});

test('returns false', () => {
  const areWeThereYet = () => false;

  expect(areWeThereYet()).toBeFalse();
  expect(true).not.toBeFalse();
});

test.skip('passes when value is a date', () => {
  expect(new Date()).toBeDate();
  expect('01/01/2018').not.toBeDate();
  expect(new Date('01/01/2018')).toBeDate();
  expect(undefined).not.toBeDate();
});

test('passes when value is a function', () => {
  const noop = () => {};
  expect(() => {}).toBeFunction();
  expect(function() {}).toBeFunction();
  expect(noop).toBeFunction();
  expect(true).not.toBeFunction();
});

it('calls mock1 before mock2', async () => {
  const timeout = time => () => new Promise(res => setTimeout(() => res(), time));

  const mock1 = jest.fn(timeout(1));
  const mock2 = jest.fn(timeout(1));

  await mock1();
  await mock2();
  await mock1();

  expect(mock1).toHaveBeenCalledBefore(mock2);
});

test('passes when value is a number', () => {
  expect(1).toBeNumber();
  expect(NaN).toBeNumber();
  expect(Infinity).toBeNumber();
  expect(true).not.toBeNumber();
});

test('passes when value is NaN', () => {
  expect(NaN).toBeNaN();
  expect(1).not.toBeNaN();
});

test('passes when value is a finite number', () => {
  expect(1).toBeFinite();
  expect(Infinity).not.toBeFinite();
  expect(NaN).not.toBeFinite();
});

test('passes when value is a positive number', () => {
  expect(1).toBePositive();
  expect(Infinity).not.toBePositive();
  expect(-1).not.toBePositive();
  expect(NaN).not.toBePositive();
});

test('passes when value is a negative number', () => {
  expect(-1).toBeNegative();
  expect(-Infinity).not.toBeNegative();
  expect(1).not.toBeNegative();
  expect(NaN).not.toBeNegative();
});

test('passes when value is an even number', () => {
  expect(2).toBeEven();
  expect(1).not.toBeEven();
  expect(NaN).not.toBeEven();
});

test('passes when value is an odd number', () => {
  expect(1).toBeOdd();
  expect(2).not.toBeOdd();
  expect(NaN).not.toBeOdd();
});

test('passes when number is within given bounds', () => {
  expect(1).toBeWithin(1, 3);
  expect(2).toBeWithin(1, 3);
  expect(3).not.toBeWithin(1, 3);
});

test('passes when value is an object', () => {
  expect({}).toBeObject();
  expect({ a: 'hello' }).toBeObject();
  expect(true).not.toBeObject();
});

test('passes when object contains the given key', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainKey('a');
  expect(o).toContainKey('b');
  expect(o).toContainKey('c');
  expect(o).not.toContainKey('d');
});

test('passes when object contains all keys', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainKeys(['a', 'b']);
  expect(o).toContainKeys(['b', 'c']);
  expect(o).not.toContainKeys(['d']);
});

test('passes when object only contains all keys', () => {
  const o = { a: 'hello', b: 'world' };
  expect(o).toContainAllKeys(['a', 'b']);
  expect(o).toContainAllKeys(['b', 'a']);
  expect(o).not.toContainAllKeys(['b']);
});

test('passes when object contains at least one matching key', () => {
  const o = { a: 'hello', b: 'world' };
  expect(o).toContainAnyKeys(['a']);
  expect(o).toContainAnyKeys(['b']);
  expect(o).toContainAnyKeys(['b', 'c']);
  expect(o).not.toContainAnyKeys(['c']);
});

test('passes when object contains given value', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainValue('foo');
  expect(o).toContainValue('bar');
  expect(o).not.toContainValue('qux');
});

test('passes when object contains all of the given values', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainValues(['foo']);
  expect(o).toContainValues(['baz', 'bar']);
  expect(o).not.toContainValues(['qux', 'foo']);
});

test('passes when object only contains all of the given values', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainAllValues(['foo', 'bar', 'baz']);
  expect(o).toContainAllValues(['baz', 'bar', 'foo']);
  expect(o).not.toContainAllValues(['bar', 'foo']);
});

test('passes when object contains at least one of the given values', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainAnyValues(['qux', 'foo']);
  expect(o).toContainAnyValues(['qux', 'bar']);
  expect(o).toContainAnyValues(['qux', 'baz']);
  expect(o).not.toContainAnyValues(['qux']);
});

test('passes when object contains given entry', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainEntry(['a', 'foo']);
  expect(o).toContainEntry(['b', 'bar']);
  expect(o).toContainEntry(['c', 'baz']);
  expect(o).not.toContainEntry(['a', 'qux']);
});

test('passes when object contains all of the given entries', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainEntries([['a', 'foo']]);
  expect(o).toContainEntries([['c', 'baz'], ['a', 'foo']]);
  expect(o).not.toContainEntries([['b', 'qux'], ['a', 'foo']]);
});

test('passes when object only contains all of the given entries', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainAllEntries([['a', 'foo'], ['b', 'bar'], ['c', 'baz']]);
  expect(o).not.toContainAllEntries([['a', 'foo'], ['b', 'bar']]);
});

test('passes when object contains at least one of the given entries', () => {
  const o = { a: 'foo', b: 'bar', c: 'baz' };
  expect(o).toContainAnyEntries([['a', 'qux'], ['a', 'foo']]);
  expect(o).toContainAnyEntries([['a', 'qux'], ['b', 'bar']]);
  expect(o).toContainAnyEntries([['a', 'qux'], ['c', 'baz']]);
  expect(o).not.toContainAnyEntries([['d', 'qux']]);
});

test('passes when value is extensible', () => {
  expect({a: 1}).toBeExtensible();
  expect(1).not.toBeExtensible();
});

test('passes when value is frozen', () => {
  expect(Object.freeze({})).toBeFrozen();
  expect({}).not.toBeFrozen();
  expect(1).toBeFrozen();
});

test('passes when value is sealed', () => {
  expect(Object.seal({})).toBeSealed();
  expect({}).not.toBeSealed();
  expect(1).toBeSealed();
});

test('passes when value is a string', () => {
  expect('').toBeString();
  expect('hello').toBeString();
  expect(new String('hello')).toBeString();
  expect(true).not.toBeString();
});

test('passes when strings are equal ignoring case', () => {
  expect('hello world').toEqualCaseInsensitive('hello world');
  expect('hello WORLD').toEqualCaseInsensitive('HELLO world');
  expect('HELLO WORLD').toEqualCaseInsensitive('hello world');
  expect('hello world').toEqualCaseInsensitive('HELLO WORLD');
  expect('hello world').not.toEqualCaseInsensitive('hello');
});

test('passes when value is starts with given string', () => {
  expect('hello world').toStartWith('hello');
  expect('hello world').not.toStartWith('world');
});

test('passes when value is ends with given string', () => {
   expect('hello world').toEndWith('world');
  expect('hello world').not.toEndWith('hello');
});

test('passes when value includes substring', () => {
  expect('hello world').toInclude('ell');
  expect('hello world').not.toInclude('bob');
});

test('passes when value includes substring n times', () => {
  expect('hello hello world').toIncludeRepeated('hello', 2);
  expect('hello hello world').not.toIncludeRepeated('hello', 1);
});

test('passes when value includes all substrings', () => {
  expect('hello world').toIncludeMultiple(['hello', 'world']);
  expect('hello world').not.toIncludeMultiple(['world', 'hello', 'bob']);
});
});
