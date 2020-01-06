const { describe, it } = require('mocha')
const { expect, assert } = require('chai')
const indexModule = require('../../src')
const rulesFactory = require('../../src/rulesFactory')

describe('Module testing', () => {
  describe('Module API testing', () => {
    it('Should export an object', () => assert.isObject(indexModule))
    it('Should export the "rulesFactory"', () => expect(indexModule.rulesFactory).to.be.equal(rulesFactory))
  })
})
