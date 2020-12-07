import castArray from '../src/castArray.js';

describe("Tests for 'castArray' function", () => {

    test('Test with integer', () => {
        expect(castArray(1)).toMatchObject([1]);
    });

    test('Test with an array', () => {
        expect(castArray([1])).toMatchObject([1]);
    });

    test('Test with a larger array', () => {
        expect(castArray([1, 2, 3])).toMatchObject([1, 2, 3]);
    });

    test('Test with with special inputs - null', () => {
        expect(castArray(null)).toMatchObject([null]);
    });

    test('Test with with special inputs - empty string', () => {
        expect(castArray("")).toMatchObject([""]);
    });

    test('Test with with special inputs - undefined', () => {
        expect(castArray(undefined)).toMatchObject([undefined]);
    });
});
