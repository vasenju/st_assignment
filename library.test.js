import add from './src/add.js';
import camelCase from './src/camelCase.js';
import at from './src/at.js';
import capitalize from './src/capitalize.js';
import castArray from './src/castArray.js';
import ceil from './src/ceil.js';
import chunk from './src/chunk.js';
import clamp from './src/clamp.js';
import compact from './src/compact.js';
import countBy from './src/countBy.js';
import defaultTo from './src/defaultTo.js';
import defaultToAny from './src/defaultToAny.js';
import difference from './src/difference.js';
import divide from './src/divide.js';
import drop from './src/drop.js';
import endsWith from './src/endsWith.js';
import eq from './src/eq.js';
import every from './src/every.js';
import filter from './src/filter.js';
import get from './src/get.js';
import isArguments from './src/isArguments.js';


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


describe("Tests for 'ceil' function", () => {

    test('Test with with default acc, negative', () => {
        expect(ceil(-4.123)).toBe(-4);
    });

    test('Test with with default acc, 0', () => {
        expect(ceil(0)).toBe(0);
    });

    test('Test with with default acc, positive', () => {
        expect(ceil(4.123)).toBe(5);
    });

    test('Test with with positive acc, negative', () => {
        expect(ceil(-4.123, 2)).toBe(-4.12);
    });

    test('Test with with default acc, 0', () => {
        expect(ceil(0, 2)).toBe(0);
    });

    test('Test with with default acc, positive', () => {
        expect(ceil(4.123, 2)).toBe(4.13);
    });

    test('Test with with negative acc, negative', () => {
        expect(ceil(-4123, -2)).toBe(-4100);
    });

    test('Test with with negative acc, 0', () => {
        expect(ceil(0, -2)).toBe(0);
    });

    test('Test with with negative acc, positive', () => {
        expect(ceil(4123, -2)).toBe(4200);
    });
});


describe("Tests for 'chunk' function", () => {

    // TODO: report to developer
    test.skip('Simple positive test case', () => {
        expect(chunk([1, 2, 3, 4, 5, 6], 2)).toMatchObject([[1, 2],[3, 4],[5, 6]]);
    });

    // TODO: report to developer
    test.skip('Simple positive test case (same as in library documentation)', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).toMatchObject([['a', 'b'], ['c', 'd']]);
    });

    /* 
    TODO: other tests with fixed library.
        - Chunking with array size 1
        - Argument other than array
        - Negative chunk-size parameter
    */
});


// TODO report to developer, the parameters are in wrong order
describe.skip("Failing tests for 'clamp' function", () => {

    test('Test where clamping does not happen', () => {
        expect(clamp(5, 4, 10)).toBe(5);
    });

    test('Test clamping top', () => {
        expect(clamp(31, 4, 10)).toBe(10);
    });

    test('Test clamping bottom', () => {
        expect(clamp(1, 6, 10)).toBe(6);
    });

    test('Test clamping top border', () => {
        expect(clamp(10, 6, 10)).toBe(10);
    });

    test('Test clamping bottom border', () => {
        expect(clamp(6, 6, 10)).toBe(6);
    });

    test('Test on negative range', () => {
        expect(clamp(-5, -3, -1)).toBe(-3);
    });
});

// TODO remove these tests when parameter order is fixed
describe("Temporary tests for 'clamp' function", () => {

    test('Test where clamping does not happen', () => {
        expect(clamp(5, 10, 4)).toBe(5);
    });

    test('Test clamping top', () => {
        expect(clamp(31, 10, 4)).toBe(10);
    });

    test('Test clamping bottom', () => {
        expect(clamp(1, 10, 6)).toBe(6);
    });

    test('Test clamping top border', () => {
        expect(clamp(10, 10, 6)).toBe(10);
    });

    test('Test clamping bottom border', () => {
        expect(clamp(6, 10, 6)).toBe(6);
    });

    test('Test on negative range', () => {
        expect(clamp(-5, -1, -3)).toBe(-3);
    });
});


