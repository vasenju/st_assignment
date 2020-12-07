import isObjectLike from '../src/isObjectLike'

describe("Tests for 'isObject' function", () => {
  test('Give object', () => {
      expect(isObjectLike({})).toBe(true)
  })
  test('Give array', () => {
    expect(isObjectLike([1,2,3])).toBe(true)
  })
  test('Give function', () => {
    expect(isObjectLike(Function)).toBe(false)
  })
  test('Give null', () => {
    expect(isObjectLike(null)).toBe(false)
  })
  test('Give undefined', () => {
    expect(isObjectLike(undefined)).toBe(false)
  })
  test('Give string', () => {
    expect(isObjectLike('hello world')).toBe(false)
  })
})