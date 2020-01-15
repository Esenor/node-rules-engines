/**
 * Default rule factory create method
 * @param function ifFunc
 * @param function thenFunc
 */
const create = (ifFunc, thenFunc) => {
  if (typeof ifFunc !== 'function') {
    throw new Error(`ifFunc function is not a function (${typeof ifFunc})`)
  }
  if (typeof thenFunc !== 'function') {
    throw new Error(`thenFunc function is not a function (${typeof thenFunc})`)
  }
  return {
    run: (data) => {
      return (ifFunc({ ...data })) ? thenFunc({ ...data }) : { ...data }
    }
  }
}

module.exports.create = create
