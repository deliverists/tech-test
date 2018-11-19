function isObject(item) {
  return typeof item === 'object' && !Array.isArray(item) && item != null
}

function getType(item) {
  if (Array.isArray(item)) return 'Array'
  if (item === null) return 'null'
  const type = typeof item
  return type === 'object' ? 'Object' : type
}

function generateTypeComparisonMessage(message, expected, actual) {
  const expectedType = getType(expected)
  const actualType = getType(actual)
  if (expectedType !== actualType)
    return `${message}Expected type ${expectedType} but found ${actualType}`

  return null
}

function generateLengthMessage(message, expected, actual) {
  if (Array.isArray(expected) && Array.isArray(actual))
    if (expected.length !== actual.length)
      return `${message}Expected array length ${expected.length} but found ${actual.length}`

  return null
}

function generateMessage(message, expected, actual) {
  const typeMessage = generateTypeComparisonMessage(message, expected, actual)
  if (typeMessage) return typeMessage

  const lengthMessage = generateLengthMessage(message, expected, actual)
  if (lengthMessage) return lengthMessage

  return `${message}Expected "${expected}" found "${actual}"`
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
  if (isObject(expected) && isObject(actual)) {
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const key in expected) {
      assertEquals(message, expected[key], actual[key])
    }
    return true
  }
  if (Array.isArray(expected) && Array.isArray(actual)) {
    if (expected.length !== actual.length)
      throw new Error(generateMessage(message, expected, actual))
    const iterations = expected.length
    for (let i = 0; i < iterations; i += 1) {
      assertEquals(message, expected[i], actual[i])
    }
    return true
  }

  if (expected === actual) return true
  if (Number.isNaN(expected) && Number.isNaN(actual)) return true
  throw new Error(generateMessage(message, expected, actual))
}

module.exports.assertEquals = assertEquals
