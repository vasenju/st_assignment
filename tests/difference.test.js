import difference from '../src/difference.js';

describe("Tests for 'difference' function", () => {

    test('Regular positive test case with integer values', () => {
        expect(difference([1,2,3,4], [3,4])).toMatchObject([1,2]);
    });

    test('Regular positive test case with decimal values', () => {
        expect(difference([1.0, 2.3, 3.44, 4], [1, 3.44])).toMatchObject([2.3, 4]);
    });

    test('Regular positive test case with multiple arrays', () => {
        expect(difference([1,2,3,4,5], [3,4], [1])).toMatchObject([2, 5]);
    });

    const a = [
        {
            foo: 33
        },
        {
            bar: 22
        },
        {
            baz: 44
        },
    ]

    const b = [
        {
            foo: 33
        },
        {
            bar: 22
        },
    ]
    // TODO: report - was the function supposed to work with objects like this?
    test.skip('Regular positive test case with arrays of objects', () => {
        expect(difference(a, b)).toMatchObject([{baz: 44}]);
    });

    test('Test with empty comparison tables', () => {
        expect(difference([1,2,3,4,5], [], [])).toMatchObject([1, 2, 3, 4, 5]);
    });
});
