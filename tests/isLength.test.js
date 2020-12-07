import isLength from '../src/isLength'

describe("Tests for 'isLength' function", () => {
  test('Give string', () => {
      expect(isLength('Hello')).toBe(false)
      expect(isLength('2')).toBe(false)
  })
  test('Give number', () => {
    expect(isLength(11)).toBe(true)
  })
  test('Give floating number - expect false', () => {
    expect(isLength(2.2)).toBe(false)
  })
})