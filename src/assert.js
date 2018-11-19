const { fail, generalFail } = require('./fail')
const { isObject, getType } = require('./type')

/*
 * convention for test functions:
 * if you know the test should fail, then generate the AssertionError by calling fail() with the correct assertion message
 * if you know the test should pass, return true and we can immediately stop processing
 * if you the test is still unproven and should be passed to the next func, return false
 */

function objectTest(message, expected, actual) {
  if (isObject(expected) && isObject(actual)) {
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const key in expected) {
      if (!(key in actual)) {
        console.log('info', this, JSON.stringify(expected), JSON.stringify(actual))
        fail(message, `Expected ${key} but was not found`)
      }
      // eslint-disable-next-line no-use-before-define
      assertEquals(message, expected[key], actual[key])
    }
    return true
  }
  return false
}

function arrayLengthTest(message, expected, actual) {
  if (Array.isArray(expected) && Array.isArray(actual))
    if (expected.length !== actual.length)
      fail(message, `Expected array length ${expected.length} but found ${actual.length}`)
}

function arrayTest(message, expected, actual) {
  if (Array.isArray(expected) && Array.isArray(actual) && expected.length === actual.length) {
    const iterations = expected.length
    for (let i = 0; i < iterations; i += 1) {
      // eslint-disable-next-line no-use-before-define
      assertEquals(message, expected[i], actual[i])
    }
    return true
  }
  return false
}

function NaNTest(message, expected, actual) {
  if (Number.isNaN(expected) && Number.isNaN(actual)) return true
}

function generalTest(message, expected, actual) {
  return expected === actual
}

function typeTest(message, expected, actual) {
  const expectedType = getType(expected)
  const actualType = getType(actual)
  if (expectedType !== actualType)
    fail(message, `Expected type ${expectedType} but found ${actualType}`)

  return false
}

/**
 * Asserts "expected" versus "actual",
 * 'failing' the assertion (via Error) if a difference is found.
 *
 * @param {String} message The comparison message passed by the user
 * @param {*} expected The expected item
 * @param {*} actual The actual item
 */
function assertEquals(message, expected, actual) {
  const pipeline = [NaNTest, typeTest, objectTest, arrayLengthTest, arrayTest, generalTest]

  const pipelineLength = pipeline.length
  for (let pipelineIndex = 0; pipelineIndex < pipelineLength; pipelineIndex += 1) {
    if (pipeline[pipelineIndex](message, expected, actual)) return
  }

  generalFail(message, expected, actual)
}

module.exports = assertEquals
