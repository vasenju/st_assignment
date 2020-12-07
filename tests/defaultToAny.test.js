import defaultToAny from '../src/defaultToAny.js';

describe("Tests for 'defaultToAny' function", () => {
    test('Ensure normal function 1', () => {
        expect(defaultToAny(1, 20, 10)).toBe(1);
    });

    test('Ensure normal function 2', () => {
        expect(defaultToAny(undefined, null, 10)).toBe(10);
    });

    test('Ensure normal function 3', () => {
        expect(defaultToAny(null, 10)).toBe(10);
    });
});
