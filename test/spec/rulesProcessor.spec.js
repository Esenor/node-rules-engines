const { describe, it } = require('mocha')
const { assert, expect } = require('chai')
const rulesProcessor = require('../../src/rulesProcessor')
const rulesFactory = require('../../src/rulesFactory')

const rules = [
  rulesFactory.create(data => typeof data.label !== 'string', data => ({ ...data, label: 'placeholder' })),
  rulesFactory.create(data => typeof data.label === 'string', data => ({ ...data, label: data.label.toLocaleUpperCase() }))
]

describe('Rules processor testing', () => {
  describe('API testing', () => {
    it('Should export an object', () => assert.isObject(rulesProcessor))
    it('Should expose a process function', () => assert.isFunction(rulesProcessor.process))
  })
  describe('process function testing', () => {
    it('Should return an object if an array is given', () => assert.isObject(rulesProcessor.process([])))

    it('Should throw an error if no array given', () => {
      expect(() => rulesProcessor.process()).to.throw('process method need an array of rules to work(rule type of undefined)')
    })

    it('Should return an object with the standard function', () => assert.isFunction(rulesProcessor.process([]).standard))
    it('Should return an object with the reverse function', () => assert.isFunction(rulesProcessor.process([]).reverse))
    it('Should return an object with the whileOneRuleIsTrue function', () => assert.isFunction(rulesProcessor.process([]).whileOneRuleIsTrue))

    it('Should return an object with the standard function', () => assert.isFunction(rulesProcessor.process([]).standard))
    it('Should return an object with the reverse function', () => assert.isFunction(rulesProcessor.process([]).reverse))
    it('Should return an object with the whileOneRuleIsTrue function', () => assert.isFunction(rulesProcessor.process([]).whileOneRuleIsTrue))

    describe('function standard testing', () => {
      it('Function standard should return an object', () => assert.isObject(rulesProcessor.process([]).standard({ foo: 'bar' })))
      it('Function standard should return a different object (but equal)', () => {
        const data = { foo: 'bar' }
        expect(rulesProcessor.process([]).standard(data)).to.be.deep.equal({ foo: 'bar' })
        expect(rulesProcessor.process([]).standard(data)).to.be.deep.equal(data)
      })
      it('Function standard should throw an error if no object given', () => {
        expect(() => rulesProcessor.process([]).standard()).to.throw('process.standard data need to be an object (type of undefined)')
      })
      it('Function standard should execute the rules', () => {
        const data = { id: 1 }
        const expectedResult = { id: 1, label: 'PLACEHOLDER' }
        const result = rulesProcessor.process(rules).standard(data)
        expect(result).to.be.deep.equal(expectedResult)
        expect(data).to.not.be.deep.equal(result)
      })
    })

    describe('function reverse testing', () => {
      it('Function reverse should return an object', () => assert.isObject(rulesProcessor.process([]).reverse({ foo: 'bar' })))
      it('Function reverse should return a different object (but equal)', () => {
        const data = { foo: 'bar' }
        expect(rulesProcessor.process([]).reverse(data)).to.be.deep.equal({ foo: 'bar' })
        expect(rulesProcessor.process([]).reverse(data)).to.be.deep.equal(data)
      })
      it('Function reverse should throw an error if no object given', () => {
        expect(() => rulesProcessor.process([]).reverse()).to.throw('process.reverse data need to be an object (type of undefined)')
      })
      it('Function reverse should execute the rules', () => {
        const data = { id: 1 }
        const expectedResult = { id: 1, label: 'placeholder' }
        const result = rulesProcessor.process(rules).reverse(data)
        expect(result).to.be.deep.equal(expectedResult)
        expect(data).to.not.be.deep.equal(result)
      })
    })

    describe('function whileOneRuleIsTrue testing', () => {
      it('Function whileOneRuleIsTrue should return an object', () => assert.isObject(rulesProcessor.process([]).whileOneRuleIsTrue({ foo: 'bar' })))
      it('Function whileOneRuleIsTrue should return a different object (but equal)', () => {
        const data = { foo: 'bar' }
        expect(rulesProcessor.process([]).whileOneRuleIsTrue(data)).to.be.deep.equal({ foo: 'bar' })
        expect(rulesProcessor.process([]).whileOneRuleIsTrue(data)).to.be.deep.equal(data)
      })
      it('Function whileOneRuleIsTrue should throw an error if no object given', () => {
        expect(() => rulesProcessor.process([]).whileOneRuleIsTrue()).to.throw('process.whileOneRuleIsTrue data need to be an object (type of undefined)')
      })
      // it('Function whileOneRuleIsTrue should execute the rules', () => {
      // })
    })
  })
})
