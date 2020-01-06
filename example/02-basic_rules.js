const { rulesFactory } = require('../src')

const ruleDef = rulesFactory.create(data => typeof data.counter === 'undefined', data => ({ ...data, counter: 0 }))
const ruleInc = rulesFactory.create(data => typeof data.counter !== 'undefined', data => ({ ...data, counter: data.counter + 1 }))
const ruleLbl = rulesFactory.create(data => data.counter === 5, data => ({ ...data, label: 'More than 5' }))

const data = { label: 'lorem ipsum' }

const rules = [ruleInc, ruleLbl, ruleInc, ruleDef, ruleInc, ruleDef, ruleInc, ruleInc, ruleInc, ruleInc, ruleLbl, ruleInc, ruleInc]

const result = rules.reduce((data, rule) => {
  data = rule.run(data)
  return data
}, data)

console.log(data, result)
