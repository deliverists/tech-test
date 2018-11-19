/**
 * Asserts "expected" versus "actual",
 * 'failing' the assertion (via Error) if a difference is found.
 *
 * @param {String} message The comparison message passed by the user
 * @param {*} expected The expected item
 * @param {*} actual The actual item
 */
function assertEquals(message, expected, actual) {
  console.log('unimplemented', message, expected, actual)
}

/* -- Test running code:  --- */

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
  const complexObject1 = {
    propA: 1,
    propB: {
      propA: [1, { propA: 'a', propB: 'b' }, 3],
      propB: 1,
      propC: 2,
    },
  }
  const complexObject1Copy = {
    propA: 1,
    propB: {
      propA: [1, { propA: 'a', propB: 'b' }, 3],
      propB: 1,
      propC: 2,
    },
  }
  const complexObject2 = {
    propA: 1,
    propB: {
      propB: 1,
      propA: [1, { propA: 'a', propB: 'c' }, 3],
      propC: 2,
    },
  }
  const complexObject3 = {
    propA: 1,
    propB: {
      propA: [1, { propA: 'a', propB: 'b' }, 3],
      propB: 1,
    },
  }

  // Run the tests
  const assertionFailures = []
  runTest('Test 01: ', assertionFailures, 'abc', 'abc')
  runTest('Test 02: ', assertionFailures, 'abcdef', 'abc')
  runTest('Test 03: ', assertionFailures, ['a'], { 0: 'a' })
  runTest('Test 04: ', assertionFailures, ['a', 'b'], ['a', 'b', 'c'])
  runTest('Test 05: ', assertionFailures, ['a', 'b', 'c'], ['a', 'b', 'c'])
  runTest('Test 06: ', assertionFailures, complexObject1, complexObject1Copy)
  runTest('Test 07: ', assertionFailures, complexObject1, complexObject2)
  runTest('Test 08: ', assertionFailures, complexObject1, complexObject3)
  runTest('Test 09: ', assertionFailures, null, {})

  let i
  let ii

  // Output the results
  for (i = 0, ii = assertionFailures.length; i < ii; i += 1) {
    console.log(assertionFailures[i])
  }
}

runAll()
