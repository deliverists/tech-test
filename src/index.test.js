const { assertEquals } = require('./assert')

describe('assertEquals', () => {
  const shouldPass = (testDescription, expected, actual) => {
    test(`${testDescription} should pass`, () => {
      expect(assertEquals(testDescription, expected, actual)).toEqual(true)
    })
  }

  const shouldFail = (testDescription, expected, actual) => {
    test(`${testDescription} should fail`, () => {
      expect(() => assertEquals(testDescription, expected, actual)).toThrow()
    })
  }

  describe('strings', () => {
    shouldPass('2 matching strings', 'abc', 'abc')
    shouldFail('2 unmatching strings', 'abcdef', 'abc')
  })

  describe('numbers', () => {
    shouldPass('2 numbers the same', 1, 1)
    shouldFail('2 different numbers', 1, 2)
  })

  describe('special objects', () => {
    shouldPass('null and null', null, null)
    shouldPass('undefined and undefined', undefined, undefined)
    shouldPass('NaN and NaN', NaN, NaN)
    shouldPass('Infinity and Infinity', Infinity, Infinity)

    shouldFail('null and undefined', null, undefined)
    shouldFail('null and NaN', null, NaN)
    shouldFail('null and Infinity', null, Infinity)
    shouldFail('undefined and NaN', undefined, NaN)
    shouldFail('undefined and Infinity', undefined, Infinity)
    shouldFail('NaN and Infinity', NaN, Infinity)
  })

  describe('booleans', () => {
    shouldPass('true and true', true, true)
    shouldPass('false and false', false, false)
    shouldFail('true and false', true, false)
  })

  describe('truthy/falsy', () => {
    shouldFail('true and 1', true, 1)
    shouldFail('false and 0', false, 0)
    shouldFail('true and "true"', true, 'true')
    shouldFail('1 and "1"', 1, '1')
    shouldFail('true and []', true, [])
    shouldFail('true and {}', true, {})
    shouldFail('true and () => {}', true, () => {})
  })

  describe('arrays', () => {
    shouldPass('[] and []', [], [])
  })

  describe('assertion message', () => {
    test('a failed assertion should throw the assertion message given to it', () => {
      const message = 'some test message'
      expect(() => assertEquals(message, 'abcdef', 'abc')).toThrowError(message)
    })
  })
})
