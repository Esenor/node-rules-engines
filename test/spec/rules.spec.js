const { describe, it } = require('mocha')
const { assert, expect } = require('chai')
const rulesFactory = require('../../src/rulesFactory')

describe('Rules testing', () => {
  describe('Rule factory testing', () => {
    it('Should export an object', () => assert.isObject(rulesFactory))

    it('Should export a create function', () => assert.isFunction(rulesFactory.create))

    describe('Create function testing', () => {
      it('Should thrown an error if no "if function" given', () => {
        expect(() => {
          rulesFactory.create('', () => { })
        }).to.throw('ifFunc function is not a function (string)')
        expect(() => {
          rulesFactory.create()
        }).to.throw('ifFunc function is not a function (undefined)')
      })

      it('Should thrown an error if no "then function" given', () => {
        expect(() => {
          rulesFactory.create(() => { }, '')
        }).to.throw('thenFunc function is not a function (string)')
        expect(() => {
          rulesFactory.create(() => { })
        }).to.throw('thenFunc function is not a function (undefined)')
      })

      it('Should export an object', () => assert.isObject(rulesFactory.create(() => { }, () => { })))
    })
  })

  describe('Rules testing', () => {
    const rule = rulesFactory.create(
      data => data.foo === 'bar',
      data => {
        data.foo = 'updated'
        return data
      }
    )

    const emptyRule = rulesFactory.create(() => { }, () => { })
    it('Should be an object', () => assert.isObject(rule))

    it('Should export a run function', () => assert.isFunction(rule.run))

    it('Should not validate an empty rule', () => {
      const baseObject = { foo: 'zen', k: 97 }
      const result = emptyRule.run(baseObject)

      assert.isObject(result)
      expect(result).to.be.deep.equal({ foo: 'zen', k: 97 })
      expect(result).to.be.deep.equal(baseObject)
    })

    it('Should validate a rule', () => {
      const baseObject = { foo: 'bar', i: 42 }
      const result = rule.run(baseObject)

      assert.isObject(result)
      expect(result).to.be.deep.equal({ foo: 'updated', i: 42 })
      expect(result).to.not.be.deep.equal(baseObject)
    })

    it('Should not validate a rule', () => {
      const baseObject = { foo: 'fii', j: 25 }
      const result = rule.run(baseObject)

      assert.isObject(result)
      expect(result).to.be.deep.equal({ foo: 'fii', j: 25 })
      expect(result).to.be.deep.equal(baseObject)
    })
  })
})
