import drop from '../src/drop.js';

describe("Tests for 'drop' function", () => {

    test('Try dropping 0', () => {
        expect(drop([1, 2, 3, 4], 0)).toMatchObject([1, 2, 3, 4]);
    });

    test('Try dropping 1', () => {
        expect(drop([1, 2, 3, 4], 1)).toMatchObject([2, 3, 4]);
    });

    test('Try dropping array length', () => {
        expect(drop([1, 2, 3, 4], 4)).toMatchObject([]);
    });

    test('Try dropping more than array length', () => {
        expect(drop([1, 2, 3, 4], 6)).toMatchObject([]);
    });

    test('Try dropping from empty array', () => {
        expect(drop([], 6)).toMatchObject([]);
    });

    test('Try dropping from empty array with amount 0', () => {
        expect(drop([], 0)).toMatchObject([]);
    });
});
