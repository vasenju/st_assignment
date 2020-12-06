import isBoolean from '../src/isBoolean'

describe("Tests for 'isBoolean' function", () => {
  test('Value: true', () => {
      expect(isBoolean(true)).toBe(true)
  })
  test('Value: false', () => {
    expect(isBoolean(false)).toBe(true)
  })
  test('Test with string', () => {
    expect(isBoolean('Hello')).toBe(false)
  })
  test('Test with string that has name of boolean value', () => {
    expect(isBoolean('true')).toBe(false)
    expect(isBoolean('false')).toBe(false)
  })
  test('Test with object with boolean', () => {
    expect(isBoolean({test: true})).toBe(false)
  })
})