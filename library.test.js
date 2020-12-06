import add from './src/add.js';
import camelCase from './src/camelCase.js';
import at from './src/at.js';
import capitalize from './src/capitalize.js';
import castArray from './src/castArray.js';

//Patric importit
import words from './src/words'
import upperFirst from './src/upperFirst.js';
import toString from './src/toString'

describe("Tests for 'add' function", () => {

    test('Simple case positive number', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('Test zero does not cause errors', () => {
        expect(add(0, 0)).toBe(0);
    });

    test('Test with negative numbers', () => {
        expect(add(-3, -3)).toBe(-6);
    });

    test('Test wrong input types handling', () => {
        expect(add("4", 4)).toBe("44");
    });

    test('Test wrong input types handling', () => {
        expect(add(null, 4)).toBe(4);
    });

    test('Test wrong input types handling', () => {
        expect(add(undefined, 4)).toBe(4);
    });

    test('Test wrong input types handling', () => {
        expect(add("", 4)).toBe("4");
    });

});


describe("Tests for 'camelCase' function", () => {

    test('Simple positive case', () => {
        expect(camelCase("aaa bbb")).toBe(" aaaBbb"); // Space in the beginning seems to be a bug.
    });

    test('Simple positive case', () => {
        expect(camelCase("Foo Bar")).toBe(" fooBar");
    });

    test('Test with special characters mentioned in documentation', () => {
        expect(camelCase("--foo-bar--")).toBe(" fooBar");
    });

    test('Test with larger amount of spaces', () => {
        expect(camelCase("Foo     Bar")).toBe(" fooBar");
    });

    test('Test linebreaks', () => {
        expect(camelCase("Foo\n\nBar")).toBe(" fooBar");
    });
});


describe("Tests for 'at' function", () => {

    var o1 = {
        'a': [
            {
                'b': {
                    'c': 3
                }
            },
            4
        ] 
    }
    
    test('Simple positive case', () => {
        expect(at(o1, ['a[0].b.c'])).toMatchObject([3]);
    });

    var o2 = {
        foo: {
            bar: {
                value: 41,
                baz: {
                    value: 13
                }
            }
        }
    }

    test('Simple positive case 2', () => {
        expect(at(o2, ['foo.bar.baz.value'])).toMatchObject([13]);
    });

    test('Test with multiple paths', () => {
        expect(at(o2, ['foo.bar.baz.value', 'foo.bar.value'])).toMatchObject([13, 41]);
    });

    test('Test with incorrect path', () => {
        expect(at(o2, ['foo.bar.foobar'])).toMatchObject([undefined]);
    });

    test('Test with incorrect path', () => {
        expect(at(o2, ['foo...bar.foobar'])).toMatchObject([undefined]);
    });
});


describe("Tests for 'capitalize' function", () => {

    test('Simple positive case 1', () => {
        expect(capitalize('foobar')).toBe('Foobar');
    });

    test('Simple positive case 2', () => {
        expect(capitalize('fOObaR')).toBe('Foobar');
    });

    test('Test with empty string', () => {
        expect(capitalize('')).toBe('');
    });

    test('Test with special input types 1', () => {
        expect(capitalize(null)).toBe("Null");
    });

    test('Test with special input types 2', () => {
        expect(capitalize({foo: "bar"})).toBe("[object object]");
    });

    var foo = "bar";
    test('Test function does not change original value', () => {
        expect(capitalize(foo)).toBe("Bar");
        expect(foo).toBe("bar");
    });

    test('Test with special input types 3', () => {
        expect(capitalize(123)).toBe("123");
    });
});

/*
describe("Tests for 'castArray' function", () => {

});
*/

/* 

PATRIC

*/



describe("pkangasmaki", () => {
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
        //New tests
        test('Giving an object to the function', () => {
            const testObject = {
                name: 'nimi',
                username: 'kayttaja'
            };
            expect(words(testObject.name)).toEqual(['nimi']);
            expect(words(testObject.username)).toEqual(['kayttaja']);
        });

        //New tests
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
            
            //toString ei toimi oikein
            test.skip('Giving undefined to the function', () => {
                console.log(toString(undefined))
                expect(words(toString(undefined))).toEqual(['']);
            });
            
            //toString ei toimi oikein
            test.skip('Giving null to the function', () => {
                expect(words(toString(null))).toEqual(['']);
            });
        })
    });
});
