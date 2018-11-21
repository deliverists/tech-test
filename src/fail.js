const AssertionError = require('./assertion-error')

function fail(message, assertionMessage) {
  throw new AssertionError(`${message}${assertionMessage}`)
}

function buildAncestorKeysForMessage(state) {
  if (!state) return ''

  const { length } = state
  let keyString = ''
  for (let i = 0; i < length; i += 1) {
    const separator = i === 0 || state[i].startsWith('[') ? '' : '.'
    keyString += `${separator}${state[i]}`
  }
  return `${keyString} `
}

function generalFail(message, expected, actual, state) {
  const expectedResult = typeof expected === 'string' ? `"${expected}"` : expected
  const actualResult = typeof actual === 'string' ? `"${actual}"` : actual
  fail(
    message,
    `Expected ${buildAncestorKeysForMessage(state)}${expectedResult} but found ${actualResult}`,
  )
}

module.exports.fail = fail
module.exports.generalFail = generalFail
