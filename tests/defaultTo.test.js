import defaultTo from '../src/defaultTo.js';

describe("Tests for 'defaultTo' function", () => {

    test('Ensure normal documented functionality - negative case', () => {
        expect(defaultTo(1, 10)).toBe(1);
    });

    test('Ensure normal documented function - positive case - undefined', () => {
        expect(defaultTo(undefined, 10)).toBe(10);
    });

    test('Ensure normal documented function - positive case - null', () => {
        expect(defaultTo(null, 10)).toBe(10);
    });

    // TODO: report to developer: NaN parameter does not trigger default value return
    test.skip('Ensure normal function - positive case - NaN', () => {
        expect(defaultTo(NaN, 10)).toBe(10);
    });
});
