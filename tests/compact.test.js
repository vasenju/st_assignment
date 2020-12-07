import compact from '../src/compact.js';

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
