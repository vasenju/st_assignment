import isBuffer from '../src/isBuffer'

describe("Tests for 'isBuffer' function", () => {
  test('Give buffer', () => {
    expect(isBuffer(new Buffer.alloc(2))).toEqual(true)
  })
  test('Give Uint8Array', () => {
    expect(isBuffer(new Uint8Array(2))).toEqual(false)
  })
  test('Give string', () => {
    expect(isBuffer('hello world')).toEqual(false)
  })
  test('Give array of strings', () => {
    expect(isBuffer(['Hello', 'World'])).toEqual(false)
  })
  test('Give array of numbers', () => {
    expect(isBuffer([1, 2])).toEqual(false)
  })
  test('Give object', () => {
    expect(isBuffer({hello: 'world'})).toEqual(false)
  })
})