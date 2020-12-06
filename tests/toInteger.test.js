import toInteger from '../src/toInteger'

//Had to change from original plan since JavaScript does not have as many datatypes as I thought (Mixed up with Java)
//Using -- Number.isInteger(toInteger(Value)) -- to see if the returned value is integer or not.
describe("Tests for 'toNumber' function", () => {
  test('Give object as a parameter', () => {
    expect(Number.isInteger(toInteger({number: 1}))).toEqual(true)
    expect(Number.isInteger(toInteger({number: 1.1}))).toEqual(true)
    expect(Number.isInteger(toInteger({number: '1'}))).toEqual(true)
    expect(Number.isInteger(toInteger({number: 'A'}))).toEqual(true)
  })
  test('Give number as a parameter', () => {
    expect(Number.isInteger(toInteger(1))).toEqual(true)
    expect(Number.isInteger(toInteger(1.1))).toEqual(true)
  })
  test('Give string as a parameter', () => {
    expect(Number.isInteger(toInteger("2"))).toEqual(true)
    expect(Number.isInteger(toInteger("Hello"))).toEqual(true)
    expect(Number.isInteger(toInteger("A"))).toEqual(true)
  })
  test('Give Array as a parameter', () => {
    expect(Number.isInteger(toInteger([]))).toEqual(true)
    expect(Number.isInteger(toInteger(['1']))).toEqual(true)
    expect(Number.isInteger(toInteger(['1', '2']))).toEqual(true)
    expect(Number.isInteger(toInteger(['Hello', 'World']))).toEqual(true)
    expect(Number.isInteger(toInteger(['Hello', '2', 'you']))).toEqual(true)
  })
  test('Give null as a parameter', () => {
    expect(Number.isInteger(toInteger(null))).toEqual(true)
  })
  test('Give undefined as a parameter', () => {
    expect(Number.isInteger(toInteger(undefined))).toEqual(true)
  })
  test('Give -0 as a parameter', () => {
    expect(Number.isInteger(toInteger(-0))).toEqual(true)
  })
  test('Give infinity as a parameter', () => {
    expect(Number.isInteger(toInteger(Infinity))).toEqual(true)
  })
})
