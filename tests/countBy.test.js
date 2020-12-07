import countBy from '../src/countBy.js';

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
