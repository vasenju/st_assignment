import capitalize from '../src/capitalize.js';

describe("Tests for 'capitalize' function", () => {

    test('Simple positive case 1', () => {
        expect(capitalize('foobar')).toBe('Foobar');
    });

    test('Simple positive case 2', () => {
        expect(capitalize('fOObaR')).toBe('Foobar');
    });

    test('Test with empty string', () => {
        expect(capitalize('')).toBe('');
    });

    test('Test with special input types 1', () => {
        expect(capitalize(null)).toBe("Null");
    });

    test('Test with special input types 2', () => {
        expect(capitalize({foo: "bar"})).toBe("[object object]");
    });

    var foo = "bar";
    test('Test function does not change original value', () => {
        expect(capitalize(foo)).toBe("Bar");
        expect(foo).toBe("bar");
    });

    test('Test with special input types 3', () => {
        expect(capitalize(123)).toBe("123");
    });
});
