/**
 * Asserts "expected" versus "actual",
 * 'failing' the assertion (via Error) if a difference is found.
 *
 * @param {String} message The comparison message passed by the user
 * @param {*} expected The expected item
 * @param {*} actual The actual item
 */
function assertEquals(message, expected, actual) {
  if (Array.isArray(expected) && Array.isArray(actual)) {
    if (expected.length !== actual.length) throw new Error(message)
    const iterations = expected.length
    for (let i = 0; i < iterations; i += 1) {
      assertEquals(message, expected[i], actual[i])
    }
    return true
  }

  if (expected === actual) return true
  if (Number.isNaN(expected) && Number.isNaN(actual)) return true
  throw new Error(message)
}

module.exports.assertEquals = assertEquals
