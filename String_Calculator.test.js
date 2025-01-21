const add = require('./String_Calculator');

test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
});

test('returns the number single number', () => {
    expect(add('1')).toBe(1);
});

test('returns sum of two numbers', () => {
    expect(add('10,20')).toBe(30);
});