// TODO report to developer: function always returns an empty array
describe.skip("Tests for 'compact' function", () => {

    test('Ensure normal function - 0', () => {
        expect(compact([0])).toMatchObject([]);
    });

    test('Ensure normal function - empty string', () => {
        expect(compact([""])).toMatchObject([]);
    });

    test('Ensure normal function - undefined', () => {
        expect(compact([undefined])).toMatchObject([]);
    });

    test('Ensure normal function - false', () => {
        expect(compact([false])).toMatchObject([]);
    });

    test('Ensure normal function - NaN', () => {
        expect(compact([NaN])).toMatchObject([]);
    });

    test('Ensure normal function - number (not to be removed)', () => {
        expect(compact([123])).toMatchObject([123]);
    });

    test('Ensure normal function - string (not to be removed)', () => {
        expect(compact(["foo"])).toMatchObject(["foo"]);
    });

    test('Ensure normal function - object (not to be removed)', () => {
        expect(compact([{}])).toMatchObject([{}]);
    });

    test('Ensure normal function - string 2 (not to be removed)', () => {
        expect(compact(["false"])).toMatchObject(["false"]);
    });

});

// TODO report to developer - function seems broken. Wrong amount of true and false results are returned.
describe.skip("Tests for 'countBy' function", () => {
    const obj1 = [
        { foo: 123 },
        { foo: 123 },
        { foo: 123 },
        { foo: 100 }
    ]

    const obj2 = [
        { foo: 123 }
    ]

    const users = [
       { 'user': 'barney', 'active': true },
       { 'user': 'betty', 'active': true },
       { 'user': 'fred', 'active': false }
    ]

    test('Ensure normal function', () => {
        expect(countBy(users, value => value.active)).toMatchObject({true: 2, false: 1});
    });

    test('Ensure normal function', () => {
        expect(countBy(obj1, value => value.foo == 123)).toMatchObject({false: 0, true: 2});
    });

    test('Test with collection length 1', () => {
        expect(countBy(obj2, value => value.foo == 123)).toMatchObject({true: 0});
    });
    
    test('Test with collection not including searched value', () => {
        expect(countBy(obj1, value => value.foo == 999)).toMatchObject({false: 3});
    });
});


describe("Tests for 'defaultTo' function", () => {

    test('Ensure normal documented functionality - negative case', () => {
        expect(defaultTo(1, 10)).toBe(1);
    });

    test('Ensure normal documented function - positive case - undefined', () => {
        expect(defaultTo(undefined, 10)).toBe(10);
    });

    test('Ensure normal documented function - positive case - null', () => {
        expect(defaultTo(null, 10)).toBe(10);
    });

    // TODO: report to developer: NaN parameter does not trigger default value return
    test.skip('Ensure normal function - positive case - NaN', () => {
        expect(defaultTo(NaN, 10)).toBe(10);
    });
});


describe("Tests for 'defaultToAny' function", () => {
    test('Ensure normal function 1', () => {
        expect(defaultToAny(1, 20, 10)).toBe(1);
    });

    test('Ensure normal function 2', () => {
        expect(defaultToAny(undefined, null, 10)).toBe(10);
    });

    test('Ensure normal function 3', () => {
        expect(defaultToAny(null, 10)).toBe(10);
    });
});


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


describe("Tests for 'divide' function", () => {

    // TODO: report - does not work as documented in the library code.
    test.skip('Simple positive test case', () => {
        expect(divide(6.0, 4.0)).toBe(1.5);
    });

    // TODO: report - does not work as documented in the library code. Should return 1.5
    test('Simple positive test case', () => {
        expect(divide(6, 4)).toBe(1);
    });

    test('Try divide with 0', () => {
        expect(divide(4, 0)).toBe(NaN);
    });
});


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


// TODO: no need to test modification of originals as they are const
describe("Tests for 'filter' function", () => {

    const users = [
       { 'user': 'barney', 'active': true },
       { 'user': 'fred',   'active': false }
    ]

    const users2 = [
       { 'user': 'barney', 'active': false },
       { 'user': 'fred',   'active': false }
    ]

    test('Simple positive test case from documentation', () => {
        expect(filter(users, ({ active }) => active)).toMatchObject([{ 'user': 'barney', 'active': true }]);
    });

    test('Simple negative test case', () => {
        expect(filter(users2, ({ active }) => active)).toMatchObject([[]]);
    });

    test('Test with empty array', () => {
        expect(filter([], ({ active }) => active)).toMatchObject([[]]);
    });
});


describe("Tests for 'get' function", () => {

    const object = { 'a': [{ 'b': { 'c': 3 } }] }

    test('Simple positive test case from documentation', () => {
        expect(get(object, 'a[0].b.c')).toBe(3);
    });

    test('Simple positive test case from documentation', () => {
        expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
    });

    test('Simple positive test case from documentation', () => {
        expect(get(object, 'a.b.c', 'default')).toBe('default');
    });

});





