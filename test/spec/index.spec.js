const { describe, it } = require('mocha')
const { expect, assert } = require('chai')
const env = (process.env.TEST_LIB) ? 'lib' : 'src'
const indexModule = require(`../../${env}`)
const rulesFactory = require(`../../${env}/rulesFactory`)
const rulesProcessor = require(`../../${env}/rulesProcessor`)

describe('Module testing', () => {
  describe('Module API testing', () => {
    it('Should export an object', () => assert.isObject(indexModule))
    it('Should expose the "rulesFactory"', () => expect(indexModule.rulesFactory).to.be.equal(rulesFactory))
    it('Should expose the "rulesProcessor"', () => expect(indexModule.rulesProcessor).to.be.equal(rulesProcessor))
  })
})
