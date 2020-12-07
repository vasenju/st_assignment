import isArrayLike from '../src/isArrayLike'

describe("Tests for 'isArrayLike' function", () => {
  test('Give string', () => {
      expect(isArrayLike('Hello world')).toBe(true)
  })
  test('Give array', () => {
    expect(isArrayLike(['hello', 'world'])).toBe(true)
  })
  test('Give object', () => {
    expect(isArrayLike({hello: 'world'})).toBe(false)
  })
  test('Give number', () => {
    expect(isArrayLike(1)).toBe(false)
  })
  test('Give boolean value', () => {
    expect(isArrayLike(true)).toBe(false)
  })
  test('Give function value', () => {
    expect(isArrayLike(Function)).toBe(false)
  })
  test('Give document.body.children value', () => {
    expect(isArrayLike(document.body.children)).toBe(true)
  })
})