import camelCase from '../src/camelCase.js';

describe("Tests for 'camelCase' function", () => {

    test('Simple positive case', () => {
        expect(camelCase("aaa bbb")).toBe(" aaaBbb"); // Space in the beginning seems to be a bug.
    });

    test('Simple positive case', () => {
        expect(camelCase("Foo Bar")).toBe(" fooBar");
    });

    test('Test with special characters mentioned in documentation', () => {
        expect(camelCase("--foo-bar--")).toBe(" fooBar");
    });

    test('Test with larger amount of spaces', () => {
        expect(camelCase("Foo     Bar")).toBe(" fooBar");
    });

    test('Test linebreaks', () => {
        expect(camelCase("Foo\n\nBar")).toBe(" fooBar");
    });
});