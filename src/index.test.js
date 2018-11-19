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
    shouldPass('2 matching strings should be equal', 'abc', 'abc')
    shouldFail('2 unmatching strings should fail the test', 'abcdef', 'abc')
  })

  describe('assertion message', () => {
    test('a failed assertion should throw the assertion message', () => {
      const message = 'some test message'
      expect(() => assertEquals(message, 'abcdef', 'abc')).toThrowError(message)
    })
  })
})
