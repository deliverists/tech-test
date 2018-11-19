const { assertEquals } = require('./assert')

describe('assertEquals', () => {
  const shouldPass = (testDescription, expected, actual) => {
    test(testDescription, () => {
      expect(assertEquals(testDescription, expected, actual)).toEqual(true)
    })
  }

  const shouldFail = (testDescription, expected, actual) => {
    test(testDescription, () => {
      expect(() => assertEquals(testDescription, expected, actual)).toThrow()
    })
  }

  describe('strings', () => {
    shouldPass('2 matching strings should pass', 'abc', 'abc')
    shouldFail('2 unmatching strings should fail the test', 'abcdef', 'abc')
  })

  describe('numbers', () => {
    shouldPass('2 numbers the same should pass', 1, 1)
    shouldFail('2 different numbers should fail', 1, 2)
  })

  describe('special objects', () => {
    shouldPass('null and null should pass', null, null)
    shouldPass('undefined and undefined should pass', undefined, undefined)
    shouldPass('NaN and NaN should pass', NaN, NaN)
    shouldPass('Infinity and Infinity should pass', Infinity, Infinity)

    shouldFail('null and undefined should fail', null, undefined)
    shouldFail('null and NaN should fail', null, NaN)
    shouldFail('null and Infinity should fail', null, Infinity)
    shouldFail('undefined and NaN should fail', undefined, NaN)
    shouldFail('undefined and Infinity should fail', undefined, Infinity)
    shouldFail('NaN and Infinity should fail', NaN, Infinity)
  })

  describe('booleans', () => {
    shouldPass('true and true should pass', true, true)
    shouldPass('false and false should pass', false, false)
    shouldFail('true and false should fail', true, false)
  })

  describe('truthy/falsy', () => {
    shouldFail('true and 1 should fail', true, 1)
    shouldFail('false and 0 should fail', false, 0)
    shouldFail('true and "true" should fail', true, 'true')
    shouldFail('1 and "1" should fail', 1, '1')
    shouldFail('true and []', true, [])
    shouldFail('true and {}', true, {})
    shouldFail('true and () => {}', true, () => {})
  })

  describe('assertion message', () => {
    test('a failed assertion should throw the assertion message given to it', () => {
      const message = 'some test message'
      expect(() => assertEquals(message, 'abcdef', 'abc')).toThrowError(message)
    })
  })
})
