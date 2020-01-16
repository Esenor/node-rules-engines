const utils = require('./utils')

const processRules = rules => {
  if (!Array.isArray(rules)) {
    throw new Error(`process method need an array of rules to work(rule type of ${typeof rules})`)
  }
  return {
    standard: (data) => standard(rules, data),
    reverse: (data) => reverse(rules, data),
    whileOneRuleIsTrue: (data) => whileOneRuleIsTrue(rules, data)
  }
}

const standard = (rules, data) => {
  utils.throwIfNotObject(data, 'process.standard data need to be an object')
  const newData = rules.reduce((data, rule) => {
    data = rule.run(data)
    return data
  }, data)
  return { ...newData }
}

const reverse = (rules, data) => {
  utils.throwIfNotObject(data, 'process.reverse data need to be an object')
  const newData = rules.reverse().reduce((data, rule) => {
    data = rule.run(data)
    return data
  }, data)
  return { ...newData }
}

const whileOneRuleIsTrue = (rules, data) => {
  utils.throwIfNotObject(data, 'process.whileOneRuleIsTrue data need to be an object')
  console.log(typeof rules)
  return { ...data }
}

module.exports.process = processRules
