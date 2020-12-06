import upperFirst from '../src/upperFirst.js';

describe("Tests for 'forUpperFirst' function", () => {
  test('String starting with lowercase letter', () => {
      expect(upperFirst('laadukas')).toEqual('Laadukas')
  });
  test('String starting with uppercase letter', () => {
      expect(upperFirst('Siisti mikro')).toEqual('Siisti mikro')
  });
  test('String with only uppercase letters', () => {
      expect(upperFirst('UUSI')).toEqual('UUSI')
  });
  test('String with only uppercase letters except first letter', () => {
      expect(upperFirst('vANHA')).toEqual('VANHA')
  });
})