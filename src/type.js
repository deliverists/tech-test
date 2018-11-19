module.exports.isObject = function isObject(item) {
  return typeof item === 'object' && !Array.isArray(item) && item != null
}

module.exports.getType = function getType(item) {
  if (Array.isArray(item)) return 'Array'
  if (item === null) return 'null'
  const type = typeof item
  return type === 'object' ? 'Object' : type
}
