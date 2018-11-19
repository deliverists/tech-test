const { assertEquals } = require('./assert')

describe('assertEquals', () => {
  describe('strings', () => {
    test('2 matching strings should be equal', () => {
      const message = '2 matching strings should be equal'
      expect(assertEquals(message, 'abc', 'abc')).toEqual(true)
    })

    test('2 unmatching strings should fail the test', () => {
      const message = '2 unmatching strings should fail the test'
      expect(() => assertEquals(message, 'abcdef', 'abc')).toThrow()
    })
  })

  describe('assertion message', () => {
    test('a failed assertion should throw the assertion message', () => {
      const message = 'some test message'
      expect(() => assertEquals(message, 'abcdef', 'abc')).toThrowError(message)
    })
  })
})
