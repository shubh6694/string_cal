const add = require('./String_Calculator');

test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
});