const { capitalize } = require('../index');
const { allCaps } = require('../index');
const { capitalizeWords } = require('../index');
const { removeExtraSpaces } = require('../index');
const { kebobCase } = require('../index');
const { snakeCase } = require('../index');
const { camelCase } = require('../index');
const { shift } = require('../index');
const { makeHashTag } = require('../index');
const { isEmpty } = require('../index');

test('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('allen stevens')).toBe('Allen stevens');
    expect(capitalize('')).toBe('');
    expect(capitalize('a')).toBe('A');
});

test('allCaps', () => {
    expect(allCaps('hello')).toBe('HELLO');
    expect(allCaps('allen stevens')).toBe('ALLEN STEVENS');
    expect(allCaps('')).toBe('');
    expect(allCaps('a')).toBe('A');
});

test('capitalizeWords', () => {
    expect(capitalizeWords('hello')).toBe('Hello');
    expect(capitalizeWords('my name is allen stevens')).toBe('My Name Is Allen Stevens');
    expect(capitalizeWords('')).toBe('');
    expect(capitalizeWords('a')).toBe('A');
}
);

test('removeExtraSpaces', () => {
    expect(removeExtraSpaces(' hello world ')).toBe('hello world');
    expect(removeExtraSpaces('  what    in      the world  ')).toBe('what in the world');
});

test('kebobCase', () => {
    expect(kebobCase('   Hello    world my name is allen  ')).toBe('hello-world-my-name-is-allen');
    expect(kebobCase('')).toBe('');
    expect(kebobCase('123')).toBe('123');
    expect(kebobCase('hello')).toBe('hello');
    expect(kebobCase('HELLO')).toBe('hello');
    expect(kebobCase('hello world')).toBe('hello-world');
    expect(kebobCase('hello-world')).toBe('hello-world');
});

test('snakeCase', () => {
    expect(snakeCase(' what    in      the world  ', '_')).toBe('what_in_the_world');
    expect(snakeCase('')).toBe('');
    expect(snakeCase('123')).toBe('123');
    expect(snakeCase('hello')).toBe('hello');
    expect(snakeCase('HELLO')).toBe('hello');
    expect(snakeCase('hello world')).toBe('hello_world');
});

test('camelCase', () => {
    expect(camelCase('hello world')).toBe('helloWorld');
    expect(camelCase('hello world my name is allen')).toBe('helloWorldmynameisallen');
    expect(camelCase('')).toBe('');
});

test ('shift', () => {
    expect(shift('allen stevens')).toBe('llen stevensa');
    expect(shift('hello')).toBe('elloh');
    expect(shift('')).toBe('');
    expect(shift('a')).toBe('a');
});

test ('makeHashTag', () => {
    expect(makeHashTag('hello world my name is allen')).toContain("#hello");
    expect(makeHashTag('hello world my name is allen')).toContain("#world");
    expect(makeHashTag('hello world my name is allen')).toContain("#allen");
});

test ('isEmpty', () => {
    expect(isEmpty('hello world my name is allen')).toBe(false);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty(' ')).toBe(true);
    expect(isEmpty('123')).toBe(false);
});

