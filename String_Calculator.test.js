const add = require('./String_Calculator');

//Test 1
test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
});

//Test 2
test('returns the number single number', () => {
    expect(add('1')).toBe(1);
});

//Test 3
test('returns sum of two numbers', () => {
    expect(add('10,20')).toBe(30);
});

//Test 4
test('returns sum of multiple numbers', () => {
    expect(add('10,20,30')).toBe(60);
});

//Test 5
test('returns the sum of numbers separated by commas or \n', () => {
    expect(add('1\n2,3')).toBe(6);
});

//Test 6
test('returns sum of numbers with a different delimiter', () => {
    expect(add('//;\n1;2')).toBe(3);
});

//Test 7
test('return error if number is negative', () => {
    expect(() => add('1,-2')).toThrow('Negatives numers are not allowed: -2');
});