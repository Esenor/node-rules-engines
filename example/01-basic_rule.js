const { rulesFactory } = require('../src')

const ifFunction = data => typeof data.counter === 'undefined'
const thenFunction = (data) => ({ ...data, counter: 0 })

const rule = rulesFactory.create(ifFunction, thenFunction)

const data = { label: 'lorem ipsum' }
const result = rule.run(data)

console.log(data, result)
