import isArguments from '../src/isArguments'

describe("Tests for 'isArguments' function", () => {
  test('Test with function that returns arguments', () => {
      expect(isArguments(function() { return arguments }())).toBe(true)
  })
  test('Test with an array', () => {
    expect(isArguments([1, 2, 3])).toBe(false)
  })
})