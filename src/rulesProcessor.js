/**
 *
 */
const process = (bundle, data) => {

}

/**
 *
 */
const addRule = (bundle, rule) => ({ ...bundle, _rules: [...bundle._rules, rule] })

/**
 *
 */
const removeRule = (bundle, rule) => {

}

/**
 *
 */
const hasRule = (bundle, rule) => {

}

/**
 *
 */
const getRules = bundle => bundle._rules

/**
 *
 */
const createBundle = (rules = []) => {
  const bundle = {
    _rules: rules,
    process: data => process(bundle, data),
    addRule: rule => addRule(bundle, rule),
    removeRule: rule => removeRule(bundle, rule),
    hasRule: rule => hasRule(bundle, rule),
    getRules: () => getRules(bundle)
  }
  return bundle
}

/**
 *
 */
module.exports = {
  createBundle
}
