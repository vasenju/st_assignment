import add from '../src/add.js';

describe("Tests for 'add' function", () => {

    test('Simple case positive number', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('Test zero does not cause errors', () => {
        expect(add(0, 0)).toBe(0);
    });

    test('Test with negative numbers', () => {
        expect(add(-3, -3)).toBe(-6);
    });

    test('Test wrong input types handling', () => {
        expect(add("4", 4)).toBe("44");
    });

    test('Test wrong input types handling', () => {
        expect(add(null, 4)).toBe(4);
    });

    test('Test wrong input types handling', () => {
        expect(add(undefined, 4)).toBe(4);
    });

    test('Test wrong input types handling', () => {
        expect(add("", 4)).toBe("4");
    });

});
