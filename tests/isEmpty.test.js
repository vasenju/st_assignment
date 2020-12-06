import isEmpty from '../src/isEmpty'

describe("Tests for 'isEmpty' function", () => {
  test('Single value', () => {
    expect(isEmpty(1)).toBe(true)
  })
  test('null', () => {
    expect(isEmpty(null)).toBe(true)
  })
  test('boolean value', () => {
    expect(isEmpty(true)).toBe(true)
  })
  test('Not-empty array', () => {
    expect(isEmpty(['hello'])).toBe(false)
    expect(isEmpty(['hello', 'world'])).toBe(false)
    expect(isEmpty([null])).toBe(false)
  })
  test('Empty array', () => {
    expect(isEmpty([])).toBe(true)
  })
  test('Not-empty object', () => {
    expect(isEmpty({hello: 'world'})).toBe(false)
  })
  test('Empty object', () => {
    expect(isEmpty({})).toBe(true)
  })
  test('Not-empty string', () => {
    expect(isEmpty('hello world')).toBe(false)
    expect(isEmpty(' ')).toBe(false)
  })
  test('Empty string', () => {
    expect(isEmpty('')).toBe(true)
  })
})