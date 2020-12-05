import add from './src/add.js';
import camelCase from './src/camelCase.js';
import at from './src/at.js';

describe("Tests for 'add' function", () => {

    test('Simple case positive number', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('Test zero does not cause errors', () => {
        expect(add(0, 0)).toBe(0);
    });

    test('Test with negative numbers', () => {
        expect(add(-3, -3)).toBe(-6);
    });

    test('Test wrong input types handling', () => {
        expect(add("4", 4)).toBe("44");
    });

    test('Test wrong input types handling', () => {
        expect(add(null, 4)).toBe(4);
    });

    test('Test wrong input types handling', () => {
        expect(add(undefined, 4)).toBe(4);
    });

    test('Test wrong input types handling', () => {
        expect(add("", 4)).toBe("4");
    });

});


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


describe("Tests for 'at' function", () => {

    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
    
    test('Simple positive case', () => {
        expect(at(object, ['a[0].b.c'])).toMatchObject([3]);
    });

});
