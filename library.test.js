import add from './src/add.js';
import camelCase from './src/camelCase.js';
import at from './src/at.js';
import capitalize from './src/capitalize.js';
import castArray from './src/castArray.js';

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

    var o1 = {
        'a': [
            {
                'b': {
                    'c': 3
                }
            },
            4
        ] 
    }
    
    test('Simple positive case', () => {
        expect(at(o1, ['a[0].b.c'])).toMatchObject([3]);
    });

    var o2 = {
        foo: {
            bar: {
                value: 41,
                baz: {
                    value: 13
                }
            }
        }
    }

    test('Simple positive case 2', () => {
        expect(at(o2, ['foo.bar.baz.value'])).toMatchObject([13]);
    });

    test('Test with multiple paths', () => {
        expect(at(o2, ['foo.bar.baz.value', 'foo.bar.value'])).toMatchObject([13, 41]);
    });

    test('Test with incorrect path', () => {
        expect(at(o2, ['foo.bar.foobar'])).toMatchObject([undefined]);
    });

    test('Test with incorrect path', () => {
        expect(at(o2, ['foo...bar.foobar'])).toMatchObject([undefined]);
    });
});


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

/*
describe("Tests for 'castArray' function", () => {

});
*/




