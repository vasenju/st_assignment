import isObject from '../src/isObject'

describe("Tests for 'isObject' function", () => {
  test('Give object', () => {
      expect(isObject({})).toBe(true)
  })
  test('Give array', () => {
    expect(isObject([1,2,3])).toBe(true)
  })
  test('Give function', () => {
    expect(isObject(Function)).toBe(true)
  })
  test('Give null', () => {
    expect(isObject(null)).toBe(false)
  })
  test('Give undefined', () => {
    expect(isObject(undefined)).toBe(false)
  })
  test('Give string', () => {
    expect(isObject('hello world')).toBe(false)
  })
})