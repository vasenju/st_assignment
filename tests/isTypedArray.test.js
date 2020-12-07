import isTypedArray from '../src/isTypedArray'

describe("Tests for 'isBuffer' function", () => {
  test('Give buffer', () => {
    expect(isTypedArray(new Uint8Array)).toEqual(true)
  })
  test('Give buffer', () => {
    expect(isTypedArray([])).toEqual(false)
  })
})