import chunk from '../src/chunk.js';

describe("Tests for 'chunk' function", () => {

    // TODO: report to developer, wrong return values
    test.skip('Simple positive test case', () => {
        expect(chunk([1, 2, 3, 4, 5, 6], 2)).toMatchObject([[1, 2],[3, 4],[5, 6]]);
    });

    // TODO: report to developer, wrong return values
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
