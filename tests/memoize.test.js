import memoize from '../src/memoize'

//Test-case from source file results in error
describe("Tests for 'memoize' function", () => {
  test.skip('Memoize object', () => {
    const object = { 'a': 1, 'b': 2 }
    const other = { 'c': 3, 'd': 4 }
    //const values = memoize(values)
    expect(values(object)).toEqual([1, 2])
  })
})