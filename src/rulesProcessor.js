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
  if (typeof data !== 'object') {
    throw new Error(`process.standard data need to be an object (type of ${data})`)
  }
  console.log(typeof rules)
  return { ...data }
}

const reverse = (rules, data) => {
  if (typeof data !== 'object') {
    throw new Error(`process.reverse data need to be an object (type of ${data})`)
  }
  console.log(typeof rules)
  return { ...data }
}

const whileOneRuleIsTrue = (rules, data) => {
  if (typeof data !== 'object') {
    throw new Error(`process.whileOneRuleIsTrue data need to be an object (type of ${data})`)
  }
  console.log(typeof rules)
  return { ...data }
}

module.exports = {
  process: processRules
}
