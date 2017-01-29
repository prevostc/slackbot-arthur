const expect = require('chai').expect;
const logger = require('./logger');

describe('Logger helper', () => {
    it('Should provide an error function', () => {
        expect(logger.error).to.be.defined;
        expect(logger.error).to.be.a('Function');
    });
    it('Should provide an info function', () => {
        expect(logger.info).to.be.defined;
        expect(logger.info).to.be.a('Function');
    });
});