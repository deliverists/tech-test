const AssertionError = require('./assertion-error')

function fail(message, assertionMessage) {
  throw new AssertionError(`${message}${assertionMessage}`)
}

function generalFail(message, expected, actual) {
  const expectedResult = typeof expected === 'string' ? `"${expected}"` : expected
  const actualResult = typeof actual === 'string' ? `"${actual}"` : actual
  fail(message, `Expected ${expectedResult} found ${actualResult}`)
}

module.exports.fail = fail
module.exports.generalFail = generalFail
