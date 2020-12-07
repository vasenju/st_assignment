import toFinite from '../src/toFinite'

//Had to change from original plan since JavaScript does not have as many datatypes as I thought (Mixed up with Java)
//Using -- isFinite(toFinite(VALUE)) -- to see if the returned value is integer or not.
describe("Tests for 'toFinite' function", () => {
  test('Give object as a parameter', () => {
    expect(isFinite(toFinite({number: 1}))).toEqual(true)
    expect(isFinite(toFinite({number: 1.1}))).toEqual(true)
    expect(isFinite(toFinite({number: '1'}))).toEqual(true)
    expect(isFinite(toFinite({number: 'A'}))).toEqual(true)
  })
  test('Give number as a parameter', () => {
    expect(isFinite(toFinite(1))).toEqual(true)
    expect(isFinite(toFinite(1.1))).toEqual(true)
  })
  test('Give string as a parameter', () => {
    expect(isFinite(toFinite("2"))).toEqual(true)
    expect(isFinite(toFinite("Hello"))).toEqual(true)
    expect(isFinite(toFinite("A"))).toEqual(true)
  })
  test('Give Array as a parameter', () => {
    expect(isFinite(toFinite([]))).toEqual(true)
    expect(isFinite(toFinite(['1']))).toEqual(true)
    expect(isFinite(toFinite(['1', '2']))).toEqual(true)
    expect(isFinite(toFinite(['Hello', 'World']))).toEqual(true)
    expect(isFinite(toFinite(['Hello', '2', 'you']))).toEqual(true)
  })
  test('Give null as a parameter', () => {
    expect(isFinite(toFinite(null))).toEqual(true)
  })
  test('Give undefined as a parameter', () => {
    expect(isFinite(toFinite(undefined))).toEqual(true)
  })
  test('Give -0 as a parameter', () => {
    expect(isFinite(toFinite(-0))).toEqual(true)
  })
  test('Give infinity as a parameter', () => {
    expect(isFinite(toFinite(Infinity))).toEqual(true)
  })
})
