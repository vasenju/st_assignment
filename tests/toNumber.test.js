import '../src/toNumber'
import toNumber from '../src/toNumber'

//Had to change from original plan since JavaScript does not have as many datatypes as I thought (Mixed up with Java)
describe("Tests for 'toNumber' function", () => {
  test('Give object as a parameter', () => {
    expect(typeof(toNumber({number: '1'}))).toBe('number')
  })
  test('Give number as a parameter', () => {
    expect(typeof(toNumber(1))).toBe('number')
    expect(typeof(toNumber(2.2))).toBe('number')
  })
  test('Give string as a parameter', () => {
    expect(typeof(toNumber("2"))).toBe('number')
    expect(typeof(toNumber("Hello"))).toBe('number')
    expect(typeof(toNumber("A"))).toBe('number')
  })
  test('Give Array as a parameter', () => {
    expect(typeof(toNumber([]))).toBe('number')
    expect(typeof(toNumber(['1']))).toBe('number')
    expect(typeof(toNumber(['1', '2']))).toBe('number')
    expect(typeof(toNumber(['Hello', 'World']))).toBe('number')
    expect(typeof(toNumber(['Hello', '2', 'you']))).toBe('number')
  })
  test('Give null as a parameter', () => {
    expect(typeof(toNumber(null))).toBe('number')
  })
  test('Give undefined as a parameter', () => {
    expect(typeof(toNumber(undefined))).toBe('number')
  })
  test('Give -0 as a parameter', () => {
    expect(typeof(toNumber(-0))).toBe('number')
  })
  test('Give infinity as a parameter', () => {
    expect(typeof(toNumber(Infinity))).toBe('number')
  })
})
