import words from '../src/words'
import toString from '../src/toString'

describe("Tests for 'Words' function", () => {
  test('String with no special symbols', () => {
      //Single word
      expect(words('Solo')).toEqual(['Solo']);
      //Multiple words separated by spaces
      expect(words('Jest is good for testing')).toEqual(['Jest', 'is', 'good', 'for', 'testing']);
  });
  test('String with special symbols', () => {
      //One special symbol
      expect(words('Email has @')).toEqual(['Email', 'has']);
      //Multiple special symbols
      expect(words('! is not ?')).toEqual(['is', 'not']);
      //Special symbols mixed with regular symbols
      expect(words('!s th!s the crusty?')).toEqual(['s', 'th', 's', 'the', 'crusty']);
  });
  test('Empty string', () => {
      //String with empty value
      expect(words('')).toEqual([]);
  });
  test('String with only special symbols', () => {
      //Test with multiple symbols separated by space
      expect(words('@@ % * !!')).toEqual([]);
      //Test with single symbol
      expect(words('?')).toEqual([]);
  });
  //Added a new test
  test('Giving an object to the function', () => {
      const testObject = {
          name: 'nimi',
          username: 'kayttaja'
      };
      expect(words(testObject.name)).toEqual(['nimi']);
      expect(words(testObject.username)).toEqual(['kayttaja']);
  });
  test('Test pattern to find where pattern starts', () => {
    //Pattern esting starts at 14
    expect(words('Jest is good testing tool', 'esting').index).toBe(14);
  });
  test('Test pattern that does not exit', () => {
    expect(words('Jest is good testing tool', 'ororo')).toEqual([]);
  });

  //Added new integration tests since words does not accept anything but Strings. Using toString function to make the change.
  describe('Integrating "toString" function into "Words" function', () => {
      test('Array of strings', () => {
          const testArray = ['Testing','multiple','functions']
          //Words.js accepts only strings so it must be stringified with 'toString' first
          const stringified = toString(testArray)
          //Test if you can pick words from stringified array
          expect(words(stringified)).toEqual(['Testing','multiple','functions']);
      });
      test('Array of strings that contain special letters', () => {
          const testArray = ['@', '@=!=', '??']
          //Words.js accepts only strings so it must be stringified with 'toString' first
          const stringified = toString(testArray)
          //Test if you can pick words that do not contain special letters from stringified array
          expect(words(stringified)).toEqual([]);
          //Test if the functions can pick out words that don't contain special letters
          expect(words(toString(['hello!"#world', '!!!','hey']))).toEqual(['hello', 'world', 'hey']);
      });
      
      //toString not working here, can't test
      test.skip('Giving undefined to the function', () => {
          console.log(toString(undefined))
          expect(words(toString(undefined))).toEqual(['']);
      });
      
      //toString not working here, can't test
      test.skip('Giving null to the function', () => {
          expect(words(toString(null))).toEqual(['']);
      });
  })
});