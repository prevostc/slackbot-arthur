const expect = require('chai').expect;
const hello = require('./hello');

describe('Hello world handler', () => {
    it('should return an hello world message using slack format', () => {
        expect(hello()).to.equal("COUILLÈRE");
    });
});