/**
 * Throw an error if the first parameter is not an object
 * @param mixed object
 * @param string message
 */
const throwIfNotObject = (object, message = 'throwIfNotObject param need to be an object') => {
  if (typeof object === 'object') {
    throw new Error(message)
  }
  return true
}

module.exports.throwIfNotObject = throwIfNotObject
