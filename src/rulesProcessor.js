const utils = require('./utils')

/**
 * Return methods to process the rules given in parameter
 * @param array rules
 */
const processRules = rules => {
  if (!Array.isArray(rules)) {
    throw new Error(`process method need an array of rules to work(rule type of ${typeof rules})`)
  }
  return {
    standard: (data) => standard(rules, data),
    reverse: (data) => reverse(rules, data),
    whileOneRuleIsTrue: (data, ascOrder) => whileOneRuleIsTrue(rules, data, ascOrder)
  }
}

/**
 * Process each rules in asc order with an object and return the result object
 * @param array rules
 * @param object data
 */
const standard = (rules, data) => {
  utils.throwIfNotObject(data, 'process.standard data need to be an object')
  const newData = rules.reduce((data, rule) => {
    data = rule.run(data)
    return data
  }, data)
  return { ...newData }
}

/**
 * Process each rules in desc order with an object and return the result object
 * @param array rules
 * @param object data
 */
const reverse = (rules, data) => {
  utils.throwIfNotObject(data, 'process.reverse data need to be an object')
  const newData = rules.reverse().reduce((data, rule) => {
    data = rule.run(data)
    return data
  }, data)
  return { ...newData }
}

/**
 * Process each rules asc while the object given is modified and return the result object
 * @param array rules
 * @param object data
 * @param boolean ascOrder
 */
const whileOneRuleIsTrue = (rules, data, ascOrder = true) => {
  utils.throwIfNotObject(data, 'process.whileOneRuleIsTrue data need to be an object')
  // console.log(typeof rules, ascOrder === true)
  return { ...data }
}

module.exports.process = processRules
