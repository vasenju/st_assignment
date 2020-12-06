import toString from '../src/toString'

describe("Tests for 'toString' function", () => {
  test('Object converted to string', () => {
      const testObject = {
          username: 'username',
          name: 'name'
      }
      //tests if the type of testObject has changed to string after running through toString function
      expect(typeof(toString(testObject))).toBe('string')
  })
  test('Number converted to string', () => {
      expect(typeof(toString(1.1))).toBe('string')
  })
  test('String converted to string', () => {
      expect(typeof(toString('Test'))).toBe('string')
  })
  test('Array converted to string', () => {
      const testArray = ['Hello', 'World']
      expect(typeof(toString(testArray))).toBe('string')
  })
  test('JSON converted to string', () => {
      const date = new Date();
      const testJSON = date.toJSON();
      expect(typeof(toString(testJSON))).toBe('string')
  })
  test('-0 converted to string', () => {
      expect(typeof(toString(-0))).toBe('string')
  })
  test('Give symbol', () => {
    const mySymbol = Symbol()
    expect(typeof(toString(mySymbol))).toEqual('string')
  })
  test('Test null in array', () => {
    const testArray = ['Hello', null, 'World']
    expect(typeof(toString(testArray))).toBe('string')
  })
  test('Test undefined in array', () => {
    const testArray = ['Hello', undefined, 'World']
    expect(typeof(toString(testArray))).toBe('string')
  })
})