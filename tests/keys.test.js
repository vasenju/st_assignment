import keys from '../src/keys'

//Test-case from source file results in error
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
})