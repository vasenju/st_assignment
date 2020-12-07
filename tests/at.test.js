import at from '../src/at.js';

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
