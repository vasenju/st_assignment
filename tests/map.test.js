import map from '../src/map'

//Removed from test plan: No function passed
//No function passed gives correct TypeError

describe("Tests for 'map' function", () => {
  test('Array of numbers with 2 as iteratee', () => {
    const timesTwo = (n) => {
      return n*2
    } 
    const testArray = [1,2,3,4]
    const mapped = map(testArray, timesTwo)
    expect(mapped).toEqual([2,4,6,8])
  })
  test('Array is empty', () => {
    const timesTwo = (n) => {
      return n*2
    } 
    const testArray = []
    const mapped = map(testArray, timesTwo)
    expect(mapped).toEqual([])
  })
  test('Array is null', () => {
    const timesTwo = (n) => {
      return n*2
    } 
    const testArray = null
    const mapped = map(testArray, timesTwo)
    expect(mapped).toEqual([])
  })
  test('Broken function', () => {
    const timesTwo = (n) => {
      return 'n2'
    } 
    const testArray = [1,2,3,4]
    const mapped = map(testArray, timesTwo)
    expect(mapped).toEqual(['n2', 'n2', 'n2', 'n2'])
  })
  test('Empty array, broken function', () => {
    const timesTwo = (n) => {
      return 'test'
    } 
    const testArray = []
    const mapped = map(testArray, timesTwo)
    expect(mapped).toEqual([])
  })
  test('Passing incorrect parameters', () => {
    const mapped = map(1, 2)
    expect(mapped).toEqual([undefined])
  })
})