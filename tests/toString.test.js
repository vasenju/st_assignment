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
      //tests if the type of testArray has changed to string after running through toString function
      expect(typeof(toString(testArray))).toBe('string')
  })
  test('JSON converted to string', () => {
      const date = new Date();
      const testJSON = date.toJSON();
      //tests if the type of testObject has changed to string after running through toString function
      expect(typeof(toString(testJSON))).toBe('string')
  })
  test('-0 converted to string', () => {
      expect(typeof(toString(-0))).toBe('string')
  })
  //Null should return empty string
  test.skip('Null converted to string', () => {
      expect(toString(null)).toEqual('')
  })
  //Undefined should return empty string
  test.skip('Undefined converted to string', () => {
      expect(toString(undefined)).toEqual('')
  })
})