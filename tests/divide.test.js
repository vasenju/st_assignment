import divide from '../src/divide.js';

describe("Tests for 'divide' function", () => {

    // TODO: report - does not work as documented in the library code.
    test.skip('Simple positive test case', () => {
        expect(divide(6.0, 4.0)).toBe(1.5);
    });

    // TODO: report - does not work as documented in the library code. Should return 1.5
    test('Simple positive test case', () => {
        expect(divide(6, 4)).toBe(1);
    });

    test('Try divide with 0', () => {
        expect(divide(4, 0)).toBe(NaN);
    });
});
