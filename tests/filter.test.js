import filter from '../src/filter.js';

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
