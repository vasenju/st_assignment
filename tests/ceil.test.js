import ceil from '../src/ceil.js';

describe("Tests for 'ceil' function", () => {

    test('Test with with default acc, negative', () => {
        expect(ceil(-4.123)).toBe(-4);
    });

    test('Test with with default acc, 0', () => {
        expect(ceil(0)).toBe(0);
    });

    test('Test with with default acc, positive', () => {
        expect(ceil(4.123)).toBe(5);
    });

    test('Test with with positive acc, negative', () => {
        expect(ceil(-4.123, 2)).toBe(-4.12);
    });

    test('Test with with default acc, 0', () => {
        expect(ceil(0, 2)).toBe(0);
    });

    test('Test with with default acc, positive', () => {
        expect(ceil(4.123, 2)).toBe(4.13);
    });

    test('Test with with negative acc, negative', () => {
        expect(ceil(-4123, -2)).toBe(-4100);
    });

    test('Test with with negative acc, 0', () => {
        expect(ceil(0, -2)).toBe(0);
    });

    test('Test with with negative acc, positive', () => {
        expect(ceil(4123, -2)).toBe(4200);
    });
});
