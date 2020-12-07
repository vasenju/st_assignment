import isSymbol from '../src/isSymbol'

describe("Tests for 'isSymbol' function", () => {
  test('Give symbol', () => {
      expect(isSymbol(Symbol.iterator)).toBe(true)
  })
  test('Give string', () => {
    expect(isSymbol('hello world')).toBe(false)
  })
  test('Give array', () => {
    expect(isSymbol(['Hello', 'worlld'])).toBe(false)
  })
  test('Give empty array', () => {
    expect(isSymbol([])).toBe(false)
  })
  test('Give typed array', () => {
    expect(isSymbol(new Uint8Array)).toBe(false)
  })
  test('Give object array', () => {
    expect(isSymbol({hello: 'world'})).toBe(false)
  })
})