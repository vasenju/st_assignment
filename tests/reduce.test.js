import reduce from '../src/reduce'

describe("Tests for 'slice' function", () => {
  test('Reducer in basic plus operation', () => {
      expect(reduce([1, 2], (sum, n) => sum + n, 0)).toBe(3)
  })
  test('Reducer in basic multiplication operation', () => {
    expect(reduce([1, 2, 3], (sum, n) => sum * n, 1)).toBe(6)
  })
  test('Incorrect collection', () => {
    //Should return string with all the elements
    expect(reduce([1, '2', 2, 'A'], (sum, n) => sum + n, 0)).toBe('122A')
  })
  test('Incorrect accumalator', () => {
    //Should return string with 0 1 2
    expect(reduce([1, 2], (sum, n) => sum + n, '0')).toBe('012')
  })
  /* Planned test 'Incorrect iteratee' returns correct TypeError */
})