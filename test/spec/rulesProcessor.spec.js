const { describe, it } = require('mocha')
const { assert } = require('chai')
const rulesProcessor = require('../../src/rulesProcessor')

describe('Rules processor testing', () => {
  describe('API testing', () => {
    it('Should export an object', () => assert.isObject(rulesProcessor))
    it('Should expose a process function', () => assert.isFunction(rulesProcessor.process))
  })
  describe('process function testing', () => {
    it('Should return on object', assert.isObject(rulesProcessor.process([])))
    it('Should return on object with the standard function', assert.isFunction(rulesProcessor.process([]).standard))
    it('Should return on object with the reverse function', assert.isFunction(rulesProcessor.process([]).reverse))
    it('Should return on object with the whileOneRuleIsTrue function', assert.isFunction(rulesProcessor.process([]).whileOneRuleIsTrue))
  })
})
