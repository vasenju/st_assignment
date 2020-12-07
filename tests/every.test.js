import every from '../src/every.js';

describe("Tests for 'every' function", () => {

    test('Simple negative test case from documentation', () => {
        expect(every([true, 1, null, 'yes'], Boolean)).toBe(false);
    });

    const a = [true, true, false, true];
    test('Simple positive test case and array not being modified', () => {
        expect(every(a, value => typeof value === "boolean")).toBe(true);
        expect(a).toMatchObject([true, true, false, true]);
    });

    // TODO: notice in report that empty array returns true for every
    test('Simple positive test case', () => {
        expect(every([], value => typeof value !== "boolean")).toBe(true);
    });
});
