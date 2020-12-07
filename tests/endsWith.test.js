import endsWith from '../src/endsWith.js';

describe("Tests for 'endsWith' function", () => {

    test('Simple positive test case', () => {
        expect(endsWith("foobar", "bar")).toBe(true);
    });

    test('Test with empty string ending', () => {
        expect(endsWith("foobar", "")).toBe(true);
    });

    test('Test with ending longer than first paramter', () => {
        expect(endsWith("foobar", "foobarfoobar")).toBe(false);
    });

    // TODO: Does not work numbers. Should it?
    test.skip('Test with integer paramters', () => {
        expect(endsWith(1234, 34)).toBe(true);
    });

    // TODO: notice in report function does not work with argument other than string
    test.skip('Test with special argument values - null', () => {
        expect(endsWith("foobar", null)).toBe(true);
    });
});
