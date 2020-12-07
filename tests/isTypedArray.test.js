import isTypedArray from '../src/isTypedArray'

describe("Tests for 'isTypedArray' function", () => {
  test('Typed array', () => {
    expect(isTypedArray(new Uint8Array)).toEqual(true)
  })
  test('Non typed array', () => {
    expect(isTypedArray(['hello'])).toEqual(false)
  })
  test('Non empty typed array', () => {
    expect(isTypedArray([])).toEqual(false)
  })
  test('String', () => {
    expect(isTypedArray('String test')).toEqual(false)
  })
})