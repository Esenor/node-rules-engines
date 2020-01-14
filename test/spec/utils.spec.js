const { describe, it } = require('mocha')
const { expect, assert } = require('chai')
const env = (process.env.TEST_LIB) ? 'lib' : 'src'
const utils = require(`../../${env}/utils`)

describe('utils testing', () => {
  it('Should export an object', () => assert.isObject(utils))
  it('Should expose a throwIfNotObject function', () => assert.isFunction(utils.throwIfNotObject))
  describe('throwIfNotObject function testing', () => {
    it('Should return true if an object is given', () => assert.isTrue(utils.throwIfNotObject({ foo: 'bar' })))
    it('Should throw an error if no object given', () => {
      expect(() => utils.throwIfNotObject()).to.throw('throwIfNotObject param need to be an object (type of undefined)')
      expect(() => utils.throwIfNotObject('foo')).to.throw('throwIfNotObject param need to be an object (type of string)')
      expect(() => utils.throwIfNotObject(42)).to.throw('throwIfNotObject param need to be an object (type of number)')
      expect(() => utils.throwIfNotObject('foo', 'testing param')).to.throw('testing param need to be an object (type of string)')
      expect(() => utils.throwIfNotObject(42, 'testing param')).to.throw('testing param need to be an object (type of number)')
    })
  })
})
