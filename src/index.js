const { assertEquals } = require('./assert')
const testData = require('./test-data')

/**
 * Runs a "assertEquals" test.
 *
 * @param {String} message The initial message to pass
 * @param {Array} assertionFailures List of messages that will be displayed on the UI for evaluation
 * @param {*} expected Expected item
 * @param {*} actual The actual item
 */
function runTest(message, assertionFailures, expected, actual) {
  try {
    assertEquals(message, expected, actual)
  } catch (failure) {
    assertionFailures.push(failure.message)
  }
}

function runAll() {
  const assertionFailures = []
  runTest('Test 01: ', assertionFailures, 'abc', 'abc')
  runTest('Test 02: ', assertionFailures, 'abcdef', 'abc')
  runTest('Test 03: ', assertionFailures, ['a'], { 0: 'a' })
  runTest('Test 04: ', assertionFailures, ['a', 'b'], ['a', 'b', 'c'])
  runTest('Test 05: ', assertionFailures, ['a', 'b', 'c'], ['a', 'b', 'c'])
  runTest('Test 06: ', assertionFailures, testData.complexObject1, testData.complexObject1Copy)
  runTest('Test 07: ', assertionFailures, testData.complexObject1, testData.complexObject2)
  runTest('Test 08: ', assertionFailures, testData.complexObject1, testData.complexObject3)
  runTest('Test 09: ', assertionFailures, null, {})

  let i
  let ii

  for (i = 0, ii = assertionFailures.length; i < ii; i += 1) {
    console.log(assertionFailures[i])
  }
}

runAll()
