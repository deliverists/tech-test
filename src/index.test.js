const { assertEquals } = require('./assert')

describe('assertEquals', () => {
  describe('strings', () => {
    test('2 matching strings should be equal', () => {
      const message = '2 matching strings should be equal'
      expect(assertEquals(message, 'abc', 'abc')).toEqual(2)
    })
  })
})
