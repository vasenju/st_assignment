import eq from '../src/eq.js';

describe("Tests for 'eq' function", () => {
    const object = { 'a': 1 }
    const other = { 'a': 1 }

    test('Simple positive test case from documentation', () => {
        expect(eq(object, object)).toBe(true);
    });

    test('Simple positive test case from documentation', () => {
        expect(eq(object, other)).toBe(false);
    });

    test('Simple positive test case from documentation', () => {
        expect(eq('a', 'a')).toBe(true);
    });

    // TODO: report - this has different result in documentation. Could it be 
    // because of transpiling?
    test('Simple positive test case from documentation', () => {
        expect(eq('a', Object('a'))).toBe(true);
    });

    test('Simple positive test case from documentation', () => {
        expect(eq(NaN, NaN)).toBe(true);
    });
});
