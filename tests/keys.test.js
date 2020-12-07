import keys from '../src/keys'

describe("Tests for 'keys' function", () => {
  test('Test case from source-code', () => {
    function Foo() {
      this.a = 1
      this.b = 2
    }
    Foo.prototype.c = 3
    expect(keys(new Foo)).toEqual(['a', 'b'])
    expect(keys(keys('hi'))).toEqual(['0', '1'])
  })
  test('Empty object', () => {
    function Foo() {
    }
    expect(keys(new Foo)).toEqual([])
  })
  test('String', () => {
    expect(keys('test')).toEqual(['0','1','2','3'])
    expect(keys('hi')).toEqual(['0','1'])
  })
  test('null', () => {
    expect(keys(null)).toEqual([])
  })
  test('undefined', () => {
    expect(keys(undefined)).toEqual([])
  })
})