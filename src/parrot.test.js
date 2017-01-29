const expect = require('chai').expect;
const parrot = require('./parrot');

describe('Parrot handler', () => {
    it('should return its input', () => {
        expect(parrot("bla")).to.equal("bla");
        expect(parrot("blu")).to.equal("blu");
    });
});