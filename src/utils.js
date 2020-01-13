const throwIfNotObject = (object, name = 'throwIfNotObject param') => {
  if (typeof object !== 'object') {
    throw new Error(`${name} need to be an object (type of ${typeof object})`)
  }
  return true
}

module.exports = {
  throwIfNotObject
}
