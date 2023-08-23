const stringTest = require('../src/index');

test('capitalize', () => {
  const firstOutput = stringTest.capitalize('hello');
  expect(firstOutput).toBe('Hello');

  const secondOutput = stringTest.capitalize('WORLD');
  expect(secondOutput).toBe('WORLD');

  const thirdOutput = stringTest.capitalize('');
  expect(thirdOutput).toBe('');
});

test('allCaps', () => {
  const firstOutput = stringTest.allCaps('hello');
  expect(firstOutput).toBe('HELLO');

  const secondOutput = stringTest.allCaps('WORLD');
  expect(secondOutput).toBe('WORLD');

  const thirdOutput = stringTest.allCaps('');
  expect(thirdOutput).toBe('');
});

test('capitalizeWords', () => {
  const firstOutput = stringTest.capitalizeWords('do all the things');
  expect(firstOutput).toBe('Do All The Things');

  const secondOutput = stringTest.capitalizeWords('');
  expect(secondOutput).toBe('');
});

test('removeExtraSpaces', () => {
  const firstOutput = stringTest.removeExtraSpaces('   Hello    world!   ');
  expect(firstOutput).toBe('Hello world!');

  const secondOutput = stringTest.removeExtraSpaces('');
  expect(secondOutput).toBe('');
});

test('kebob', () => {
  const firstOutput = stringTest.kebob('   Hello    world   ');
  expect(firstOutput).toBe('hello-world');

  const secondOutput = stringTest.kebob('');
  expect(secondOutput).toBe('');
});

test('snake', () => {
  const firstOutput = stringTest.snake('  what the    heck   ');
  expect(firstOutput).toBe('what_the_heck');

  const secondOutput = stringTest.snake('');
  expect(secondOutput).toBe('');
});

test('camelCase', () => {
  const firstOutput = stringTest.camelCase('Camel Case');
  expect(firstOutput).toBe('camelCase');

  const secondOutput = stringTest.camelCase('');
  expect(secondOutput).toBe('');
});

test('shift function', () => {
  const firstOutput = stringTest.shift('Hello World');
  expect(firstOutput).toBe('ello WorldH');

  const secondOutput = stringTest.shift('');
  expect(secondOutput).toBe('');
});

test('makeHashTag', () => {
  const firstOutput = stringTest.makeHashTag('Amazing bongo drums for sale');
  expect(firstOutput).toEqual(['#amazing', '#bongo', '#drums']);

  const secondOutput = stringTest.makeHashTag('');
  expect(secondOutput).toEqual([]);
});

test('isEmpty', () => {
  const firstOutput = stringTest.isEmpty('Abc def');
  expect(firstOutput).toBe(false);

  const secondOutput = stringTest.isEmpty('    ');
  expect(secondOutput).toBe(true);
});
