const { describe, it } = require('mocha')
const { expect, assert } = require('chai')
const rulesProcessor = require('../../src/rulesProcessor')
const rulesFactory = require('../../src/rulesFactory')

describe('Rules processor testing', () => {
  describe('API testing', () => {
    it('Should export an object', () => assert.isObject(rulesProcessor))
    it('Should expose a createBundle function', () => assert.isFunction(rulesProcessor.createBundle))
  })
  describe('CreateBundle testing', () => {
    it('Should return an object', assert.isObject(rulesProcessor.createBundle()))
    it('Should return an object with a process method', () => {
      const bundle = rulesProcessor.createBundle()
      assert.isFunction(bundle.process)
    })
    it('Should return an object with a addRule method', () => {
      const bundle = rulesProcessor.createBundle()
      assert.isFunction(bundle.addRule)
    })
    it('Should return an object with a removeRule method', () => {
      const bundle = rulesProcessor.createBundle()
      assert.isFunction(bundle.removeRule)
    })
    it('Should return an object with a hasRule method', () => {
      const bundle = rulesProcessor.createBundle()
      assert.isFunction(bundle.hasRule)
    })
    it('Should return an object with a getRules method', () => {
      const bundle = rulesProcessor.createBundle()
      assert.isFunction(bundle.getRules)
    })
  })
  describe('Bundle testing', () => {
    const ifFunc = ({ id }) => id >= 0
    const thenFunc = data => ({ ...data, ...{ name: `item ${data.id}` } })
    const defaultRule = rulesFactory.create(ifFunc, thenFunc)

    it('Should create a bundle with an array of rules', () => {
      const bundle = rulesProcessor.createBundle([defaultRule, defaultRule])
      assert.isObject(bundle)
      assert.isFunction(bundle.process)
      assert.isFunction(bundle.addRule)
      assert.isFunction(bundle.removeRule)
      assert.isFunction(bundle.hasRule)
      assert.isFunction(bundle.getRules)
      bundle._rules.map(rule => expect(rule).to.be.deep.equal(defaultRule))
    })

    it('Should return the rules when function getRules is used', () => {
      const bundle = rulesProcessor.createBundle([defaultRule, defaultRule])
      expect(bundle.getRules()).to.be.deep.equal([defaultRule, defaultRule])
    })

    it('Should return the a new bundle when function addRule is used', () => {
      const bundle = rulesProcessor.createBundle([defaultRule, defaultRule])
      const newBundle = bundle.addRule(defaultRule).addRule(defaultRule)
      expect(bundle._rules).to.be.deep.equal([defaultRule, defaultRule])
      expect(newBundle._rules).to.be.deep.equal([defaultRule, defaultRule, defaultRule, defaultRule])
      expect(newBundle).to.not.be.deep.equal(bundle)
    })
  })
})
