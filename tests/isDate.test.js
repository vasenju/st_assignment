import isDate from '../src/isDate'

describe("Tests for 'isDate' function", () => {
  test('Number value passed to function', () => {
      expect(isDate(2020)).toBe(false)
  })
  test('Date passed as a string', () => {
    expect(isDate('21.10.2020')).toBe(false)
    expect(isDate('Mon April 23 2012')).toBe(false)
  })
  test('Date-type passed to function', () => {
    const date = new Date()
    expect(isDate(date)).toBe(true)
  })
  test('Passing object', () => {
    const date = {
      test: new Date()
    }
    expect(isDate(date)).toBe(false)
  })
})