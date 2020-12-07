import isArrayLikeObject from '../src/isArrayLikeObject'

describe("Tests for 'isArrayLikeObject' function", () => {
  test('Give string', () => {
      expect(isArrayLikeObject('Hello world')).toBe(false)
  })
  test('Give array', () => {
    expect(isArrayLikeObject(['hello', 'world'])).toBe(true)
  })
  test('Give object', () => {
    expect(isArrayLikeObject({hello: 'world'})).toBe(false)
  })
  test('Give number', () => {
    expect(isArrayLikeObject(1)).toBe(false)
  })
  test('Give boolean value', () => {
    expect(isArrayLikeObject(true)).toBe(false)
  })
  test('Give function value', () => {
    expect(isArrayLikeObject(Function)).toBe(false)
  })
  test('Give document.body.children value', () => {
    expect(isArrayLikeObject(document.body.children)).toBe(true)
  })
})