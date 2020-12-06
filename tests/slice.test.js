import slice from '../src/slice'

describe("Tests for 'slice' function", () => {
  test('Remove all elements from list', () => {
      const testArray = [0,1,2,3]
      expect(slice(testArray, 4).length).toBe(0)
  })
  test('Remove more elements from list than the lists length', () => {
    const testArray = [0,1,2,3]
    expect(slice(testArray, 5).length).toBe(0)
  })
  test('Remove less elements from list than the lists length', () => {
    const testArray = [0,1,2,3]
    //Test if the length goes down
    expect(slice(testArray, 2).length).toBe(2)
    //Test if the first element is correct 
    expect(slice(testArray, 2)[0]).toBe(2)
    //Test if the last element is correct 
    expect(slice(testArray, 2)[1]).toBe(3)
  })
  test('Remove from string', () => {
    const testString = "Testing string" //length is 14
    expect(slice(testString, 4).length).toBe(10)
  })
  test('Remove from Object', () => {
    const testArray = {test: 'world'}
    expect(slice(testArray, 1).length).toBe(0)
  })
  test('Give string as second parameter', () => {
    const testArray = [0,1,2,3]
    expect(slice(testArray, '3').length).toBe(1)
  })
})