import get from '../src/get.js';

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
