const { assertEquals } = require('./assert')

describe('assertEquals', () => {
  const stringFromVariable = variable => {
    if (variable === null) return 'null'
    if (variable === undefined) return 'undefined'
    if (Array.isArray(variable)) return JSON.stringify(variable)
    if (typeof variable === 'string') return `"${variable.toString()}"`
    if (typeof variable === 'boolean' || typeof variable === 'number') return variable.toString()
    return JSON.stringify(variable)
  }
  const makeDescription = (expected, actual, passOrFail) =>
    `${stringFromVariable(expected)} and ${stringFromVariable(actual)} should ${passOrFail}`

  const shouldPass = (expected, actual) => {
    const testDescription = makeDescription(expected, actual, 'pass')
    test(testDescription, () => {
      expect(assertEquals(testDescription, expected, actual)).toEqual(true)
    })
  }

  const shouldFail = (expected, actual) => {
    const testDescription = makeDescription(expected, actual, 'fail')
    test(testDescription, () => {
      expect(() => assertEquals(testDescription, expected, actual)).toThrow()
    })
  }

  describe('strings', () => {
    shouldPass('abc', 'abc')
    shouldFail('abcdef', 'abc')
  })

  describe('numbers', () => {
    shouldPass(1, 1)
    shouldFail(1, 2)
  })

  describe('special objects', () => {
    shouldPass(null, null)
    shouldPass(undefined, undefined)
    shouldPass(NaN, NaN)
    shouldPass(Infinity, Infinity)

    shouldFail(null, undefined)
    shouldFail(null, NaN)
    shouldFail(null, Infinity)
    shouldFail(undefined, NaN)
    shouldFail(undefined, Infinity)
    shouldFail(NaN, Infinity)
  })

  describe('booleans', () => {
    shouldPass(true, true)
    shouldPass(false, false)
    shouldFail(true, false)
  })

  describe('truthy/falsy', () => {
    shouldFail(true, 1)
    shouldFail(false, 0)
    shouldFail(true, 'true')
    shouldFail(1, '1')
    shouldFail(true, [])
    shouldFail(true, {})
    shouldFail(true, () => {})
  })

  describe('arrays', () => {
    shouldPass([], [])
    shouldFail([1], [])
    shouldFail([1], [2])
    shouldPass([1], [1])
  })

  describe('assertion message', () => {
    test('a failed assertion should throw the assertion message given to it', () => {
      const message = 'some test message'
      expect(() => assertEquals(message, 'abcdef', 'abc')).toThrowError(message)
    })
  })
})
